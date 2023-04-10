import React, {useState, useEffect} from 'react'
import { CompetitionNav } from '../ui-components'
import Slide from './Slide'


const Home = () => {
  
  const competitionsNavBar = {
    "golden-winning-trophy-vector-collection-with-a-football-for-soccer-match-celebration-golden-color-trophy-collection-for-winning-team-celebration-free-png 1" : {
       src: "../images/NavBar/competitions.png"
      },
      "image": {
        src: "../images/logo.png"
      }

  }

  

 
  
  return (
    <div>
      <Slide />
      <CompetitionNav width={'100vw'} backgroundColor={'rgba(0, 0, 0, 0.9)'} overrides={competitionsNavBar}/>
      <div className='content'>
        
      </div>
    </div>
  )
}

export default Home






// import React, {useState} from 'react'
// import Slide from './Slide'
// import { BrowserRouter as Router, NavLink } from "react-router-dom";


// const Home = () => {
//     const [index1, setIndex1] = useState(0);
//     const [index2, setIndex2] = useState(1);
   
//     const contents =[
//       {
//         id: 1,
//         title: "Home",
//         indicator: './',
//         image:"https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2046&q=80",
//     },
//     {
//       id: 2,
//       title: "Competition",
//       indicator: './competitions',
//       image:"https://img.freepik.com/premium-vector/social-media-post-soccer-competition_8830-224.jpg",
//   },
//     {
//         id: 3,
//         title: "Matches",
//         indicator: './matches',
//         image: "https://slopegame3d.com/data/image/soccer-legends-2021.jpg"

//     },
//     {
//         id: 4,
//         title: "Teams",
//         indicator: './teams',
//         image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2020_01/3171161/200104-us-mens-national-soccer-team-al-1020.jpg",
//     },
//     {
//         id: 5,
//         title: "Book Tickets",
//         indicator: './booktickets',
//         image: "https://thumbs.dreamstime.com/z/soccer-fan-holding-two-brazil-tickets-stadium-front-empty-seats-39490057.jpg",
//     },
//     {
//         id: 6,
//         title: "Contact Us",
//         indicator: './contactus',
//         image: "https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY="
//     },
   
//     ];

//     const handleGoLeft = () => {
//        if(contents.length <= 2) return;
//         setIndex1(index1 -1);
//         setIndex2(index2 -1);
//         if(index1 === 0) setIndex1(contents.length -1);
//         if(index2 === 0) setIndex2(contents.length -1);
        
        
//       };

//       const handleGoRight = () => {
//         if(contents.length <= 2) return;
//         setIndex1(index1 +1);
//         setIndex2(index2 +1);
//         if (index1 === contents.length -1) setIndex1(0);
//         if (index2 === contents.length -1) setIndex2(0);
//       };

//       const content1 = contents.filter((content) => content.id -1 === index1);
//       const content2 = contents.filter((content) => content.id -1 === index2);

//   return (

    
//     <div>
//         <Slide />
        
//         <div className='contents'>
//           <h1>Descuver Pets Worlds</h1>
//           <div className="box">
//              <button onClick={handleGoLeft} className="go-left"></button>
//             {contents.length ? (
//               <div className="content">
//                 {content1.map((content) => (
//                   <div className="content">
//                     <NavLink className="nav-link" exact to={content.indicator}>
//                       <img src={content.image} className="content-image" />
//                     </NavLink>
                    
//                     <h2>{content.title}</h2>
//                     <p>{index1 + 1}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p style={{ marginTop: "2rem", color: "red" }}>
//                 Your List products is empty
//               </p>
//             )}
//             {contents.length > 1 ? (
//               <div className="content">
//                 {content2.map((content) => (
//                   <div className="content">
                   
//                    <NavLink className="nav-link" exact to={content.indicator}>
//                       <img src={content.image} className="content-image" />
//                     </NavLink>
//                     <h2>{content.title}</h2>
//                     <p>{index2 + 1}</p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p style={{ marginTop: "2rem", color: "red" }}>
//                 Your List products is empty
//               </p>
//             )}
       
//              <button onClick={handleGoRight} className="go-right"></button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Home
