import Image from 'next/image';
import styles from '../../styles/Tips.module.css';
import card from '../../assets/1_fopzpyNMN9GPvAIKdsZdaA.png';
import SectionTitle from '../SectionTitle';

{
  /* <div>
            <p>
              A good start is half the battle, said someone wiser than me. And I
              can't think of any quote that would better describe the situation
              every developer encounters when starting a new project.
            </p>
            <p>
              First define your vision and{' '}
              <span>what you'd like to achieve</span>, next step is to decide
              what <span>language and tools</span> you'll use to create your
              project.
            </p>
            <p>
              Good <span>project architecture</span> is vital for tackle
              changing needs in the future. The golden rule of design when
              writing software is “divide and conquer”. Always split the problem
              into smallest problems.
            </p>
          </div> */
}

const Tips = () => {
  return (
    <section className={styles['tips']}>
      <div className='intro-container'>
        <div className='flex-intro'>
          <Image src={card} width={500} alt='work' className='test-code-img' />
          <SectionTitle>
            <>
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
            </>
          </SectionTitle>
          {/* <Image src={card} width={500} alt='work' className='test-code-img' /> */}
        </div>
      </div>
      <div className={styles['tips-container']}>
        <div className={styles.tip}>
          <h3>
            1. Before start coding <span>start planning</span>
          </h3>
          <div>
            <p>
              A good start is half the battle, said someone wiser than me. And I
              can't think of any quote that would better describe the situation
              every developer encounters when starting a new project.
            </p>
            <ul>
              <li>
                First define your or your client vision and{' '}
                <span>what you'd like to achieve</span>.
              </li>
              <li>
                Your next step is to decide what <span>language and tools</span>{' '}
                you'll use to create your project.
              </li>
              <li>
                Good <span>project architecture</span> is vital for the life of
                the project itself and how you will be able to tackle changing
                needs in the future.
              </li>
              <li>
                The golden rule of design when writing software is “divide and
                conquer”. Always{' '}
                <span>split the problem into smallest problems</span>.
              </li>
            </ul>
          </div>

          {/* <div>
            <p>
              A good start is half the battle, said someone wiser than me. And I
              can't think of any quote that would better describe the situation
              every developer encounters when starting a new project.
            </p>
            <p>
              First define your vision and{' '}
              <span>what you'd like to achieve</span>, next step is to decide
              what <span>language and tools</span> you'll use to create your
              project.
            </p>
            <p>
              Good <span>project architecture</span> is vital for tackle
              changing needs in the future. The golden rule of design when
              writing software is “divide and conquer”. Always split the problem
              into smallest problems.
            </p>
          </div> */}
        </div>

        <div className={styles.tip}>
          <h3>
            2. It's no secret that <span>teamwork</span> is good for business
          </h3>
          <div>
            <p>
              Collaboration is key for{' '}
              <span>
                delivering better products and services to customers and
                improving performance for the company
              </span>{' '}
              and it doesn't necessarily mean less effort, but the quality of
              the work — ideas, solutions, execution — tends to be better.
            </p>
            <p>
              Another important reason to collaborate is for the{' '}
              <span>people involved</span>. Effective collaboration is
              energizing, rewarding, and empowering for employees. Team members
              can learn hard skills and gain relevant insights and tacit
              knowledge by collaborating with others from different and diverse
              backgrounds.
            </p>
          </div>
        </div>
        <div className={styles.tip}>
          <h3>
            3. People ignore design that <span>ignores people</span>
          </h3>
          <div>
            <p>
              Web applications are all about user interaction, so having a
              clean, visually pleasing interface that supports an intuitive user
              journey is essential in creating customer delight.
            </p>
            <ul>
              <li>
                <span>Get to know your users </span>- you won't be able to
                create a product that exceeds users expectations without first
                understanding their preferences and desires.
              </li>
              <li>
                <span>Keep it simple </span>- users appreciate a clean interface
                and intuitive user journey that allows them to navigate with
                ease.
              </li>
              <li>
                <span>Don't overthink things </span>- there's no need to change
                elements of your web app simply for the sake of being original
                and new.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.tip}>
          <h3>
            4. Learning and improving <span> knowledge</span>
          </h3>
          <div>
            <p>
              <span>
                Learning is the only thing the mind never exhausts, never fears,
                and never regrets
              </span>
              . Being a person always willing to learn new skills and techniques
              I enjoy being challenged.
            </p>
            <p>
              In today's competitive technological world, learning keeps you
              keeping up to date with trends, various skills, knowledge, and
              competencies. Continuous learning helps to innovate new ideas.
              This nurtures your brain and thinking ability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tips;
