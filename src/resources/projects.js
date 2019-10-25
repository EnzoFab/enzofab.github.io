import { DATA_SCIENCE, WEB, MOBILE, SOFTWARE } from "./topics";

const projects = [
  {
    id: 1,
    title: "First project",
    subtitle: "little case",
    topic: DATA_SCIENCE,
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu lectus bibendum porta sed a nunc. " +
      "Curabitur et lectus a justo congue congue non quis arcu. Proin et placerat sapien. Nunc vehicula vitae justo " +
      "eu consectetur. Ut quis nibh vestibulum, consequat quam id, consectetur nulla. Fusce vehicula massa et magna " +
      "lobortis, sed iaculis arcu convallis. Ut placerat tempor ullamcorper.\n" +
      "\n"
  },
  {
    id: 2,
    title: "Second project",
    subtitle: "little title",
    topic: DATA_SCIENCE,
    image:
      "data:image/png;base64,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"
  },
  {
    id: 3,
    title: "third project",
    subtitle: "little title",
    body: "Cause i'm a human after all, don't put your blame on me",
    topic: WEB,
    image:
      "data:image/jpeg;base64,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"
  },
  {
    id: 4,
    title: "Second project",
    subtitle: "little title",
    body: "Je ne suis qu'un texte voila tout",
    topic: SOFTWARE,
    keywords: [
      "project",
      "noob",
      "fine",
      "okay",
      "yes",
      "sir",
      "alright",
      "mecton"
    ]
  },
  {
    id: 5,
    title: "Second project",
    topic: MOBILE,
    subtitle: "little title",
    body: "Je ne suis qu'un texte voila tout"
  }
];

export default topic => {
  if (!topic) {
    return projects;
  }

  return projects.filter(
    project => project.topic && project.topic.id === topic.id
  );
};
