import React,{useState, useEffect} from 'react';
import './App.css';
import { Button, InputGroup,Table, } from 'react-bootstrap';
import {TablePerso} from './component/TablePerso';


function App() {
  const [person, setPerson] = useState(0);
  const [url,setUrl] = useState(0);
  const [search,setSearch] = useState(0);

  function handleChange(event){
      setSearch(event.target.value);
  }

  function handleClick(){
    var urlString = 'https://swapi.dev/api/people/?search=';
    var urlSearch = search;
    var urlReady = urlString.concat(urlSearch);
    setUrl(urlReady)
  }
    
  function fetchPersonnage(){
    fetch(url)
    .then(response => response.json())
    .then(res => res.count !== 0 ? setPerson(res.results[0]) : setPerson(""));
  }

  useEffect(() =>{
    fetchPersonnage()
  },[url]);

  return (
    <div className="App">
        <input type="text" placeholder="Search" value={search == 0 ? "" : search} onChange={handleChange} style={{marginTop: 60 + 'px', width: 200+'px'}}/>
        <Button variant="primary" onClick={handleClick}style={{marginLeft: 40 + 'px'}}>search</Button>
        {  person == "" && url == "" ? <h1>Faite une recherche</h1>  : "" }
        {  person == "" && url != "" ? <h1>non</h1>  : "" }
        {  person != "" && url != "" ?// <TablePerso person = {person}/>//
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
    </center> : ""}
    </div>
  );
}
  /*
    <tr><td>{person.homeworld}</td></tr>
    <tr><td>{person.films}</td></tr>
    <tr><td>{person.species}</td></tr>
    <tr><td>{person.vehicles}</td></tr>
    <tr><td>{person.starships}</td></tr>
    <tr><td>{person.created}</td></tr>
    <tr><td>{person.edited}</td></tr>
    <tr><td>{person.url}</td></tr>
  */
export default App;
