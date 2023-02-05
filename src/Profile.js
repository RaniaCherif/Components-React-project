import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import FullName from "./FullName";
import Alert from "./Alert";

const Profile = (props) => {

  
  return (
    <>
      <Alert/>

      <div className="vh-70 " style={{ backgroundColor: "#cdc9d7" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
              <MDBCard className="my-5" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src={props.Img}
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <FullName
                      Name={props.Name}
                      Prof={props.Prof}
                      Adress={props.Adress}
                    />
                  </div>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Profile;
