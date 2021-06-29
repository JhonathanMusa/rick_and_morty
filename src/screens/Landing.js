import React from "react";
import { CharactersRender } from "./CharactersRender";
import { CharacterSearch } from "./CharacterSearch";

export default function Landing() {
  return (
    <div>
      <CharacterSearch />
      <CharactersRender />
    </div>
  );
}
