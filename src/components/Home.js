import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const shoes = {
       "textured-mens-loafer-m-lf-den-0021?variant=32524118229085": {
            name: "Textured Mens Loafer",
            img: "https://cdn.shopify.com/s/files/1/0262/5804/7069/products/IMG_2898copy_1024x1024.jpg?v=1589956303",
            description: "A clean, classic cupsole in every sense of the word. These mens loafers by Ndure are the perfect addition to your weekday wardrobe rotation This pair is made with good quality denim to ensure durability An easy slip-on style with threaded detailing and round toe shape make this pair a good choice for all day wear"
       }

    }
    return (    
        <div>
            <h1>Welcome to our Home Page</h1>
            {Object.entries(shoes).map(([productId, {name, img, description}])=>
                (
                    <ul>
                        <li key={productId}>
                            <Link to={productId}>
                                <h2>{name}</h2>
                                <img src={img} alt={name} width='333px'/>
                            </Link>
                            <h4>{description}</h4>
                        </li>
                    </ul>
                )
            )}
        </div>
    )
}
