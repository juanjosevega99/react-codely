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
              <a href={widget.repositoryData.html_url}>
                {widget.repositoryData.private ? (
                  <img alt="icon" src={lock} />
                ) : (
                  <img alt="icon" src={unlock} />
                )}
              </a>
            </header>
          </article>
        ))}
      </section>
    </>
  );
}
