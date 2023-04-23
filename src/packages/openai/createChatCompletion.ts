import { openai } from "@/packages/openai/api";

export async function createChatCompletion(content: string): Promise<string> {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content,
        },
      ],
    });
    return completion.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
    return "I don't have study materials today";
  }
}
