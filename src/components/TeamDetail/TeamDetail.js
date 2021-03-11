import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img1 from '../images/background.jpg';
import found from '../images/found 1.png';
import flag from '../images/flag (1) 1.png';
import football from '../images/football (1) 1.png';
import genderMark from '../images/male-gender-sign 1.png';

import male from '../images/male.png';
import female from '../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';





const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    useEffect (() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]));
    },[teamId])

    const imgStyle = {
        margin: '10px 350px 10px 350px'
    }
    const {strGender} =team;
    let gender = strGender && strGender.toLowerCase();
    console.log (gender);
    const socialIcon = {
        fontSize : "40px",
        margin: "10px 80px 10px 150px"
    } 
  
    
    return (
         
        <div style={{backgroundColor:'navy', color:'white'}}>
        <Card className="bg-dark text-white">
              <Card.Img src={img1} alt="Card image" />
                 <Card.ImgOverlay>
                  <Card.Text >
                  <img style={imgStyle} src={team.strTeamBadge} alt="" className="img-fluid"/>
              </Card.Text>
            </Card.ImgOverlay>
           </Card>

             <div style={{backgroundColor:'darkblue', color:'white', border:"2px solid red"}} className="container">
             <div className="row">
             <div className="col-md-7">
             <h2>{team.strTeam}</h2>
                     <h5> <img style={{width:"28px"}} src={found} alt="" srcset="" className="img-fluid"/> Founded: {team.intFormedYear}</h5>
                     <h5><img style={{width:"28px"}}  src={flag} alt="" srcset="" className="img-fluid"/>Country: {team.strCountry}</h5>
                    <h5><img style={{width:"28px"}}  src={football} alt="" srcset="" className="img-fluid"/>Sport Type: {team.strSport}</h5>
                     <h5><img style={{width:"28px"}}  src={genderMark} alt="" srcset="" className="img-fluid"/>Gender: {team.strGender}</h5>
                </div>
                <div className="col-md-3" style={{height:'250px'}}>
            { gender && gender === "male" ?
               ( <img style={{height:'250px'}} src={male} alt="" srcset=""/> ) :
               ( <img  style={{height:'250px'}} src={female} alt="" srcset=""/> )
            }
            </div>
             </div>

             </div>
             <div className="container ny-5">
                <p>{team.strStadiumDescription}</p>
                <p>{team.strDescriptionEN}</p>
            </div>
             <div className="container  ny-5">
              <a style={socialIcon} href="https://twitter.com/arsenal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon= {faTwitter}></FontAwesomeIcon> </a>
              <a style={socialIcon}  href="https://www.facebook.com/Arsenal/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon= {faFacebook}></FontAwesomeIcon> </a>
              <a style={socialIcon}  href="https://www.instagram.com/arsenal/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon= {faInstagram}></FontAwesomeIcon> </a>
              
              
                </div>
           </div>

          
           
      


       
    );
};

export default TeamDetail;