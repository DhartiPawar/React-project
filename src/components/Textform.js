import React,{useState} from 'react'

// setText("");
export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
      console.log("LowerCase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
    };
    const handleOnChange = (event) => {
      console.log("On Change");
      setText(event.target.value)
    };
  const[text,setText]=useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
