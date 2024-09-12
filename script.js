    

  

    // Função para achar o atleta e exibir os resultados na seção com o ID "resultados-pesquisa"
function acharatleta() {

        // Inicializa uma string vazia para armazenar os resultados
        let resultados = "";
        let titulo = "" ;
        let descricao = "";

        // Obtém a seção onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");
        // Obtém a seção onde os a pesquisa é digitada 
        let campoPesquisa = document.getElementById("campo-pesquisa").value;
        // Transforma o que digitar na pesquisa em minusculo
        campoPesquisa = campoPesquisa.toLowerCase();
  
   


    //Itera sobre os dados dos atletas
for (let dado of dados) {
    // Transformar os dados em minusculos pra bater com a pesquisa
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

          // Constrói o HTML para cada resultado, incluindo título, descrição e link
        resultados += `
            <div class="item-resultado">
            <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
}

}

    // Nao mostra resultados se o campo de pesquisa estiver vazio ou se o resultado for falso
    if (campoPesquisa == "" || campoPesquisa == " ") { 
        section.innerHTML = '<p class="descricao-meta">Nenhum dado digitado.</p>';
        return;
      } else if (!resultados) {
        section.innerHTML = '<p class="descricao-meta">Nenhum dado encontrado.</p>';
        return;
      } 

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}

      
     