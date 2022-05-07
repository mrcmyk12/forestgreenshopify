import React, {useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Col} from 'reactstrap'

const BambooCards = () => {
    const {fetchBambooCollection, bambooCollection} = useContext(ShopContext);

    useEffect(() => {
        fetchBambooCollection();
    }, [fetchBambooCollection])

    return(
        <div>
            {bambooCollection.products.map((product) => {
							return (
								<Col style={{ marginTop: "15px" }} xs="6" sm="2">
									<div
										key={product.id}
										className="container-box"
										>
										<img
											className="thumbnail-image"
											src={product.image.src}
										/>
										<div className="variant-overlay"></div>
									</div>
								</Col>
							);
						})}
        </div>
    )

}

export default BambooCards;