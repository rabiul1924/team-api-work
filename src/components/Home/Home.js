import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team.js';
import img1 from '../images/background.jpg';
import './Home.css'
import { Card } from 'react-bootstrap';






const Home = () => {
    const [teams, setTeams] = useState ([]);
    useEffect (() => {
      fetch ('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data => setTeams(data.teams));
    }, [])
  
    const  textStyle = {
     fontSize:'45px',
     textAlign:'center',
     margin:'250px auto'
    }
    const backgroundStyle = {
      backgroundColor:'blue'
    }
  
    return (
        <div style={backgroundStyle}className="container mt-5 ms-5">
          <Card className="bg-dark text-white">
              <Card.Img src={img1} alt="Card image"  fluid/>
                 <Card.ImgOverlay>
                  <Card.Text style={textStyle}>
                     Team Tracker
              </Card.Text>
            </Card.ImgOverlay>
           </Card>
          
          <div className="row">
             {teams.map (team => <Team team={team}></Team>)}
          </div>
          </div>
      
        
        
    );
};

export default Home;