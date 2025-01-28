import { createBrowserRouter } from "react-router";
import { Movies } from "./pages/Movies";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";
import { Pokemons } from "./pages/Pokemons";
import { Pokemon } from "./pages/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/pokemons",
        element: <Pokemons />,
      },
      {
        path: "/pokemon/:name",
        element: <Pokemon />,
      },
    ],
  },
]);
