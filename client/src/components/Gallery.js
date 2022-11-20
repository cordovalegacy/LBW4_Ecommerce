import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Harley from '../img/harley.jpg';
import Enthusiast from '../img/enthusiast.JPG';
import HighEnd from '../img/highend.JPG';
import MidTier from '../img/midtier.JPG';
import SuperTier from '../img/supertier.JPG';
import Aurora from '../img/aurora.jpg';
import Batman from '../img/batman.jpg';
import Thanos from '../img/thanos.jpg';
import George from '../img/george.jpg';
import Captain from '../img/captainamerica.jpg';
import Cyborg from '../img/cyborg.jpg';
import HulkBuster from '../img/hulkbuster.jpg';
import Mew from '../img/mew.jpg';
import Mike from '../img/mike.jpg';
import NarutoOrange from '../img/narutoorange.jpg';
import NarutoYellow from '../img/narutoyellow.jpg';
import SpiderMan from '../img/spiderman.jpg';
import SuperMan from '../img/superman.jpg';
import Vader from '../img/vader.jpg';
import VenomHulk from '../img/venomhulk.jpg';
import WarMachine from '../img/warmachine.jpg';
import WonderWoman from '../img/wonderwoman.jpg';
import ZombieHulk from '../img/zombiehulk.jpg';
import Bart from '../img/bart.jpg';
import Buu from '../img/buu.jpg';
import DadThanos from '../img/dadthanos.jpg';
import Deadpool from '../img/deadpool.jpg';
import Demonslayer from '../img/demonslayer.jpg';
import ESO from '../img/eso.jpg';
import Ghostrider from '../img/ghostrider.jpg';
import Inventory from '../img/inventory.jpg';
import Joker from '../img/joker.jpg';
import Jolteon from '../img/jolteon.jpg';
import Marines from '../img/marines.jpg';
import Revan from '../img/revan.jpg';
import Sailormoon from '../img/sailormoon.jpg';
import Witcher from '../img/witcher.jpg';

const Gallery = () => {


    return (
        <div className='gallery-container'>
            <h2>Explore some of our work...</h2>
            <h3>Carefully crafted, meticulously assembled, and done right!</h3>
            <hr style={{ border: "2px solid gray", width: "100%" }} />
            <div className='gallery-wrapper'>
                <Carousel infiniteLoop useKeyboardArrows autoPlay emulateTouch={true} swipeable={true}>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Bart} alt='bart' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Buu} alt='buu' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={DadThanos} alt='dadthanos' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Deadpool} alt='deadpool' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={Demonslayer} alt='demon' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={ESO} alt='eso' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Ghostrider} alt='ghostrider' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Inventory} alt='inventory' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={Joker} alt='joker' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={Jolteon} alt='jolteon' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Marines} alt='marines' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Revan} alt='revan' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Sailormoon} alt='sailor' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Witcher} alt='witcher' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={Harley} alt='Harley' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Aurora} alt='Harley' />
                    </div>
                    <div>
                        <p id='carousel-p'>Enthusiast</p>
                        <img id='img-width' src={Enthusiast} alt='Punisher' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={HighEnd} alt='Anime' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={MidTier} alt='Custom' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={SuperTier} alt='Godzilla' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={Batman} alt='Batman' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={George} alt='George' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={Thanos} alt='Thanos' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Captain} alt='Captain' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Cyborg} alt='Cyborg' />
                    </div>
                    <div>
                        <p id='carousel-p'>Enthusiast</p>
                        <img id='img-width' src={HulkBuster} alt='HulkBuster' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Mew} alt='Mew' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={Mike} alt='Mike' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={NarutoOrange} alt='Naruto' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={NarutoYellow} alt='Naruto' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={SpiderMan} alt='Spidey' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={SuperMan} alt='SuperMan' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={Vader} alt='Vader' />
                    </div>
                    <div>
                        <p id='carousel-p'>Super-Tier</p>
                        <img id='img-width' src={VenomHulk} alt='VenomHulk' />
                    </div>
                    <div>
                        <p id='carousel-p'>High-End</p>
                        <img id='img-width' src={WarMachine} alt='WarMachine' />
                    </div>
                    <div>
                        <p id='carousel-p'>Mid-Tier</p>
                        <img id='img-width' src={WonderWoman} alt='WonderWoman' />
                    </div>
                    <div>
                        <p id='carousel-p'>Starter</p>
                        <img id='img-width' src={ZombieHulk} alt='ZombieHulk' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Gallery;