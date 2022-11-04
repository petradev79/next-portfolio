import Introduction from '../components/Introduction';

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
          ". I'm a software developer (and occasionally designer) specializing in building exceptional frontend user experiences.",
        ]}
      />
    </>
  );
};

export default Home;
