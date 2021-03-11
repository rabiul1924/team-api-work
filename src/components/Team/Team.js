
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';


const Team = (props) => {
    const {strTeamBadge, strTeam, idTeam, strSport } = props.team;

    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    
    return (
       
        
      <div className="col-md-3 my-3" >
          <Card>
               <Card.Img variant="top" src={strTeamBadge} fluid/>
                  <Card.Body>
                   <Card.Title>{strTeam}</Card.Title>
                     <Card.Text>
                     Sports type : {strSport}
                          </Card.Text>
                 <Button onClick={() => handleClick(idTeam)}  variant="primary">Explore<FontAwesomeIcon icon={faArrowRight} /></Button>
                 </Card.Body>
                 </Card>
      </div>
          
       
       
      
        
    
    );
};

export default Team;