import React from "react";
import {
  MDBBtn
} from "mdb-react-ui-kit";

const Bio = (props) => {
  return (
    <div className="d-flex pt-1">
      <MDBBtn outline className="me-1 flex-grow-1">
        Chat
      </MDBBtn>
      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
    </div>
  );}
export default Bio;