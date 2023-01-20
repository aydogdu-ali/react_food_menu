import React from 'react'


const ogunler = ["Hepsi","Kahvaltılık", "Öğle Yemeği", "Atıştırmalık"]

const Kategori = ({ handleFilter }) => {
  return (
    <main>
      <div className="ogun_list">
        {ogunler.map((item, index) => {
          return (
            <section>
              <div key={index} className="ogun_title">
                <div>
                  <button className="ogun_title_button" onClick={handleFilter}>
                
                    {item}{" "}
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Kategori