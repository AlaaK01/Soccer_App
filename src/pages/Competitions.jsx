import React, {useState} from 'react'
import {CompetitionNav, CompetitionSlide, CompetitionsCollection, MatchLiteCom, MatchLiteCollection, CompetitionDetails} from '../ui-components';
import {Flex, View} from '@aws-amplify/ui-react';

const Competitions = () => {
  const [selectCompetition, setSelectCompetition] = useState('');

  

  const competitionsNavBar = {
    "golden-winning-trophy-vector-collection-with-a-football-for-soccer-match-celebration-golden-color-trophy-collection-for-winning-team-celebration-free-png 1" : {
       src: "../images/NavBar/competitions.png"
      },
      "image": {
        src: "../images/logo.png"
      }

  }
  const competitionsSlide = {
    'image' : {
      src: 'https://wallpapercave.com/wp/wp12023586.jpg'
    }
  }

  
  return (

    <div className='competitions'>
      <CompetitionSlide  overrides={competitionsSlide}/>
      <CompetitionNav width={'100vw'} backgroundColor={'rgba(0, 0, 0, 0.9)'} overrides={competitionsNavBar}/>
      <div className="slide-competitions" >
        <View className="title">
        <p>Competitions</p>
        </View>
      
      <Flex >
      <CompetitionsCollection overrideItems={({item, index}) => ({
        style: {
          cursor: "pointer"
        },
        onClick : ()=>setSelectCompetition(item)
      })}/>
       <Flex position={'relative'} overflow={'hidden'} grow={1}>
       <View className={`detailsCompetition ${selectCompetition ? '' : 'hidden'}`}>
       <CompetitionDetails competition={selectCompetition} 
       area={
        <View className="cometition-matches">
         
          
         {selectCompetition.ComToMatches && selectCompetition.ComToMatches.map((match) => 
            <View className="competition-match">
            
            <View className="one-match-city">
              <p>City: {match.city}</p>
            </View>
              <MatchLiteCom matchlite={match} 
                home=
                {
                  <View>
                  <h4>{match.homeTeam}</h4>
                  </View>
                }
                away=
                {
                  <View>
                  <h4>{match.awayTeam}</h4>
                  </View>
                }/>
                 <View className="one-match-price"> 
              <p>Price: {match.price}</p>
            </View >
           
          </View>
          )}
        </View>
       }/>
       </View>
       </Flex>
      </Flex>
      </div>
    </div>
  )
}

export default Competitions





