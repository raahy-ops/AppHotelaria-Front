
//VAR, LET, CONST

export default function LoginForm() {
   
   
    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';



     /* Criação de input email */
    
    const email = document.createElement
    ('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    email.className = "inputEmail"
    formulario.appendChild(email);

     /* Criação de input senha */

    const password = document.createElement
    ('input');
    password.type = 'password';
    password.placeholder = "Digite sua senha";
    formulario.appendChild(password);

    /* Criação de botão entrar */

     const button = document.createElement
    ('button');
    button.type = 'submit';
    button.textContent = "Entrar"; 
    button.className = 'btn btn-outline-primary';
    formulario.appendChild(button);

    return formulario;
}

