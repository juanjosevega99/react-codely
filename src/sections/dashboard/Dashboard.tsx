import { githubApiResponses } from "../../github_api_responses";
import { ReactComponent as Lock } from "./lock.svg";
import { ReactComponent as Unlock } from "./unlock.svg";

export function Dashboard() {
  return (
    <>
      <header>
        <section>
          <h1>DevDash</h1>
        </section>
      </header>
      <section>
        {githubApiResponses.map((widget) => (
          <article>
            <header>
              <a href="">
                {widget.repositoryData.private ? <Lock /> : <Unlock />}
              </a>
            </header>
          </article>
        ))}
      </section>
    </>
  );
}
