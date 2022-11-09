import Image from 'next/image';
import styles from '../styles/Title.module.css';
import MainTitle from '../components/MainTitle';
import Tips from '../components/Tips';

import shapes from '../assets/shapes.svg';

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div className='banner-container flex-between'>
          <MainTitle>
            <>
              <h1>
                design and <span>build</span> beautiful content
                <div className={styles['clip-path']} id='clipPath'>
                  design and build beautiful content
                </div>
              </h1>
              <p>
                My name is Ivan Petrovic, currently working at
                <a
                  href='https://www.ingsoftware.com/'
                  target='_blank'
                  key='description'
                >
                  Ingsoftware
                </a>
                . I'm a software developer (and occasionally designer)
                specializing in building frontend user experiences.
              </p>
            </>
          </MainTitle>
          <Image src={shapes} width={500} alt='portfolio' />
        </div>
      </section>
      <Tips />
    </>
  );
};

export default Home;
