import styles from '../../styles/Tips.module.css';

const Tips = () => {
  return (
    <section className={styles['tips']}>
      <div className={styles['tips-container']}>
        <div className={styles['grid-tips']}>
          <div className={styles.tip}>
            <h2>
              Before start coding{' '}
              <span>define your vision and start planning</span>
            </h2>
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
          <div className={styles.tip}>
            <h2>
              It's no secret that <span>teamwork and collaboration skills</span>{' '}
              are good for business
            </h2>
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
          <div className={styles.tip}>
            <h2>
              Someone wiser than me said{' '}
              <span>people ignore design that ignores people</span>
            </h2>
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
          <div className={styles.tip}>
            <h2>
              <span>Learning and improving knowledge</span> is essential to our
              existence
            </h2>
            <p>
              As said by Leonardo Da Vinci,{' '}
              <span>
                “Learning is the only thing the mind never exhausts, never
                fears, and never regrets”
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
