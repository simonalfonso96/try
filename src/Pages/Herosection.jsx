import React, { useState } from 'react'
import "../Style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import Data from '../assets/data.json';


export default function Herosection() {

  const [activeMovieIndex, setActiveMovieIndex] = useState(0);
  const [activeLink, setActivelink] = useState(1);

  const handleClicklink = (index) => {
    setActivelink(index);
  }

  const handleClickpagination = (index) => {
    setActiveMovieIndex(index);
  }
 
  const activeMovie = Data[activeMovieIndex];

  const loadImage = (imageName) => {
    try {
      return require(`../images/${imageName}`);
    } catch (error) {
      console.error(`Image not found: ${imageName}`, error);
      return null; // Fallback to null or a placeholder image
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${loadImage(activeMovie.bgImage)})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    
    <section id='home' className='hero' style={backgroundImageStyle}>
        <div className="gradient1"></div>
        <div className="gradient"></div>
        <div className="container">
            <div className="content">
                <div className="hero_main">
                  <div className="hero_text">
                      <h1 className='title_movie'>{activeMovie.Title}</h1>
                      <div className='hero_rating'>
                          <div className='icon__container'>
                              <div className='vector'></div>
                          </div>
                          <p className='rating'>{activeMovie.rate}</p>
                          <p className='category'>Category: {activeMovie.category.join(', ')}</p>
                      </div>
                      <div className='hero_description_container'>
                          <p>{activeMovie.summaryOfthemovie}</p>
                      </div>
                      <div className='container__btn'>
                        <button className='btn__watchNow'><FontAwesomeIcon icon={faPlay} size="xl"/>&nbsp; Watch Now!</button>
                        <button className='btn__favorite'><FontAwesomeIcon icon={faHeart} size="xl" /></button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        {/* Hero section bottom Nav */}
            <div className='hero_bottom_navbar container'>
                    <ul>
                        <li>
                            <Link className={ activeLink === 1 ?'hero_bottom_link active' : 'hero_bottom_link '} 
                            onClick={() => handleClicklink(1)}>Overview</Link>
                        </li>
                        <li>
                            <Link className={ activeLink === 2 ?'hero_bottom_link active' : 'hero_bottom_link '} 
                            onClick={() => handleClicklink(2)}>Episodes</Link>
                        </li>
                        <li>
                            <Link className={ activeLink === 3 ?'hero_bottom_link active' : 'hero_bottom_link '} 
                            onClick={() => handleClicklink(3)}>Details</Link>    
                        </li>
                    </ul>

                {/* Pagination Buttons */}
                <div className='hero_pagination'>
                    { Data && Data.map((_, index) => (
                    <div
                        key={index}
                        className={activeMovieIndex === index ? 'button active' : 'button'}
                        onClick={() => handleClickpagination(index)}
                    ></div>
                    ))}
                </div>
            </div>
    </section>
  )
}
