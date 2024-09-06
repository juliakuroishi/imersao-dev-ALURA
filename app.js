function pesquisar(){
    let resposta = document.getElementById("resposta"); //section de resposta fica armzenada aq
    let frases = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    
    if (!campoPesquisa) {
        resposta.innerHTML = "<p>Desculpe, não foi encontrado nada. Tente outra emoção.</p>";
        return;
    };
     // Inicializa uma string vazia para armazenar os resultados
     
     let humor = ""; 
     let citacao = "";
     let tags = "";
 
     // Itera sobre cada dado da lista de dados
     for (let dado of dados) {
         humor = dado.humor.toLowerCase()
         citacao = dado.citacao.toLowerCase()
         tags = dado.tags.toLowerCase()
         // se titulo includes campoPesquisa
         if (humor.includes(campoPesquisa) || citacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            frases += `
            <div>
                <h2>${dado.humor}</h2>
                <p>${dado.citacao}</p>
                <p>${dado.referencia}</p>
            </div>
        `;
        };
        
    };
    resposta.innerHTML = frases;

} 



