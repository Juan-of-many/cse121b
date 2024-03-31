/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); //references the HTML div element that eventually will be populated with temple data.

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);
    
        article.appendChild(h3);
        article.appendChild(image);
        
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeList = await response.json();

    displayTemples(templeList);
}

/* reset Function */
function reset() {
    templesElement.textContent = ""
}

/* filterTemples Function */
let filterTemples = function (temples) {
    reset();
    let filter = document.getElementById("filterTemples").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple["location"].includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple["location"].includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple["dedicated"]) <= new Date(1950, 0, 1))); 
            break;       
        case "all":
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }
}


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();