import { useState } from "react";
import { Search } from "./Search";
import { ShowMovies } from "./ShowMovies";
import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { CartItem } from "../models/CartItem";
import { Cart } from "./Cart";

export const MovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const search = async (searchText: string) => {
    const response = await fetch(
      "https://omdbapi.com/?apikey=416ed51a&s=" + searchText
    );

    const data: OmdbResponse = await response.json();

    setMovies(data.Search);
    localStorage.setItem("movies", JSON.stringify(data.Search));
  };

  const addToCart = (movie: Movie) => {
    const foundInCart = cart.find((ci) => ci.movie.imdbID === movie.imdbID);

    if (foundInCart) {
      // +1
      setCart(
        cart.map((ci) => {
          if (ci.movie.imdbID === movie.imdbID) {
            return { ...ci, amount: ci.amount + 1 };
          }
          return ci;
        })
      );
    } else {
      // Lägg till i varukorgen
      setCart([...cart, new CartItem(movie, 1)]);
    }
  };

  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <>
      {/* props = { cartItems: [{...}, {...}, ...]} */}
      <Cart cartItems={cart} />

      {/* props = { search: (searchText: string) => {} } */}
      <Search search={search} />

      {/* props = { movies: [{...}, {...}, ...] } */}
      <ShowMovies movies={movies} addToCart={addToCart} />
    </>
  );
};
