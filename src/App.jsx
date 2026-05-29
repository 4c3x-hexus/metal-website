import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import GearCard from './GearCard';
import Footer from './footer';
import Theory from './theory';
import Gear from './gear';
import Contact from './Contact';
import FadeUp from './FadeUp';

import dimeBagImg from './image/dimebag.png'
import Rhodes from './image/GettyImages-84888205-removebg-preview.png'
import Petrucci from './image/John-Petrucci-5_1400x1050-removebg-preview.png'
import ibanezImg from './image/ps_main_eg_x_ironlabel_en.png';
import espImg from './image/original.webp';
import synImg from './image/Synyster Custom-S.Gloss Black with Silver Pinstripes.01.avif';

function App() {
  const [activePage, setActivePage] = useState('home');
  return (
    <div className='App'>
      <Navbar setPage={setActivePage} />
      <main>
        {activePage === 'home' && (
          <>
            <FadeUp>
              <div className="hero">
                <div className="slider-overlay">
                  <h1>SHRED THE VOID</h1>
                  <p>Mastering heavy metal on electric guitar.</p>
                </div>
                <div className="slideshow-container">
                  <div className="shredder-slide" style={{ backgroundImage: `url(${dimeBagImg})` }}></div>
                  <div className="shredder-slide" style={{ backgroundImage: `url(${Rhodes})` }}></div>
                  <div className="shredder-slide" style={{ backgroundImage: `url(${Petrucci})` }}></div>
                </div>
              </div>
            </FadeUp>
            <div id="gear" className='container'>
              <h2 style={{ textAlign: 'center' }}>The Armory</h2>
              <div className='grid-layout'>
                <FadeUp>
                  <GearCard
                    name="Ibanez Iron Label"
                    description="The ultimate machine for low-end chugs"
                    img={ibanezImg}
                  />
                </FadeUp>
                <FadeUp>
                  <GearCard
                    name="ESP LTD Arrow"
                    description="Sharp looks and active EMGs for lead shredding"
                    img={espImg}
                  />
                </FadeUp>
                <FadeUp>
                  <GearCard
                    name="Synyster Custom-S"
                    description="From the beautiful inlays to the unique headstock"
                    img={synImg}
                  />
                </FadeUp>
              </div>
            </div>
          </>
        )}
        {activePage === 'theory' && <Theory />}
        {activePage === 'gear' && <Gear />}
        {activePage === 'contact' && <Contact />}
      </main>
      <FadeUp>
        <Footer />
      </FadeUp>
    </div>
  );
}

export default App;