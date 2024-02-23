import React, { useState } from 'react'


export default function SearchBar() {
    // to handle the change of state of search-bar text  area
    const handleOnChange = (event) => {
        //    console.log("changed the state")
        setText(event.target.value)
        console.log(text)
    }
    const [text, setText] = useState("enter text here")

   const handleOnClick =()=>{
   
   }

    return (


        <div>
            <div className="d-flex" role="search">
                <input className="form-control me-2" type="search" onChange={handleOnChange} placeholder="Search" aria-label="Search" />
                <button type="button" className="btn btn-outline-info"onClick={handleOnClick}>Search</button>
            </div>
        </div>
    )
    
}
