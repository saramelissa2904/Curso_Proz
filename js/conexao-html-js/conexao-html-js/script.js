// const post02 = document.getElementById('post02')
// console.log(post02)

// const link = document.querySelector('.post-texto a') 
// console.log(link)
// const negrito = document.querySelector('.post-texto strong')
// console.log(negrito)

const article= document.createElement('article')
article.innerHTML= `<h3>Superou minhas expectativas:</h3>
<p class="post-autor"><strong>Autor:</strong> Maria Lima </p>
<p class="post-data"><strong>Data:</strong> 04/07/2022</p>
<p class="post-texto">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis debitis iure ut impedit
  <strong>eligendi</strong> et omnis laboriosam, beatae aliquam ipsa? Maiores ratione corrupti expedita
  accusantium ut optio dolores quibusdam numquam.
</p>`

const main= document.querySelector("main")
main.appendChild(article)