// Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() that calculates and
//  returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.

// create name and steps wlked each day
// calculate totall steps



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



// Create a Recipe constructor with name, ingredients (array), and 
// cookTime in minutes. Add a method displayRecipe() that logs the name and all 
// ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
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



// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). Add a method addService(date) 
// to add a new service record, and lastServiceDate() to return the most recent service date.
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


// Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song,
//  removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

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


// Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) 
// that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed"

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
 