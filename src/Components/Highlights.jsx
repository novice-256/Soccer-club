import React, { useContext } from 'react';
import "../Styles/Highlights.css"
import "../App.css"
import { MyThemeContext } from '../Context/ThemeContext';
// import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

export default function Highlights() {
    const [{ theme, isDark }] = useContext(MyThemeContext);

    const slideLeft = () => {
      var slider = document.getElementById('highlightbox')
      slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
      var slider = document.getElementById('highlightbox')
      slider.scrollLeft = slider.scrollLeft + 500
    }
    
  return (
    <div className="highlight relative flex " style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h2>Highlights</h2>
      <i class="fa-solid fa-arrow-right" onClick={slideLeft} size={40}></i>
    <div id="highlightbox" className="highlights " >
        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <iframe className="highlights_videos" width="560" height="315" src="https://www.youtube.com/embed/beYsBj1eGc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="videos_text">Highlights: Liverpool 3-1 Darmstadt | Salah, Jota & BRILLIANT Luis Diaz flick</h4>
            </div>

        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <iframe className="highlights_videos" width="560" height="315" src="https://www.youtube.com/embed/8iyPifuXDYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="videos_text">Barcelona vs Tottenham 4-2 - Highlights & All Goals | Joan Gamper Cup 2023</h4>
            </div>

        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <iframe className="highlights_videos" width="560" height="315" src="https://www.youtube.com/embed/l1AmP1iindw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="videos_text">Back With A BANG At Old Trafford 💥 | Man Utd 3-1 RC Lens | 2023/24 Pre-Season</h4>
            </div>
        
        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <iframe className="highlights_videos" width="560" height="315" src="https://www.youtube.com/embed/JQqvtWYRCHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="videos_text">Patrice Evra joined the UCL crew and let’s just say it was an interesting time 😂</h4>
            </div>
    </div>
      <i class="fa-solid fa-arrow-right" onClick={slideRight} size={40}></i>
    </div>
  )
}
