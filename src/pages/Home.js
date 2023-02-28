import React from "react";
import ImageGallery from "react-image-gallery";
import "./Home.css";
import styled from "styled-components";

const Gallery = styled.div`
  width: 900px;
`;

function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <h1>Home</h1>
      <Gallery>
        <ImageGallery items={images} autoPlay={true} />
      </Gallery>

      {/* toto sa tu dá ako importovať tie CSS ktomu rozumne? */}
    </>
  );
}

export default Home;
