import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import BannerStore from '../components/BannerStore';
import BannerStyle from '../components/BannerStyle';
import ImagenSlider from '../components/ImagenSlider';

const images = [
  'logo-no-background.png',
  'logo-black.png',
  'logo-color.png',
  'logo-white.png',
  // ...añade más rutas de imágenes aquí
];

const Home = ({ products, bannerData }) => (
  <div>
  <BannerStore />
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    {/*<ImagenSlider images={images} />*/}
   
    <div className="products-heading">
      <h2>Todo para el Cultivo Indor</h2>
      <p>Accesorios, Semillas, Macetas,Herramientas y mas </p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
