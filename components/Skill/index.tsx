import { urlFor } from '../../sanity';
import { SkillInterface } from '../../types';
import styles from '../../styles/Skills.module.css';

const Skill: React.FC<{ skill: SkillInterface }> = ({ skill }) => {
  const generateMarks = (marks: string[]) => {
    return marks.join(' ');
  };

  return (
    <div className={styles.skill}>
      <div className={styles['skill-content']}>
        <h3>
          <img
            src={urlFor(skill.tool.image).width(80).url()}
            alt={skill.tool.title}
          />
          {skill.title}
        </h3>
        <h4>{skill.tool.summary}</h4>
        {skill.description.map((desc) => (
          <p key={desc._key}>
            {desc.children.map((span) => (
              <span className={generateMarks(span.marks)} key={span._key}>
                {span.text}
              </span>
            ))}
          </p>
        ))}
      </div>
      <div className={styles['skill-img']}>
        <img src={urlFor(skill.image).width(500).url()} alt={skill.title} />
      </div>
    </div>
  );
};

export default Skill;
