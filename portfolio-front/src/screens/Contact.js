import React from 'react'

const Contact = () => {
    return (
        <div className="wrapper">
            <div className="project project-with-shape">
                <p>
                    I'm so glad you came and visited my website. If you have comments, questions, or anything at all please send me a note.
                    Leave your email, and I'll be sure and get back to you!
                </p>
                <label className="text-input-label">Name: </label>
                <input className="text-input-1line" type="text"></input>
                <label className="text-input-label">email: </label>
                <input className="text-input-1line" type="email"></input>
                <label className="text-input-label">Comments: </label>
                <textarea className="textarea-input" rows={7}></textarea>
            </div>
        </div>
    )
}

export default Contact
