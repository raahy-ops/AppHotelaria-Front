import LoginForm from "../Components/LoginForm.js";
import Navbar from "../Components/Navbar.js";

export default function renderLoginPage() {
    const nav = document.getElementById('navbar');

        const navbar = Navbar();
    nav.appendChild(navbar);

    
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    divRoot.style.background = '#FAF2DA';

    


    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça login, ou crie uma conta';
    titulo.className = 'titulo';
    titulo.style.textAlign = 'center';


    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //classe do Bootstrap para criar um card
    container.style.width = '100%';//aplicada a largaura de 100% na div container
    container.style.maxWidth = '400px'; //até que atinja o maximo de 400px
    container.style.background = '#8E9775';
    
    
    divRoot.appendChild(container);

    

    const formulario = LoginForm();

    container.appendChild(titulo);
    container.appendChild(formulario);
}
