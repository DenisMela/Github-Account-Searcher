import React, { useContext } from "react";
import PropTypes from "prop-types";
import RepoItem from "./ReposItem";
import GithubContext from "../../context/github/githubContext";

const Repos = ({ repos }) => {
  const githubContext = useContext(GithubContext);

  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
