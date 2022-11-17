import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { urlFor } from '../../sanity';
import { ImageInterface } from '../../types';

const ImageCarousel: React.FC<{ items: ImageInterface[] }> = ({ items }) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      className='carousel'
    >
      {items?.map((img) => (
        <img
          key={img._key}
          src={urlFor(img.asset).width(2000).url()}
          alt='Project gallery'
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
