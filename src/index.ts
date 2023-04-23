import _ from "lodash";
import { createChatCompletion } from "@/packages/openai/createChatCompletion";
import { getStarredRepos } from "./packages/github/getStarredRepos";
import { makeRandomContentMessage } from "@/helpers/makeRandomContentMessage";

const main = async () => {
  // get the last 30 starred repos
  const lastThirtyStarredRepos = await getStarredRepos("CarlosZoft");

  // create a random message based on the last 30 starred repos
  const content = makeRandomContentMessage(lastThirtyStarredRepos);

  // indicates 10 study materials
  const response = await createChatCompletion(content);

  console.log(response);
};

main().catch((error) => {
  console.error(error);
});
