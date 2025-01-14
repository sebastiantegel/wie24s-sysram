export const ListRendering = () => {
  const numbers: number[] = [1, 1, 2, 3, 5];

  const lis = numbers.map((n, i) => <li key={i}>{n}</li>);

  //   console.log(lis);

  return <ul>{lis}</ul>;
};
