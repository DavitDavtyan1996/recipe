import { NavLink } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div>
      <NavLink to="/">
        <img className="logo" src="/img/logo.svg"/>
      </NavLink>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
