import React from 'react'
import images from "../helper/images.png"

// props olarak göderilen veriyi yakaladıkç
// Map fonksiyonu ile DOM'a GÖNDERDİK.
const MenuList = ({menu}) => {
  return (
    <div className="list">
      <div className="menu">
        {menu.map((item) => {
          const { id, title, desc, price } = item;
          return (
            <div key={id}>
              <div>
                <img src={images} alt={title} />
              </div>
              <div>
                <header>
                  <h2>{title}</h2>
                  <h4>{price}</h4>
                </header>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuList