import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

const routes = {
   "/login": renderLoginPage,
   "/register": renderRegisterPage 
   };

   function getPath(){
      const url = (location.hash || "").replace(/^#/, "").trim();
      return url && url.startsWith("/") ? url : "/login"; //retorna url limpa
   }

   function renderRoutes(){
      const url = getPath();
      const render = routes[url] || routes["/login"];
      render();
   }

   window.addEventListener("hashchange", renderRoutes);

document.addEventListener('DOMContentLoaded', renderRoutes);