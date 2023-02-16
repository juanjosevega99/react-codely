export interface DevDashConfig {
  github_access_token: string;
  widgets: {
    id: string;
    repository_url: string;
  }[];
}

export const config: DevDashConfig = {
  github_access_token: process.env
    .REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
  widgets: [
    {
      id: "30269435-3934-4ce8-bc15-78790de1f50f",
      repository_url: "https://github.com/juanjosevega99/roomie-backend",
    },
    {
      id: "50e1cf4f-9575-4ea3-9ee3-244b3d9b4664",
      repository_url: "https://github.com/juanjosevega99/roomie-backend",
    },
    {
      id: "51c18a8b-4313-4bf1-a02a-519946a4892f",
      repository_url: "https://github.com/juanjosevega99/roomie-backend",
    },
  ],
};
