import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import PieceOfArt from './PieceOfArt.js'

//Query the Rijks museum API


function App() {
  const [art, setArt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // then((data) => data.data.artObjects.forEach(value => console.log(value.webImage.url)


  useEffect(() => {
    setIsLoading(true);
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: 'pZXAax4n',
        format: 'json',
        imgonly: true
      }

    }).then((response) => {
      setArt(response.data.artObjects)
      setIsLoading(false);

    });
  }, []);

  console.log(art);

  return (
    <div className="App">
      <h1>My Museum Art!</h1>


      {
        isLoading ? <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='' /> : art.map(value => {
          return (
            <PieceOfArt
              //original way
              // imgPath={value.webImage.url}
              // title={value.title}
              // longTitle={value.longTitle}
              // key={value.id}

              //way 2
              // imgData={value}

              //way3
              imgPath={value.webImage.url}
              alt={value.title}
              longTitle={value.longTitle}
              key={value.id}

            />
          )
        })
      }
    </div>
  );
}

export default App;

