import "./header.css";
import "./HeaderStyling.css";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { getAuth} from "firebase/auth";
import {Navbar, Container, Button} from 'react-bootstrap'
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from '../../assets/img/dove.svg';
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Header = (props) => {


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState({value: {}, isFetching: false});
  const [currentUser, setCurrentUser] = useState({value: {}, isFetching: false});
  const [user, loading, error] = useAuthState(auth);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSeeRequests() {

  }
  /*

useEffect (() => { 
  if(loading) return;
  if(!user) return Navigate("/");
    
const setAsyncUserEmail = async () => {
      try {
        //setUserEmail(getAuth().currentUser.email);
        //setUserEmail(getAuth().currentUser.email);
        setUserEmail({value: userEmail.value, isFetching: true})
        //const userEmailValue = getAuth().currentUser.email;
        const userEmailValue = user.email;
        console.log("user email header" + userEmailValue);
        if(!userEmail) {
          setUserEmail({value: {}, isFetching: false})
        }else 
          setUserEmail({value: userEmailValue, isFetching: false})

      } catch(error) {
        setUserEmail({value: {}, isFetching: false})
        throw new Error(error);
      }
    
    }

    setAsyncUserEmail();
}, [user, loading]);
 

*/




  /*
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
  */


  return(
<>
 {/*{ userEmail.value && (*/}

  <Navbar bg="dark"  style={customStyles}>
    <Container>
      <Navbar.Brand href="/home">
        <img
          alt=""
          src = { logo }
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        WarWeb
        {currentUser.value._id}
      </Navbar.Brand>
      <Link to="/all-requests">
     <Button type="button" className="btn btn-primary">
          See all requests
     </Button>
     </Link>

     <Link to="/all-offers">
     <button type="button" className="btn btn-primary ">
          See all offers
     </button>
     </Link>

    </Container>
  </Navbar>
{/*)}*/}

</>
    );
};

export default Header;