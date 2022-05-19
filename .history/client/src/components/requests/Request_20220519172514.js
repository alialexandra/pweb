import React, { useState } from "react";

import { useNavigate } from "react-router";


const Request = (props) => {

    const [error, setError] = useState("");
    const [owner, setOwner] = useState("");


return(
<>
<div class="card text-white bg-primary mb-3" >
  <div class="card-header">Header</div>
  <div class="card-body">
  <h2 class="card-title">{props.userRequest.requestType}</h2>
    <h3 class="card-title">{props.userRequest.category}</h3>
    <p class="card-text">{props.userRequest.city}</p>
    <p class="card-text">{props.userRequest.phoneNumber}</p>
    <p class="card-text">{props.userRequest.description}</p>

  </div>
</div>

</>
    );
};

export default Request;