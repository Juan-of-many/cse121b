/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "John Boger",
    photo: "images/dolphin_statue.jpg",
    favoriteFoods: ["Strawberries", "Apple Pie", "Chicken Power Bowls", "Spaghetti", "Teriyaki Chicken"],
    hobbies: ["Origami", "Rock Climbing", "Storytelling", "Reading", "Kayaking"],
    placesLived: []
};

//person.age = 25;  // Guide for using dot notation
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Alaska",
        length: "2 years"
    },
    {
        place: "Arizona",
        length: "1 year"
    },
    {
        place: "Montana",
        length: "7 years"
    },
    {
        place: "Oregon",
        length: "5 years"
    },
    {
        place: "Rhode Island",
        length: "3 years"
    }
);
  //This is my previous attempt at a creative solution, but I couldn't figure out how to get it to work.
    //{
    //     place: ["Alaska", "Arizona", "Montana", "Oregon", "Rhode Island"],
    //     length: ["2 years", "1 year", "7 years", "5 years", "3 years"]
    // }
//array.push({ name: 'John' }, { name: 'Jane' }, { name: 'Alice' });
//alternate method shown above

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
//Using "textContent" will return the complete text content, including the hidden text. However, using "innerText" will only return the visible text content, excluding the hidden text.

/* Photo with attributes */
let photo_information_accessor = document.querySelector("#photo");

photo_information_accessor.setAttribute("src", myProfile.photo); //take the selected id of photo and replace its data with ("attribute title", "new data")
photo_information_accessor.setAttribute("alt", myProfile.name);
//document.getElementById("photo").src = myProfile.photo; //alternate option

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li); 
});
//Still not sure what the difference between append and appendChild do, even after reading the following.
//https://developer.mozilla.org/en-US/docs/Web/API/Element/append
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li"); //I read somewhere that it is better for "li" to be capitalized here. I am not sure why, and have chosen not to yet.
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
//dl = data list, dt = description term, dd = description detail
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

placesElement.innerHTML = generateListMarkup(
    myProfile.placesLived,
    placesTemplate
  );

    // let dd = document.createElement("dd");
    // dd.innerHTML = location;
    // document.querySelector("#places-lived").appendChild(dd);

