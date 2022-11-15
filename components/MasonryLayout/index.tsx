import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { urlFor } from '../../sanity';
import { ImageInterface } from '../../types';

const breakpointColumns = {
  default: 3,
  900: 3,
  500: 2,
  300: 1,
};

const MasonryLayout: React.FC<{ items: ImageInterface[] }> = ({ items }) => (
  <ResponsiveMasonry columnsCountBreakPoints={breakpointColumns}>
    <Masonry gutter='1rem'>
      {items?.map((img) => (
        <img
          key={img._key}
          src={urlFor(img.asset).width(300).url()}
          alt='Project gallery'
          className='section-img'
        />
      ))}
    </Masonry>
  </ResponsiveMasonry>
);

export default MasonryLayout;

// import React from 'react';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import { urlFor } from '../../sanity';
// import { ImageInterface, ProjectInterface } from '../../types';
// import Card from '../Projects/Card';

// type Props = GalleryProp | ProjectProp;

// type GalleryProp = {
//   type: 'gallery';
//   arr: ImageInterface[];
// };

// type ProjectProp = {
//   type: 'project';
//   arr: ProjectInterface[];
// };

// const breakpointColumns = {
//   default: 3,
//   900: 3,
//   500: 2,
//   300: 1,
// };

// const MasonryLayout: React.FC<{ items: Props }> = ({ items }) => (
//   <ResponsiveMasonry columnsCountBreakPoints={breakpointColumns}>
//     <Masonry gutter='1rem'>
//       {items.type === 'gallery'
//         ? items.arr.map((img) => (
//             <img
//               key={img._key}
//               src={urlFor(img.asset).width(300).url()}
//               alt='Project gallery'
//               className='section-img'
//             />
//           ))
//         : items.arr.map((project) => (
//             <Card key={project._id} project={project} />
//           ))}
//     </Masonry>
//   </ResponsiveMasonry>
// );

// export default MasonryLayout;
