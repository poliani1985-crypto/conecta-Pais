document.addEventListener('DOMContentLoaded', function () {
  // NÍVEL 3 — respostas das situações
  document.querySelectorAll('[data-feedback-id]').forEach(function (botao) {
    botao.addEventListener('click', function () {
      var id = botao.dataset.feedbackId;
      var caixa = document.getElementById(id);
      if (!caixa) return;

      var ativo = botao.dataset.aberto === '1';
      if (ativo) {
        caixa.style.display = 'none';
        botao.style.borderColor = '#d9c7ff';
        botao.dataset.aberto = '0';
        return;
      }

      botao.parentElement.querySelectorAll('.opcao').forEach(function (b) {
        b.style.borderColor = '#d9c7ff';
        b.dataset.aberto = '0';
      });

      caixa.innerHTML = '<strong>' + botao.dataset.titulo + '</strong><br>' + botao.dataset.texto;
      caixa.style.display = 'block';
      botao.style.borderColor = '#7b45c7';
      botao.dataset.aberto = '1';
      caixa.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  // ACOMPANHAR TAMBÉM É CUIDAR — faixas etárias
  var dados = [
    {titulo:'🔵 0 a 1 ano',img:'ChatGPT%20Image%2015%20de%20set.%20de%202026%2C%2012_37_19.png',intro:'A comunicação começa muito antes das palavras.',itens:['Olha para rostos e reage à presença das pessoas.','Reage a sons e vozes.','Sorri e participa de trocas com o adulto.','Produz sons e balbucios.','Usa olhar, choro, movimentos e gestos para se comunicar.']},
    {titulo:'🟡 1 a 2 anos',img:'ChatGPT%20Image%2015%20de%20set.%20de%202026%2C%2012_40_49.png',intro:'Gestos, sons e palavras começam a se encontrar.',itens:['Aponta ou usa gestos para mostrar o que quer.','Compreende palavras e pedidos simples do cotidiano.','Imita sons, gestos e ações.','Começa a usar palavras com significado.','Procura interagir e compartilhar atenção com outras pessoas.']},
    {titulo:'🟢 2 a 3 anos',img:'ChatGPT%20Image%2015%20de%20set.%20de%202026%2C%2012_45_24.png',intro:'A linguagem ganha novas possibilidades.',itens:['Amplia o número de palavras que utiliza.','Começa a juntar palavras em pequenas frases.','Compreende orientações simples.','Conversa sobre pessoas, objetos e situações conhecidas.','Participa de brincadeiras e demonstra interesse por outras crianças.']},
    {titulo:'🟣 3 a 4 anos',img:'ChatGPT%20Image%2015%20de%20set.%20de%202026%2C%2012_47_16.png',intro:'A criança usa cada vez mais a fala para participar do mundo.',itens:['Conversa usando frases mais completas.','Conta pequenas experiências e participa de histórias.','Faz perguntas e expressa desejos e ideias.','Compreende orientações do cotidiano.','Ao se aproximar dos 4 anos, sua fala tende a ficar cada vez mais clara e compreensível.']}
  ];

  var modal = document.getElementById('modal');
  var modalConteudo = document.getElementById('modalConteudo');
  if (modal && modalConteudo) {
    document.querySelectorAll('.marco').forEach(function (botao, i) {
      botao.addEventListener('click', function () {
        var d = dados[i];
        modalConteudo.innerHTML = '<img src="'+d.img+'" alt=""><h2>'+d.titulo+'</h2><p><strong>'+d.intro+'</strong></p><ul>'+d.itens.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><div class="nota">💗 Cada criança tem seu percurso. Estes marcos são referências para observar e conversar, não para comparar crianças.</div>';
        modal.classList.add('aberto');
        document.body.style.overflow = 'hidden';
      });
    });

    var fechar = document.querySelector('.modalFechar');
    if (fechar) fechar.addEventListener('click', fecharModal);
    modal.addEventListener('click', function(e){ if(e.target === modal) fecharModal(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fecharModal(); });
  }

  function fecharModal(){
    if (!modal) return;
    modal.classList.remove('aberto');
    document.body.style.overflow = '';
  }
});
