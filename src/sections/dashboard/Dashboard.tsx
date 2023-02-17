import { githubApiResponses } from "../../github_api_responses";

import styles from "./Dashboard.module.scss";
import brand from "./brand.svg";
import unlock from "./unlock.svg";
import lock from "./lock.svg";

export function Dashboard() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header_container}>
          <img src={brand} alt="" />
          <h1>DevDash</h1>
        </section>
      </header>
      <section className={styles.container}>
        {githubApiResponses.map((widget) => (
          <article className={styles.widget} key={widget.repositoryData.id}>
            <header>
              <a
                className={styles.widget_title}
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
            <div className={styles.widget_body}>
              <div className={styles.widget_status}>
                <p></p>

                  <div>
                  </div>

                
              </div>
              <p></p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
