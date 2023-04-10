import React, {useState, useEffect} from 'react'
import {CompetitionNav, CompetitionSlide, CompetitionsCollection, Competition, TeamliteCollection, TeamsDetails, Teamlite} from '../ui-components';
import {Flex, View} from '@aws-amplify/ui-react';

const Teams = () => {
  const [selectTeam, setSelectTeam] = useState();

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
      src: 'https://wallpapercave.com/wp/wp10717214.jpg'
    }
  }

  
  
  return (

    <div className='competitions'>
      <CompetitionSlide  overrides={competitionsSlide}/>
      <CompetitionNav width={'100vw'} backgroundColor={'rgba(0, 0, 0, 0.9)'} overrides={competitionsNavBar}/>
      <div className="slide-competitions" >
      <h1>Matches</h1>
      <Flex className='matches-lite'>
      
        <TeamliteCollection overrideItems={({item, index}) => ({
           style: {
             cursor: "pointer"
           },
           onClick : ()=>setSelectTeam(item)
         })}/>
         </Flex>
      <Flex position={'relative'} overflow={'hidden'} grow={1}>
       <View className={`detailsTeam ${selectTeam ? '' : 'hidden'}`}>
          <TeamsDetails teamdetails={selectTeam}
          area={
            <View className="view-match">

            
            
           
             
            
           
            </View> } />
        </View>
      </Flex>
      
      </div>
      
    </div>
  )
}


export default Teams





