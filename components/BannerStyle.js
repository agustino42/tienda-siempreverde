import React from 'react';


const BannerStyle = () => {
  return (
    <div className="bannerStyle">
      <div className="bannerContent1">
        <div className="textContainer1">
          <h2>¡Gran Venta!</h2>
          <p>Ahorra hasta un 60% en tus productos favoritos</p>
          <button className="button1">Ver Ofertas</button>
        </div>
        <img
          src="logo-no-background.png"
          alt="Oferta Especial"
          className="bannerImage1"
        />
      </div>
    </div>
  );
};

export default BannerStyle;