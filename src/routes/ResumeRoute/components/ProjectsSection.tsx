import type { FC } from 'react';
import Title from '../../../components/Title';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../types/project';
import styles from './ProjectsSection.module.scss';

export type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className={styles.Wrapper}>
      <Title icon={faRocket} title="Selected Projects" />
      {projects.map((project) => (
        <section key={project.name} className={styles.Item}>
          <header>
            <h3>
              {project.name}
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferer">
                  {project.url.replace(/^https?:\/\//, '')}
                </a>
              )}
            </h3>
            <h4>
              {project.role} · {project.dates}
            </h4>
          </header>
          {project.summary && <p className={styles.Summary}>{project.summary}</p>}
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet.text}>
                {bullet.text}
                {bullet.url && (
                  <a href={bullet.url} target="_blank" rel="noreferer" className={styles.BulletLink}>
                    link
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ProjectsSection;
