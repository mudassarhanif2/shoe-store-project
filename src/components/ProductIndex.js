import React from "react"
import { Link } from "react-router-dom"

export const ProductIndex = () => {
    const shoes = {
        "dalton-shell-cordovan-dress-boots":{
          name: "men-s-laurent-leather-moccasin-shoes-gs5959",
          img: "https://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/G/S/GS5959_1.jpg",
          style: "For a casual hangout or fashionable look; these leather moccasins are the best for both. These traditional men’s mocs have stitched detailing with perforated designed upper and penny keeper detailing. Easy slip on construction. Rounded toe. Leather made upper with comfortable footbed and rubber sole also featured in these outdoorsy shoes."
        },
        "park-avenue-shell-cordovan": {
          name: "men-kamden-patent-moc-toe-textured-leather-tassel-formal-shoes-gs4003-42963",
          img: "https://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/g/s/gs4003.jpg",
          style: "These classic loafers with moc toe textured design and tassel adornment give it an even classier look. The smooth shiny leather with a low stacked heel makes it desirable. The leather lining and rubber sole makes it easy going. You can wear them at any formal or official gathering."
        },
        "osborn-sneaker": {
          name: "athletic-shoes-for-men-m-pr-leo-0002?variant=32532791427165",
          img: "https://cdn.shopify.com/s/files/1/0262/5804/7069/products/2.2.2_1024x1024.jpg?v=1594208101",
          style: "For all the gym enthusiasts out there these Athletic Shoes for Men by Ndure are made for you These shoes have been made with good quality man-made material that ensures durability An easy slip on style with comfortable insole makes these shoes perfect athletic wear"
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
                                <img src={img} alt={name} width='340px'/>
                            </Link>
                            <h4>{style}</h4>
                        </li>
                    </ul>
                )
            )}
        </div>
    )
}
    