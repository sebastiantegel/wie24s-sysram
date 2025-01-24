import "./../styles/layout.scss";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Om</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Filmer</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>Social media</div>
        <div>Karta</div>
        <div>Kontakt</div>
      </footer>
    </>
  );
};
