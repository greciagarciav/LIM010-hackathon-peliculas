/* DECLARANDO LOS BOTONES DEL LOGIN Y DARLE FUNCIONABILIDAD */
const loginbox = document.getElementById('loginbox');
const login = document.getElementById('login');
const password = document.getElementById('password');
const buttonUno = document.getElementById('clave');
const error = document.getElementById('error');
const interfaz2 = document.getElementById('interfaz2');
let contador = 0;
buttonUno.addEventListener('click', () => {
  if (login.value === 'LABORATORIA' && password.value === 'LABORATORIA') {
    loginbox.classList.add('hide');
    interfaz2.classList.remove('hide');
  } else if (contador === 2) {
    error.innerHTML = 'intentaste 3 veces ya no puedes entrar a la pagina';
  } else {
    contador++;
    error.innerHTML = 'contraseña incorrecta';
  }
});
