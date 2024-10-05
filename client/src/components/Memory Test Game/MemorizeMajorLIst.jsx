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

    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value in data) {
            setOutput(data[value]);
        } else {
            setOutput("Invalid number");
        }
    };

    return (
        <div>
            <h1 className='px-10 py-5 text-3xl font-bold  '>Memorize Major List</h1>
            <input

                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <p>Result: {output}</p>
        </div>
    );
}