import React, {useState, useEffect} from 'react'
import {CompetitionNav, CompetitionSlide, MatchesDetails, Match, MatchLite, MatchCollection, MatchLiteCollection} from '../ui-components';
import {Flex, View} from '@aws-amplify/ui-react';


const Matches = () => {
  const [selectMatch, setSelectMatch] = useState([]);


  

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
      src: 'https://wallpapercave.com/wp/wp12022675.jpg'
    }
  }

  
  return (

    <div className='competitions'>
      <CompetitionSlide  overrides={competitionsSlide}/>
      <CompetitionNav width={'100vw'} backgroundColor={'rgba(0, 0, 0, 0.9)'} overrides={competitionsNavBar}/>
      <div className="slide-competitions" >
      <h1>Matches</h1>
      <Flex className='matches-lite'>
      
      <MatchLiteCollection overrideItems={({item, index}) => ({
         backgroundColor: index % 2 === 0 ? 'white' : 'lightgray',
         style: {
           cursor: "pointer"
         },
        onClick : ()=>setSelectMatch(item),
        home: 
          <View>
            {
              <h4>{item.MatchToTeams[0].name}</h4>
            }
            </View>  ,
         away:
         <View>
          {
            <h4>{item.MatchToTeams[1].name}</h4>
          }
         </View>
         
      })}/>
      <Flex position={'relative'} overflow={'hidden'} grow={1}>
       <View className={`detailsMatch ${selectMatch ? '' : 'hidden'}`}>
          <MatchesDetails matchDetails={selectMatch}
          area={
            <View className="view-match">

             <Match match={selectMatch} 
             home={
              <View>
                <img src={Array.isArray(selectMatch.MatchToTeams) && selectMatch.MatchToTeams.length > 0 && selectMatch.MatchToTeams[0].logoUrl} />
                
              </View>
             }
             away={
              <View>
                <img src={Array.isArray(selectMatch.MatchToTeams) && selectMatch.MatchToTeams.length > 0 && selectMatch.MatchToTeams[1].logoUrl} />
                
              </View>
             }
             />
            <View>
              <button>Buy Now</button>
            </View>
             
            
            {/* {
             selectMatch.MatchToTeams && selectMatch.MatchToTeams.map(match => 
               <div >
                
                <MatchLite matchlite={match}
                home={
                  <View>
                    {
                      match.name
                    }
                  </View>
                }
                />
              
               
                </div>
             )} */}
            </View>
             }
            />
        </View>
      </Flex>
      </Flex>
      </div>
      
    </div>
  )
}

const styles = {
  publish: { width: 100, height: '100px', margin: '0 auto', padding: 20},
  comment: { paddingLeft: 30, textAlign: 'left'},
}

export default Matches





