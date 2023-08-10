import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h1>Siempre Verde GrowShop 🌱</h1>
        <h3>Todo para el Cultivo Indor</h3>
        <div>
    
          <Link href="/">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner