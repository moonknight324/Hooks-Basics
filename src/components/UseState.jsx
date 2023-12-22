import React, { useState } from "react";
import { useEffect } from "react";

function UseState(props) {
  const [like, setLike] = useState(0);
  const [state, setState] = useState(" ");

  const handleContent = () => {
    setState(state == " " ? props.paragraph : " ");
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  useEffect(() => {
    alert("Content Button Clicked");
  }, [state]);

  return (
    <div>
      <h4>{state}</h4>
      <button onClick={handleContent}>Content</button>
      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UseState;
