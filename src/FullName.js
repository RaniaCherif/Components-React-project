import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Profile = () => {
  return (
    <div className="flex-grow-1 ms-3">
      <MDBCardTitle>Rania Cherif</MDBCardTitle>
      <MDBCardText>FullStack Js Developer </MDBCardText>

      <div
        className="d-flex justify-content-start rounded-3 p-2 mb-2"
        style={{ backgroundColor: "#efefef" }}
      >
        <div>
          <p className="small text-muted mb-1">Articles</p>
          <p className="mb-0">41</p>
        </div>
        <div className="px-3">
          <p className="small text-muted mb-1">Followers</p>
          <p className="mb-0">976</p>
        </div>
        <div>
          <p className="small text-muted mb-1">Rating</p>
          <p className="mb-0">8.5</p>
        </div>
      </div>
      <div className="d-flex pt-1">
        <MDBBtn outline className="me-1 flex-grow-1">
          Chat
        </MDBBtn>
        <MDBBtn className="flex-grow-1">Follow</MDBBtn>
      </div>
    </div>
  );}
  export default FullName;