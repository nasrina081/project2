import React from 'react';
import { useState } from 'react'
import './Card.css'

const Card = () => {
    const flowers = [
        {
            "flower-name": "Start",
            "flower-description": "Press the button to start the flashcards!",
        },
        {
            "flower-name": "Rose",
            "flower-description": "Roses are known for their beauty and fragrance. They come in various colors and are often associated with love and romance.",
            "flower-image": "https://img.freepik.com/free-photo/bunch-fresh-pink-peony-growing-garden_23-2147924865.jpg?t=st=1710032786~exp=1710036386~hmac=506044f866d9772ebf771052e7071b383cc570a8cea60c8c30eeab6607576352&w=1800"
        },

        {
            "flower-name": "Chrysanthemum",
            "flower-description": "Chrysanthemums, commonly known as mums, are popular flowers known for their vibrant colors and diverse shapes. They symbolize longevity and happiness.",
            "flower-image": "https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/paradiso-pink-mum-fall-flower-proven-winners_14469.jpg"
        },
        {
            "flower-name": "Orchid",
            "flower-description": "Orchids are exotic flowers prized for their delicate beauty and elegance. They come in a wide variety of colors and shapes, and they symbolize love, luxury, and beauty.",
            "flower-image": "https://cdn.mos.cms.futurecdn.net/LNmih3ug6YZufqNSHh52mD-1600-80.jpg.webp"
        },
        {
            "flower-name": "Tulip",
            "flower-description": "Tulips are colorful flowers with cup-shaped blooms. They are often associated with spring and represent love, elegance, and grace.",
            "flower-image": "https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/t/_/t_pink_impression_a-w_1.jpg"
        },
        {
            "flower-name": "Sunflower",
            "flower-description": "Sunflowers are tall, bright flowers known for their large, yellow blooms. They symbolize adoration, loyalty, and happiness.",
            "flower-image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
        },
        {
            "flower-name": "Lily",
            "flower-description": "Lilies are elegant flowers with trumpet-shaped blooms and often fragrant petals. They come in various colors and symbolize purity, renewal, and beauty.",
            "flower-image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG"
        },
        {
            "flower-name": "Daisy",
            "flower-description": "Daisies are cheerful flowers with white petals surrounding a yellow center. They symbolize innocence, purity, and new beginnings.",
            "flower-image": "https://www.marthastewart.com/thmb/9Ylu0J6_Iahf_YH-XPAxbG4DMLM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/montauk-daisy-getty-1020-2000-8383fd0e293246679014c64c8ec427f3.jpg"
        },
        {
            "flower-name": "Carnation",
            "flower-description": "Carnations are popular flowers known for their ruffled petals and long-lasting blooms. They come in a variety of colors and symbolize love, fascination, and admiration.",
            "flower-image": "https://bouqs.com/blog/wp-content/uploads/2021/11/carantion-meaning-and-symbolism.jpg"
        },
        {
            "flower-name": "Peony",
            "flower-description": "Peonies are large, fragrant flowers with fluffy petals and vibrant colors. They are often associated with romance, prosperity, and good fortune.",
            "flower-image": "https://i0.wp.com/sugarcreekgardens.com/wp-content/uploads/2021/06/Paeonia-Lorelei-Peony-1.jpg?fit=1000%2C1000&ssl=1"
        },
        {
            "flower-name":"Hydrangea",
            "flower-description": "Hydrangeas are beautiful flowers with clusters of small blooms forming large, round heads. They come in various colors and symbolize gratitude, grace, and abundance.",
            "flower-image": "https://www.jacksonandperkins.com/images/xxl/47825.webp?v=0-2"
        }
    ]

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flowers.length);
      };
    
      return (
        <div className="cards-container">
          <div className="flip-card" key={currentCardIndex}>
            <div className="flip-card-inner">
              <div className="flip-card-front flower-image">
                <img src={flowers[currentCardIndex]["flower-image"]} alt={flowers[currentCardIndex]["flower-name"]} style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h3>{flowers[currentCardIndex]["flower-name"]}</h3>
                <p>{flowers[currentCardIndex]["flower-description"]}</p>
              </div>
            </div>
          </div>
          <button onClick={handleNextCard}>Next</button>
        </div>
      );
    };
    
export default Card;