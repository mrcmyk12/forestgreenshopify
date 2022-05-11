import React, { useState } from "react";
import {
	Col,
	Row,
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem
} from "reactstrap";

const FAQ = () => {
	const [item, setItem] = useState(1);

	return (
		<div style={{ width: "100%" }}>
			<Row style={{ margin: "15% 0 0 0" }}>
				<Col>
					<p className="h1" style={{ color: "#050d01", width: "100%" }}>
						Frequently Asked Questions
					</p>
				</Col>
			</Row>
			<Row style={{ marginTop: "5%", marginBottom: "10%", width: "100%" }}>
				<Col></Col>
				<Col md="8">
					<Accordion
						style={{ zIndex: "0" }}
						open={item}
						flush
						toggle={(targetId) => {
							if (targetId === item) {
								setItem(0);
							} else {
								setItem(targetId);
							}
						}}>
						<AccordionItem>
							<AccordionHeader targetId="1">
								<p className="h3">What is your refund policy?</p>
							</AccordionHeader>
							<AccordionBody accordionId="1">
								<p className="body" style={{ textAlign: "start" }}>
									<p>
										We have a 30-day return policy, which means you
										have 30 days after receiving your item to request
										a return.
									</p>
									<br />{" "}
									<p>
										To be eligible for a return, just send us your
										receipt or proof of purchase. And we will work on
										refunding your purchase back to your original
										payment method.
									</p>
									<br />
									<p>
										{" "}
										If your item is taking too long to get to you
										contact us at sales@forestgreen.com and we will
										work with you to make it right.
									</p>
									<br />
									<p>
										{" "}
										To start a return, you can contact us at
										sales@forestgreenco.com. You can always contact us
										for any return question at
										sales@forestgreenco.com.
									</p>
								</p>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="2">
								<p className="h3">What if I have an exchange?</p>
							</AccordionHeader>
							<AccordionBody accordionId="2">
								<p className="body" style={{ textAlign: "start" }}>
									If you need to exchange a product you received, reach
									out to sales@forestgreenco.com. We will work with you
									on getting you the item that you want and returning
									your current item. We will make the process as
									pain-free as possible so that you end up happy.
								</p>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="3">
								<p className="h3">What if my item arrives damaged?</p>
							</AccordionHeader>
							<AccordionBody accordionId="3">
								<p className="body" style={{ textAlign: "start" }}>
									Please inspect your order upon reception and contact
									us immediately if the item is defective, damaged or
									if you receive the wrong item, so that we can
									evaluate the issue and make it right. If the item is
									damaged, just send a picture of the damaged item to
									sales@forestgreenco.com and we will work on refunding
									you as soon as possible.
								</p>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="4">
								<p className="h3">How do refunds work?</p>
							</AccordionHeader>
							<AccordionBody accordionId="4">
								<p className="body" style={{ textAlign: "start" }}>
									We will notify you once we’ve received and inspected
									your return, and let you know if the refund was
									approved or not. If approved, you’ll be automatically
									refunded on your original payment method. Please
									remember it can take some time for your bank or
									credit card company to process and post the refund
									too.
								</p>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="5">
								<p className="h3">What is your shipping policy?</p>
							</AccordionHeader>
							<AccordionBody accordionId="5">
								<p className="body" style={{ textAlign: "start" }}>
									<p>
										Our orders usually take 10-15 days to ship.
										Although sometimes they may take a bit longer.
									</p>
									<br />
									<p>
										If your order is below $30, there is a flat rate
										of $2.95 for shipping.
									</p>
									<br />
									<p>
										If your order is between $30-$50, there is a flat
										rate of $3.95
									</p>
									<br />
									<p>
										If your order is more than $50, then don't worry,
										because the shipping is on us.
									</p>
									<br />
									<p>
										If your order arrives damaged or broken, or if
										there are any problems at all. Don't hesitate to
										contact us at sales@forestgreenco.com
									</p>
									<br />
									<p>
										And if there are any other problems with your
										order contact us at sales@forestgreenco.com
									</p>
									<br />
								</p>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="6">
								<p className="h3">Why is my order taking so long?</p>
							</AccordionHeader>
							<AccordionBody accordionId="6">
								<p className="body" style={{ textAlign: "start" }}>
									Most of our supplier ship from China. So there
									may be a delay in your item getting to you. You
									should have received a tracking number to track the
									location of your order. If you have any further
									questions don't hesitate to reach out to us at
									sales@forestgreenco.com.
								</p>
							</AccordionBody>
						</AccordionItem>
					</Accordion>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
};

export default FAQ;
