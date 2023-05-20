//import React from "react";
import "./AlbumList.css";
import Album from "./type";

type Props = {
  albums: Album[];
};

const AlbumList = (props: Props) => {
  const { albums } = props;
  return (
    <div className="album-list">
      {albums.map((album) => (
        <div className="album" key={album.id}>
          <img src={album.thumbnailUrl} alt={album.title} />
          <h3>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
