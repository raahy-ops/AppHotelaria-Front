import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    
    
    //innerhtml, limpa e te permite escrever dps do html//
    divRoot.innerHTML = '';
    
    const formulario = LoginForm();
    divRoot.appendChild(formulario);
}
