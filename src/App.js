import React from "react";
import Profile from "./Profile";
import Data from "./Data";
import "./App.css";

function App() {
  function handelName(name) {
    console.log("this is profile name is" + name);
  }

  return (
    <React.Fragment>
      <Profile
        Prof={Data[0].prof}
        Img={Data[0].img}
        Name={Data[0].name}
        Adress={Data[0].adress}
        OnNameChange={handelName(Data[0].name)}
      />
      <Profile
        Prof={Data[1].prof}
        Img={Data[1].img}
        Name={Data[1].name}
        Adress={Data[1].adress}
      />
      <Profile
        Prof={Data[2].prof}
        Img={Data[2].img}
        Name={Data[2].name}
        Adress={Data[2].adress}
      />
    </React.Fragment>
  );
}

export default App;
