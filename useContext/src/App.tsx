import { useEffect, useState } from "react";

type Pokemon = {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};

// custom hook to  useContext
function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("../pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
}

function App() {
  const { pokemon } = usePokemon();
  return (
    <main>
      <div>{JSON.stringify(pokemon)}</div>
    </main>
  );
}

export default App;
