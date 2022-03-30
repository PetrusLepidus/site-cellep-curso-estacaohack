// Script por Pedro

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')
var inputUsuario = document.getElementById('inputUsuario')
var inputSenha = document.getElementById('inputSenha')

function autenticar(event){
  // interromper submit
  event.preventDefault()

  // consistencias
  if(inputUsuario.value == 'root' && inputSenha.value == '1234'){
    myTextModal.className = 'text-sucess'
    myTextModal.innerText = 'Usuário Logado'
  }  else {
    myTextModal.className = 'text-danger'
    myTextModal.innerText = 'Usuário ou senha inválido'
  }
  
  
  myButtonModal.click()
 }