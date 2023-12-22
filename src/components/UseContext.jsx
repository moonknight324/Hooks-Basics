import { useContext } from "react";
import { ToggleTheme } from "../App";
import React from "react";
import UseState from "./UseState";

function UseContext(){
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus arcu, eleifend vitae orci ac, molestie cursus ex. Fusce pulvinar semper metus id ullamcorper. Proin pretium sollicitudin aliquet. Nam faucibus, tortor at molestie sodales, est leo cursus magna, eget rutrum orci lectus sit amet sapien. Phasellus quis nulla mi.`
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"8rem",
    margin:"4rem",
    height:"15vh",
  }

  return(
    <div style={themeStyle}>
      <UseState paragraph={paragraph}/>
    </div>
  )
}

export default UseContext;