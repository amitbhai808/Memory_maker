import React from 'react';
import PegImage from '/Users/amitpajiyar/Desktop/Memory Maker/client/src/Images/major system list.png';

export default function MajorSystem() {
    return (
        <>
            {/* Major System Section */}
            <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-800">
                The Major System: Unlocking Number Memory
            </h1>
            <div className="px-8 mb-12 text-gray-800 leading-relaxed">
                <p className="text-xl font-semibold mb-4">
                    <strong>Q:</strong> What is the major memory system, and can it help you memorize numbers?
                </p>
                <p className="text-lg mb-6">
                    <strong>Answer:</strong> The major system turns numbers into words, and words into unforgettable images. Top mnemonists use it for tasks involving cards and numbers. Read on to discover how it works!
                </p>

                <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                    The Major System for Memorizing Numbers and Cards
                </h3>
                <p className="text-lg mb-6">
                    The major system converts numbers into images. Used for tasks like memorizing phone numbers and credit cards, it's essential for high-level memory competitions alongside the PAO system.
                </p>

                <h3 className="text-3xl font-semibold text-blue-600 mb-4">
                    How the Major System Works
                </h3>
                <p className="text-lg mb-4">
                    Developed by Johann Winkelmann, the Major System translates numbers into vivid, memorable images. Here are the basic codes:
                </p>
                <ul className="list-disc ml-6 mb-8 text-lg text-gray-700">
                    <li>1 - t, d</li>
                    <li>2 - n</li>
                    <li>3 - m</li>
                    <li>4 - r</li>
                    <li>5 - l</li>
                    <li>6 - j, ch, sh, g</li>
                    <li>7 - k</li>
                    <li>8 - f, v</li>
                    <li>9 - p, b</li>
                    <li>0 - z, s</li>
                </ul>

                <h2 className="text-4xl underline font-semibold text-blue-800 mb-6">
                    Convert Number to Noun
                </h2>
                <img className="my-6 rounded shadow-lg" src={PegImage} alt="Major System List" />

                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    Peg List
                </h2>

                {/* Peg List Grid */}
                <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
                    <div className="grid grid-cols-5 gap-4">
                        {/* Column 1 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>0 - Sea</li>
                            <li>1 - Tea</li>
                            <li>2 - Hen</li>
                            <li>3 - Maa</li>
                            <li>4 - Hero</li>
                            <li>5 - Law</li>
                            <li>6 - Ash</li>
                            <li>7 - Cow</li>
                            <li>8 - Fox</li>
                            <li>9 - Bee</li>
                            <li>10 - Dosa</li>
                        </ul>
                        {/* Column 2 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>11 - Dadi</li>
                            <li>12 - Don</li>
                            <li>13 - Tom</li>
                            <li>14 - Door</li>
                            <li>15 - Tall</li>
                            <li>16 - Dog</li>
                            <li>17 - Daku</li>
                            <li>18 - TV</li>
                            <li>19 - Tap</li>
                            <li>20 - Nose</li>
                        </ul>
                        {/* Column 3 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>21 - Net</li>
                            <li>22 - Nani</li>
                            <li>23 - Nami</li>
                            <li>24 - Nari</li>
                            <li>25 - Nail</li>
                            <li>26 - Naag</li>
                            <li>27 - Neck</li>
                            <li>28 - Navy</li>
                            <li>29 - Noob</li>
                            <li>30 - Mouse</li>
                        </ul>
                        {/* Column 4 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>31 - Meat</li>
                            <li>32 - Money</li>
                            <li>33 - Mommy</li>
                            <li>34 - Merry</li>
                            <li>35 - Meal</li>
                            <li>36 - Magi</li>
                            <li>37 - Mic</li>
                            <li>38 - Movie</li>
                            <li>39 - Map</li>
                            <li>40 - Rose</li>
                        </ul>
                        {/* Column 5 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>41 - Road</li>
                            <li>42 - Rain</li>
                            <li>43 - Ram</li>
                            <li>44 - Error</li>
                            <li>45 - Rail</li>
                            <li>46 - Rich</li>
                            <li>47 - Rock</li>
                            <li>48 - Roof</li>
                            <li>49 - Rope</li>
                            <li>50 - Lazy</li>
                        </ul>
                        {/* Column 6 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>51 - Load</li>
                            <li>52 - Loan</li>
                            <li>53 - Lime</li>
                            <li>54 - Healer</li>
                            <li>55 - Lily</li>
                            <li>56 - Leech</li>
                            <li>57 - Lake</li>
                            <li>58 - Luffy</li>
                            <li>59 - Lip</li>
                            <li>60 - Cheese</li>
                        </ul>
                        {/* Column 7 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>61 - Cheat</li>
                            <li>62 - Chain</li>
                            <li>63 - Jam</li>
                            <li>64 - Chair</li>
                            <li>65 - Jail</li>
                            <li>66 - Gojo</li>
                            <li>67 - Check</li>
                            <li>68 - Chief</li>
                            <li>69 - Shop</li>
                            <li>70 - Kiss</li>
                        </ul>
                        {/* Column 8 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>71 - Kite</li>
                            <li>72 - Gun</li>
                            <li>73 - Gum</li>
                            <li>74 - Car</li>
                            <li>75 - Kill</li>
                            <li>76 - Cash</li>
                            <li>77 - Cake</li>
                            <li>78 - Coffee</li>
                            <li>79 - Cap</li>
                            <li>80 - Vase</li>
                        </ul>
                        {/* Column 9 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>81 - Food</li>
                            <li>82 - Van</li>
                            <li>83 - FM</li>
                            <li>84 - Fire</li>
                            <li>85 - Fail</li>
                            <li>86 - Fish</li>
                            <li>87 - Fake</li>
                            <li>88 - FIFA</li>
                            <li>89 - VIP</li>
                            <li>90 - Bus</li>
                        </ul>
                        {/* Column 10 */}
                        <ul className="bg-white rounded-lg shadow-md p-4  font-semibold">
                            <li>91 - Bat</li>
                            <li>92 - Pen</li>
                            <li>93 - Poem</li>
                            <li>94 - Bar</li>
                            <li>95 - Bell</li>
                            <li>96 - Bag</li>
                            <li>97 - Book</li>
                            <li>98 - Beef</li>
                            <li>99 - Baby</li>
                            <li>100 - Disease</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">Historical Dates Examples:</h3>
                <ul className="list-disc ml-6 mb-8 text-lg">
                    <li>1969: Neil Armstrong on Moon - 69 - Jeep</li>
                    <li>1979: Mother Teresa Nobel Prize - 79 - Cap</li>
                    <li>1776: America Independence - 17 76 - Daku, Kaju</li>
                    <li>1914: First World War - 14 - Door</li>
                    <li>1918: End of WWI - 18 - TV</li>
                    <li>1997: Princess Diana passed - 97 - Bike</li>
                </ul>
                <p className="text-lg mb-4">
                    Use these examples to convert your own historical dates into memorable images using the Major System!
                </p>
            </div>
        </>
    );
}