import { useState } from "react";

export default function ReplyForm(props) {
   const [reply, setReply] = useState("")

   const handleChange = event => {
    if(event.target.value.length < 70){  //here I can stop the person from typing if over 70 letters.
      setReply(event.target.value);
    }
   };

   const handleSubmit = event => {
    event.preventDefault()         //After clicking the 'add reply' button, this prevents refreshing page.
    
    props.onSubmit(reply);  //Send back the content of new reply 

    setReply(""); //After clicking 'add reply' button, the contents disappear! 
  };

    return (
        <form className="ReplyForm" onSubmit={handleSubmit}>
          <h1>Add a reply to this post</h1>
          <input 
            type="text" 
            placeholder="Enter the reply" 
            onChange={handleChange} 
            value={reply} />
          <button>Add the reply</button>
        </form>
    )
}  


//Control Components?
//I want to make sure that the form is respecting the way I want my data to be shaped.
//I want to be React to be in charge of that form. 
//So, instead of letting HTML do its thing,
//I want React control what I can do and cannot do in there. 
//To do that, I'll use a state to control the data inside my form here.