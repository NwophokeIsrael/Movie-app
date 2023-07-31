import React, { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import MovieForm from './component/MovieForm';

const App = () => {
  const [movies] = useState([
    {
      title: 'EXTRACTION 2',
      description: "Extraction 2 is an action-packed sequel where Tyler Rake returns to face new dangers, rescue a kidnapped victim, and confront formidable adversaries in thrilling combat.",
      posterURL: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/232099/extraction2-posterart.jpg',
      rating: 8.2,
    },
    {
      title: 'DEN OF THIEVES',
      description: "Den of Thieves is an intense crime thriller where an elite unit of the LA County Sheriff's Department pursues a group of skilled bank robbers planning a daring heist at the Federal Reserve Bank.",
      posterURL: 'https://m.media-amazon.com/images/I/919STtmJKwL._AC_UF894,1000_QL80_.jpg',
      rating: 7.9,
    },
    {
      title: 'AVENGERS: END GAME',
      description: 'Epic superhero team reunites, time travels, and battles villain Thanos to undo devastating losses and save the universe.',
      posterURL: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg',
      rating: 8.1,
    },
    {
      title: 'ANTHROPOID',
      description: "Anthropoid is a historical thriller based on real events, following Czech resistance fighters' plot to assassinate a high-ranking Nazi official during World War II.",
      posterURL: 'https://m.media-amazon.com/images/I/51pEVUFWi0L._AC_UF894,1000_QL80_.jpg',
      rating: 8.1,
    },
    {
      title: 'RAMPAGE',
      description: "Rampage is a thrilling action film where genetic experiments go awry, causing three animals to mutate into colossal and aggressive monsters. As chaos ensues, a primatologist and a team must stop the destruction of the city",
      posterURL: 'https://m.media-amazon.com/images/I/91YlAt6KWSL._AC_UF1000,1000_QL80_.jpg',
      rating: 7.5,
    },
    {
      title: 'INGLORIOUS BASTERDS',
      description: 'Inglourious Basterds is a Quentin Tarantino movie set in WWII, featuring a vengeful Jewish-American squad and a plot to assassinate Nazi leaders. Intense, violent, and darkly humorous.',
      posterURL: 'https://www.yourprops.com/movieprops/original/yp_5fa11cfc860798.55421918/Inglorious-Basterds-Premiere-Lobby-Cards-3.jpg',
      rating: 8.1,
    },
    {
      title: 'JOHN WICK 4',
      description: 'The relentless assassin faces a new wave of deadly adversaries, unraveling a treacherous conspiracy while seeking vengeance.',
      posterURL: 'https://cdn.cinematerial.com/p/297x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster-md.jpg?v=1678582234',
      rating: 8.2,
    },
    {
      title: 'THE OUT-LAWS',
      description: "The Outlaws is a gripping action-packed thriller that follows a seasoned lawman's relentless pursuit of justice against a ruthless criminal gang.",
      posterURL: 'https://static2.showtimes.com/poster/660x980/the-out-laws-netflix-170845.jpg',
      rating: 7.5,
    },
    {
      title: 'TENET',
      description: "Tenet is a thrilling sci-fi action film directed by Christopher Nolan. It involves time inversion, espionage, and a mind-bending plot where a secret agent must prevent World War III to safeguard the future.",
      posterURL: 'https://www.canadianlutheran.ca/wp-content/uploads/sites/2/2020/09/tenetposterinter-819x1024.jpg',
      rating: 8.1,
    },
    {
      title: 'CAPTAIN MARVEL',
      description: "Captain Marvel is a superhero film where Carol Danvers gains incredible powers and uncovers her past while battling Skrulls and uncovering Earth's secrets.",
      posterURL: 'https://akns-images.eonline.com/eol_images/Entire_Site/2019016/rs_634x939-190116090754-634.captain-marvel-poster-2.11619.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top',
      rating: 8.5,
    },
    {
      title: 'BLACK WIDOW',
      description: "Black Widow follows Natasha Romanoff's solo mission, facing her past, confronting foes, and unraveling conspiracies, all while embracing her true identity as a formidable Avenger.",
      posterURL: 'https://artofthemovies.co.uk/cdn/shop/products/IMG_8570-522429.jpg?v=1611687837',
      rating: 8.1,
    },
    {
      title: 'FAST X',
      description: 'Fast X is an action-packed adrenaline rush with high-speed car chases, intense heists, and an all-star cast, taking the Fast & Furious franchise to new heights.',
      posterURL: 'https://cdn.cinematerial.com/p/297x/3edzwhfn/fast-x-movie-poster-md.jpg?v=1678807508',
      rating: 6.9,
    },
    {
      title: 'WONDER WOMAN',
      description: "Wonder Woman is a thrilling superhero film featuring Diana, an Amazonian warrior princess, discovering her true powers to stop a global war, showcasing bravery, compassion, and empowerment in the process.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/qr1ws2xg/wonder-woman-movie-poster-md.jpg?v=1523893366',
      rating: 7.9,
    },
    {
      title: 'MISSION KANDAHAR',
      description: "Mission Kandahar is a gripping war drama following a team of soldiers on a perilous mission in Afghanistan. Facing relentless enemies and internal struggles, they strive to complete their mission and survive.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/bujepjj3/kandahar-movie-poster-md.jpg?v=1683659196',
      rating: 7.1,
    },
    {
      title: 'TRANSFORMERS: RISE OF THE BEAST',
      description: "Transformers: Rise of the Beast is an action-packed sci-fi film where Autobots and Decepticons battle on Earth. The story unveils ancient Transformer history and introduces new transforming creatures amidst epic clashes.",
      posterURL: 'https://flxt.tmsimg.com/assets/p20201199_v_v13_am.jpg',
      rating: 6.5,
    },
    {
      title: 'PUSS IN BOOTS 2',
      description: "Puss in Boots 2 is an animated adventure film where the swashbuckling cat Puss teams up with Humpty Dumpty and Kitty Softpaws to stop the villainous Jack and Jill from unleashing evil forces.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/zayj6zx3/puss-in-boots-the-last-wish-movie-poster-md.jpg?v=1655305563',
      rating: 7.1,
    },
    {
      title: 'THE GRAY MAN',
      description: "The Gray Man is an action thriller film based on the novel series. It follows a former CIA operative turned assassin as he evades enemies while protecting his family. Directed by Anthony and Joe Russo, starring Ryan Gosling and Chris Evans.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/pfgv4tnc/the-gray-man-movie-poster-md.jpg?v=1653403863',
      rating: 8.2,
    },
    {
      title: 'BLACK PANTHER 2',
      description: "Black Panther 2 continues the Marvel superhero saga after the demise of T'Challa. It explores Wakanda's new leadership and confronts challenges, including a mysterious threat that puts the nation at risk.",
      posterURL: 'https://m.media-amazon.com/images/I/71nDLLIubWL._AC_SL1100_.jpg',
      rating: 8.1,
    },
    {
      title: 'OPPENHEIMER',
      description: "Oppenheimer is a biographical drama film directed by Christopher Nolan, depicting the life of J. Robert Oppenheimer, the physicist and key figure behind the development of the atomic bomb during World War II.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/2afqhdxx/oppenheimer-movie-poster-md.jpg?v=1683305737',
      rating: 8.1,
    },
    {
      title: 'ETERNALS',
      description: "The Eternals is a Marvel superhero film where ancient immortals with diverse powers reunite to protect humanity from the monstrous Deviants while facing their own internal conflicts and destiny.",
      posterURL: 'https://preview.redd.it/bu4phdtw2ei71.jpg?auto=webp&s=aa2312bed32c44a0995616c80ba6d9437bb0b4db',
      rating: 7.9,
    },
    {
      title: 'MILE 22',
      description: "Mile 22 is an action thriller where an elite CIA team, led by an intelligence officer played by Mark Wahlberg, must transport a high-value asset through dangerous terrain, facing relentless enemies and time pressure.",
      posterURL: 'https://media-cache.cinematerial.com/p/500x/bhqwts7x/mile-22-australian-movie-poster.jpg?v=1536345339',
      rating: 6.9,
    },
    {
      title: 'DUNKIRK',
      description: "Dunkirk is a gripping war film directed by Christopher Nolan. It depicts the harrowing evacuation of Allied soldiers from Dunkirk during World War II, showcasing their courage and determination amidst intense air and sea battles.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/xpohdubv/dunkirk-theatrical-movie-poster-md.jpg?v=1503600557',
      rating: 8.1,
    },
    {
      title: 'AVATAR: THE WAY OF WATER',
      description: "Avatar: The Way of Water is the anticipated sequel to Avatar, directed by James Cameron. It continues the story on Pandora, exploring new underwater realms and the Na'vi's connection with nature.",
      posterURL: 'https://cdn.cinematerial.com/p/297x/ayniyqcx/avatar-the-way-of-water-movie-poster-md.jpg?v=1667461543',
      rating: 8.2,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (field, value) => {
    // Convert the value to lowercase for case-insensitive filtering
    const lowercaseValue = value.toLowerCase();
  
    // Filter the movies based on the given field and value
    const filtered = movies.filter((movie) => {
      // If the field doesn't exist in the movie object, return false to filter it out
      if (!movie.hasOwnProperty(field)) {
        return false;
      }
  
      // Get the movie field value and convert it to lowercase for case-insensitive comparison
      const fieldValue = movie[field].toString().toLowerCase();
  
      // Check if the fieldValue contains the lowercaseValue
      return fieldValue.includes(lowercaseValue);
    });
  
    // Update the filtered movies state
    setFilteredMovies(filtered);
  };
  

  return (
    <div className="App">
      <h1 className='title'>My Favorite Movies</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <MovieForm />
    </div>
  );
};

export default App;