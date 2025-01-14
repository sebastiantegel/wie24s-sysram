import { Person } from "../models/Person";

export const Interpolation = () => {
  const message = "Some random text";
  const isMarried = true;

  const p = new Person("Sebastian", 45, true);

  return (
    <div>
      <p>{message}</p>
      <p>
        <input type="checkbox" checked={isMarried} />
      </p>
      <p>
        <h2>{p.name}</h2>
        <p>{p.age}</p>
        <input type="checkbox" checked={p.isMarried} />
      </p>
    </div>
  );
};
