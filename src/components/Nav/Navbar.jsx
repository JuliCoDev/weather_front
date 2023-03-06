import Logo from "../Logo/Logo";
import Nav from "./styleComponents/Nav";

function Navbar({children}) {

  return (
    <Nav>
      <Logo /> 
      {children}     
    </Nav>
  );
}

export default Navbar;
