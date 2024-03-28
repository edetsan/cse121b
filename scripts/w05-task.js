/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples')
var templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    reset();
    temples.forEach(function(temple) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();
    data.forEach(function(temple) {
        templeList.push(temple);
    });
    displayTemples(templeList);
}
/* reset Function */
const reset = function() {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};



/* filterTemples Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
    }
};

/* Event Listener */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#filtered').addEventListener('change', () => {
        sortBy(templeList);
    });
});

getTemples();