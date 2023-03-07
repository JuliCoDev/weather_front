import Logo from "../Logo/Logo";
import Nav from "./styleComponents/Nav";

function Navbar() {

  return (
    <Nav>
      <Logo /> 
      <ul className="flex text-lg font-semibold text-white">
        <li className="mx-8">
          <a href="/">Inicio</a>
        </li>
        <li className="mx-8">
          <a href="/history">Historial</a>
        </li>       
      </ul>

    </Nav>
  );
}

export default Navbar;
