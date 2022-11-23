import { client } from '../sanity';
import styles from '../styles/Skills.module.css';
import cardsStyles from '../styles/Cards.module.css';
import Meta from '../components/Meta';
import Cards from '../components/Cards';
import Skill from '../components/Skill';
import { SkillInterface } from '../types';

export const getStaticProps = async () => {
  const query = `*[_type == "skill"] {
    _id,
    title,
    description,
    image,
    tool -> {
      _id,
      title,
      image,
      source,
      summary
    }
  }`;
  const skills = await client.fetch(query);

  return {
    props: {
      skills,
    },
  };
};

const Skills: React.FC<{ skills: SkillInterface[] }> = ({ skills }) => {
  return (
    <>
      <Meta title='Skills' />
      <section className={styles['skills-social']}>
        <div className={styles['skills-container--sm']}>
          <div className='section-title mb-xl'>
            <h2>
              <span>Social skills</span> and abilities
            </h2>
            <p className={styles['skills-description']}>
              What are social skills and why are they important? Social skills
              are the{' '}
              <span>
                skills we use everyday to interact and communicate with others
              </span>{' '}
              that can help you build, maintain and grow relationships with
              colleagues, clients and new contacts.
            </p>
          </div>
        </div>
        <div className='section-container'>
          <Cards>
            <div className={cardsStyles['grid-cards__skills']}>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-primary'>
                  #1. Creative and Critical thinking
                </h4>
                <p>
                  Generating useful ideas and logically consider information and
                  ideas that are presented to me.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-warning'>#2. Active listening</h4>
                <p>
                  Paying full attention and absorbing what someone is saying and
                  retain the information.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-success'>#3. Time Management</h4>
                <p>
                  Use your time wisely to do everything that you need as
                  efficiently as possible.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-accent'>#4. Communication</h4>
                <p>
                  Share and present ideas and feelings effectively with both
                  verbal written communication.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-primary'>#5. Adaptability</h4>
                <p>
                  Work environments constantly changing, embrace change and
                  adjust to it with optimism.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-accent'>#6. Problem solving</h4>
                <p>
                  There's no job in the world where you won't have any problems
                  to deal with.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-success'>#7. Social and interpersonal</h4>
                <p>
                  How well we interact and communicate with others helps us to
                  create positive work environment.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-warning'>#8. Work Ethic</h4>
                <p>
                  Valuing work and putting in the effort to yield results with
                  commitment and responsibility.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4 className='color-primary'>#9. Attention to Detail</h4>
                <p>
                  Never was a person who just want to get the job done, instead
                  focus on every detail.
                </p>
              </div>
            </div>
          </Cards>
        </div>
      </section>
      <section className={styles['skills-technical']}>
        <div className={styles['skills-container--sm']}>
          <div className='section-title mb-xl'>
            <h2>
              <span>Technical skills</span> and technologies
            </h2>
            <p className={styles['skills-description']}>
              Besides general tools like <span>Git, Slack, Figma...</span> and
              skills <span>HTML, CSS</span> and <span>JavaScript</span> for
              front-end development these are my skills and abilities i have
              learned so far...
            </p>
          </div>
        </div>
        <div className='section-container'>
          {skills.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
