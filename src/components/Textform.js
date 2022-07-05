import React,{useState} from 'react'



export default function Textform(props) {   
    const handleUpclick= ()=>{
    let newText=text.toUpperCase();
        setText(newText);
        props.showElert("Thw text have been converte to Upper case","Success");
    }
    const handlepLclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showElert("Thw text have been converte to Lowe case","Success");
    }

    const handlcleanLclick=()=>{
        let newText="";
        setText(newText);
        props.showElert("text area cleaned","Success");
    }
    const handlcAPITALISELclick=()=>{

        const toTitleCase = str => text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
       setText(toTitleCase);   
       props.showElert("text have been capatilized","Success");
    }

    const handlCopy=()=>{
        var text=document.getElementById("MyBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showElert("text have been copied","Success");   
    }

    const handlExtraSpaces=()=>{
       let newString = text.split(/[ ]+/); 
        setText(newString.join(" "));
        props.showElert("extra spaces have been cleared","Success")
    }


    const handleOnchange= (event)=>{
        // console.log("on change")
       setText(event.target.value);
       
    }
    const [text, setText] = useState('enter the text');
  
    return (
        <>
        <h1 className='bg-dark'>{props.heading}</h1>
            <div>
                <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`}value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="MyBox" rows="8"></textarea>
            </div>
          <div className='col-md-12 text-center my-3'>
            <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to uper case</button>
            <button className="btn btn-primary mx-3" onClick={handlepLclick}>Convert to lower case</button>
            <button className="btn btn-primary mx-3" onClick={handlcleanLclick}>clear text</button>
            <button className="btn btn-primary mx-3" onClick={handlcAPITALISELclick}>capitalize text text</button>
            <button className="btn btn-primary mx-3" onClick={handlCopy}>copy text</button>
            <button className="btn btn-primary mx-3" onClick={handlExtraSpaces}>cut off extra spaces </button>
            </div>
            <br/>
         <h1 className='bg-dark'>my text summary</h1>
        
         <p className={`text-${props.mode==='dark'?'light':'dark'}`}> characters count <b>{text.length}</b></p>
         
         <p className={`text-${props.mode==='dark'?'light':'dark'}`}> word count <b>{text.split(" ").length}</b></p>
         <p className={`text-${props.mode==='dark'?'light':'dark'}`}> time taken to read <b> {0.008 * text.split(" ").length}</b></p>
         <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>preview</h2>
         <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text}</p>
        </>
    ) 
}
