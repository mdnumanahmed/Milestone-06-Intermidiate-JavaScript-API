/* 
spinner show or hide করতে যা করণীয়
-> যেখানে ক্লিক করে ডাটা লোড করবে, সেখানে spinner show করবে।
-> যেখানে ডাটা লোড হওয়ার পর spinner hide করতে হবে।

spinner() তৈরি করতে isLoading প্যারামিটার নিয়ে ফাংশন কল করার সময় true অথবা false দিতে হবে।
*/

/* 
Show More বাটনের ফাংশনালিটি 
Best Way হলো -> ডাটা লোড করার সময় ফাংশনের প্যারামিটারে limit=10 সেট করে দেয়া।
আর সব ডাটা দেখানোর সময় বাকী ডাটার জন্য ব্যাকএন্ডে আরেকটি api কল করে দেয়া।

২য় পদ্ধতি
ডাটা লোড করে ২ ভাগে ভাগ করে, যেগুলো দেখানোর দরকার তার মধ্যে লুপ চালিয়ে দেখানো। আর বাকীগুলোকে একটি global variable এ স্টোর করে রাখা। যখন Show More বাটনে ক্লিক করবে, তখন আগের সাথে ঐ global ভ্যারিয়েবলে স্টোর করে রাখা ডাটা এপেন্ড করে দেয়া।  

*/

const showMoreBtn = document.getElementById("show-more");
const statusMsg = document.getElementById("status");
let item = 6;
let searchText = "iphone";

const loadPhones = async (searchText, item) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, item);
  } catch (error) {
    console.log(error);
  }
};

const displayPhones = (phones, item) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  if (phones.length > item) {
    showMoreBtn.classList.remove("hidden");
  } else {
    showMoreBtn.classList.add("hidden");
  }
  phones = phones.slice(0, item);
  phones.forEach((phone) => {
    const { brand, phone_name, slug, image } = phone;
    const item = document.createElement("div");
    const className = "card w-full bg-purple-400 text-purple-content shadow-xl";
    item.classList.add(...className.split(" "));
    item.innerHTML = `
        <figure class="p-5"><img src="${image}" alt="" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone_name}</h2>
            <p>Brand : ${brand}</p>
            <div class="card-actions justify-end">
                <label onclick="showDetails('${slug}')" for="detail-modal" class="btn">Show Details</label>
            </div>
        </div>
        `;
    phoneContainer.appendChild(item);
  });

  // stop spinner
  toggleSpinner(false);

  // no phone found msg
  if (phones.length < 1) {
    statusMsg.classList.remove("hidden");
  } else {
    statusMsg.classList.add("hidden");
  }
};

// Show Modal 
const showDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    const {name, brand, image, mainFeatures, releaseDate, others} = data.data
    const {chipSet, displaySize, memory, sensors, storage} = mainFeatures
    const {Bluetooth, GPS} = others
    console.log(data.data);
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.innerHTML = `
    <img class="mx-auto mb-4" src="${image}" alt="">
    <h3 class="font-bold text-lg">${name}</h3>
    <h3 class="font-bold text-md">Brand : ${brand}</h3>
    <p class="py-1">Release : ${releaseDate ? releaseDate : 'No release date found!'}</p>
    <p class="py-1">Sensors : ${sensors.map(sen => sen) } </p>
    <p class="py-1">Others : Bluetooth ${Bluetooth ? Bluetooth : 'Not found' } , GPS: ${GPS} </p>
    `
}


const searchField = document.getElementById("searchField");
searchField.addEventListener("keypress", (e) => {
  // start spinner
  toggleSpinner(true);
  if (e.code === "Enter") {
    e.preventDefault();
    searchText = e.target.value;
    e.target.value = "";
    loadPhones(searchText, item);
  }
});

showMoreBtn.onclick = () => {
  item = item + 3;
  loadPhones(searchText, item);
};

const toggleSpinner = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

loadPhones(searchText, item);


