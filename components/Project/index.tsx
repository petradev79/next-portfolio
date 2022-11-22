import Link from 'next/link';
import { useState } from 'react';
import { BiGitBranch, BiLink } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import { urlFor } from '../../sanity';
import { ProjectInterface } from '../../types';
import styles from '../../styles/Projects.module.css';

const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  const [postHovered, setPostHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      className={styles.project}
    >
      {project.imageCard && (
        <img
          className={styles['project-img']}
          src={urlFor(project.imageCard).width(280).url()}
          alt='Project'
        />
      )}
      <AnimatePresence>
        {postHovered && (
          <motion.div
            className={styles['project-content']}
            style={{ height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='flex-between'>
              <h3>{project.title}</h3>
              <div className={styles['project-actions']}>
                <div className={styles['link-wrapper']}>
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
                  <span>website</span>
                </div>
                <div className={styles['link-wrapper']}>
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
                  <span>code</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={`details/${project.slug.current}`}
                className='btn btn--overlay-left color-white'
              >
                View more
                <BsArrowRight />
              </Link>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
