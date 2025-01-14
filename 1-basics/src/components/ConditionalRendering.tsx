export const ConditionalRendering = () => {
  const price = 100;

  //   if (price > 200) {
  //     return <p>Fri frakt</p>;
  //   } else {
  //     return <p>Frakt 49:-</p>;
  //   }

  //   return <>{price > 200 ? <p>Fri frakt</p> : <p>Frakt 49:-</p>}</>;

  return <>{price < 200 && <p>Frakt 49:-</p>}</>;
};
