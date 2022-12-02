import Image from 'next/image';
import styles from '../../styles/Personal.module.css';
import sectionImg from '../../assets/about-1.png';

const Personal = () => {
  return (
    <section className={styles.personal}>
      <div className='small-container mb-xl'>
        <div className={styles['personal-title']}>
          <h4 className='color-accent'>THIS IS ME IN A NUT-SHELL</h4>
          <h3 className='mb-xl'>
            I'm a husband, father, coffee lover, gamer and software developer.
          </h3>
          <div className='flex-between mb-md'>
            <Image src={sectionImg} width={500} alt='Code in editor' />
            <div>
              <p>
                Hi! I'm Ivan, a Front-End Developer from Nis, Serbia, currently
                working at Ingsoftware. Most importantly though I am a creative
                soul, never seem to stop creating anything and there is always
                an idea brewing in my mind.
              </p>
              <p>
                Even though I'm a creative, I think logically about all things.
                I figure out what can and cannot be done and how to organize
                content in the most efficient way. Basically I build clean,
                appealing, and functional interfaces with the latest web
                standards.
              </p>
              <p>
                Besides for that, I can usually be found near the coffee machine
                or drinking the coffee at the terrace.
              </p>
            </div>
          </div>
          <p>
            I enjoy to spend my free time with my daughter and playing, it's not
            so hard for me because I am someone that will always be kid and
            never groe up and stop playing.
          </p>
          <p>
            My love for coffee start when I as young man start working in one of
            the best restaurants in the city as bartender. They always had the
            best coffee and bring experts and baristas to teach us about coffee
            and preparation techniques. Now coffee is the only drink I can't do
            without. Every day I start with coffee and can imagine to go out
            from my house without drinking my first coffee.
          </p>
          <p>
            Yes I still play video games, maybe not as much as I want to, but
            still with the same affection. My favorite game and one of the best
            games I've ever played, I believe it is easy to guess which one, is
            Witcher 3.
          </p>
        </div>
        <video
          autoPlay={true}
          muted
          loop
          src={'/video.mp4'}
          style={{ width: '100%' }}
        />
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
