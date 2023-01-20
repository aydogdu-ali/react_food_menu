import React from 'react'




const Kategori = ({ handlefilter, kategori,
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
                  onClick={() => handlefilter(item)}
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