import { getResponse } from "../../utils/getResponse";

export const generateResponse = async (prompt: string) => {
  const aiModel = 'mistralai/Mixtral-8x7B-Instruct-v0.1';
  console.log(prompt);

  const response1 = await getResponse(prompt, aiModel);
  console.log(response1);

  const response = await fetch('/api/mistral', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      model: aiModel,
    }),
  });

  /*
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  // This data is a ReadableStream
  const data = response.body;
  console.log(data);
  if (!data) {
    return;
  }

  const onParseMistral = (event: any) => {
    let response = '';
    if (event.type === 'event') {
      const data = event.data;
      try {
        response = JSON.parse(data).generated_text;
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // https://web.dev/streams/#the-getreader-and-read-methods
  const reader = data.getReader();
  const decoder = new TextDecoder();
  // const parser = createParser(onParseMistral);
  let done = false;
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);
    //parser.feed(chunkValue);
  } */
};

