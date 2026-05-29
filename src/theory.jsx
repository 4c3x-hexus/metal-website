import FadeUp from './FadeUp';

import iommiImg from './image/FIRSTFRET_TonyIommi_01.webp';
import eightStringImg from './image/20211203091652-A1.8AAN20-20FRONT20HORIZONTAL.png';

function Theory() {
    return (
        <main className="theory-info">
            <FadeUp>
            <h1>the evolution of heavy metal</h1>
            <p className="intro">
                Heavy metal is a genre of rock music that developed in the late 1960s and early 1970s,
                largely in the United Kingdom and the United States. Characterized by thick, massive sound,
                highly amplified distortion, and extended guitar solos, it has become one of the most
                enduring subcultures in modern music.
            </p>
            <h3>Genre Profile</h3>
            </FadeUp>
            <FadeUp>
            <div className="info-box">
                <ul>
                    <li><strong>First Wave: </strong>1968-1974</li>
                    <li><strong>Key Instruments: </strong>Electric Guitar, Bass, Drums</li>
                    <li><strong>Core Scales: </strong>Phrygian, Aeolian, Blues Scale</li>
                    <li><strong>Cultural Origins: </strong>Birmingham, England</li>
                </ul>
            </div>
            </FadeUp>
            <FadeUp>
            <h2>1. the foundations (1960s - 1970s)</h2>
            <div className="player-1">
                <img src={iommiImg} alt="Tony Iommi" className='iomimg'/>
                <p className="caption">Tony Iommi: The Architecht of the Riff.</p>
            </div>
            <p>
                The roots of heavy metal lie in the hard rock bands of the late 1960s who took blues and
                psychedelic rock to new extremes. Bands like <strong>Black Sabbath</strong>, <strong>Led Zeppelin</strong>,
                and <strong>Deep Purple</strong> are often cited as the "Unholy Trinity" of the genre.
            </p>
            <p>
                Black Sabbath, in particular, introduced the dark, minor-key themes and heavy "power chords"
                that would define the genre. Legend has it that guitarist Tony Iommi, after losing the tips
                of two fingers in a factory accident, detuned his guitar to make the strings easier to play,
                accidentally creating the signature "heavy" sound.
            </p>
            <h2>2. NWOBHM and the rise of thrash (1980s)</h2>
            <p>
                By the late 1970s, the genre evolved with the <strong>New Wave of British Heavy Metal (NWOBHM)</strong>.
                Bands like Iron Maiden and Judas Priest added faster tempos and "twin-guitar" harmonies.
            </p>
            <p>
                In the early 80s, a more aggressive style emerged in the US known as <strong>Thrash Metal</strong>.
                Led by the "Big Four" (Metallica, Slayer, Megadeth, and Anthrax), this movement focused on
                staccato palm-muting, and complex technicality.
            </p>
            </FadeUp>
            <FadeUp>
            <h2>3. The modern era and technical evolution (1990s - present)</h2>
            <p>
                Following the peak of Thrash, the 1990s saw metal splinter into dozens of diverse subgenres.
                <strong>Death Metal</strong> and <strong>Black Metal</strong> pushed the boundaries of speed
                and atmosphere, while <strong>Nu-Metal</strong> brought heavy riffs into the mainstream
                by incorporating elements of hip-hop and alternative rock.
            </p>
            <p>
                In the 21st century, the genre has become more technical than ever. The rise of
                <strong> Prog-Metal</strong> and <strong>Djent</strong> has introduced "extended-range"
                guitars (7, 8, or even 9 strings) and complex, mathematical time signatures.
                Modern production allows for a surgical precision that was impossible in the
                early days of the Birmingham scene.
            </p>
            <div className="guitar">
                <img src={eightStringImg} alt="8 String Guitar" style={{ width: '100%' }} />
                <p className="caption">The evolution to extended-range instruments.</p>
            </div>
            <p>
                Today, heavy metal is a global phenomenon. Digital audio interfaces and software
                plugins have democratized the recording process, allowing "bedroom shredders"
                to produce studio-quality albums from home, ensuring that the genre continues
                to innovate into the future.
            </p>
            </FadeUp>
        </main>
    );
}

export default Theory;