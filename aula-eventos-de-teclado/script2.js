const voltar=document.getElementById("voltar");

document.addEventListener('keyup', (evento) => {
    console.log('key:', evento.key)
    console.log('code:', evento.code)
  
  if(evento.code == 'Backspace'){
    voltar.click()
  }
  

  
  })