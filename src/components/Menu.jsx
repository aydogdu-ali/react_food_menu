import React, { useState } from "react";
import Kategori from "./Kategori"; // Bu componentte çağıracıgımız componnetleri import ettik.
import MenuList from "./MenuList"; // Bu componentte çağıracıgımız componnetleri import ettik.

// gelen veriyi karşıladık.
const Menu = ({ data }) => {
  // veri setimizde her bir yemek için  ayrılmış bir kategori bulunmaktaydı bu durumda bunları benzersiz olarak almak için new Set( objesi benzersiz olanları yeni bir diziye atadık.)
  // burda Hepsini eklemek için yine array desct. yöntemi ile birleştirdik.
  const tümKategoriler = [
    "Hepsi",
    ...new Set(data.map((item) => item.category)),
  ];

  // kategori ve gelen datadaki bilgilerin durumunu tutacağım stateleri tanımladım.
  const [kategori, setKategori] = useState(tümKategoriler);
  const [menu, setMenu] = useState(data);

  // hangi kategoriye göre ürünleri filtreyebileceğimiz fonksiyonu yazdım.
  const handleFilter = (category) => {
    if (category === "Hepsi") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <>
      {/*veriyi ve stateleri props olarak componentlere gönderdim.*/}
      <Kategori
        handleFilter={handleFilter}
        kategori={kategori}
        setKategori={setKategori}
      />
      <MenuList menu={menu} />
    </>
  );
};

export default Menu;
