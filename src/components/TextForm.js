import React,{useState} from 'react'

export default function TextForm(props) {
    const clickUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const clickClear = ()=>{
        let newText = ("");
        setText(newText);
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const clickCharReverse = (event) => {
      /* Convert string to array*/
      let strArr = text.split("");
      /* Reverse array*/
      strArr = strArr.reverse();
      /* Convert array to string*/
      let newText = strArr.join("");
      setText(newText);
    };

    



    const [text, setText] =useState("");

    return (
        <> 
        <div className="container mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" autoComplete='on' placeholder="name@example.com" />
        </div>
        <div className="container mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <div className='container'>
        <button className="btn btn-primary m-3" onClick={clickUpperCase}>Convert To Upper Case</button>
        <button className="btn btn-primary m-3" onClick={clickLowerCase}>Convert To Lower Case</button>
        <button className="btn btn-warning m-3" onClick={clickCharReverse}>Convert To Reverse  Case</button>
        <button className="btn btn-success m-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-dark m-3" onClick={speak}>Speak</button>
        <button className=" btn btn-danger m-3" onClick={clickClear}>Clear Box</button>
        </div>

        <div className='container'>
        
        </div>
       

        <div className=" container Text-Summary mt-5">
            <p className='mb-3'><strong>Paragraph Summary is :</strong> {text.length>0?text:"Nothing to Preview"}</p>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {(text.length)} character</p>
        </div>
        </>
    )
}
