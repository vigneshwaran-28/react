import React from 'react'
import Greet from './greet';

function Demo() {
     let arr = ["vignesh", "shyam", "sankar"];
     let names = arr.map((e) => <Greet name={e}/>);
  return (
    <div>{names}</div>
  )
}

export default Demo