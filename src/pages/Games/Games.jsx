import React, { useEffect } from "react";
import GamesDetails from "./GamesDetails";
import Aos from "aos";

const Games = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      mirror: true,
      once: false,
    });
  });

  const gamesDetails = [
    {
      id: 1,
      gameName: "The Witcher 3: Wild Hunt",
      gameMaker: "CD Projekt Red",
      imgUrl1: "https://i.ibb.co/r2H3432/the-witcher-3-1.png",
      imgUrl2: "https://example.com/witcher3_2.jpg",
      imgUrl3: "https://example.com/witcher3_3.jpg",
      imgUrl4: "https://example.com/witcher3_4.jpg",
      createdYear: 2015,
      description: "An open-world RPG following Geralt of Rivia.",
      genre: "RPG",
      isMultiplayer: false,
      isFree: false,
    },
    {
      id: 2,
      gameName: "Fortnite",
      gameMaker: "Epic Games",
      imgUrl1: "https://i.ibb.co/jVyyRcw/fortnite-1.png",
      imgUrl2: "https://example.com/fortnite_2.jpg",
      imgUrl3: "https://example.com/fortnite_3.jpg",
      imgUrl4: "https://example.com/fortnite_4.jpg",
      createdYear: 2017,
      description: "A battle royale game with building mechanics.",
      genre: "Battle Royale",
      isMultiplayer: true,
      isFree: true,
    },
    {
      id: 3,
      gameName: "Minecraft",
      gameMaker: "Mojang",
      imgUrl1:
        "https://i.ibb.co/6JLBXwW/minecraft-video-games-wallpaper-preview.jpg",
      imgUrl2: "https://example.com/minecraft_2.jpg",
      imgUrl3: "https://example.com/minecraft_3.jpg",
      imgUrl4: "https://example.com/minecraft_4.jpg",
      createdYear: 2011,
      description: "A sandbox game where players can build and explore.",
      genre: "Sandbox",
      isMultiplayer: true,
      isFree: false,
    },
    {
      id: 4,
      gameName: "Overwatch",
      gameMaker: "Blizzard Entertainment",
      imgUrl1: "https://i.ibb.co/hg5sYkv/axville-SXGVli-ZGS7-I-unsplash-1.jpg",
      imgUrl2: "https://example.com/overwatch_2.jpg",
      imgUrl3: "https://example.com/overwatch_3.jpg",
      imgUrl4: "https://example.com/overwatch_4.jpg",
      createdYear: 2016,
      description: "A team-based shooter with diverse heroes.",
      genre: "FPS",
      isMultiplayer: true,
      isFree: false,
    },
    {
      id: 5,
      gameName: "Among Us",
      gameMaker: "InnerSloth",
      imgUrl1: "https://example.com/amongus_1.jpg",
      imgUrl2: "https://example.com/amongus_2.jpg",
      imgUrl3: "https://example.com/amongus_3.jpg",
      imgUrl4: "https://example.com/amongus_4.jpg",
      createdYear: 2018,
      description: "A multiplayer game of teamwork and betrayal.",
      genre: "Party",
      isMultiplayer: true,
      isFree: false,
    },
    {
      id: 6,
      gameName: "Cyberpunk 2077",
      gameMaker: "CD Projekt Red",
      imgUrl1: "https://example.com/cyberpunk2077_1.jpg",
      imgUrl2: "https://example.com/cyberpunk2077_2.jpg",
      imgUrl3: "https://example.com/cyberpunk2077_3.jpg",
      imgUrl4: "https://example.com/cyberpunk2077_4.jpg",
      createdYear: 2020,
      description: "An open-world RPG set in a dystopian future.",
      genre: "RPG",
      isMultiplayer: false,
      isFree: false,
    },
    {
      id: 7,
      gameName: "League of Legends",
      gameMaker: "Riot Games",
      imgUrl1: "https://example.com/lol_1.jpg",
      imgUrl2: "https://example.com/lol_2.jpg",
      imgUrl3: "https://example.com/lol_3.jpg",
      imgUrl4: "https://example.com/lol_4.jpg",
      createdYear: 2009,
      description: "A competitive MOBA with strategic team play.",
      genre: "MOBA",
      isMultiplayer: true,
      isFree: true,
    },
    {
      id: 8,
      gameName: "Genshin Impact",
      gameMaker: "miHoYo",
      imgUrl1: "https://example.com/genshinimpact_1.jpg",
      imgUrl2: "https://example.com/genshinimpact_2.jpg",
      imgUrl3: "https://example.com/genshinimpact_3.jpg",
      imgUrl4: "https://example.com/genshinimpact_4.jpg",
      createdYear: 2020,
      description: "An open-world action RPG with gacha mechanics.",
      genre: "Action RPG",
      isMultiplayer: true,
      isFree: true,
    },
    {
      id: 9,
      gameName: "Animal Crossing: New Horizons",
      gameMaker: "Nintendo",
      imgUrl1: "https://example.com/animalcrossing_1.jpg",
      imgUrl2: "https://example.com/animalcrossing_2.jpg",
      imgUrl3: "https://example.com/animalcrossing_3.jpg",
      imgUrl4: "https://example.com/animalcrossing_4.jpg",
      createdYear: 2020,
      description: "A life simulation game on a deserted island.",
      genre: "Simulation",
      isMultiplayer: true,
      isFree: false,
    },
    {
      id: 10,
      gameName: "Valorant",
      gameMaker: "Riot Games",
      imgUrl1: "https://example.com/valorant_1.jpg",
      imgUrl2: "https://example.com/valorant_2.jpg",
      imgUrl3: "https://example.com/valorant_3.jpg",
      imgUrl4: "https://example.com/valorant_4.jpg",
      createdYear: 2020,
      description: "A tactical shooter with unique agents.",
      genre: "FPS",
      isMultiplayer: true,
      isFree: true,
    },
  ];

  return (
    <div data-aos="fade-right" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {gamesDetails.map((details) => (
          <GamesDetails
            data-aos="flip-right"
            key={details.id}
            details={details}
          ></GamesDetails>
        ))}
      </div>
    </div>
  );
};

export default Games;
