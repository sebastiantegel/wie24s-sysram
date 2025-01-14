// export const HelloWorld = () => {
//   return <h2>Hello world!</h2>;
// };

export function HelloWorld() {
  let message = "Hello world";

  const handleClick = () => {
    message = "Something else";
    console.log(message);
  };

  return <h2 onClick={handleClick}>{message}</h2>;
}
