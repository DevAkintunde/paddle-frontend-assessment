import React, { useEffect, useState } from "react";
import { BoxHighlight } from "../components/blocks/BoxHighlight";
import { timeAgo } from "../components/functions/timeAgo";
import PageTitle from "../components/regions/PageTitle";

const GithubRoute = () => {
  const [starredRepo, setStarredRepo] = useState();
  const [pager, setPager] = useState(1);
  const currentDate = Date.now();
  const date30DaysAgo = new Date(currentDate - 30 * 24 * 60 * 60 * 1000);
  //convert 30 days ago date to version understood by github api
  let gitVersionedDateHolder = [];
  date30DaysAgo
    .toLocaleDateString()
    .split("/")
    .forEach((each) => {
      gitVersionedDateHolder.unshift(each);
    });
  let gitVersionedDate = gitVersionedDateHolder.join("-");
  // console.log(gitVersionedDate);
  useEffect(() => {
    let isMounted = true;
    const getGitRepo = async () => {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=created:>" +
          gitVersionedDate +
          "&sort=stars&order=desc&page=" +
          pager,
        { method: "GET" }
      );
      const json = await response.json();

      if (
        isMounted &&
        response.status === 200 &&
        json &&
        json.items &&
        json.items.length > 0
      ) {
        // console.log(json.items);
        setStarredRepo((prev) =>
          !prev ? json.items : [...prev, ...json.items]
        );
      }
    };
    getGitRepo();

    return () => {
      isMounted = false;
    };
  }, [gitVersionedDate, pager]);

  const loadMore = () => {
    setPager((prev) => prev + 1);
  };
  return (
    <>
      <PageTitle title={"Test GitHub Rest API"} />

      <div id="gitHubRepos" className="px-5 mx-auto max-w-5xl">
        {starredRepo ? (
          starredRepo.length && starredRepo.length > 0 ? (
            starredRepo.map((item) => {
              return (
                <div className="flex gap-3 mb-5 items-center" key={item.id}>
                  <img
                    src={item.owner.avatar_url}
                    alt={item.owner.login}
                    className="w-24"
                  />
                  <div className="grow">
                    <h3 className="mt-0 capitalize">{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="py-2">
                      <span className="inline-flex gap-2 pr-3">
                        <BoxHighlight
                          content={
                            item.stargazers_count > 999
                              ? Math.round(item.stargazers_count / 100) / 10 +
                                "k Stars"
                              : item.stargazers_count > 1
                              ? item.stargazers_count + "k Stars"
                              : "No star"
                          }
                        />
                        <BoxHighlight
                          content={
                            item.open_issues_count > 999
                              ? item.open_issues_count / 1000 + "k Issues"
                              : item.open_issues_count > 1
                              ? item.open_issues_count + "k Issues"
                              : "No Issue"
                          }
                        />
                      </span>
                      <span>
                        Submitted
                        <span className="px-1">{timeAgo(item.pushed_at)}</span>
                        by {item.owner.login}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="-20 mx-auto text-center">
              Oops! No starred Repos at the moment.
            </div>
          )
        ) : (
          <div className="p-20 mx-auto text-center">Loading...</div>
        )}
        {starredRepo && starredRepo.length && starredRepo.length > 0 ? (
          <div>
            <button
              className="block mx-auto bg-color-sec rounded-full  py-1 px-4"
              onClick={loadMore}
            >
              More
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default GithubRoute;
