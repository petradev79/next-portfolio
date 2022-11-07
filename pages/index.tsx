import Introduction from '../components/Introduction';
import Tips from '../components/Tips';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Introduction
        main={[
          'design and ',
          <span key='title'>build</span>,
          ' beautiful content',
        ]}
        description={[
          'My name is Ivan Petrovic, currently working at ',
          <span key='description'>Ingsoftware</span>,
          ". I'm a software developer (and occasionally designer) specializing in building frontend user experiences.",
        ]}
      />
      <About />
      <Tips />
    </>
  );
};

export default Home;
