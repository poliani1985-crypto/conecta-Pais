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
// Mantém respostas, validação e envio exatamente como já funcionam.
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
