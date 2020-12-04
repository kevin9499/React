import React,{useState, useEffect} from 'react';
import { Button, InputGroup,Table, } from 'react-bootstrap';


export function TablePerso(props){
    const [person, setPerson] = useState(0);
    useEffect(() =>{
      setPerson(props.person)
    },[person]);

    return (
    <center>
    <div class="col-6">
      <Table striped bordered hover variant="light" style={{marginTop: 60 + 'px'}}>
        <tr>
          <th>nom</th>               
          <td>{person.name}</td>
        </tr>
        <tr>
          <th>taille</th>                
          <td>{person.height}</td>
        </tr>
        <tr>
          <th>poid</th>
          <td>{person.mass}</td>
        </tr>
        <tr>
          <th>cheveux</th>  
          <td>{person.hair_color}</td>
        </tr>
        <tr>
          <th>yeux</th>
          <td>{person.eye_color}</td>
        </tr>
        <tr>
          <th>Anniversaire</th> 
          <td>{person.birth_year}</td>
        </tr>
        <tr>
          <th>genre</th>
          <td>{person.gender}</td>
        </tr>
      </Table>
    </div>
  </center>);
};