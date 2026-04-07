import { FEATURED_REPOS } from "@config";
import type { Repository } from "types";

const fetchRepoData = async (repo: string): Promise<Repository | null> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);

    if (!response.ok) {
      console.warn(
        `Skipping featured repo "${repo}" because GitHub returned ${response.status}.`
      );
      return null;
    }

    const repository: Repository = await response.json();
    return {
      name: repository.name,
      html_url: repository.html_url,
      description: repository.description || "",
      language: repository.language,
      stargazers_count: repository.stargazers_count,
      forks: repository.forks,
    };
  } catch (error) {
    console.warn(
      `Skipping featured repo "${repo}" because GitHub fetch failed.`,
      error
    );
    return null;
  }
};

export const getFeaturedRepos = async (): Promise<Repository[]> => {
  const data = await Promise.all(
    FEATURED_REPOS.map(async repo => {
      const repository = await fetchRepoData(repo);
      if (!repository?.name) return null;
      return repository;
    })
  );
  const results = data.filter(repo => repo !== null) as Repository[];
  // we are using public api to get the data, so in case we reach the limit we will use fake data
  if (results.length === 0 && process.env.NODE_ENV === "development") {
    return generateFakeData(FEATURED_REPOS.length);
  }
  return results;
};

const generateFakeData = (count: number): Repository[] => {
  return Array.from({ length: count }, (_, i) => {
    const name = `Repository ${i + 1}`;
    const url = `https://github.com/username/${name}`;
    const description = `This is the description for ${name}.`;
    const language = i % 2 === 0 ? "JavaScript" : "TypeScript";
    const stars = Math.floor(Math.random() * 100);
    const forks = Math.floor(Math.random() * 50);

    return {
      name,
      html_url: url,
      description,
      language,
      stargazers_count: stars,
      forks,
    };
  });
};
