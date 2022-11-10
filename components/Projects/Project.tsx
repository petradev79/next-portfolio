import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiGitBranch, BiLink } from 'react-icons/bi';
import { urlFor } from '../../sanity';
import { ProjectInterface } from '../../types';
import styles from '../../styles/Projects.module.css';

const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  const router = useRouter();
  const [postHovered, setPostHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      // href={`project/${project.slug.current}`}
      onClick={() => router.push(`/project/${project.slug.current}`)}
      className={styles.project}
    >
      <div className={styles['project-layer']}></div>
      {project.image && (
        <img
          className={styles['project-img']}
          src={urlFor(project.image).width(300).url()}
          alt='Project'
        />
      )}
      {postHovered && (
        <div className={styles['project-content']} style={{ height: '100%' }}>
          <div className='flex-between'>
            <h4>{project.slug.current}</h4>
            <div className={styles['project-actions']}>
              <div className={styles['project-link']}>
                <a
                  href={project.destination}
                  target='_blank'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <BiLink />
                </a>
              </div>
              <div className={styles['project-link']}>
                <a
                  href={project.website}
                  target='_blank'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <BiGitBranch />
                </a>
              </div>
            </div>
          </div>

          <div>
            <p>{project.summary}</p>
            <div className={styles['project-tags']}>
              {project.tags?.length < 3
                ? project.tags?.map((tag) => (
                    <span key={tag._id} className={styles['project-tag']}>
                      {tag.title}
                    </span>
                  ))
                : project.tags?.slice(0, 3).map((tag) => (
                    <span key={tag._id} className={styles['project-tag']}>
                      {tag.title}
                    </span>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
