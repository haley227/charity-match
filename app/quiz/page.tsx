'use client';

import { Suspense, useEffect, useState } from 'react';
import QuizPlaceholder from '@/components/quiz-placeholder';
import { Nav } from '@/components/global/Nav';
import { GiftTypeStep, CharityCategory } from './steps';
import { generateResponse } from './steps/SubmitQuiz';

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export interface Answers {
  giftType: string[];
  charityType: string[];
  [key: string]: string | string[];
}

export default function Quiz() {
  const [answers, setAnswers] = useState<Answers>({
    giftType: [],
    charityType: [],
    zipcode: "",
    radius: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (typeof answers[name] === 'object') {
      const checked = (event.target as HTMLInputElement).checked;
      const arrayValue = checked ? [...answers[name], value] : answers[name].filter((v: string) => v !== value);

      setAnswers({
        ...answers,
        [name]: arrayValue,
      });
    } else {
      setAnswers({
        ...answers,
        [name]: value,
      });
    }
  };

  const formatPrompt = (answers: Answers): string => {
    const { giftType, charityType, zipcode, radius } = answers;
    const response = `
      Can you give me 5 names of charities that are ${giftType.join(', ')} in ${zipcode} within ${radius} miles that are focused on ${charityType.join(', ')}?`;
    return response;
  };

  const handleSubmit = async () => {
    const prompt = formatPrompt(answers);

    generateResponse(prompt);
  }

  const [activeTab, setActiveTab] = useState(0);
  const [generatedResponse, setgeneratedResponse] = useState<string>('');
  const formElements = [
    <GiftTypeStep answers={answers} handleChange={handleChange} />,
    <CharityCategory answers={answers} handleChange={handleChange} />
  ];

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <div>
      <Nav />
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Find the charity that&#39;s right for you
        </h1>
        <Suspense fallback={<QuizPlaceholder />}>
          <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="text-center">
                {
                    formElements[activeTab]
                }
              {activeTab !== 0 && (<button onClick={() => setActiveTab(prev => prev - 1)} className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>)}
              {
                activeTab === formElements.length - 1 ? (
                  <button onClick={handleSubmit} className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                ) : (
                  <button onClick={() => setActiveTab(prev => prev + 1)} className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Next
                  </button>
                )
              }
            </div>
          </div>
        </Suspense>
       </main>
    </div>
  )
}
