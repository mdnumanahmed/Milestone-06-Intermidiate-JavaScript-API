Programming Hero

API - 1:

API:
const person = {
found: 2,
message: "Found 2 persons",
result: [
{
name: {
common: "John",
fullName: ["John", "Doe"]
},
age: 32,
isMale: false,
address: {
street: "13/A St Joseph",
house: 10,
},
},
{
name: {
common: "Humayoun",
fullName: ["Humayoun", "Kabir"]
},
age: 33,
isMale: false,
address: {
street: "13/A St Lucia",
house: 11,
},
},
]
};
Your task:
1. Try to build like the sample UI
Sample UI:

========================================================
Programming Hero
API - 2:
API:
const data = [
{
_id: "60795d4e0489a32f948c4167",
name: "Honda Sedan",
price: "132",
description:
"Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags,
Transmission: Automatic",
imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
},
{
_id: "60795e440489a32f948c4168",
name: "MitoSedan",
price: "221",
description:
"Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags,
Transmission: Manual",
imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
},
{
_id: "60795fc20489a32f948c4169",
name: "Isuzu Tacoma",
price: "105",
description:
Programming Hero
"Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8
Bags, Transmission: Manual",
imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
},
{
_id: "6079615d0489a32f948c416a",
name: "Chevrolet Crossover",
price: "434",
description:
"Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags,
Transmission: Automatic",
},
];
Your task:
2. Try to build like the sample UI
Sample UI:

==================================================
Programming Hero
API - 3:
API Documentation Link:
https://restcountries.com/
Your task:
1. Upgrade the rest countries for the following tasks:
a. Filter your rest countries by -
i. Region
ii. Capital city
iii. Language
Sample UI:

======================================================
Programming Hero
API - 4:
API Documentation Link: https://shrtco.de/tools/shorten
Your task:
1. Design a simple UI having an input field and button called “Shorten it!”
2. Anyone will be able to shorten any URL ( valid url ) after clicking the button.
3. Add an eye icon as a button in your design, after clicking the eye button, see a list of their
shortened links. You can show these in modal or anything.
4. Add another button called ”Copy link” , Copy the shortened link to your clipboard through a
single click
a. Copy text in your clipboard resource:
https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
5. Show an error message when the “Shorten it!” is clicked if:
a. The input field is empty
Sample UI:
Example:
Link before shorten: https://github.com/ProgrammingHero1?tab=repositories
API response:
https://api.shrtco.de/v2/shorten?url=https://github.com/ProgrammingHero1?tab=repositories
Shortened link-1: https://shrtco.de/V6tsTq


===========================================================
Programming Hero
API - 5:
API Documentation Link:
https://api.adviceslip.com/
Your task:
1. Explore the API and do any design.
2. Show any random advice for every time reload.
3. Show advice by ID.
4. Query advices for any keyword
Sample UI:
Sample response:
Programming Hero
Example:
Link-1: https://api.adviceslip.com/advice
Link-2: https://api.adviceslip.com/advice/search/own


===================================================
API - 6:
API Documentation Link:
https://dictionaryapi.dev/
Your task:
1. Explore the API and do any design.
2. Search for any valid word
3. Show error message for invalid word search (from response for invalid word)
4. Show the phonetic.
5. Play the audio file for the word if it is available
6. Show the synonyms and antonyms for the first partOfSpeech of the word if available
7. Explore more.
Sample UI:
Programming Hero
Sample Response:
Example:
Link-1: https://api.dictionaryapi.dev/api/v2/entries/en/hello
Link-2: https://api.dictionaryapi.dev/api/v2/entries/en/boy
Link-3: https://api.dictionaryapi.dev/api/v2/entries/en/keyboard


==============================================================
Programming Hero
API - 7 (a): Advanced
API Documentation Link:
https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#list-users
Your task:
1. Explore the API & build UI & design anything by yourself for the following tasks
a. Show first 10 users name
b. Show the 10 users github photo
c. For every 10 user, show their 2 followers github photo (avatar_url) -> [2nd api call
needed here]
d. Show 10 users github repository link. (find the link from your API)
2. You have more options in this API, explore more by yourself.
Example:
Link with 10 users max in a page: https://api.github.com/users?per_page=10


==============================================================
API - 7(b): Advanced
API Documentation Link:
https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
Your task:
1. Explore the API & build UI & design anything by yourself for the following tasks
a. Show user name, blog name, bio
b. Show github photo
c. Show first 2 followers details -> [2nd api call needed here]
d. Show location, total followers numbers, following numbers, location.
e. Show dates of
i. first joined,
Programming Hero
ii. last updated anything in github.
2. You have more options in this API, explore more by yourself.
Sample UI:
Example:
Link: https://api.github.com/users/programminghero1
More to explore: https://api.github.com/users/ProgrammingHero1/followers?per_page=5