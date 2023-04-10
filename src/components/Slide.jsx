import React, {useState, useEffect} from 'react';


 const background = new URL("../images/banner/background01.jpg", import.meta.url)
 const player = new URL("../images/banner/player.png", import.meta.url)
 const ball = new URL("../images/banner/ball.png", import.meta.url)
 const front = new URL("../images/banner/front_particles.png", import.meta.url)
 const back = new URL("../images/banner/back_particles.png", import.meta.url)
 

 const Slide = () => {
    const [scrollPosition, setScrollPosition] = useState('');
   

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        setScrollPosition(currentScrollPosition);
      };
  
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll);
        }
      };

    }, []);

 
  window.onscroll = (e) => {
    e.preventDefault();

var backgroundL = document.getElementById('background');
if (backgroundL) {
  backgroundL.style = scrollPosition + 'px';
}

var playerL = document.getElementById('player');
if (playerL) {
  playerL.style.left = scrollPosition * 0.25 + 'px';
}

var ballL = document.getElementById('ball');
if (ballL !== null) {
  ballL.style.top = scrollPosition * 0.8 + 'px';
  ballL.style.right = scrollPosition * 1.4 + 'px';
}

var frontL = document.getElementById('front');
if (frontL) {
  frontL.style.scale = 1  ;
  
}

var backL = document.getElementById('back');
if (backL !== null) {
  backL.style.scale = 1  ;
}
   
    if(scrollPosition >= 470){
      ballL.style.top= '377px';
      ballL.style.right= '655px';
      
      if(scrollPosition >= 475){
        backL.style.scale = scrollPosition/50  ;
        frontL.style.scale = scrollPosition/50  ;
        if(scrollPosition <= 470){
          backL.style.scale = scrollPosition/50  ;
        frontL.style.scale = scrollPosition/50   ;
        }
       }   
     }  
   };

  return (
    
     <div className="sidebar">
       
      <div className="images">
          <img src={background} id="background" alt="Slide background" />
          <img src={player} alt="innerimage" id="player"  />
          <img src={ball} alt="innerimage" id="ball" />
          <img src={front} alt="particles" id="front"  />
          <img src={back} alt="particles" id="back" />

            <h2 className="ls-l bannertext layercontent03" data-ls="offsetxin:left; rotatexin:90 ; durationin: 3500;">
                action</h2>

           

    </div>

</div>         
        
  )
}

export default Slide

