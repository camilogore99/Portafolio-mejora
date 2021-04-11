
const ham = document.querySelector('.ham');
const enlace = document.querySelector('.enlaces-menu');

ham.addEventListener('click', ()=> {
      enlace.classList.toggle('activado');
      console.log('holaaaa');
})
