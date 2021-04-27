/* Case sensentive = reconnhece letras maisculas e minusculas 
    Pode ser selecionados por :
    Tag: getElementByTagName()
    Id : getElementById()
    Nome: getElementByName()
    Classe: getElementsByClassName()
    Seletor : querySelector()*/

  let nome = document.getElementById("#nome")
  let assunto = document.getElementById("#assunto")
  let email = document.getElementById("#email")
  let mapa = document.querySelector("#mapa")
  
nome.style.width = '100%'
email.style.width= "100%"

function validaNome(){
  let txtNome = document.querySelector('#txtNome')
  if(nome.Value.length < 3 ){
    txtNome.innerHTML = 'Nome invalido'
    txtNome.style.cor = "red"
}
else{
  txt.nome.innerHTML= "nome valido"
  txt.nome.style.cor= "green"
}

}


function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')
  if(email.Value.indexof('@'== -1)){
    txtEmail.innerHTML = 'email invalido'
    txtEmail.style.cor = 'red'
  } 
  }

  function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto') 
  if (assunto.Value.length >= 100){
       txtAssunto.innerHTML = "Digite no maximo 100 caracteres"
  }
  }

  function mapaZoom() {
   mapa.style.width = "800px"
   mapa.style.height = "600px" 
  }

  function mapaNormal(){
    mapa.style.width="400"
    mapa.style.height='250'
  }