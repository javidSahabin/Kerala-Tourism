import React, { useState } from "react";
import "./App.css";
import Header from "./componance/Header";
import Hero from "./componance/Hero";
import CardData from "./componance/CardData";
import Card from "./componance/Card";

function App() {
  let [favImages, setFavImage] = useState([]);

  // Get favimages function
  function getFavImage(image) {
    setFavImage([...favImages, image]);
  }
  // Lets map each havorite images
  let useFavImages = favImages.map((image) => {
    return (
      <>
        <i
          className="fa fa-times-circle"
          onClick={() => {
            removeFavImage(image);
          }}
        ></i>
        <img src={image} alt="" />
      </>
    );
  });

  // Lets remove favorite images for favorite
  function removeFavImage(image) {
    setFavImage([...favImages].filter((currentImg) => {
        return(
            currentImg !== image
        )
    }))
  }

  let card = CardData.map((cardItem) => {
    return (
      <Card
        cardContant={{
          image: cardItem.image,
          name: cardItem.name,
          about: cardItem.about,
        }}
        getFavImage={getFavImage}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card-container container">
        <h2>Destination</h2>
        <div className="container-flex">
          <div className="card-flex">{card}</div>
          <aside>
            <h2>Favorite</h2>
            <div className="images">{useFavImages}</div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
