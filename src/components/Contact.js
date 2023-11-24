import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import globe from "../img/globe.png"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cqcx8gg', 'template_xzsnq24', form.current, '1l3zpEfsjhQypXzlU')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
            console.log("something went wrong");
        });
    };

    return (
        <div id="contact">
            <h1 className="title fw-bolder">Let's work together.</h1>
            <div className="contact-container">
                <form ref={form} onSubmit={sendEmail}>
                    <p className="">Please contact me directly at <a href="/">megmeggonzales@gmail.com</a> or through this form. </p>
                    <div className="form-floating mb-3 dark-mode">
                        <input type='hidden' name='to_name' />
                        <input type="text" className="form-control dark-mode" id="sender-name" name='from_name' placeholder="Name" />
                        <label htmlFor="sender-name">Name</label>
                    </div>
                    <div className="form-floating mb-3 dark-mode">
                        <input type="email" className="form-control dark-mode" id="sender-email" name='from_email' placeholder="name@example.com" />
                        <label htmlFor="sender-email">Email</label>
                    </div>
                    <div className="form-floating mb-3 dark-mode">
                        <input type="text" className="form-control dark-mode" id="subject" name='subject' placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="form-floating mb-3 dark-mode">
                        <textarea className="form-control dark-mode" name='message' placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="portfolio-btn">Submit</button>
                    </div>
                </form>
                <img src={ globe } alt="location: Philippines"/>
            </div>
        </div>
    )
}

export default Contact