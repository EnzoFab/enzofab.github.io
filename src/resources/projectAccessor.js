import isEqual from "lodash.isequal";
import get from "lodash.get";
import uniqWith from "lodash.uniqwith";
import projects from "./projects";

export const filterProjects = (topic, keywords = []) => {
  if (!topic && keywords.length === 0) {
    return projects;
  }

  return projects.filter(project => {
    const filterTopic = topic
      ? get(project, "topic.id") === get(topic, "id")
      : true;

    const projectKeywords = get(project, "keywords", []);

    const keyWordsPresent = keywords.every(keyword => {
      return projectKeywords.some(projectKeyword => projectKeyword === keyword);
    });

    return filterTopic && keyWordsPresent;
  });
};

export const allTopics = (() =>
  uniqWith(projects.map(project => project.topic), isEqual))();
