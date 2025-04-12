import React from 'react';
import Data from '../assets/data.json';
import { useState } from 'react';
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";


export default function Cardlist() {

const [activeCardIndex, setActiveCardIndex] = useState(null);

// active card
const handleClick = (index) => {
  setActiveCardIndex(index); 
};

// back button 
const handleBackbutton = (e) => {
  e.stopPropagation(); // Prevent click event from bubbling to card
  setActiveCardIndex(null); // Deactivate card
};

const loadImage = (imageName) => {
    try {
        return require(`../images/${imageName}`);
    } catch (error) {
        console.error(`Image not found: ${imageName}`, error);
        return null; // Fallback to null or a placeholder image
    }
};

  return (
    <div className='container'>
        <div className='card_container_heading'>
          <h3>Trending <span>this week</span></h3>
        </div>

        
        <div className="card_list">
        { Data && Data.map((card,index) => {
             const backgroundImageStyle = {
                backgroundImage: `url(${loadImage(card.bgImage)})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              };

            return (
              <React.Fragment key={card.id || index}>
                <div 
                  className={`card ${activeCardIndex === index ? 'active_card' : activeCardIndex === null ? 'display_card' : 'inactive_card'}`}
                  style={backgroundImageStyle}
                  onClick={() => handleClick(index)}
                >
                  {activeCardIndex === index && 
                    <HiOutlineArrowLeftStartOnRectangle
                      className={`back_btn active_back_btn`}
                      onClick={handleBackbutton}
                    />
                  }          
                  <div className='darken_bg'></div>
                  <div className={`card_text_container ${activeCardIndex === index ? 'active_text_card' : ''}`}>
                    <h3>{card.Title}</h3>
                    <div className='cad_text row'>
                      <p className='category'>Category: {card.category.join(', ')}</p>
                      <div className="card_rating">
                        <div className='icon__container'>
                          <div className='vector'></div>
                        </div>
                        <p>{card.rate}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`summary ${activeCardIndex === index ? 'active_summ' : 'inactive_card'}`}>
                    <p>{card.summaryOfthemovie}</p>
                  </div>
                </div>    
                <div className={`Episode_container ${activeCardIndex === index ? 'episode_active_container' : 'inactive_card'}`}>
                  <div className='heading_episode'>
                  <h2>Episodes</h2>
                  <select name='season' className="season" >
                    <option className='season_select'>Season 1</option>
                  </select>
                  </div>
                   {/* video */}
                  <div className='video_container'>
                    {card.season.Season1.map((episode, episodeIndex) => (
                      <div key={episodeIndex} className='video_context'>
                        <div className='video'>{episode.Video}</div>
                        <div className="video_text_container">
                          <h3>Episode {episode.Episode}</h3>
                          <h3 className='video_descrip'>{episode.summary}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> 
            </React.Fragment>
             )
          })}
        </div>
    </div>
  )
}
