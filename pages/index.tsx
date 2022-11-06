import Introduction from '../components/Introduction';
import Tips from '../components/Tips';

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
          ". I'm a software developer (and occasionally designer) specializing in building exceptional frontend user experiences and I will share with you some of my thoughts and tips.",
        ]}
      />
      <Tips />
    </>
  );
};

export default Home;
