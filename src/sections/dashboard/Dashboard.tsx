import { githubApiResponses } from "../../github_api_responses";

import styles from "./Dashboard.module.scss";
import brand from "./brand.svg";
import unlock from "./unlock.svg";
import lock from "./lock.svg";
import error from "./error.svg";
import check from "./check.svg";
import start from "./start.svg";
import watchers from "./watchers.svg";
import forks from "./repo-forked.svg";
import issueOpened from "./issue-opened.svg";
import pullRequest from "./pull-request.svg";

const isoToReadableDate = (lastUpdate: string): string => {
  const lastUpdateDate = new Date(lastUpdate);
  const currentDate = new Date();
  const diffDays = currentDate.getDate() - lastUpdateDate.getDate();

  if (diffDays === 0) {
    return "today";
  }

  if (diffDays > 30) {
    return "more than a month ago";
  }

  return `${diffDays} days ago`;
};

export function Dashboard() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <img src={brand} alt="" />
          <h1 className={styles.app__brand}>DevDash</h1>
        </section>
      </header>
      <section className={styles.container}>
        {githubApiResponses.map((widget) => (
          <article className={styles.widget} key={widget.repositoryData.id}>
            <header className={styles.widget_header}>
              <a
                className={styles.widget__title}
                href={widget.repositoryData.html_url}
                target="_blank"
                title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
                rel="noreferrer"
              >
                {widget.repositoryData.organization.login}/
                {widget.repositoryData.name}
              </a>
              {widget.repositoryData.private ? (
                <img alt="icon" src={lock} />
              ) : (
                <img alt="icon" src={unlock} />
              )}
            </header>
            <div className={styles.widget__body}>
              <div className={styles.widget__status}>
                <p>
                  Last update
                  {` ${isoToReadableDate(widget.repositoryData.updated_at)}`}
                </p>
                {widget.CiStatus.workflow_runs.length > 0 && (
                  <div>
                    {widget.CiStatus.workflow_runs[0].status === "completed" ? (
                      <img alt="icon" src={check} />
                    ) : (
                      <img alt="icon" src={error} />
                    )}
                  </div>
                )}
              </div>
              <p className={styles.widget__description}>
                {widget.repositoryData.description}
              </p>
            </div>
            <footer className={styles.widget__footer}>
              <div className={styles.widget__stat}>
                <img src={start} alt="" />
                <span>{widget.repositoryData.stargazers_count}</span>
              </div>

              <div className={styles.widget__stat}>
                <img src={watchers} alt="" />
                <span>{widget.repositoryData.watchers_count}</span>
              </div>
              <div className={styles.widget__stat}>
                <img src={forks} alt="" />
                <span>{widget.repositoryData.forks_count}</span>
              </div>
              <div className={styles.widget__stat}>
                <img src={issueOpened} alt="" />
                <span>{widget.repositoryData.open_issues_count}</span>
              </div>
              <div className={styles.widget__stat}>
                <img src={pullRequest} alt="" />
                <span>{widget.pullRequest.length}</span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
