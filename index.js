var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

// /* Task 1: Confirm that the array is exactly 31 flavors.

function is31Flavors(flavList){
    if(flavList.length > 31 || flavList.length < 31){
        let bool = false;
        return bool
    } else if (flavList.length === 31){
        let bool = True;
        return bool
    }
    return bool;

}

console.log(is31Flavors(originalFlavors));

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.*/

const addToList = function(list, flav){
    list.unshift(flav);
    console.log(list);
    return list
  }
  
  addToList(originalFlavors, "Moose Tracks");

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. */
function removeLastFlavor(list){
    list.pop();
    console.log(list);
}

removeLastFlavor(originalFlavors);

/* Task 4: Write a function that returns a flavor at a given index in the array.*/


function getFlavorByIndex(list, index){
    console.log(list[index]);

}

getFlavorByIndex(originalFlavors, 1);

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. */

function removeFlavorByName(list, flavor){
    let index = list.indexOf(flavor);
    list.splice(index, 1);
    return list
}

console.log(removeFlavorByName(originalFlavors,"Pineapple Sherbet"));

// function removeFlavorByName(list, flavor){
//     for (i=0; i>list.length; i++){
//         if (flavor ==== list[i];{
//             list.splice(i);
//         }
//     }
//     return list;
// }

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. */

function copy(original, clone){
    clone = [...original];
    return clone;

}
console.log(copy(originalFlavors, 'flavorClone'));

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.*/

function filterByWord(list, flavor){
    let newList = [];
    for (i=0; i<list.length; i++){
        var element = list[i]
        if (list[i].includes(flavor)){
            newList.push(element);
        }
    }

    return newList; 

}

filterByWord(originalFlavors, "Chocolate");

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.*/

function getAverageWordLength(arr){
    let indexCount = 0
    for (i=0 ; i<arr.length ; i++){
        indexCount = indexCount + arr[i].split(" ").length;
    }
    avg = indexCount / arr.length;
    return avg
}

getAverageWordLength(sample);

/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(arrOne, arrTwo, arrThree, arrFour){
    const ultraList = [...arrOne, ...arrTwo, ...arrThree, ...arrFour];
    const indexList = [];
    const randomizedList = [];
    for (i=0; i<31;){
        let randomVal = Math.round(Math.random()*ultraList.length);
        if (indexList.indexOf(randomVal) === -1){
            indexList.push(randomVal);
            randomizedList.push(ultraList[randomVal]);
            i++;
        }
    }
    console.log(randomizedList)
    }
    
    getRandomFlavors(regionalFlavors, seasonalFlavors, newFlavors, originalFlavors)