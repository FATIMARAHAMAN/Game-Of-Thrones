import axios from "axios";
import React, { useState, useEffect } from "react";
// import {useSelector, useDispatch} from "react-redux";

import * as ReactBootStrap from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";
import { vendors } from "../actions/vendors";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory,
  useLocation,
  useParams,
  withRouter
} from 'react-router-dom';
const Home = (props) => {
  const [info, setInfo] = useState([]);
  const [houses, setHouses] = useState([]);
  const [books, setBooks] = useState([]);
  const [character, setCharacter] = useState([]);
  const [gameData, setgamedata] = useState([]);
  const [Name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [Born, setBorn] = useState('');
  const [Died, setDied] = useState('');
  const [Culture, setCulture] = useState('');
  const [Aliases, setAliases] = useState('');
  const [Father, setFather] = useState('');
  const [Titles, setTitles] = useState('');
  const [Mother, setMother] = useState('');
  const [Spouse, setSpouse] = useState('');

  // const [ab,setab]=useState(['name':"amit",]);
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get("https://reqres.in/api/users?page=2")
      .then(res => {
        console.log("data");
        //    console.log(res.data.data);
        setInfo(res.data.data)
        //props.selectedMode("newdata");
      });



    axios.get("https://anapioficeandfire.com/api/characters/583")
      .then(res => {
        console.log("character");
        console.log(res);
        setgamedata(JSON.stringify(res.data))
        setName(JSON.stringify(res.data.name))
        setGender(JSON.stringify(res.data.gender))
        setDied(JSON.stringify(res.data.died))
        setBorn(JSON.stringify(res.data.born));
        setCulture(JSON.stringify(res.data.culture))
        setAliases(JSON.stringify(res.data.Aliases))
        setTitles(JSON.stringify(res.data.titles[0]));
        setFather(JSON.stringify(res.data.father))
        setMother(JSON.stringify(res.data.Mother))
        setSpouse(JSON.stringify(res.data.Spouse))
      });

    axios.get("https://www.anapioficeandfire.com/api/houses")
      .then(res => {
        console.log("houses");
        console.log(res.data);
        setHouses(res.data);
      });



    axios.get("https://www.anapioficeandfire.com/api/books")
      .then(res => {
        console.log("Books");
        console.log(res.data);
        setBooks(res.data);
      });


    axios.get("https://www.anapioficeandfire.com/api/characters")
      .then(res => {
        console.log("all characters");
        console.log(res.data);
        setCharacter(res.data);
      });
    setCharacter([]);



  }, [setInfo])


  const edit = (m) => {
// alert(m.name);
    console.log(m);

     dispatch(vendors({

      first_name:'',
      last_name: '',
      email:'',
      id: '',
      data: m

       }));

  }


  return (
    <React.Fragment>
      <div>
        <h1>Home</h1>

        {/* 
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>CULTURE</th>
              <th>BORN</th>
              <th>TITLES</th>
              <th>FATHER</th>
              <th>MOTHER</th>
              <th>SPOUSE</th>
              <th>BAGS</th>
            </tr>
          </thead>
          <tbody>
     

            <tr key="1" >
              <td>1</td>
              <td>{Name}</td>
              <td>{Culture}</td>
              <td>{Born}</td>
              <td>{Titles}</td>
              <td>{Father}</td>
              <td>{Name}</td>
              <td>{Name}</td>
              <td>{Name}</td>
              <Link to="about"><td onClick={() => [edit(Name)]} >EDIT</td></Link>
            </tr>


          
          </tbody>
        </ReactBootStrap.Table>
 */}

{/* 

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>CULTURE</th>
              <th>BORN</th>
              <th>TITLES</th>
              <th>FATHER</th>
              <th>MOTHER</th>
              <th>SPOUSE</th>
              <th>Aliases</th>
            </tr>
          </thead>
          <tbody>
           
            <tr key="1" >
              <td>1</td>
              <td>{Name}</td>
              <td>{Culture}</td>
              <td>{Born}</td>
              <td>{Titles}</td>
              <td>{Father}</td>
              <td>{Name}</td>
              <td>{Name}</td>
              <td>{Name}</td>
              <Link to="about"><td onClick={() => [edit(Name)]} >EDIT</td></Link>
            </tr>


           
          </tbody>
        </ReactBootStrap.Table>
 */}

      </div>
      <div>

        {/* {gameData} */}
        {/* <b>NAME:{Name}</b> */}
      </div>


      <div>
        HOUSES


        {/* {houses} */}



<div className="col-md-6">
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Region</th>
              <th>CoatOfArms</th>
              <th>Words</th>
              <th>Titles</th>
              <th>Seats</th>
              <th>CurrentLord</th>
              <th>Heir</th>
              <th>Overload</th>
              <th>Founded</th>
              <th>Founder</th>
              <th>Diedout</th>
              <th>AncestralWeapons</th>
              <th>CadetBranches</th>
              <th>SwornMembers</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {houses.map((a, index) => {

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.region}</td>
                  <td>{a.coatOfArms}</td>
                  <td>{a.words}</td>
                  <td>{a.titles}</td>
                  <td>{a.seats}</td>
                  <td>{a.currentLord}</td>
                  <td>{a.heir}</td>
                  <td>{a.overload}</td>
                  <td>{a.founded}</td>
                  <td>{a.founder}</td>
                  <td>{a.diedOut}</td>
                  <td>{a.ancestralWeapons}</td>
                  <td>{a.cadetBranches}</td>
                  <td>{a.swornMembers}</td>
                 <td><Link to="about"><td onClick={() => [edit(a)]} >VIEW</td></Link></td> 
                  </tr>
              );

            })}
          </tbody>
        </ReactBootStrap.Table>
        </div>
        BOOKS

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Isbn</th>
              <th>Authors</th>
              <th>NumberOfPages</th>
              <th>Publisher</th>
              <th>Country</th>
              <th>MediaType</th>
              <th>Released</th>
              <th>Characters</th>
              <th>PovCharacters</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {books.map((a, index) => {

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.isbn}</td>
                  <td>{a.authors}</td>
                  <td>{a.numberOfPages}</td>
                  <td>{a.publisher}</td>
                  <td>{a.country}</td>
                  <td>{a.mediaType}</td>
                  <td>{a.released}</td>
                  <td>{a.characters}</td>
                  <td>{a.povCharacters}</td>
                  <td><Link to="about"><td onClick={() => [edit(a)]} >VIEW</td></Link></td> 

                </tr>
              );

            })}
          </tbody>
        </ReactBootStrap.Table>

        CHARACTERS

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Culture</th>
              <th>Born</th>
              <th>Died</th>
              <th>Titles</th>
              <th>Aliases</th>
              <th>Father</th>
              <th>Mother</th>
              <th>Spouse</th>
              <th>Allegencies</th>
              <th>Books</th>
              <th>PovBooks</th>
              <th>TvSeries</th>
              <th>PlayedBy</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {character.map((a, index) => {

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.culture}</td>
                  <td>{a.born}</td>
                  <td>{a.died}</td>
                  <td>{a.titles}</td>
                  <td>{a.aliases}</td>
                  <td>{a.father}</td>
                  <td>{a.mother}</td>
                  <td>{a.spouse}</td>
                  <td>{a.allegiances}</td>
                  <td>{a.books}</td>
                  <td>{a.povBooks}</td>
                  <td>{a.tvSeries}</td>
                  <td>{a.playedBy}</td>
                  <td><Link to="about"><td onClick={() => [edit(a)]} >VIEW</td></Link></td> 

                </tr>
              );

            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>

    </React.Fragment>






  )



}

export default Home;