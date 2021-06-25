import React from "react";
import { Link } from "react-router-dom";
import { CharactersRender } from "./CharactersRender";
import { CharacterSearch } from "./CharacterSearch";

export default function Landing() {
  return (
    <div>
      <Link className="title" to="/">
        <h1>Characters: </h1>
      </Link>
      <CharacterSearch />
      <CharactersRender />
    </div>
  );
}
