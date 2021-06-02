import corejs from "core-js";
import React, { useEffect, useState } from "react";
// import qs from 'qs'

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setValue(1);
    }, 1000);
    console.log(corejs);
  },[]);
  return (
    <>
      <div className="abc">react app1{value}</div>
    </>
  );
}
