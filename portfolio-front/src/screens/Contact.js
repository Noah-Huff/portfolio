import React, { useState } from 'react'
import axios from 'axios';
import { Next } from 'react-bootstrap/esm/PageItem';

const Contact = () => {
    let [comment, setComment] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    let sendComment = async () => {
        console.log("Send Comment");
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Comment: ", comment);
        //let sendData = new FormData();
        //sendData.append('name', 'test');
        let sendData = 
        {
            "name": name,
            "email": email,
            "comment": comment
        };
        //JSON.stringify(sendData);
        console.log("Send Data ", sendData);

        try {
            const res = await axios.post('http://localhost:5000/api/contact/comment', sendData);
        } catch (err) {
            console.log("Error ", err);
        }

        setComment("");
        setName("");
        setEmail("");
        console.log("Email ", email);

    }

    return (

            <div className="text-card contact-form">
                <p>
                    I'm so glad you came and visited my website. If you have comments, questions, or anything at all please send me a note.
                    Leave your email, and I'll be sure and get back to you!
                </p>
                <label className="text-input-label">Name: </label>
                <input id="name" className="text-input-1line" type="text" value={name} onChange={() => setName(document.getElementById("name").value)}></input>
                <label className="text-input-label">email: </label>
                <input id="email" className="text-input-1line" type="email" value={email} onChange={() => setEmail(document.getElementById("email").value)}></input>
                <label className="text-input-label">Comments: </label>
                <textarea id="comment" className="textarea-input" rows={7} value={comment} onChange={() => setComment(document.getElementById("comment").value)}></textarea>
                <button onClick={sendComment}  className="contact-btn"><div className="button">Submit</div></button>
            </div>
    )
}

export default Contact
