import Form from "../Components/Form.js";
import Navbar from "../Components/Navbar.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    Form();

}
