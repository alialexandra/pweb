import React, { useRef, useState } from "react";
import {
  Form,
  Card,
  Button,
  Alert,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { database } from "../../firebase";
import axios from "axios";



const EditRequest = ({ requestData }) => {
  const [description, setDescription] = useState(requestData.description);
  const cityRef = useRef();
  const countryRef = useRef();
  const phoneNumberRef = useRef();
  const [selectedDay, setSelectedDay] = useState("Select");
  const categories = ['Medicine', 'Money', 'Food', 'Clothing', 'Hygiene Products'];
 // enum: ['Medicine', 'Money', 'Food', 'Clothing', 'Hygiene Products'],
 const [selectedCategory, setSelectedCategory] = useState("Select");
 const [selectedRequestType, setSelectedRequestType] = useState("Select");
 const [errorMessage, setErrorMessage] = useState("");

  const [selectedRequests, setSelectedrequests] = useState("Select");
  const requests = [
    "Offer",
    "Request"];

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelectCategory = (e) => {
    setSelectedCategory(e);
  };


  const handleSelectRequestType = (e) => {
    setSelectedRequestType(e);
  };

  async function postRequest() {
    try {
      console.log('ajunge in post');
      const request = {
        _id: requestData._id,
        description: descriptionRef.current.value,  
        requestType: selectedRequestType,
        city: cityRef.current.value, // string
        country: countryRef.current.value, // string
        category: selectedCategory,
        phoneNumber: phoneNumberRef.current.value, // string
      }

      if(request !== null) {
        console.log("requestul trimis" + request);
          
        axios({
        method: 'put',
        url: 'http://127.0.0.1:5000/api/request/update',
        data: request
  })}}
    catch (error) {
      setError(error);
      throw new Error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      postRequest();
    }
    catch(error) {
        throw new Error(error);
    }


    setLoading(false);
  }

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Edit Your Request/Offer</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          
         
          <Form.Group id="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" ref={cityRef}/>
          </Form.Group>
          
          <Form.Group id="country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="country" ref={countryRef}/>
          </Form.Group>


          <Form.Group id="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phoneNumber" ref={phoneNumberRef}/>
          </Form.Group>
        

          <Form.Group id="requestType">
            <Form.Label>Request Type</Form.Label>
            <DropdownButton
              alignRight
              title={selectedRequestType}
              id="dropdown-menu-align-right"
              onSelect={handleSelectRequestType}
            >
              {requests.map((request) => (
                <Dropdown.Item eventKey={request}>{request}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>



          <Form.Group id="category">
            <Form.Label>Categories</Form.Label>
            <DropdownButton
              alignRight
              title={selectedCategory}
              id="dropdown-menu-align-right"
              onSelect={handleSelectCategory}
            >
              {categories.map((category) => (
                <Dropdown.Item eventKey={category}>{category}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
          <Form.Group id="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" ref={descriptionRef} required />
          </Form.Group>
          <br />
          <Button className="w-100" type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditRequest;