import { BiLink } from 'react-icons/bi';
import { client, urlFor } from '../../sanity';
import { ProjectInterface } from '../../types';
import Meta from '../../components/Meta';
import style from '../../styles/Details.module.css';

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "project" && slug.current == $pageSlug][0] {
    _id,
    title,
    summary,
    slug,
    imageSection,
    destination,
    website,
    tags[] -> {
      _id,
      title,
      image,
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
  console.log(project);

  return (
    <>
      <Meta title={'Details | ' + project.slug.current} />
      <section className={style.details}>
        <div className='section-container'>
          <div className='flex-section'>
            <div className='section-title'>
              <div className='section-slug'>{project.title}</div>
              <h2>{project.summary}</h2>
              <p>
                For me best way to improve your skills is building projects. It
                will challenge you to learn vital skills and translate your
                theoretical knowledge into actual code. Try to create your
                favorite website and if you are stuck with some problem and
                unable to find a solution on your own, join a community (Stack
                Overflow, Reddit) it is possible that someone had the same
                problem or ask questions.
              </p>
              <p>
                There is no end of learning in the IT industry. Some would say
                that there is no industry that is so dynamic and inviting as
                software development. As a developer, you probably want to{' '}
                <span>improve your skills</span> constantly and be the best
                developer you can possibly be.
              </p>
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
            <div className={style['details-tags']}>
              {project.tags.map((tag) => (
                <div key={tag._id} className={style['details-tag']}>
                  <div className='flex-center'>
                    <img
                      src={urlFor(tag.image).width(35).url()}
                      alt={tag.title}
                    />
                    <p>{tag.title}</p>
                  </div>
                  <a href={tag.source} key={tag._id}>
                    <BiLink />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* <div className={style['details-wrapper']}>
            <h3>
              <span>Technologies and Tools</span> used in project
            </h3>
            <div className={style['details-tags']}>
              {project.tags.map((tag) => (
                <div key={tag._id} className={style['details-tag']}>
                  <div className='flex-center'>
                    <img
                      src={urlFor(tag.image).width(45).url()}
                      alt={tag.title}
                    />
                    <p>{tag.title}</p>
                  </div>
                  <a href={tag.source} key={tag._id}>
                    <BiLink />
                  </a>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Details;
