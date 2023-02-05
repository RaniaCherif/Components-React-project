import React from "react";
import Adress from "./Adress";
import Prof from "./Prof";
import { MDBCardText, MDBBtn } from "mdb-react-ui-kit";

const FullName = (props) => {
  return (
    <div className="flex-grow-1 ms-3">
      <MDBCardText className="text-center">{props.Name}</MDBCardText>
      <Prof prof={props.Prof}/>
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
      <br></br>
      <Adress Adress={props.Adress} />
    </div>
  );
};
export default FullName;
