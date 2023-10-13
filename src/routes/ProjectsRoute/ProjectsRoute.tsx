import type { FC } from 'react';
import useFeaturedRepos from './hooks/useFeaturedRepos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faSpinner, faWarning } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectsRoute.module.scss';

export type ProjectsRouteProps = {};

const ProjectsRoute: FC<ProjectsRouteProps> = () => {
  let { isLoading, isError, error, data, refetch } = useFeaturedRepos();
  const hndRetry = () => refetch();
  return (
    <div className={styles.Wrapper}>
      <h2>Projects</h2>
      {isLoading && (
        <div className={styles.Loading}>
          <FontAwesomeIcon icon={faSpinner} size="5x" spin />
          <span>Loading projects...</span>
        </div>
      )}
      {!isLoading && isError && (
        <div className={styles.Error}>
          <h3>
            <FontAwesomeIcon icon={faWarning} />
            {' '}
            There was a problem loading the projects:
          </h3>
          <pre>
            {error?.message}
          </pre>
          <button onClick={hndRetry}>Retry</button>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={styles.List}>
          {data.map((repo) => (
            <div key={repo.id} className={styles.ListItem}>
              <h3>
                <a href={repo.html_url} target="_blank">
                  {repo.name} <FontAwesomeIcon icon={faExternalLink} className={styles.ListItemIcon} />
                </a>
              </h3>
              <div>
                {repo.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsRoute;