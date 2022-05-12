import React, { useRef, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import logo from "../icons/Forest_Green_Logo.svg";
import emailjs from '@emailjs/browser'

const Result = () => {
    return(
        <div>
            <p className="body" style={{color:"white", textAlign:"start"}}>Your message has been sent successfully.  We will get back to you as soon as possible. Thank you</p>
        </div>
    )
}

const ContactUs = () => {

    const [result, showResult] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_327vftw','template_wpax4ug', e.target, 'user_RW5elXiTVWVJ2AQJ8b8mt').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset();
        showResult(true);
    }

    setTimeout(() => {
        showResult(false);
    }, 5000)

	return (
		<div>
			<Row style={{ height: "100vh", width: "100%" }}>
				<Col md="6" style={{ background: "#1f3d0c" }}>
					<p
						className="h1"
						style={{
							marginTop: "25%",
							marginLeft: "25px",
							color: "white",
							textAlign: "start"
						}}>
						Contact Us
					</p>
                    <Row style={{marginLeft:"25px", padding:"0"}}>
                        {
                            result ? <Result /> : null
                        }
                    </Row>
					<Form ref={form} onSubmit={sendEmail} style={{ marginTop: "5%" }}>
						<FormGroup>
							<Input
								name="from_name"
								placeholder="What is your name?"
								type="name"
								style={{ width: "75%", marginLeft: "25px" }}
							/>
						</FormGroup>
						<FormGroup>
							<Input
								name="reply_to"
								placeholder="What is an email that we can reach you at?"
								type="email"
								style={{ width: "75%", marginLeft: "25px" }}
							/>
						</FormGroup>
						<FormGroup>
							<Input
								name="message"
								placeholder="Leave a message on how we can help you"
								type="textarea"
								style={{
									width: "75%",
									marginLeft: "25px",
									height: "150px"
								}}
							/>
						</FormGroup>
						<FormGroup style={{ marginLeft: "25px", textAlign: "start" }}>
							<Input style={{
                                fontFamily:"Poppins",
                                fontWeight:"bold",
                                fontSize:"1rem",
                                letterSpacing:"3%",
                                textTransform:"uppercase",
                                height:"54px",
                                borderRadius:"8px",
                                color:"#1f3d0c",
                                background:"white",
                                border:"2px solid #1f3d0c",
                                width:"45%"
                            }} type="submit" value="Send" />
						</FormGroup>
					</Form>
				</Col>
				<Col>
					<Row style={{ height: "300px", marginTop: "15%" }}>
						<img style={{ height: "350px", margin: "0" }} src={logo} />
					</Row>
					<Row>
						<p className="body" style={{ color: "#1f3d0c", marginBottom:"10%" }}>
							Hey what's up. Do you have more questions? Or perhaps you
							want to tell us how feel? Or maybe you just want to say hi.
							Well, feel free to drop us an email and we will get back to
							you as soon as possible. We love hearing from our
							customers.{" "}
						</p>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ContactUs;
