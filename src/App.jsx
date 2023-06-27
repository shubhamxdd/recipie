import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { Logo, Nav } from "./styles/myStyles";
import { GiFoodTruck } from "react-icons/gi";

function App() {
  return (
    <>
      <Nav>
        <Logo to="/">
          <GiFoodTruck />
          Foodie
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </>
  );
}

export default App;
