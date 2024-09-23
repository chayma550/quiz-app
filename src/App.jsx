import { useEffect, useState,useMemo } from 'react';
import './App.css';
import  Trivia  from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const [username, setUsername] = useState(null);
const [questionNumber,setQuestionNumber]=useState(1);
const[timeOut,setTimeOut]=useState(false);
const [earned, setEarned] = useState("$ 0");

const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },

  {
    id: 4,
    question: "What is the primary ingredient in traditional French béchamel sauce?",
    answers: [
      {
        text: "Chicken broth",
        correct: false,
      },
      {
        text: "Fish stock",
        correct: false,
      },
      {
        text: "Tomato",
        correct: false,
      },
      {
        text: " Milk",
        correct: true,
      },
    ],
  },


  {
    id: 5,
    question: "What platform is the most often used for video game live streaming?",
    answers: [
      {
        text: "Twitch",
        correct: true,
      },
      {
        text: "YouTube",
        correct: false,
      },
      {
        text: "Facebook Live",
        correct: false,
      },
      {
        text: "Vimeo",
        correct: false,
      },
    ],
  },



  {
    id: 5,
    question: "What feature did Instagram introduce in 2016 to compete with Snapchat?",
    answers: [
      {
        text: "Reels",
        correct: false,
      },
      {
        text: "Stories",
        correct: true,
      },
      {
        text: "IGTV",
        correct: false,
      },
      {
        text: "Live Streaming",
        correct:false,
      },
    ],
  },

  {
    id: 6,
    question: "How many bones are there in the adult human body?",
    answers: [
      {
        text: " 186",
        correct: false,
      },
      {
        text: "206",
        correct: true,
      },
      {
        text: "226",
        correct: false,
      },
      {
        text: "246",
        correct:false,
      },
    ],
  },

  {
    id: 7,
    question: "In which novel does the character Atticus Finch appear?",
    answers: [
      {
        text: "1984",
        correct: false,
      },
      {
        text: "The Great Gatsby",
        correct: true,
      },
      {
        text: "Catcher in the Rye",
        correct: false,
      },
      {
        text: "To Kill a Mockingbird",
        correct:true,
      },
    ],
  },

  {
    id: 8,
    question: "What is a traditional serving size of an Italian espresso?",
    answers: [
      {
        text: "2 oz",
        correct: false,
      },
      {
        text: "1 oz",
        correct: true,
      },
      {
        text: "3 oz",
        correct: false,
      },
      {
        text: "4 oz",
        correct:false,
      },
    ],
  },

  {
    id: 9,
    question: "What parent company owns both Instagram and WhatsApp?",
    answers: [
      {
        text: "Google",
        correct: false,
      },
      {
        text: "Apple",
        correct: false,
      },
      {
        text: "Facebook (now Meta) ",
        correct: true,
      },
      {
        text: "Amazon",
        correct:false,
      },
    ],
  },

  {
    id: 10,
    question: "What is the main function of red blood cells?",
    answers: [
      {
        text: "Carrying oxygen",
        correct: true,
      },
      {
        text: "Fighting infections",
        correct: false,
      },
      {
        text: " Clotting blood",
        correct: false,
      },
      {
        text: "Regulating body temperature",
        correct:false,
      },
    ],
  },
  {
    id: 11,
    question: "What is the medical term for high blood pressure?",
    answers: [
      {
        text: "Hypotension",
        correct: false,
      },
      {
        text: "Hypertension",
        correct: true,
      },
      {
        text: "Hyperglycemia",
        correct: false,
      },
      {
        text: " Acidosis",
        correct:false,
      },
    ],
  },
  {
    id: 12,
    question: "What is an otoscope used for?",
    answers: [
      {
        text: " Examining the mouth",
        correct: false,
      },
      {
        text: "Checking blood pressure",
        correct: false,
      },
      {
        text: " Looking into the ear",
        correct: true,
      },
      {
        text: " Performing an endoscopy",
        correct:false,
      },
    ],
  },
  {
    id: 13,
    question: "How many bones are there in the adult human body?",
    answers: [
      {
        text: "186",
        correct:false,
      },
      {
        text: "246",
        correct: false,
      },
      {
        text: " 226",
        correct: false,
      },
      {
        text: "206",
        correct:true,
      },
    ],
  },
  {
    id: 14,
    question: "What is the normal range for human body temperature in Celsius?",
    answers: [
      {
        text: "34-35",
        correct: false,
      },
      {
        text: "35-36",
        correct: false,
      },
      {
        text: "36-37",
        correct: true,
      },
      {
        text: "37-38",
        correct:false,
      },
    ],
  },
  {
    id: 15,
    question: "What type of fish is known for cleaning algae in aquariums?",
    answers: [
      {
        text: "Betta",
        correct: false,
      },
      {
        text: "Guppy",
        correct: false,
      },
      {
        text: "  Angelfish",
        correct: false,
      },
      {
        text: "Pleco ",
        correct:true,
      },
    ],
  },
];


const moneyPyramid = useMemo(
  () =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),
  []
);

useEffect(() => {
  questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1)?.amount);
}, [questionNumber, moneyPyramid]);
  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
    
  );
}

export default App;
