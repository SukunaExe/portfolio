let btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  btn.setAttribute('class', 'submit process');
  btn.innerHTML = 'Chargement';
  setTimeout(()=>{
     btn.setAttribute('class', 'submit submitted');
     btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Envoyé
     `;
  },5000);
});