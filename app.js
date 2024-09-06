function pesquisar(){
    let resposta = document.getElementById("resposta"); //section de resposta fica armzenada aq
    let campoPesquisa = document.getElementById("campo-pesquisa").value; //pega o valor do campo de pesquisa
    campoPesquisa = campoPesquisa.toLowerCase();

    //se nada for digitado no campo de pesquisa, retornar esta mensagem
    if (!campoPesquisa) {
        resposta.innerHTML = "<p>Desculpe, não foi encontrado nada. Tente outra emoção/humomr.</p>";
        return;
    };
    
     // declarar variáveis vazias
     let frases = "";
     let humor = ""; 
     let citacao = "";
     let tags = "";
     let encontrouResposta = false;
 
     //estrutura de iteração para percorrer cada objeto do dados.js
     for (let dado of dados) {
        // transformar tudo em letra minúscula para não interferir na busca
         humor = dado.humor.toLowerCase()
         citacao = dado.citacao.toLowerCase()
         tags = dado.tags.toLowerCase()
         
         if (humor.includes(campoPesquisa) || citacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            encontrouResposta = true;
            frases += `
            <div>
                <h2>${dado.humor}</h2>
                <p>${dado.citacao}</p>
                <p>${dado.referencia}</p>
            </div>
        `;
        } 
    };

    //se encontrou uma reposta que está no dados.js ou não, cada um vai retornar uma ação
    if (encontrouResposta){
    resposta.innerHTML = frases;
    }
    else {
        resposta.innerHTML = "Tente outra palavra! Que tal estas: Confiante, Apaixonado, Medo.";
    }
    
} 



