import { Person } from "../models/Person";

export const ListObjectsRendering = () => {
  const family: Person[] = [
    new Person("Sebastian", 45, true),
    new Person("Hanna", 44, true),
    new Person("Alvar", 14, false),
    new Person("Astrid", 14, false),
  ];

  //   const html = family.map((p) => {
  //     return (
  //       <div key={p.name}>
  //         <h2>{p.name}</h2>
  //         <p>{p.age}</p>
  //         <input type="checkbox" checked={p.isMarried} />
  //       </div>
  //     );
  //   });

  return (
    <div className="persons">
      {family.map((p) => (
        <div key={p.name}>
          <h2>{p.name}</h2>
          <p>{p.age}</p>
          <input type="checkbox" checked={p.isMarried} />
        </div>
      ))}
    </div>
  );
};
