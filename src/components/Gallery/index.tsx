import React from 'react';
import Cards from './Cards';
import SectionTitle from "../Common/SectionTitle";

const Gallery = () => {
  return (
    <>
      <div className='container'>
        <SectionTitle
          title="Our Motive"
          paragraph="We intertwine work and enjoyment to enhance creativity and productivity"
          center
        />
        <div>
          <Cards />
        </div>
      </div>
    </>
  )
}

export default Gallery
