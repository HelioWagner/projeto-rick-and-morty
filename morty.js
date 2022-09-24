async function buscarEMostrarPersonagem() {
   const idPersonagem = pegaValorDoInput("#idPersonagem")
   const personagem   = await buscaPersonagemNaApi(idPersonagem)
   montarTelaComDadosDoPersonagem(personagem)    
}

function pegaValorDoInput(seletorInput) {
    const valor = document.querySelector(seletorInput).value

    return valor

}

async function buscaPersonagemNaApi(numeroPersonagem) {
    const url = "https://rickandmortyapi.com/api/character/"+numeroPersonagem
    const response = await fetch(url)
    const responseData = await response.json()
    return responseData
}

function montarTelaComDadosDoPersonagem(personagem) {
    const elementoCharacter = document.querySelector(".character-container")
    elementoCharacter.style.display = "block"
    
    const elementoImagem = document.querySelector("#imagemPersonagem")
    elementoImagem.src = personagem.image
}