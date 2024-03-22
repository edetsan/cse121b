/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Detzani Santiago",
    photo: "images/profile.png",

    favoriteFoods:  [
        "Chilaquiles",
        "Ice-Cream",
        "Burgers",
        "Tacos",
        "Huaraches"
    ],

    hobbies: [
        'Singing',
        'Traveling',
        'Going to the movies',
        'Musical plays'
    ],


/* Populate Profile Object with placesLive objects */
    placesLived: []
}
    myProfile.placesLived.push (
        {
            place: 'CDMX, Mexico',
            length: '7 years : '
        },
        { 
            place: 'Cuautitlan Izcalli, Mexico ',
            length: '27 year : '
        },
        {
            place: 'Dallas, Tx',
            length: '1 Year : '
        },
        {
            place: 'Cuautitlan, Mexico ',
            length: '3 years '
        }
    )

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photo.setAttribute('src', myProfile.photo); 
photo.setAttribute('alt', `Profile Image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived =>{

    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length; 

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    
})
