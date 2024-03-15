import React from 'react';
import "./Home.css";
import { FaPlay } from "react-icons/fa";
import BandList from './BandList';

const data = [
  { date: 'JUL16', city: 'DETROIT, MI', theater: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL17', city: 'CHICAGO, IL', theater: 'UNITED CENTER' },
  { date: 'JUL18', city: 'NEW YORK, NY', theater: 'MADISON SQUARE GARDEN' },
  { date: 'JUL19', city: 'LOS ANGELES, CA', theater: 'STAPLES CENTER' },
  { date: 'JUL20', city: 'NASHVILLE, TN', theater: 'RYMAN AUDITORIUM' },
  { date: 'JUL21', city: 'AUSTIN, TX', theater: 'ACL LIVE AT THE MOODY THEATER' }
];

const Home = () => {
  return(
    <div>
      <div className='firstDiv'>
        <h1>The Generics</h1>
        <div className='middle'>
          <p>Get Our Latest Album</p>
        </div>
        <div className='icon'>
          <FaPlay className='playbutton' />
        </div>
      </div>
      <div className='middleDiv'>
        <h1>Tours</h1>
      </div>
      <div className='thirdDiv'>
        {data.map((item, index) => (
          <BandList key={index} date={item.date} city={item.city} theater={item.theater} />)
        )}
      </div>
      <footer className='foot'>
        <h2>Generics</h2>
      </footer>
    </div>
  );
}

export default Home;
