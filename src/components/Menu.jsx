import React, {useState} from 'react'
import Kategori from './Kategori'
import MenuList from './MenuList';



const Menu = ({data}) => {
   
    const tümKategoriler = [
      "Hepsi",
      ...new Set(data.map((item) => item.category)),
    ];

 
    const [kategori, setKategori] = useState(tümKategoriler);
    const [menu ,setMenu] = useState(data)

const handlefilter = (category) => {
  if (category === "Hepsi") {
    setMenu(data);
    return;
  }
  const newItems = data.filter((item) => item.category === category);
  setMenu(newItems);
};


  return (
    <>
      <div></div>
      <Kategori handlefilter={handlefilter} kategori={kategori} setKategori ={setKategori}/>
      <MenuList menu={menu} />
    </>
  );
}

export default Menu