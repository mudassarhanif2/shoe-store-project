import React from "react"
import { Link } from "react-router-dom"

export const ProductIndex = () => {
    const shoes = {
        "dalton-shell-cordovan-dress-boots":{
          name: "Dalton Shell Cordovan Dress Boots",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit",
          style: " derby dress boots Wingtip boot with brogue perforations and medallion Cordovan Collection Dress it up or down perfect any way you style it Classic Fit fits true to size"
        },
        "park-avenue-shell-cordovan": {
          name: "Park Avenue Shell Cordovan",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwc4ea4a21/images/2.1/mens-shoes/parkave-5805-black-angle-web.jpg?sw=736&sh=736&sm=fit",
          style: " derby dress boots Wingtip boot with brogue perforations and medallion Cordovan Collection Dress it up or down perfect any way you style it Classic Fit fits true to size"
        },
        "osborn-sneaker": {
          name: "Osborn Sneakers",
          img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwed078574/images/2.1/mens-shoes/osborn-2344-walnut-angle-web.jpg?sw=736&sh=736&sm=fit",
          style: " derby dress boots Wingtip boot with brogue perforations and medallion Cordovan Collection Dress it up or down perfect any way you style it Classic Fit fits true to size"
        }
    }
    return (
        <div>
            {Object.entries(shoes).map(([productId, {name, img, style}])=>
                (
                    <ul>
                        <li key={productId}>
                            <Link to={productId}>
                                <h2>{name}</h2>
                                <img src={img} alt={name} />
                            </Link>
                            <h4>{style}</h4>
                        </li>
                    </ul>
                )
            )}
        </div>
    )
}
    