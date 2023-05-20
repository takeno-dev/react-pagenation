import { useEffect, useState } from "react";
import "./App.css";
import Album from "./type";
import Pagenation from "./Pagenation";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albams/1/photos")
        .then((res) => res.json())
        .then((albums) => setAlbums(albums));
    };
    getAlbums();
  }, []);

  return (
    <>
      <div className="App">
        <Pagenation albums={albums} />
      </div>
    </>
  );
}

export default App;
