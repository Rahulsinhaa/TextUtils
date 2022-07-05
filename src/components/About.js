import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [mode, setMode] = useState('');



    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setMode('enable dark mode');
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })

            setMode('disable darkmode')
        }
    }


    return (
        <div className="conatiner" >
            <h2 className='bg-light text-dark'>About Us</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample"  >
                <div className="accordion-item" style={myStyle}  >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>About the developer</strong>
                        </button>
                    </h2>
                    
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        <img src={process.env.PUBLIC_URL+"rahul.jpeg"} alt="new imahe" style={{width:200}}/><br/>
                            <strong>Proffesional details.</strong><br/>
                            <strong>  Name :- </strong> Rahul kumar sinha <br/>
                            <strong>age:-</strong> 23 year<br/>
                            <strong>Degree:-</strong> Masters in computer application <br/>
                            <strong>University:-</strong> Chandigarh University.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          <strong>Aap details</strong>  
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>A text Utility Aap.</strong> This aap provides feature such as<br />
                            <strong>Upper Case to Lower Case:-</strong>Converts upper case to lower case <br />
                            <strong>Lower case to upper case:-</strong>Converts lower case to upper case  <br />
                            <strong>Character counter:-   </strong>  Counts the number of characters in the paragraph<br />
                            <strong>Word counter :- </strong>  Counts the number of words in the paragraph<br />
                            <strong>Cut off extra Spaces </strong> Cut off extra spaces in the paragraph<br />
                            <strong>Capatalize text </strong> Convert each and every words 1st letter to upper Case<br />
                            <strong>Clear Text </strong> A Clear Text feature to clear the text area<br />
                            <strong>Dark Mode </strong> A dark mode feature <br />

                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{mode}</button>

            </div>
        </div>
    )
}
