const loginInput = document.getElementById('login');
const senhaInput = document.getElementById('senha');
const entrarBTN = document.getElementById('entrar');

function clicar() {
   if (loginInput.value == 'tryber@teste.com' && senhaInput.value == 123456) {
      alert('Olá, Tryber!')
   } else {
      alert('Login ou senha inválidos.')
}
};

// entrarBTN.addEventListener('click',clicar);