import React,{useState} from 'react'

// setText("");
export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
      console.log("On Change");
      setText(event.target.value)
    };
  const[text,setText]=useState("Enter text here");
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
