import Contacts from "../containers/Contacts/Contacts";
import CreateContact from "../containers/CreateContact/CreateContact";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";

//Routes
const routes = [
  {
    path: "/auth/register",
    component: Register,
    title: "Rgister",
  },
  {
    path: "/auth/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/",
    component: Contacts,
    title: "Cotacts",
  },
  {
    path: "/contact/create",
    component: CreateContact,
    title: "Creat Contact",
  },
];

export default routes;
