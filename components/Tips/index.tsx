import Image from 'next/image';
import styles from '../../styles/Tips.module.css';
import sectionImg from '../../assets/code-1.png';

const Tips = () => {
  return (
    <section className={styles['tips']}>
      <div className='section-container'>
        <div className='flex-section'>
          <Image
            src={sectionImg}
            width={500}
            alt='Code in editor'
            className='section-img'
          />
          <div className='section-title'>
            <h2>
              4 Tips to <span>improve your coding skills</span>
            </h2>
            <p>
              There is no end of learning in the IT industry. Some would say
              that there is no industry that is so dynamic and inviting as
              software development. As a developer, you probably want to{' '}
              <span>improve your skills</span> constantly and be the best
              developer you can possibly be.
            </p>
            <p>
              Check out these four tips that have helped me in my career to
              become a <span>better and more efficient developer</span>.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['tips-container']}>
        <div className={styles.tip}>
          <h3>
            1. Before start coding <span>start planning</span>
          </h3>
          <div className={styles['tip-content']}>
            <p>
              A good start is half the battle, said someone wiser than me. And I
              can't think of any quote that would better describe the situation
              every developer encounters when starting a new project.
            </p>
            <p>
              Usually beginners are intimidated by a project's scale and don't
              know how to begin. Experienced developers avoid these problems
              with a <span>comprehensive project plan</span>.
            </p>
            <ul>
              <li>Break down projects into approachable steps</li>
              <li>See the full scope of the project all at once</li>
              <li>Keep in mind which components will interact</li>
              <li>Avoid overlapping components</li>
              <li>Anticipate bugs</li>
            </ul>
            <p>
              First define your vision and what you'd like to{' '}
              <span>achieve</span>, next step is to decide what{' '}
              <span>language and tools</span> you'll use to create your project.
            </p>
            <p>
              Good <span>project architecture</span> is vital for tackle
              changing needs in the future. The golden rule of design when
              writing software is <span>divide and conquer</span>. Always split
              the problem into smallest problems.
            </p>
          </div>
        </div>

        <div className={styles.tip}>
          <h3>
            2. It's no secret that <span>teamwork</span> is good for business
          </h3>
          <div className={styles['tip-content']}>
            <p>
              Benefits of teamwork in software development can be measured,
              qualitatively and quantitatively. It is key for{' '}
              <span>
                delivering better products and services to customers and
                improving performance for the company
              </span>
              .
            </p>
            <ul>
              <li>Teamwork helps improve developer skills</li>
              <li>Increases code quality and boosts productivity</li>
              <li>Teamwork inspires creativity and innovation</li>
              <li>Allows people to share knowledge</li>
            </ul>
            <p>
              This doesn't necessarily mean less effort, but the quality of the
              work (<span>ideas, solutions, execution</span>) tends to be
              better.
            </p>
            <p>
              Effective collaboration is energizing, rewarding, and empowering
              for employees. Team members can learn hard skills and gain
              relevant insights and knowledge by collaborating with others from
              different and diverse backgrounds.
            </p>
          </div>
        </div>
        <div className={styles.tip}>
          <h3>
            3. People ignore design that <span>ignores people</span>
          </h3>
          <div className={styles['tip-content']}>
            <p>
              Great UX design is so much more than looking nice. It has to{' '}
              <span>perform and function</span> well for everyone.
            </p>
            <p>
              Web applications are all about <span>user interaction</span>, so
              having a clean, visually pleasing interface that supports an
              intuitive user journey is essential in creating customer delight.
            </p>
            <ul>
              <li>Get to know your users</li>
              <li>Keep it simple</li>
              <li>Don't overthink things</li>
            </ul>
            <p>
              You won't be able to create a product that exceeds users
              expectations without first{' '}
              <span>understanding their preferences and desires</span>.
            </p>
            <p>
              {' '}
              Users appreciate a clean interface and intuitive user journey that
              allows them to navigate with ease. There's no need to change
              elements of your web app simply for the sake of being original and
              new.
            </p>
          </div>
        </div>
        <div className={styles.tip}>
          <h3>
            4. Learning and improving <span> knowledge</span>
          </h3>
          <div className={styles['tip-content']}>
            <p>
              Learning is the only thing the mind never{' '}
              <span>exhausts, never fears, and never regrets</span> and it's
              nurtures your brain and thinking ability.
            </p>
            <p>
              In today's competitive technological world, learning keeps you{' '}
              <span>up to date</span> with trends, various skills, knowledge,
              and competencies.
            </p>
            <ul>
              <li>Try to create your favorite website</li>
              <li>Join a community, share and listen</li>
              <li>Contribute to GitHub</li>
              <li>Follow coders you admire on social media</li>
            </ul>
            <p>
              For me best way to improve your skills is{' '}
              <span>building projects</span>. It will challenge you to learn
              vital skills and translate your theoretical knowledge into actual
              code.
            </p>
            <p>
              Try to create your favorite website and if you are stuck with some
              problem and unable to find a solution on your own, join a
              community (<span>Stack Overflow, Reddit</span>) it is possible
              that someone had the same problem or ask questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tips;
