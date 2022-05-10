import React, {useContext} from 'react'  
import {Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Row, Col} from 'reactstrap'
import { ShopContext } from '../context/shopContext'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext)
    console.log(checkout)
    return(
        <div>
            <Offcanvas direction="end" isOpen={isCartOpen} onClosed={closeCart}>
                <OffcanvasHeader toggle={() => closeCart()}>
                    <p className='subtitle'>Your Cart</p>
                </OffcanvasHeader>
                <OffcanvasBody>
                    {checkout.lineItems?.length ? (checkout.lineItems.map((item) => (
                        <div>
                        <Row>
                            <Col sm="2">
                            <AiFillCloseCircle size="30px" onClick={() => removeLineItem(item.id)} style={{cursor:"pointer",marginTop:"50%"}}/>
                            </Col>
                            <Col>
                                <img src={item.variant.image.src} />
                            </Col>
                            <Col>
                                <p className='body-bold'>{item.title}</p>
                            </Col>
                            <Col>
                                <p className='body-bold'>{item.variant.price}</p>
                            </Col>
                        </Row>
                        </div>
                    ))) : (<div><h3>Your Cart Is Empty</h3></div>)}
                    <Row style={{marginTop:"25px"}}>
                        <a href={checkout.webUrl}><Button className='brand-button-primary'>Proceed To Checkout</Button></a>
                    </Row>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Cart