import React, { useState } from 'react';

export default function MemorizeMajorList() {
    const data = {
        0: "Sea",
        1: "Tea",
        2: "Hen",
        3: "Maa",
        4: "Hero",
        5: "Law",
        6: "Ash",
        7: "Cow",
        8: "Fox",
        9: "Bee",
        10: "Dosa",
        11: "Dadi",
        12: "Don",
        13: "Tom",
        14: "Door",
        15: "Tall",
        16: "Dog",
        17: "Daku",
        18: "TV",
        19: "Tap",
        20: "Nose",
        21: "Net",
        22: "Nani",
        23: "Nami",
        24: "Nari",
        25: "Nail",
        26: "Naag",
        27: "Neck",
        28: "Navy",
        29: "Noob",
        30: "Mouse",
        31: "Meat",
        32: "Money",
        33: "Mommy",
        34: "Merry",
        35: "Meal",
        36: "Magi",
        37: "Mic",
        38: "Movie",
        39: "Map",
        40: "Rose",
        41: "Road",
        42: "Rain",
        43: "Ram",
        44: "Error",
        45: "Rail",
        46: "Rich",
        47: "Rock",
        48: "Roof",
        49: "Rope",
        50: "Lazy",
        51: "Load",
        52: "Loan",
        53: "Lime",
        54: "Healer",
        55: "Lily",
        56: "Leech",
        57: "Lake",
        58: "Luffy",
        59: "Lip",
        60: "Cheese",
        61: "Cheat",
        62: "Chain",
        63: "Jam",
        64: "Chair",
        65: "Jail",
        66: "Gojo",
        67: "Check",
        68: "Chief",
        69: "Shop",
        70: "Kiss",
        71: "Kite",
        72: "Gun",
        73: "Gum",
        74: "Car",
        75: "Kill",
        76: "Cash",
        77: "Cake",
        78: "Coffee",
        79: "Cap",
        80: "Vase",
        81: "Food",
        82: "Van",
        83: "FM",
        84: "Fire",
        85: "Fail",
        86: "Fish",
        87: "Fake",
        88: "FIFA",
        89: "VIP",
        90: "Bus",
        91: "Bat",
        92: "Pen",
        93: "Poem",
        94: "Bar",
        95: "Bell",
        96: "Bag",
        97: "Book",
        98: "Beef",
        99: "Baby",
        100: "Disease"
    };

    const [output, setOutput] = useState('');
    const [Score, setScore] = useState(0);
    const [quizOptions, setQuizOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [clickedOption, setClickedOption] = useState(null);
    const [feedback, setFeedback] = useState('');

    const getRandomKey = () => {
        const keys = Object.keys(data);
        return keys[Math.floor(Math.random() * keys.length)];
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    const generateQuizOptions = () => {
        const correctKey = getRandomKey();
        const correctValue = data[correctKey];

        // Prepare to generate options
        const options = new Set();
        options.add(correctKey); // Add the correct answer

        // Generate random incorrect options
        while (options.size < 4) {
            const randomKey = getRandomKey();
            options.add(randomKey);
        }

        const shuffledOptions = shuffleArray(Array.from(options)); // Convert Set to Array and shuffle it
        setQuizOptions(shuffledOptions); // Set the shuffled options
        setOutput(correctValue); // Set the output to the correct value
        setCorrectAnswer(correctKey); // Store the correct answer key
        setClickedOption(null); // Reset the clicked option
        setFeedback(''); // Reset feedback
    };


    const checkAnswer = (option) => {
        setClickedOption(option);

        if (option === correctAnswer) {
            setScore(Score+1)
            setFeedback('Correct!');
        } else {
            setFeedback(`Wrong! The correct answer is: ${correctAnswer}`);
        }
    };

    return (
        <>
            <div>
                <h1 className='mx-10 my-5 text-3xl font-bold'>Memorize Major List</h1>
            </div>

            {/* Quiz */}
            <div className='w-1/2 m-10'>
                <h2 className='text-2xl font-semibold my-10'>Quiz: Select the correct number:</h2>
                <div className='text-2xl font-semibold mx-5 flex justify-end'>Score : {Score}</div>
                <div className='w-full h-14 p-1 my-6 border-2 border-gray-500 text-4xl font-semibold justify-center items-center flex'>{output}</div>

                {/* Options */}
                <div className='grid grid-cols-2 gap-4'>
                    {quizOptions.map((option) => (
                        <div
                            key={option}
                            className={`w-72 h-12 m-4 border-2 translate-y-2 cursor-pointer border-gray-500 shadow-lg rounded-lg text-3xl font-bold flex justify-center items-center 
        ${clickedOption === option ? (option === correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-100'}`}
                            onClick={() => checkAnswer(option)} // Check answer on click
                        >
                            {option}
                        </div>
                    ))}
                </div>
                <button
                    onClick={generateQuizOptions}
                    className='mt-4 mb-6 bg-blue-500 text-white p-2 rounded-lg border-t'
                >
                    Generate Quiz Options
                </button>

                {/* Feedback message */}
                {feedback && <div className='text-xl font-semibold text-center mt-4'>{feedback}</div>}
            </div>
        </>
    );
}