const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados=document.getElementById("link-perfil-dados");
//linkPerfil.addEventListener("mouseover", ()=> {
//  navPerfil.style.display = "block"
//})

document.addEventListener('keyup', (evento) => {
  console.log('key:', evento.key)
  console.log('code:', evento.code)

if(evento.code == 'Escape'){
  navPerfil.style.display = "none"
}

if(navPerfil.style.display== 'block'){
  if(evento.code == 'Digit1'){
    linkPerfilDados.click()
  }
} else if(evento.code== 'Digit1') {
  navPerfil.style.display = "block"
}

})