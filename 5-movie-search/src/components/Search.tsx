import { FormEvent, useState } from "react";

type SearchProps = {
  search: (searchText: string) => void;
};

export const Search = (props: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    props.search(searchText);

    setSearchText("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Sök efter titel"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button>Sök</button>
    </form>
  );
};
