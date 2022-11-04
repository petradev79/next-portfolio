import Meta from '../../components/Meta';
import Introduction from '../../components/Introduction';

const About = () => {
  return (
    <>
      <Meta title='Ivan Petrovic | About' />
      <Introduction
        main={['Ivan Petrovic | About']}
        description={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam sapiente fugiat tempore ad officia doloremque qui, sequi pariatur fuga quisquam voluptate quae doloribus quaerat consectetur tempora distinctio fugit numquam.',
        ]}
      />
    </>
  );
};

export default About;
