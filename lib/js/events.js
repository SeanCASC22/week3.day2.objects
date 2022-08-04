// Here, you'll use your knowledge of the DOM to create HTML elements 
// for each hero from the 'database' as well as assign event handlers.

// This step requires the 2 other parts ("heroes.js" and "methods.js")
// to be functional. However, you can still work on the HTML and CSS
// of the site as well as setting up the event handlers.

// 1) In "index.html", create an empty `div` with an id of "gridDiv"

// 2) create a variable "gridDiv" and use the DOM to store the div you
// just made into it

// 3) call the method "heroCreator.populateGrid()" and provide it with
// 2 arguments, the "gridDiv" variable you just made, and the "heroes"
// array variable.
// NOTE: the method and the array are defined in the other .js
// files. If those parts are working correctly, there shouldn't be
// an error.

// We'll be using a CSS Grid layout to display elements.
// Flex-box works in 1 dimension, using a row or column.
// Think of grid as a 2 dimensional flex-box, using rows and columns!
// Feel free to do a little research on how Grids work before
// moving on: https://www.w3schools.com/css/css_grid.asp

// 4) In "style.css", add styling to the `#gridDiv`.
// Make sure to display it as "grid"
// Set the `grid-template-columns` to "repeat(6, auto)", which
// represents 6 columns having an automatically defined width.
// Give the space between items a `grid-gap` of "10px";

// 5) Setup the CSS for the grid items, which should all be divs with
// a class of ".hero_container"
// Make sure to have ".hero_container" display as flex and as rows
// Also, the `img` inside of each ".hero_container" should have a 
// background-color of #f7931e and a border of "1px solid #00aeff"

// Take note of the height for the images including the border (312px)
// 310px img height + 1 px for top border + 1 px for bottom border

// Note: if you're using images I did not provide, you'll need to 
// keep the height/width in mind moving forward.

// 6) By default, we DON'T want to see the ".hero_text_container", so 
// set it so it doesn't `display`

// 7) Create a variable called "allHeroContainers" and use the DOM to 
// store all of the divs with the ".hero_container" class 
// HINT: use "document.getElementsByClassName()", which should return
// and array-like (HTMLCollection) object

// 8) Define a function "removeIds", that removes the id from all of
// the in the "allHeroContainers" variable you just made
// Hint: Check out the .removeAttribute() DOM method
// https://www.w3schools.com/jsref/met_element_removeattribute.asp

// 9) Define a function "highlightHero", which takes 1 argument: an event
// object. This function should call "removeIds()" and then 
// set the id of current element (the element being clicked) to "highlight"
// HINT: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

// 10) Loop through each item in the "allHeroContainers" you just made 
// and set the on click event listener as "highlightHero"

// Test to make sure your event handlers are working properly!

// 11) Now that we have an on click listener on each ".hero_container",
// in the "style.css" file, make sure the cursor changes to a pointer 
// when the user mouses over any ".hero_container" that does NOT have 
// an id of "highlight"
// HINT: Check out 
// https://www.w3schools.com/css/tryit.asp?filename=trycss_cursor
// and...
// https://www.w3schools.com/cssref/sel_not.asp

// 12) Let's make sure the div that has the "highlight" id stands out!
// In the "style.css" file, setup the `#highlight` element:
// Set the "grid-row-start" to 1
// Set the "grid-row-end" to 3
// Set the "grid-column-start" to 1
// Set the "grid-column-end" to 4
// Effectively the "#highlight" grid item will take up 2 rows and 3 
// columns

// Setting the height and width requires a little math
// Since the image height from before was 312px, and this item
// takes up 2 rows, that's...
// 312 + 312 + 10 from the grid-gap = 634px

// The image width is 182px (remember the 2px from the border!)
// This item takes up 3 columns, so that's...
// 182 + 182 + 182 + 10 + 10 = 566px

// 13) Set the ".hero_text_container" div that belongs to the "#highlight"
// div to be visible (recall we hide all ".hero_text_container" elements
// before)
// Also, set it's `overflow-y` to "scroll"
// and give it 16px of padding

// Lastly, let's make the `img` that belongs to the "#highlight" div
// not stretch with the container. Set it's `align-self` property to
// "flex-start"

// HANDLE THE SUBMIT BUTTON HERE! (from "heroes.js")
// let HeroImage = document.querySelectorAll("src");
// if (HeroImage.length === 0){}
// else{
// for (let i = 0; i<img.HeroImage.length; i++){
//     HeroImage.onclick = (event) => {
//     event.preventDefault();
//     HeroImage.style["border"] = "2px solid gold";
//         }
//     }
// }

let submitBtn = document.getElementById("submit-btn");
// make an event handler with an arrow function
submitBtn.onclick = (event) => {
    event.preventDefault();
    //get a reference to the inputs
    let imgElem = document.querySelector("#pfp-url");
    let nameElem = document.querySelector("#name");
    let typeElem = document.querySelector("#heroType");
    let difficultyElem = document.querySelector("#Difficulty");
    let sayingElem = document.querySelector("#heroSaying");

    //create a formData object and fill it with the appropriate data
    let formData = {
        //properties
        pfpURL: imgElem.value,
        name: nameElem.value,
        type: typeElem.value,
        difficulty: difficultyElem.value,
        saying: sayingElem.value,
       
        //method
        debug: function() {
            let message = `Hero: ${this.name}. Type: ${this.type}. Difficulty: ${this.difficulty}. Saying: ${this.saying}.`;
            alert(message);
        }
    };

    let addedUser = new User(formData.name, formData.type, formData.difficulty, formData.saying, formData.pfpURL);

    let userElem = addedUser.makeHTML();

    let userContainer = document.getElementById("gridDiv");
    userContainer.append(userElem);

    imgElem.value = ''
    nameElem.value = ''
    typeElem.value = ''
    difficultyElem.value = ''
    sayingElem.value = ''

}

class User {
    //define a constructor which takes five parameters
    constructor (name, type, difficulty, saying, pfpURL){
        if (pfpURL === ""){
            this.pfpURL = "assets/MoonDefaultHeroPfp.png";
        }

        else {
            this.pfpURL = pfpURL;
        }
        
        if (name === ""){
            this.name = "???";
        }

        else {
            this.name = name;
        }
        
        //assigns a value to the type
        if (type === ""){
            this.type = "???";
        }

        else {
            this.type = type;
        }

        if (difficulty === ""){
            this.difficulty = "???";
        }

        else {
            this.difficulty = difficulty;
        }

        if (saying === ""){
            this.saying = "???";
        }

        else {
            this.saying = saying;
        }

    }
    
    //define a method called makeHTML
    makeHTML(){


        let parentDiv = document.createElement("div");
        //add the .user-item class
        parentDiv.classList.add("user-input");

        //create an h2
        let characterImage = document.createElement("img");
        let h2Ref = document.createElement("h2");
        let h2AgainRef = document.createElement("h2");
        let h2YetAgain = document.createElement("h2");
        let h2o = document.createElement("h2");
        let h2Story = document.createElement("h2");
        //set text to this object's username
        characterImage.src = this.pfpURL;
        h2Ref.innerHTML = `>Hero: ${this.name}.`;
        h2AgainRef.innerHTML = `Type: ${this.type}.`;
        h2YetAgain.innerHTML = `Difficulty: ${this.difficulty}.`;
        h2o.innerHTML = `Saying: ${this.saying}.`;
        h2Story.innerHTML = `This hero has a story, but you're going to need to find it out!`

        //append the child elements to the parent div
        parentDiv.append(characterImage);
        parentDiv.append(h2Ref);
        parentDiv.append(h2AgainRef);
        parentDiv.append(h2YetAgain);
        parentDiv.append(h2o);
        parentDiv.append(h2Story);
        characterImage.onclick = (event) => {
                 event.preventDefault();
                 characterImage.style["border"] = "2px solid gold";
                    }
        characterImage.onmouseout = (event) => {
                    event.preventDefault();
                    characterImage.style["border-style"] = "none";
                    }

        //return the result (parentDiv)
        return parentDiv;
    }
}


// Give the "Submit" button an on click event handler that
// creates a hero object and adds it to
// the "#gridDiv". Remember to ".preventDefault()"
// Also, the user's text within the form's input boxes should be cleared
// Clicking the new hero's image should highlight it...so, find the 
// LAST ".hero_container" element and assign it the "highlightHero" function
// as an on click event handler ("highlightHero" should have been 
// created above!) 

// NOTE: for the hero info that was not filled in, use some defaults:
// img => use a default img
// story => use some default text like "..this character has no backstory...yet!"
// abilities => remember this is supposed to be an array of objects, so
// create an array with 1 object with a dummy "name" and "description"

// HINT: in the "methods.js", there's a method that already adds
// hero objects to the "#gridDiv"! Consider using it. Be sure you're
// using the correct kind of input!

// BONUS: Add a keypress listener to the document that calls the 
// "removeIds()" function whenever the "spacebar" is pressed

// BONUS: Style the ".hero_text_container" as you see fit

// BONUS: Add a keypress listener to the document that allows the 
// user to navigate the heros using the arrow keys.