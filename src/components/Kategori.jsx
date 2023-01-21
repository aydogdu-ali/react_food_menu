import React from 'react'



// gelen filtreleme fonksiyonu ile kategori stateni yakaladık.
// kategori state içinde kategori listemizi map fonksiyonu ile DOM' a gönderdik.
// handleFilter fonksiyonu ile filtreleme işlemi yapması için her bir kategoriye onClick eventi verdik.
const Kategori = ({ handleFilter, kategori,
  }) => {
  return (
    <main>
      <div className="ogun_list">
        {kategori.map((item, index) => {
        //   console.log(kategori);
          return (
            <section key={index}>
              <div className="ogun_title">
                <button
                  className="ogun_title_button"
                  onClick={() => handleFilter(item)}
                >
                  {item}
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Kategori