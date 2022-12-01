import Image from 'next/image';
import styles from '../../styles/Personal.module.css';
import sectionImg from '../../assets/about-1.png';

const Personal = () => {
  return (
    <section className={styles.personal}>
      <div className='small-container'>
        <div className={styles['personal-title']}>
          <h4 className='color-accent'>THIS IS ME IN A NUT-SHELL</h4>
          <h3>
            I'm a husband, father, coffee lover, gamer and software developer.
          </h3>
        </div>
      </div>
      <div className='small-container mb-xl'>
        <div className='flex-between'>
          <Image src={sectionImg} width={500} alt='Code in editor' />
          <div>
            <p>
              Hi! I'm Ivan, a Front-End Developer from Nis, Serbia, currently
              working at Ingsoftware.
            </p>
            <p>
              Most importantly though I am a creative soul, never seem to stop
              creating anything and there is always an idea brewing in my mind.
            </p>
            <p>
              Even though I'm a creative, I think logically about all things. I
              figure out what can and cannot be done and how to organize content
              in the most efficient way. Basically I build clean, appealing, and
              functional interfaces with the latest web standards.
            </p>
            <p>
              Besides for that, I can usually be found near the coffee machine
              or drinking the coffee at the terrace.
            </p>
          </div>
        </div>
      </div>
      <div className='small-container'>
        <div className={styles['personal-title']}>
          <h4 className='color-accent'>MY STORY</h4>
          <h3 className='mb-md'>
            I am passionate about technology, innovation and big challenging
            tasks.
          </h3>
          <p>
            I was born on Octobar 10, 1979 in Nis, where I finished school of
            Tourism and Catering. I worked as bartender or receptionist until I{' '}
            <span>fell in love with programming</span> and realized that this is
            something I want to do.
          </p>
          <p>
            I've always loved technology. From a young age, technology has
            interested me. Like most children i loved to play video games, but
            my interest didn't stop just at entertainment. The more I played,
            the more I wanted to understand how things worked.
          </p>
          <p>
            I never lost my curiosity, but my interest in technologies grow and
            become passion. Now I focus on building frontend user experiences
            and how people interact with websites, making sure they can achieve
            their goals true pleasing journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personal;
