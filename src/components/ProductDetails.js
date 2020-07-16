import React from 'react'
import { useParams } from 'react-router'

export const ProductDetails = () => {
    const shoes = {
        "dalton-shell-cordovan-dress-boots":{
          name: "Dalton Shell Cordovan Dress Boots",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit"
        },
        "park-avenue-shell-cordovan": {
          name: "Park Avenue Shell Cordovan",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwc4ea4a21/images/2.1/mens-shoes/parkave-5805-black-angle-web.jpg?sw=736&sh=736&sm=fit"
        },
        "osborn-sneaker": {
          name: "Osborn Sneakers",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwed078574/images/2.1/mens-shoes/osborn-2344-walnut-angle-web.jpg?sw=736&sh=736&sm=fit"
        }
    }

    const {productId} = useParams();
    const product = shoes[productId];
    const {name, img} = product;
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name} />
        </div>
    )
}
