import React, { useEffect, useState } from "react";

const GithubRoute = () => {
  const [starredRepo, setStarredRepo] = useState();
  useEffect(() => {
    let isMounted = true;
    const getGitRepo = async () => {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc",
        { method: "GET" }
      );
      const json = await response.json();

      if (isMounted && json && json.items && json.items.length > 0) {
        setStarredRepo(json);
      }
    };
    getGitRepo();

    return () => {
      isMounted = false;
    };
  }, []);

  console.log(starredRepo);
  return <div>GithubRoute</div>;
};

export default GithubRoute;
