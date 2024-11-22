import React from 'react';
import memeCoinBeginner from './memecoin-beginner-logo.png';
import './App.css';

const memeCoins = [
  {
    name: 'Dogecoin',
    year: 2013,
    image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    description: 'The original meme coin, started as a joke, but now one of the top cryptocurrencies by market cap!',
  },
  {
    name: 'Shiba Inu',
    year: 2020,
    image: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
    description: 'A dog-themed token that gained massive popularity thanks to community hype and influencer endorsements.',
  },
  {
    name: 'SafeMoon',
    year: 2021,
    image: 'https://cryptologos.cc/logos/safemoon-sfm-logo.png',
    description: 'A token that gained traction with a unique tokenomics model and passionate community support.',
  },
  {
    name: 'Floki Inu',
    year: 2021,
    image: 'https://cryptologos.cc/logos/floki-inu-floki-logo.png',
    description: 'Named after Elon Musk’s dog, this coin gained attention through strong social media marketing.',
  },
  {
    name: 'Kishu Inu',
    year: 2021,
    image: 'https://cryptologos.cc/logos/kishu-inu-kishu-logo.png',
    description: 'A meme coin that quickly garnered attention with an active online community and numerous giveaways.',
  },
  {
    name: 'Future MemeCoin',
    year: 2024,
    image: memeCoinBeginner, 
    description: 'The next meme coin you will be investing in after completing our course. Be ready for success!',
  },
];

const MemeCoinTimeline = () => {
  return (
    <section className="meme-coin-timeline">
      <h2>Meme Coin Evolution</h2>
      <div className="timeline-container">
        {memeCoins.map((coin, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{coin.year}</div>
            <div className="timeline-content">
              <img src={coin.image} alt={coin.name} className="coin-image" />
              <h3>{coin.name}</h3>
              <p>{coin.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemeCoinTimeline;

