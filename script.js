const loginInput = document.getElementById('login');
const senhaInput = document.getElementById('senha');
const entrarBTN = document.getElementById('entrar');
const agreementCheck = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formsInfo = {};
const textForm = document.getElementById('text-form');

function clicar() {
  if (
    loginInput.value === 'tryber@teste.com'
    && senhaInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const setLearnString = () => {
  const list = document.querySelectorAll('.subject:checked');
  let string = '';
  if (list.length === 1) {
    return list[1].value;
  }

  list.forEach((str) => {
    string += `${str.value}, `;
  });
  return string.slice(0, -2);
};

// Função que gera o resumo do form
const generateFormText = () => {
  formsInfo.learn = setLearnString();
  formsInfo.name = `${formsInfo.name} ${formsInfo.surname}`;

  const spans = document.querySelectorAll('#text-form span');
  spans.forEach((span) => {
    span.innerText = formsInfo[span.id];
  });
  form.innerHTML = textForm.innerHTML;
  form.style.justifyContent = 'space-evenly';
};

entrarBTN.addEventListener('click', clicar);

agreementCheck.addEventListener('change', () => {
  sendButton.disabled = !agreementCheck.checked;
});

textarea.addEventListener('keyup', () => {
  counter.innerText = 500 - textarea.value.length;
});

// Listener que capta dinamicamente as informações para o resumo do form
form.addEventListener('change', (event) => {
  const str = event.target.name;
  if (str !== 'agreement' && str !== 'learn') {
    formsInfo[str] = event.target.value;
  }
});
// Listener que gera e substitui o resumo do form
sendButton.addEventListener('click', generateFormText);
