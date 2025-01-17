import { FormEvent, useState } from "react";
import "./App.css";
import { Movie } from "./models/Movie";
import { CartItem } from "./models/CartItem";

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    new Movie(1, "Godzilla", 140, 4, ""),
    new Movie(2, "Titanic", 120, 10, ""),
    new Movie(3, "Up", 112, 8, ""),
  ]);
  const [cart, setCart] = useState<CartItem[]>([]);
  // const [title, setTitle] = useState("");
  // const [length, setLength] = useState(0);
  // const [rating, setRating] = useState(1);
  const [movie, setMovie] = useState<Movie>({
    id: Date.now(),
    title: "",
    length: 0,
    rating: 1,
    imageUrl: "",
  });

  //#region functions for cart
  const decreaseAmount = (cartItem: CartItem) => {
    if (cartItem.amount === 1) {
      setCart(cart.filter((ci) => ci.product.id !== cartItem.product.id));
    } else {
      setCart(
        cart.map((ci) => {
          if (ci.product.id === cartItem.product.id) {
            return { ...ci, amount: ci.amount - 1 };
          }
          return ci;
        })
      );
    }
  };

  const increaseAmount = (movie: Movie) => {
    setCart(
      cart.map((ci) => {
        if (ci.product.id === movie.id) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      })
    );
  };

  const addToCart = (movie: Movie) => {
    const foundInCart = cart.find((ci) => ci.product.id === movie.id);

    if (!foundInCart) {
      setCart([...cart, new CartItem(movie, 1)]);
    } else {
      increaseAmount(movie);
    }
  };
  //#endregion

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // setMovies([...movies, new Movie(Date.now(), title, length, rating)]);
    setMovies([...movies, movie]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movie.title}
          placeholder="Title"
          onChange={(e) => {
            setMovie({ ...movie, title: e.target.value });
          }}
        />
        <input
          type="number"
          value={movie.length}
          placeholder="Length"
          onChange={(e) => {
            setMovie({ ...movie, length: +e.target.value });
          }}
        />
        <input
          type="range"
          max={10}
          min={1}
          value={movie.rating}
          placeholder="Rating"
          onChange={(e) => {
            setMovie({ ...movie, rating: +e.target.value });
          }}
        />

        <input
          type="text"
          value={movie.imageUrl}
          placeholder="ImageUrl"
          onChange={(e) => {
            setMovie({ ...movie, imageUrl: e.target.value });
          }}
        />

        <p>{JSON.stringify(movie)}</p>
        <button>Spara</button>
      </form>
      <div>
        <h3>Varukorg</h3>
        {cart.map((ci) => {
          return (
            <div key={ci.product.id}>
              <button
                onClick={() => {
                  decreaseAmount(ci);
                }}
              >
                -
              </button>
              <span>{ci.product.title}</span> - <span>{ci.amount}</span>
              <button
                onClick={() => {
                  increaseAmount(ci.product);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Filmer</h3>
        {movies.map((m) => {
          return (
            <div
              key={m.id}
              onClick={() => {
                addToCart(m);
              }}
            >
              <h2>{m.title}</h2>
              <img src={m.imageUrl} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
