import { useState } from 'react';
import { FaDownload, FaArrowUp } from 'react-icons/fa';
import { urlFor } from '../../sanity';
import { ProjectInterface } from '../../types';
import styles from '../../styles/Projects.module.css';

const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  const [postHovered, setPostHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      // onClick={() => navigate(`/pin-detail/${_id}`)}
      className={styles.project}
    >
      {project.mainImage && (
        <img
          className={styles['project-img']}
          src={urlFor(project.mainImage).width(250).url()}
          alt='user-post'
        />
      )}
      {postHovered && (
        <div className={styles['project-content']} style={{ height: '100%' }}>
          <div className='flex-between'>
            <div className='flex gap-2'>
              <a
                href={project.website}
                target='_blank'
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className='bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'
              >
                <FaDownload />
              </a>
            </div>
            <p>yrfh</p>
          </div>
          <div className='flex-between'>
            {project.destination?.slice(8).length > 0 ? (
              <a
                href={project.destination}
                target='_blank'
                className='bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md'
                rel='noreferrer'
              >
                {' '}
                <FaArrowUp />
                {project.destination?.slice(8, 17)}...
              </a>
            ) : undefined}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
