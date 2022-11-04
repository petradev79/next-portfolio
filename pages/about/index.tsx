import Meta from '../../components/Meta';
import Header from '../../components/Header';
import { HeaderPropsInterface } from '../../types';

const headerProps: HeaderPropsInterface = {
  title: {
    title: ['Lorem ipsum dolor sit amet.'],
    description: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, vel earum! Ducimus expedita, maiores odit vero ullam itaque molestiae doloremque numquam, ab voluptatum quos ipsam mollitia quas quis aperiam rerum?',
    ],
  },
};

const About = () => {
  return (
    <>
      <Meta title='Ivan Petrovic | About' />
      <Header title={headerProps.title} />
    </>
  );
};

export default About;
