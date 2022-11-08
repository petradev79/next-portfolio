import styles from '../../styles/Tips.module.css';

const Title = () => {
  return (
    <div className={styles.title}>
      <h2>
        4 Tips to <span>improve your coding skills</span>
      </h2>
      <p>
        There is no end of learning in the IT industry. Some would say that
        there is no industry that is so dynamic and inviting as software
        development. As a developer, you probably want to{' '}
        <span>improve your skills</span> constantly and be the best developer
        you can possibly be.
      </p>
      <p>
        Check out these four tips that have helped me in my career to become a{' '}
        <span>better and more efficient developer</span>.
      </p>
    </div>
  );
};

export default Title;
