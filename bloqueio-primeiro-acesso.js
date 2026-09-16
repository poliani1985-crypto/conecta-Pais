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

// Ajustes de redação dos Questionários Iniciais.
if(typeof montarInicial === 'function'){
  const montarInicialOriginal = montarInicial;
  montarInicial = function(){
    montarInicialOriginal();
    const area = document.getElementById('perguntasIniciais');
    if(!area) return;

    if(grupoSelecionado === 'familia'){
      area.querySelectorAll('label, h3, p, div').forEach(function(el){
        if(el.childElementCount === 0){
          el.textContent = el.textContent
            .replace('1. Por qual motivo principal você matriculou seu filho(a) no CMEI?', '1. Por qual motivo você matriculou seu filho(a) no CMEI?')
            .replace('7. Você participa das atividades propostas pela escola quando possível?', '7. Você participa das atividades propostas pela escola?');
        }
      });
    }

    if(grupoSelecionado === 'equipe'){
      area.querySelectorAll('label, h3, p, div').forEach(function(el){
        if(el.childElementCount === 0){
          el.textContent = el.textContent
            .replace('Compreendem pouco', 'Não compreendem')
            .replace('4. Você considera importante aproximar mais as famílias do trabalho pedagógico realizado no CMEI?', '4. Você considera importante aproximar as famílias do trabalho pedagógico realizado no CMEI?')
            .replace('Valorizam pouco', 'Não valorizam')
            .replace('6. O CMEI já oferece meios suficientes para diálogo com as famílias?', '6. Você acredita que o CMEI oferece meios suficientes para o diálogo com as famílias?')
            .replace('7. Você teria interesse em participar de ações que fortaleçam a relação família-escola?', '7. Você tem interesse em participar de ações que fortaleçam a relação família-escola?')
            .replace('Pouco interesse', 'Não tenho interesse');
        }
      });
    }
  };
}

// Ajustes de redação dos Questionários Finais.
if(typeof montarFinal === 'function'){
  const montarFinalOriginal = montarFinal;
  montarFinal = function(){
    montarFinalOriginal();
    const area = document.getElementById('perguntasFinais');
    if(!area) return;

    if(grupoSelecionado === 'familia'){
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
    }

    if(grupoSelecionado === 'equipe'){
      area.querySelectorAll('label, h3, p, div').forEach(function(el){
        if(el.childElementCount === 0){
          el.textContent = el.textContent
            .replace('2. Na sua opinião, as famílias compreendem melhor a função pedagógica da Educação Infantil após esse período?', '2. Na sua opinião, você percebeu que as famílias estão compreendendo melhor a função pedagógica da Educação Infantil após esse período?')
            .replace('4. O produto educacional contribuiu para aproximar as famílias do trabalho pedagógico?', '4. Na sua opinião, o ConectaPais contribuiu para informar e aproximar as famílias do trabalho pedagógico?')
            .replace('5. Você percebe maior valorização das famílias em relação ao trabalho da equipe escolar?', '5. Você percebeu se houve maior valorização das famílias em relação ao trabalho da equipe escolar?')
            .replace('6. Os meios de diálogo entre escola e famílias melhoraram nesse período?', '6. O diálogo entre escola e famílias melhorou?')
            .replace('7. Sua percepção sobre a importância de ações para fortalecer a relação família-escola mudou?', '7. Sua percepção sobre a importância de fortalecer a relação família-escola mudou?')
            .replace('9. Como você percebe hoje o envolvimento das famílias no desenvolvimento das crianças?', '9. Você achou que o envolvimento das famílias no desenvolvimento das crianças teve alguma mudança?');
        }
      });
    }
  };
}

// Ajuste de redação da questão 1 da Enquete Final.
if(typeof mostrar === 'function'){
  const mostrarOriginalConectaPais = mostrar;
  mostrar = function(id){
    mostrarOriginalConectaPais(id);
    if(id === 'enquete'){
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

  // Remove o aviso visual de ambiente de testes.
  document.querySelectorAll('div').forEach(function(el){
    if(el.textContent.trim().indexOf('⚠️ Esta etapa está disponível apenas para testes e avaliação do produto durante o período de desenvolvimento.') === 0 && el.children.length === 0){
      el.style.display = 'none';
    }
  });

  // Mantém a etapa final realmente bloqueada durante o período de acompanhamento.
  document.querySelectorAll('button').forEach(function(botao){
    if(botao.textContent.indexOf('Etapa final — desativada') !== -1){
      botao.disabled = true;
      botao.removeAttribute('onclick');
      botao.style.background = '#d9d9d9';
      botao.style.backgroundImage = 'none';
      botao.style.color = '#8f8f8f';
      botao.style.cursor = 'not-allowed';
      botao.style.boxShadow = 'none';
      botao.style.opacity = '0.75';
    }
  });
});
