import _ from "lodash";

export function makeRandomContentMessage(repos: any[]): string {
  const topicByLanguage = _.groupBy(repos, "language");
  const topicsByLanguage = _.orderBy(
    Object.keys(topicByLanguage).map((language) => ({
      language,
      topics: _.uniq(
        _.flatten(topicByLanguage[language].map((repo) => repo.topics))
      ),
    })),
    (topic) => topic.topics.length,
    "desc"
  );

  // random language and topics
  const { language, topics } = _.sample(topicsByLanguage);
  let content = `I need 10 study materials on the ${language} programming language`;

  if (topics.length) {
    content += `I need 10 study materials on the topics ${topics.join(
      ","
    )} preferably in the ${language} programming language`;
  }

  return content
}
