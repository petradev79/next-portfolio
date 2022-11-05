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
      <section className='section'>
        <div className='section-container'>
          <h2>
            Before start coding{' '}
            <span>define your vision and start planing</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            provident, aut labore, nemo libero asperiores adipisci dicta
            doloremque sequi culpa sed. Corrupti sit, quis autem porro aut
            similique cupiditate ab. Sit repellendus et maiores facere
            recusandae quas excepturi fugiat est vitae error, minima sequi modi
            iusto harum quaerat laborum maxime!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='section-container'>
          <h2>
            It's no secret that <span>teamwork and collaboration skills</span>{' '}
            are good for business
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            provident, aut labore, nemo libero asperiores adipisci dicta
            doloremque sequi culpa sed. Corrupti sit, quis autem porro aut
            similique cupiditate ab. Sit repellendus et maiores facere
            recusandae quas excepturi fugiat est vitae error, minima sequi modi
            iusto harum quaerat laborum maxime!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='section-container'>
          <h2>Before start coding define your vision and start planing</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            provident, aut labore, nemo libero asperiores adipisci dicta
            doloremque sequi culpa sed. Corrupti sit, quis autem porro aut
            similique cupiditate ab. Sit repellendus et maiores facere
            recusandae quas excepturi fugiat est vitae error, minima sequi modi
            iusto harum quaerat laborum maxime!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='section-container'>
          <h2>Before start coding define your vision and start planing</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            provident, aut labore, nemo libero asperiores adipisci dicta
            doloremque sequi culpa sed. Corrupti sit, quis autem porro aut
            similique cupiditate ab. Sit repellendus et maiores facere
            recusandae quas excepturi fugiat est vitae error, minima sequi modi
            iusto harum quaerat laborum maxime!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='section-container'>
          <h2>Before start coding define your vision and start planing</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            provident, aut labore, nemo libero asperiores adipisci dicta
            doloremque sequi culpa sed. Corrupti sit, quis autem porro aut
            similique cupiditate ab. Sit repellendus et maiores facere
            recusandae quas excepturi fugiat est vitae error, minima sequi modi
            iusto harum quaerat laborum maxime!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
