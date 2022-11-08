import Meta from '../../components/Meta';
import Introduction from '../../components/Introduction';

import { client, urlFor } from '../../sanity';
import { ProjectsInterface } from '../../types';
import Image from 'next/image';

export const getStaticProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};

export const About = ({ projects }: ProjectsInterface) => {
  console.log(projects);

  return (
    <>
      <Meta title='Ivan Petrovic | About' />
      <Introduction
        main={['Ivan Petrovic | About']}
        description={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam sapiente fugiat tempore ad officia doloremque qui, sequi pariatur fuga quisquam voluptate quae doloribus quaerat consectetur tempora distinctio fugit numquam.',
        ]}
      />
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <h1 className='color-primary'>{project.title}</h1>
            <p className='color-primary'>{project._id}</p>
            <p className='color-primary'>{project.slug.current}</p>
            <p className='color-primary'>{project.description}</p>
            <Image
              src={urlFor(project.mainImage).width(200).url()}
              alt='test'
              width={200}
              height={500}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
