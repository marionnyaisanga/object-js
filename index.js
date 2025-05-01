// 1
// create name and steps wlked each day
// add steps for each day
// divide total steps with the total days to get average steps.



const user={
    name: "James",
    stepsWalked:[4000,2000,3000,7000,5000],
    totalSteps: function(){
        return this.stepsWalked.reduce((prev,curr)=> prev+curr,0);
    },
    averageSteps:function(){
        return (this.totalSteps())/(this.stepsWalked.length);
}

};
console.log(user.totalSteps());
console.log(user.averageSteps());



// 2.
// create a constractor with the properties of Recipe
// create a function that displays name and ingredients
// create a function that checks if the cooking time is less than 30 min to return true for quick meal

function Recipe(name, ingredients,cookTime){
    this.name =name;
    this.ingredients= ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
    return `The ${name} is sweet and the ingredients are ${this.ingredients}`

    }
    this.isQuickMeal= function(){
        return cookTime <= 30

    }
}

const food = new Recipe ('ugali',['water','flour','oil'],30)
const drink = new Recipe('uji',['flour','water','sugar','citric'],45)
console.log(drink.isQuickMeal())
console.log(food.displayRecipe())



// 3.
// create object car with its properties(model, mileage,serviceHistory)
// create a function to add service record
// create a function that returns the last date in the array.
const car = {
    model : 'Toyota',
    mileage: 20000,
    serviceHistory: ['2nd may 2024', '3rd june 2024','6th january 2025'],
    addService : function( date){
        this.serviceHistory.push(date);
        return car.serviceHistory

    },
    lastService : function(){
    return this.serviceHistory. at(-1);
    

    }

};


console.log(car.addService('4th April 2021'));
console.log(car.lastService());

// 4.
// create an object for song playist with properties.
// create a function that adds a song to the array.
// create a function to return all the elements in the playlist


const playlist ={
    songs : ['Vertigo', 'Mpishi','Happy'],
    addSong: function (title){
         this.songs.push(title);
         return playlist.songs
        
    },
    removeSong: function (title){
        return this.songs.shift(title);
    },
    listSongs: function(title){
        return playlist.songs
    }
}
console.log(playlist.addSong('Moana'));
console.log(playlist.removeSong());
console.log(playlist.listSongs());



// 5.
// create a cou constructor with properties for cources
// create a function that adds a lesson to the array
// create a function that returns  number of lessons completed out of the number of lessons 
function Course( title, lessons, completedLessons){
    this.title= title;
    this.lessons = lessons;
    this.completedLessons = completedLessons;
    this.markComplete = function(lesson){
        this.completedLessons.push(lesson);
        return course.completedLessons
    }
     this.getProgress = function(){
        return `${this.completedLessons.length} out of ${lessons.length} completed`;
     }

};

 const course = new Course('Mechanical Engineering', ['Thermodynamic', 'fluid mechanics','structures'] ,['Thermodynamic'])
 console.log(course.markComplete('Robotics'));
 console.log(course.getProgress());
 