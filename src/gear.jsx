import { useState } from 'react';
import FadeUp from './FadeUp';

import PRSChleoSEImg from './image/SE_Chleo_Electric_Guitar_Charcoal_Purple_Burst.webp';
import IbanezRGSeriesImg from './image/ps_main_eg_rg_standard_en.png';
import ESPSnakebyteImg from './image/snakebyte.webp';
import MesaBoogieDualRectifierImg from './image/rec-DP-fnt-2000x2000__25266.png';
import Peavey6505Img from './image/peavey.png';
import EVH5150IIIImg from './image/EVH 5150 III.png';
import FocusriteScarlett2i2Img from './image/Focusrite Scarlett 2i2.webp';
import UniversalAudioApolloSoloImg from './image/Universal Audio Apollo Solo.webp';
import AudientiD14MKIIImg from './image/Audient iD14 MKII.webp';
import PremiumCablesImg from './image/guitar cable.png';
import HeavyGaugePicksImg from './image/guitar picks.png';
import PaddedStrapsImg from './image/guitar strap.webp';

function Gear() {
    const [guitarIdx, setGuitarIdx] = useState(0);
    const [ampIdx, setAmpIdx] = useState(0);
    const [interfaceIdx, setInterfaceIdx] = useState(0);

    const moveSlideGuitars = (dir) => {
        setGuitarIdx((prev) => Math.max(0, Math.min(prev + dir, 2)));
    };

    const moveSlideAmps = (dir) => {
        setAmpIdx((prev) => Math.max(0, Math.min(prev + dir, 2)));
    };

    const moveSlideInterfaces = (dir) => {
        setInterfaceIdx((prev) => Math.max(0, Math.min(prev + dir, 2)));
    };
    return (
        <main className="gear-info">
            <FadeUp>
                <div className="gear-desc">
                    <h3>1. The Source: Finding Your Tone</h3>
                    <p>Everything starts with the wood and the magnets. For metal, we look for high-output active pickups and fast neck profiles that allow technical precision and sustain.</p>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="carousel-container">
                    <button className="nav-btn prev" onClick={() => moveSlideGuitars(-1)}>&#10094;</button>
                    <button className="nav-btn next" onClick={() => moveSlideGuitars(1)}>&#10095;</button>
                    <div className="snap-wrapper" id="guitarSlider" style={{ transform: `translateX(-${guitarIdx * 100}%)`, transition: 'transform 0.4s ease' }}>
                        <div className="snap-card">
                            <img src={PRSChleoSEImg} alt="PRS Chleo SE" />
                            <h3 className="guitar-name">PRS Chleo SE</h3>
                            <div className="guitar-desc">
                                <p>The Versatile Powerhouse A modern masterpiece with a unique 24-fret layout and a specialized switching system. It delivers everything from bell-like cleans to crushing high-gain saturation.</p>
                                <ul>
                                    <li><p>Specs: Mahogany Body, Maple Top, 24 Frets, PRS Tremolo.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img src={IbanezRGSeriesImg} alt="Ibanez RG Series" />
                            <h3 className="guitar-name">Ibanez RG Series</h3>
                            <div className="guitar-desc">
                                <p>The Speed King The ultimate shred machine, featuring the legendary "Wizard" neck—the thinnest in the industry. Engineered for lightning-fast riffs and extreme dive-bombs.</p>
                                <ul>
                                    <li><p>Specs: Wizard III Maple Neck, Jumbo Frets, Edge-Zero II Bridge.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img src={ESPSnakebyteImg} alt="ESP Snakebyte" />
                            <h3 className="guitar-name">ESP Snakebyte</h3>
                            <div className="guitar-desc">
                                <p>The Riff Monster Designed for James Hetfield, this aggressive explorer features jagged angles and active EMG "Het Set" pickups for massive output and rhythmic clarity.</p>
                                <ul>
                                    <li><p>Specs: Mahogany Body, TonePros Locking TOM Bridge, EMG JH Active Set.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="gear-desc">
                    <h3>2. The Engine: High-Gain Amps</h3>
                    <p>A metal tone is only as good as the tubes pushing the air. We look for tight low-ends, aggressive mid-range "bite," and enough gain to sustain a note for an eternity.</p>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="carousel-container">
                    <button className="nav-btn prev" onClick={() => moveSlideAmps(-1)}>&#10094;</button>
                    <button className="nav-btn next" onClick={() => moveSlideAmps(1)}>&#10095;</button>
                    <div className="snap-wrapper" id="ampSlider" style={{ transform: `translateX(-${ampIdx * 100}%)`, transition: 'transform 0.4s ease' }}>
                        <div className="snap-card">
                            <img src={MesaBoogieDualRectifierImg} alt="Mesa Boogie" />
                            <h3 className="guitar-name">Mesa/Boogie Dual Rectifier</h3>
                            <div className="guitar-info-box">
                                <p>The Wall of Sound: The industry standard for modern metal. Known for its massive, "sagging" low end and liquid-fire lead tones.</p>
                                <ul>
                                    <li><p>Specs: 100 Watts, 6L6 Tubes, 3 Channels, Multi-Watt Switching.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img className="peavey" src={Peavey6505Img} alt="Peavey 6505" />
                            <h3 className="guitar-name">Peavey 6505+</h3>
                            <div className="guitar-info-box">
                                <p>The Thrash King: Pure, unadulterated aggression. This amp has defined the sound of metalcore and death metal for decades.</p>
                                <ul>
                                    <li><p>Specs: 120 Watts, 6L6GC Tubes, High/Low Gain inputs.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img className="evh" src={EVH5150IIIImg} alt="EVH 5150" />
                            <h3 className="guitar-name">EVH 5150 III</h3>
                            <div className="guitar-info-box">
                                <p>The Precision Tool: Ultra-tight and articulate. Perfect for technical "djent" styles where every palm-muted note needs to cut like a knife.</p>
                                <ul>
                                    <li><p>Specs: 50 Watts, EL34 Tubes, Resonance Control, MIDI switchable.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="gear-desc">
                    <h3>3. The Gateway: Audio Interfaces</h3>
                    <p>To capture the heat of a metal performance, you need high-quality converters and low-latency drivers. These interfaces ensure your DI signals stay crystal clear for post-processing.</p>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="carousel-container">
                    <button className="nav-btn prev" onClick={() => moveSlideInterfaces(-1)}>&#10094;</button>
                    <button className="nav-btn next" onClick={() => moveSlideInterfaces(1)}>&#10095;</button>
                    <div className="snap-wrapper" id="interfaceSlider" style={{ transform: `translateX(-${interfaceIdx * 100}%)`, transition: 'transform 0.4s ease' }}>
                        <div className="snap-card">
                            <img src={FocusriteScarlett2i2Img} alt="Focusrite Scarlett" />
                            <h3 className="guitar-name">Focusrite Scarlett 2i2</h3>
                            <div className="guitar-info-box">
                                <p>The Studio Standard: The most popular interface for home shredders. Features two high-headroom instrument inputs to handle active metal pickups without clipping.</p>
                                <ul>
                                    <li><p>Specs: 24-bit/192kHz, USB-C, Air Mode Preamp, Latency-free Monitoring.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img src={UniversalAudioApolloSoloImg} alt="UA Apollo Solo" />
                            <h3 className="guitar-name">Universal Audio Apollo Solo</h3>
                            <div className="guitar-info-box">
                                <p>The Pro Choice: Built-in DSP allows you to run legendary amp sims and compressors directly on the hardware, saving your computer's CPU for the mix.</p>
                                <ul>
                                    <li><p>Specs: Unison Preamp Tech, UAD-2 Processing, Thunderbolt 3, Pro-grade Converters.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="snap-card">
                            <img className="audient" src={AudientiD14MKIIImg} alt="Audient iD14" />
                            <h3 className="guitar-name">Audient iD14 MKII</h3>
                            <div className="guitar-info-box">
                                <p>The Pure Tone: Renowned for its JFET instrument input, which mimics the input stage of a classic tube amplifier for a more natural feel while playing plugins.</p>
                                <ul>
                                    <li><p>Specs: Console Grade Preamp, Dual Headphone Outputs, ADAT Expandability.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="gear-desc">
                    <h3>4. The Essentials: Connectivity & Comfort</h3>
                    <p>The small things that make a big difference. Don't let a cheap cable or a flimsy strap ruin your set.</p>
                </div>
            </FadeUp>
            <FadeUp>
                <div className="accessories-grid">
                    <div className="mini-card">
                        <div className="mini-img-box"><img src={PremiumCablesImg} alt="Cables" /></div>
                        <h4>Premium Cables</h4>
                        <p>Oxygen-free copper cores to ensure your high-end "bite" stays intact.</p>
                        <p class="mini-specs">10ft / Gold Plated</p>
                    </div>
                    <div className="mini-card">
                        <div className="mini-img-box"><img src={HeavyGaugePicksImg} alt="Picks" /></div>
                        <h4>Heavy Gauge Picks</h4>
                        <p>1.5mm+ thickness for the maximum "attack" needed for metal riffing.</p>
                        <p class="mini-specs">Dunlop Jazz III / 2.0mm</p>
                    </div>
                    <div className="mini-card">
                        <div className="mini-img-box"><img src={PaddedStrapsImg} alt="Strap" /></div>
                        <h4>Padded Straps</h4>
                        <p>Wide, padded leather to distribute the weight of heavy mahogany guitars.</p>
                        <p class="mini-specs">Leather / 3" Width</p>
                    </div>
                </div>
            </FadeUp>
        </main>
    );
}

export default Gear;