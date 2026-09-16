// Proteção do Primeiro acesso do ConectaPais.
// Sobrescreve somente a função primeiroAcesso existente.
async function primeiroAcesso(){
  const campo = document.getElementById("codigoAcesso");
  const codigo = campo.value.trim().toUpperCase();
  campo.value = codigo;

  if(codigo === ""){
    alert("Digite um código.");
    return;
  }

  if(grupoSelecionado === "equipe"){
    const codigoEquipe = document.getElementById("codigoEquipe").value;
    if(codigoEquipe !== "26"){
      alert("Código da equipe incorreto.");
      return;
    }
  }

  try{
    const registro = await consultarTcleAutorizado(codigo, grupoSelecionado);
    if(registro){
      alert('Este código já possui um primeiro acesso registrado. Utilize o botão "Já participei" para continuar.');
      return;
    }
    abrirTCLE(grupoSelecionado);
  }catch(e){
    console.error(e);
    alert("Não foi possível verificar o código neste momento. Verifique sua conexão e tente novamente.");
  }
}

// Ajustes de redação do Questionário Inicial das Famílias.
if(typeof montarInicial === 'function'){
  const montarInicialOriginal = montarInicial;
  montarInicial = function(){
    montarInicialOriginal();
    if(grupoSelecionado !== 'familia') return;
    const area = document.getElementById('perguntasIniciais');
    if(!area) return;
    area.querySelectorAll('label, h3, p, div').forEach(function(el){
      if(el.childElementCount === 0){
        el.textContent = el.textContent
          .replace('1. Por qual motivo principal você matriculou seu filho(a) no CMEI?', '1. Por qual motivo você matriculou seu filho(a) no CMEI?')
          .replace('7. Você participa das atividades propostas pela escola quando possível?', '7. Você participa das atividades propostas pela escola?');
      }
    });
  };
}

// Ajustes de redação do Questionário Final das Famílias.
if(typeof montarFinal === 'function'){
  const montarFinalOriginal = montarFinal;
  montarFinal = function(){
    montarFinalOriginal();
    if(grupoSelecionado !== 'familia') return;
    const area = document.getElementById('perguntasFinais');
    if(!area) return;
    area.querySelectorAll('label, h3, p, div').forEach(function(el){
      if(el.childElementCount === 0){
        el.textContent = el.textContent
          .replace('4. Depois da participação no projeto, como você avalia a comunicação entre família e CMEI?', '4. Depois da participação no ConectaPais, como você avalia a comunicação entre família e CMEI?')
          .replace('5. Hoje o CMEI explica melhor o que a criança aprende no dia a dia?', '5. O CMEI explica o que a criança aprende no dia a dia?')
          .replace('6. Sua participação nas atividades e informações do CMEI mudou durante esse período?', '6. Sua compreensão sobre as atividades e informações a respeito do CMEI mudou?')
          .replace('7. Hoje você considera mais importante a participação da família no desenvolvimento da criança?', '7. Hoje você considera importante a participação da família no desenvolvimento da criança?')
          .replace('10. Hoje você acredita mais que o CMEI e família devem trabalhar juntas?', '10. Hoje você acredita que o CMEI e família devem trabalhar juntas?');
      }
    });
  };
}

// Ajuste de redação da questão 1 da Enquete Final das Famílias.
if(typeof mostrar === 'function'){
  const mostrarOriginalConectaPais = mostrar;
  mostrar = function(id){
    mostrarOriginalConectaPais(id);
    if(id === 'enquete' && grupoSelecionado === 'familia'){
      const area = document.getElementById('enquete');
      if(!area) return;
      area.querySelectorAll('h3').forEach(function(el){
        if(el.textContent.indexOf('1. Você tem interesse em participar de um encontro presencial final sobre o ConectaPais') === 0){
          el.textContent = '1. Você tem interesse em participar de um encontro presencial final sobre o ConectaPais no dia 18/12/2026, no período noturno?';
        }
      });
    }
  };
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('button.oldItem').forEach(function(botao){
    if(botao.textContent.indexOf('Conteúdos anteriores') !== -1){
      botao.textContent = '📚 Nossa Biblioteca';
      botao.onclick = function(){
        window.location.href = 'conteudos-anteriores.html';
      };
    }
  });
});
