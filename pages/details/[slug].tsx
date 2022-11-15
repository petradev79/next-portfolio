import { BiGitBranch, BiLink } from 'react-icons/bi';
import { client, urlFor } from '../../sanity';
import { ProjectInterface } from '../../types';
import Meta from '../../components/Meta';
import style from '../../styles/Details.module.css';
import MasonryLayout from '../../components/MasonryLayout';
import { type } from 'os';

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "project" && slug.current == $pageSlug][0] {
    _id,
    title,
    summary,
    description,
    slug,
    imageSection,
    imageGallery,
    destination,
    website,
    tags[] -> {
      _id,
      title,
      image,
      summary,
      source
    }
  }`;

  const project = await client.fetch(query, { pageSlug });

  return {
    props: {
      project,
    },
  };
};

const Details: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  return (
    <>
      <Meta title={'Details | ' + project.slug.current} />
      <section className={style.details}>
        <div className='section-container'>
          <div className='flex-section'>
            <div className='section-title'>
              <div className='section-slug'>{project.title}</div>
              <h2>{project.summary}</h2>
              <p>{project.description}</p>
              <div className='section-actions'>
                <a
                  href={project.website}
                  target='_blank'
                  className='btn btn--overlay-right color-primary'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <BiLink />
                  Website
                </a>
                <a
                  href={project.destination}
                  target='_blank'
                  className='btn btn--full color-white'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <BiGitBranch />
                  View code
                </a>
              </div>
            </div>
            <img
              src={urlFor(project.imageSection).width(500).url()}
              alt='Project main image'
              className='section-img'
            />
          </div>
        </div>
        <div className={style['details-container']}>
          <div className={style['details-wrapper']}>
            <h3>
              <span>Technologies and Tools</span> used in project
            </h3>
            <div className={style['grid-tags']}>
              {project.tags.map((tag) => (
                <div key={tag._id} className={style['details-tag']}>
                  <div className='flex-between'>
                    <div className={style['flex-tag']}>
                      <img
                        src={urlFor(tag.image).width(35).url()}
                        alt={tag.title}
                      />
                      <p>{tag.title}</p>
                    </div>
                    <a
                      href={tag.source}
                      key={tag._id}
                      className='btn btn--overlay-right color-accent'
                    >
                      <BiLink />
                      Read more
                    </a>
                  </div>
                  <p>{tag.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {project.imageGallery?.length && (
          <div className={style['details-container']}>
            <div className={style['details-wrapper']}>
              <h3>
                <span>{project.title}</span> image gallery
              </h3>
            </div>
            <MasonryLayout items={project.imageGallery} />
          </div>
        )}
      </section>
    </>
  );
};

export default Details;
