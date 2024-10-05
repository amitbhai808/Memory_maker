import React, { useState, useEffect, useRef } from 'react';

export default function NumberGenerator() {
    const [formattedNumber, setFormattedNumber] = useState('');
    const [digitCount, setDigitCount] = useState(10);
    const [inputDigits, setInputDigits] = useState([]);
    const [timeLimit, setTimeLimit] = useState(30);
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const inputRefs = useRef([]);

    // Generate a random number based on selected digit count
    const generateNumber = () => {
        const randomNumber = Math.floor(Math.pow(10, digitCount - 1) + Math.random() * 9 * Math.pow(10, digitCount - 1)).toString();
        const formatted = randomNumber.match(/.{1,3}/g).join(" ");
        setFormattedNumber(formatted);
        setInputDigits(new Array(digitCount).fill(''));
        setTimeLeft(timeLimit);
    };

    // Handle input change for OTP-like fields
    const handleInputChange = (value, index) => {
        const updatedDigits = [...inputDigits];
        updatedDigits[index] = value.slice(-1); // Limit to 1 digit per box
        setInputDigits(updatedDigits);

        // Auto-focus to the next input box
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Timer countdown
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setFormattedNumber(''); // Clear the number when time is up
        }
    }, [timeLeft]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center space-y-4">
                <h1 className="text-2xl font-semibold mb-4">Generate a Number</h1>

                {/* Select Digit Count */}
                <label className="block mb-2 text-gray-700">
                    Select number of digits:
                </label>
                <input
                    type="number"
                    value={digitCount}
                    onChange={(e) => setDigitCount(Math.max(4, Math.min(20, Number(e.target.value))))}
                    className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-center"
                    placeholder="Enter number of digits"
                />

                {/* Timer Options */}
                <label className="block mb-2 text-gray-700">
                    Select timer:
                </label>
                <select
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                    className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-center"
                >
                    <option value={30}>30 seconds</option>
                    <option value={60}>60 seconds</option>
                    <option value={90}>90 seconds</option>
                    <option value={120}>120 seconds</option>
                </select>

                {/* Generate Button */}
                <button
                    onClick={generateNumber}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Generate Number
                </button>

                {/* Display formatted number */}
                {formattedNumber && (
                    <div className="bg-gray-100 mt-4 p-4 rounded-lg text-lg font-bold text-blue-600">
                        {formattedNumber}
                    </div>
                )}

                {/* Timer Display */}
                {formattedNumber && (
                    <div className="text-center mt-4 text-gray-800 font-semibold">
                        Time Left: {timeLeft} seconds
                    </div>
                )}

                {/* Input Blocks */}
                {formattedNumber && (
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {inputDigits.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                value={digit}
                                onChange={(e) => handleInputChange(e.target.value, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="w-10 h-10 border border-gray-300 text-center text-lg rounded-lg"
                                maxLength="1"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
