import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça login, ou crie uma conta';
    titulo.className = 'titulo';


    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //classe do Bootstrap para criar um card
    container.style.width = '100%';//aplicada a largaura de 100% na div container
    container.style.maxWidth = '400px'; //até que atinja o maximo de 400px
    divRoot.appendChild(container);

    const formulario = LoginForm();

    container.appendChild(titulo);
    container.appendChild(formulario);
}
