import { generateText } from 'ai';
import { createMistral } from "@ai-sdk/mistral"

const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;

export const getResponse = async (prompt: string, model: string) => {

  const mistralBot = createMistral({ apiKey });

  const { text } = await generateText({
    model: mistralBot("mistral-large-latest"),
    prompt,
  });


  console.log('response', text);
};

