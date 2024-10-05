import React from 'react';

export default function MemoryCatalogue
    () {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-lg shadow-lg text-white">
            <h2 className='font-extrabold text-4xl mb-4 text-center'>Mental Catalogue</h2>
            <p className='text-lg leading-relaxed text-gray-200'>
                The Mental Catalogue is a memory technique designed to help you remember numbers by associating them with vivid mental images. Instead of recalling random digits, this method encourages you to create mental “pictures” that correspond to each number. By linking each number to a specific image, you can build a story or “catalogue” in your mind, making it easier to recall long sequences of numbers.
            </p>
            <p className='text-lg leading-relaxed text-gray-200 mt-4'>
                This approach leverages the mind’s natural ability to remember images over abstract information. With practice, the Mental Catalogue method can help you memorize numbers more quickly and with lasting accuracy, whether it’s for everyday tasks or studying.
            </p>

            <div className="grid grid-cols-12 gap-6 p-10 bg-gray-50 rounded-lg shadow-lg">
                {/* Rhyme Method Section */}
                <div className="col-span-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2">Rhyme Method</h3>
                    <div className="space-y-2 text-gray-600">
                        <h4 className="mx-1 font-semibold">1. Sun</h4>
                        <h4 className="mx-1 font-semibold">2. Shoe</h4>
                        <h4 className="mx-1 font-semibold">3. Tree</h4>
                        <h4 className="mx-1 font-semibold">4. Door</h4>
                        <h4 className="mx-1 font-semibold">5. Wife / Hive</h4>
                        <h4 className="mx-1 font-semibold">6. Vicks</h4>
                        <h4 className="mx-1 font-semibold">7. Heaven</h4>
                        <h4 className="mx-1 font-semibold">8. Plate</h4>
                        <h4 className="mx-1 font-semibold">9. Wine</h4>
                        <h4 className="mx-1 font-semibold">10. Hen</h4>
                    </div>
                </div>

                {/* Shape Method Section */}
                <div className="col-span-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">Shape Method</h3>
                    <div className="space-y-2 text-gray-600">
                        <h4 className="mx-1 font-semibold">11. Stick</h4>
                        <h4 className="mx-1 font-semibold">12. Duck</h4>
                        <h4 className="mx-1 font-semibold">13. Heart</h4>
                        <h4 className="mx-1 font-semibold">14. Chair</h4>
                        <h4 className="mx-1 font-semibold">15. Hook</h4>
                        <h4 className="mx-1 font-semibold">16. Hockey Stick</h4>
                        <h4 className="mx-1 font-semibold">17. Street Light</h4>
                        <h4 className="mx-1 font-semibold">18. Spectacles</h4>
                        <h4 className="mx-1 font-semibold">19. Lollipop</h4>
                        <h4 className="mx-1 font-semibold">20. Bat and Ball</h4>
                    </div>
                </div>

                {/* Value Method Section */}
                <div className="col-span-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Value Method</h3>
                    <div className="space-y-2 text-gray-600">
                        <h4 className="mx-1 font-semibold">21. 1 King</h4>
                        <h4 className="mx-1 font-semibold">22. 2 Couples</h4>
                        <h4 className="mx-1 font-semibold">23. 3 Monkeys of Gandhi</h4>
                        <h4 className="mx-1 font-semibold">24. 4 Wheels of a Car</h4>
                        <h4 className="mx-1 font-semibold">25. 5 Fingers</h4>
                        <h4 className="mx-1 font-semibold">26. Sixer in Cricket</h4>
                        <h4 className="mx-1 font-semibold">27. 7 Rainbow Colours</h4>
                        <h4 className="mx-1 font-semibold">28. 8 Legs of an Octopus</h4>
                        <h4 className="mx-1 font-semibold">29. 9 Planets</h4>
                        <h4 className="mx-1 font-semibold">30. 10 Heads of Ravana</h4>
                    </div>
                </div>
            </div>

            {/* Alphabet Method Section */}
            <div className="bg-white p-10 rounded-lg shadow-lg text-gray-700 mt-8">
                <h3 className="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Alphabet Method</h3>
                <div className='grid grid-cols-4 gap-4 text-lg leading-relaxed'>
                    <div className='space-y-2 text-gray-600'>
                        <h4 className="mx-1 font-semibold">31. Aeroplane</h4>
                        <h4 className="mx-1 font-semibold">32. Bat</h4>
                        <h4 className="mx-1 font-semibold">33. Car</h4>
                        <h4 className="mx-1 font-semibold">34. Dog</h4>
                        <h4 className="mx-1 font-semibold">35. Elephant</h4>
                        <h4 className="mx-1 font-semibold">36. Fire</h4>
                        <h4 className="mx-1 font-semibold">37. Gun</h4>
                        <h4 className="mx-1 font-semibold">38. Heater</h4>
                        <h4 className="mx-1 font-semibold">39. Ink</h4>
                        <h4 className="mx-1 font-semibold">40. Jackfruit</h4>
                    </div>
                    <div className='space-y-2 text-gray-600'>
                        <h4 className="mx-1 font-semibold">41. Kite</h4>
                        <h4 className="mx-1 font-semibold">42. Ladder</h4>
                        <h4 className="mx-1 font-semibold">43. Monkey</h4>
                        <h4 className="mx-1 font-semibold">44. Newspaper</h4>
                        <h4 className="mx-1 font-semibold">45. Oil</h4>
                        <h4 className="mx-1 font-semibold">46. Post Box</h4>
                        <h4 className="mx-1 font-semibold">47. Queen</h4>
                        <h4 className="mx-1 font-semibold">48. Railway Station</h4>
                        <h4 className="mx-1 font-semibold">49. Shoes</h4>
                        <h4 className="mx-1 font-semibold">50. Telephone</h4>
                    </div>
                </div>
            </div>

            {/* eample  */}
            <div className="p-5 mt-10 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Memorization Techniques</h2>
                <p className="mt-5 text-gray-700">
                    Memorizing lists can be a challenge, but with the right techniques, it can become an easy and enjoyable task! One effective method is to associate items on your list with vivid mental images.
                </p>

                <h3 className="text-3xl font-bold my-4 text-blue-600">Example List:</h3>
                <p className="text-gray-700 mb-2">To memorize the following list:</p>

                <ul className="list-disc list-inside space-y-2">
                    <li className="text-gray-800">1. Cat</li>
                    <li className="text-gray-800">2. Dog</li>
                    <li className="text-gray-800">3. House</li>
                    <li className="text-gray-800">4. Car</li>
                    <li className="text-gray-800">5. Tree</li>
                    <li className="text-gray-800">6. Chair</li>
                    <li className="text-gray-800">7. Book</li>
                    <li className="text-gray-800">8. School</li>
                    <li className="text-gray-800">9. Friend</li>
                    <li className="text-gray-800">10. Food</li>
                </ul>

                <p className="text-gray-800 mt-5">
                    To memorize the list above, you can create vivid mental images for each item. For example, visualize a cat sitting in the sun, or a dog wearing flashy shoes. The more bizarre or funny the image, the better it will stick in your memory!
                </p>

                <h3 className="text-xl font-bold mt-5 text-blue-600">Using Rhyme Method:</h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="text-gray-800">🌞 Cat is falling from the sun.</li>
                    <li className="text-gray-800">👟 Dog is selling shoes.</li>
                    <li className="text-gray-800">🏡 House is on the tree.</li>
                    <li className="text-gray-800">🚗 Car has an awesome door on it.</li>
                    <li className="text-gray-800">🌳 Beehive is on the tree.</li>
                    <li className="text-gray-800">🪑 Vicks are on the chair.</li>
                    <li className="text-gray-800">📚 Books are falling from heaven.</li>
                    <li className="text-gray-800">🏫 School is written on a plate.</li>
                    <li className="text-gray-800">👫 Friends are swimming in wine.</li>
                    <li className="text-gray-800">🍕 We serve hen as food.</li>
                </ul>

                <p className="text-gray-800 mt-5">
                    You can create vivid mental images for each item in the list to enhance retention. For example, when you remember that the first item is a cat, visualize a cat falling from the sun. This playful imagery helps reinforce the connection, making it easier to recall that the first item is indeed a cat.
                </p>

                <p className="text-gray-800 mt-5">
                    For the second item, picture a dog in a marketplace selling shoes. This quirky scene not only makes it memorable but also adds a layer of humor that aids recall. You can think of the dog barking out the prices as customers gather around, intrigued by the unusual sight.
                </p>

                <p className="text-gray-800 mt-5">
                    The third item, a house sitting high in a tree, invokes an image of adventure and imagination, reminiscent of childhood tales. This can help you remember that a house is indeed the third item in your list.
                </p>

                <p className="text-gray-800 mt-5">
                    Next, imagine a flashy car with an awesome door opening in a dramatic way, captivating everyone's attention. This vivid scene keeps the fourth item, the car, fresh in your mind.
                </p>

                <p className="text-gray-800 mt-5">
                    For the fifth item, think about a beehive nestled in the branches of a tree, buzzing with activity. This image can reinforce that a beehive is the next item on your list.
                </p>

                <p className="text-gray-800 mt-5">
                    Visualizing Vicks (a popular mentholated topical ointment) sitting comfortably on a chair creates a humorous image, linking the sixth item to its position in your mind.
                </p>

                <p className="text-gray-800 mt-5">
                    The seventh item involves books falling gracefully from the sky like leaves in autumn. This whimsical idea creates a memorable mental image for recalling the books.
                </p>

                <p className="text-gray-800 mt-5">
                    Picture a school name written on a large plate, perhaps as a part of an art installation or a unique decoration. This creative imagery connects the school with its placement in the list.
                </p>

                <p className="text-gray-800 mt-5">
                    For the ninth item, visualize friends happily swimming in a pool of wine, creating a lighthearted and amusing association to help you remember the camaraderie implied by the word "friends."
                </p>

                <p className="text-gray-800 mt-5">
                    Finally, imagine a feast where hens are served as food, making the last item both delicious and memorable. This scene can evoke sensory experiences, making it easier to recall.
                </p>

                <p className="text-gray-800 mt-5">
                    By creating these vivid mental images for each item, you engage your imagination and enhance your memory retention. Try recalling the list using these images; it can significantly improve your ability to remember the sequence and the items within it!
                </p>

                <h3 className="text-2xl font-bold mt-5 text-blue-600">Additional Tips:</h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li className="text-gray-800">✔️ Break information into smaller chunks.</li>
                    <li className="text-gray-800">✔️ Use humor to create funny associations.</li>
                    <li className="text-gray-800">✔️ Review your list regularly to reinforce memory.</li>
                    <li className="text-gray-800">✔️ Engage multiple senses: speak the words, write them down, or draw images.</li>
                </ul>
            </div>
        </div>
    );
}