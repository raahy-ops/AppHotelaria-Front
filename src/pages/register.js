import Form from "../Components/Form.js";
import Navbar from "../Components/Navbar.js";

export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
   
    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    //Seleciono o elemento form que está presente em ./components/Form.js
    const contentForm = formulario.querySelector('form');

    //Criar o input para nome e adicionar em contentForm
    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = "Digite seu nome";

    /*Para adicionar input nome ao contentForm, localizo onde está input email pois
    quero necessariamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    contentForm.insertBefore(nome, inputEmail);

    //Criar o input para confirmar senha
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";

    /*Adicionar confSenha como "child" de form que já contém
        4 elementos: input nome[0], input email[1], input password[2],
        button btn[3], ao adicionar conftSenha antes de btn[3], portanto
        utilizar insertBefore() e identificar a posição de btn[3] como uma
        "child" do elemento pai form
    */
    contentForm.insertBefore(confSenha, contentForm.children[3]);


    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";

}