import React, {useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Accordion, AccordionContext, useAccordionToggle} from 'react-bootstrap';
import Music from '../components/Music'
import cara from '../IMG_78462.JPG.jpeg'
import mixer from '../DSCF80851.jpeg'
import spoti from '../Asset 18.png'
import face from '../Asset 8.png'
import insta from '../cI6PSn.tif.png'
import utube from '../CkCpLw.tif.png'
import {useWindowSize} from "../hooks/useWindowSize";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  
  const isCurrentEventKey = currentEventKey === eventKey;
  
  return (
    <p
      style={{ color: isCurrentEventKey ? '#E557CA' : '#f18740', cursor:'pointer' }}
      onClick={decoratedOnClick}
    >
      {children}
    </p>
  );
}


const App = () => {
    const {width} = useWindowSize()
    
    const [selected, setSelected] = useState(3)
  
  useEffect(() => import('@iframely/embed.js'),[])
  
  return (
   <div style={{marginBottom: 70}}>
     <Accordion defaultActiveKey="2">
       <ContextAwareToggle eventKey="0">l.paul</ContextAwareToggle>
       <Accordion.Collapse eventKey="0">
         <>
           <p style={{color: '#efb55b', textAlign: 'justify'}}>
             From his debut EP <a href="https://open.spotify.com/album/7DEVoxrS8fzx7WjQzJkEE5?si=5vkn_AZNR_69gtgMPG-lwg">Outis</a> (Daruma Records, 2017),
             released just right after hitting the 20-year-old
             mark, L. Paul has been grinding in the Catalan and
             European underground with his bittersween pop.
           </p>
           <br/>
           <div style={{margin: 10, display: 'flex', justifyContent: 'center'}}>
            <img src={cara} alt="" style={{width: width /100 * 80, maxWidth: 500, height: (width /100 * 80) /1.5, maxHeight: 350}}/>
           </div>
           <br/>
           <p style={{color: '#efb55b', textAlign: 'justify'}}>
             Thanks to is independent spirit, he has explored different
             sonic textures in a few European cities and
             has been supported from musicians with international
             experience.
           </p>
             <br/>
             <div style={{margin: 10, display: 'flex', justifyContent: 'center'}}>
               <img src={mixer} alt="" style={{width: width /100 * 80, maxWidth: 500, height: (width /100 * 80) * 1.5, maxHeight: 750}}/>
             </div>
             <br/>
           <p style={{color: '#efb55b', textAlign: 'justify'}}>
             His last work is <a href="https://open.spotify.com/album/46ClUp6lzFrjdJSOlUsuK0?si=57byciSTQCO9yXY5ms6nKw">Nen & The Flying Fishes </a>
             (collectic, 2021), a mixtape where the lyricist producer
             dabbles in hyperpop and the hardest hip-hop, though still
             maintaining the ambient aesthetic he is known for.
          </p>
         </>
       </Accordion.Collapse>
       <ContextAwareToggle eventKey="1">contact</ContextAwareToggle>
       <Accordion.Collapse eventKey="1">
         <p style={{wordBreak: 'break-word', color: '#efb55b'}}>
           booking: <a href="mailto:info@americansinsicily.com">info@americansinsicily.com</a>
           <br/>
           projects: <a href="mailto:lpaulmusic@gmail.com">lpaulmusic@gmail.com</a>
         </p>
       </Accordion.Collapse>
       <ContextAwareToggle eventKey="2">music</ContextAwareToggle>
       <Accordion.Collapse eventKey="2">
         <Music />
       </Accordion.Collapse>
       <ContextAwareToggle eventKey="3">products</ContextAwareToggle>
       <Accordion.Collapse eventKey="3">
         <>
           <iframe style={{marginTop: 10, border: 0, width: '100%',maxWidth: 500, height: 120}} src="https://bandcamp.com/EmbeddedPlayer/album=907773496/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://elpaul.bandcamp.com/album/nen-the-flying-fishes">Nen &amp; the Flying Fishes by L. Paul</a></iframe>
           <div className="iframely-embed">
             <div
                 className="iframely-responsive" style={{width: '100%',maxWidth: 500, height: 120, paddingBottom: 0}}>
               <a href="https://samplethis.eu/product/lp-glitch-hop/" data-iframely-url="//cdn.iframe.ly/GBjWjjq"></a>
             </div>
           </div>
         </>
       </Accordion.Collapse>
     </Accordion>
     <div
         style={{
           position: 'fixed',
           bottom: 0,
           right: 0,
             padding: 10,
             margin: 5,
             width: 200,
           display: 'flex',
             alignItems: 'center',
           justifyContent: 'space-between',
           backgroundColor: '#F2D455',
             borderRadius: 50,
             border: '3px #f18740 solid'
         }}>
         <a href="https://open.spotify.com/artist/5oCkqdXSBLQfj4d7IPJHmq?si=8Sl2cNcZRmK6Jfoa2MlNVg">
             <img src={spoti} style={{height: 30}} alt=""/>
         </a>
         <a href="https://www.instagram.com/lp4ul/">
             <img src={insta} style={{height: 30}} alt=""/>
         </a>
         <a href="https://www.youtube.com/channel/UCLWomIIYT8cQrgBnkc6aVyA">
             <img src={utube} style={{height: 25}} alt=""/>
         </a>
         <a href="https://www.facebook.com/coooonga">
             <img src={face} style={{height: 30}} alt=""/>
         </a>
     </div>
   </div>
  );
};

export default App
