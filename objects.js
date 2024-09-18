
// Objects (dictionaries) have key value pairs 

let superHero = {
  name: "Iron Man",
  powers: ["Flight", "Lasers", "Intellect"],
  life: 100, 
  power: 20,

  // We can have functions as values 
  attack: function() {
    console.log(`${this.name} attacks for ${this.power} points of the opposing superheros life`)
  }
}

// Two ways of accessing object properties 
// superHero["name"]
console.log(superHero["name"])

// dot notation 
console.log(superHero.name); 

console.log(superHero.powers[0])

superHero.attack()


// Constructor function 

function SuperHero(name, powers, life, attackPower){
  // property name (key): value 
  this.name = name;
  this.powers = powers; 
  this.life = life; 
  this.attackPower = attackPower; 

  this.attack = function(hero){
    // hero uses power to attack otherHero for points 

    // Math.random() generates a number between zero and 1 
    // We multiply by 3 to give us a number between 0 and 2 
    // Math.floor rounds down 

    // Goal: randomly generate an index within the range of powers to 'randomly' select a power to attack with 
    console.log(`${this.name} uses ${this.powers[Math.floor(Math.random() * 3)]}
    to attack ${hero.name} for ${this.attackPower}`);

    // take hero life and subtract the attack 
    hero.life -= this.attackPower;

    // update the console with the new heros life (HP) 
    console.log(`${hero.name}'s life is now ${hero.life}`)
  }
}

// add a property without affecting the original constructor function 
SuperHero.prototype.gainLife = function(){
  this.life += 10; 
  console.log(`${this.name} gains 10 life and is now at ${this.life}`)
}

// new 
let ironMan = new SuperHero("Iron Man", ["Flight", "Lasers", "Money"], 100, 20); 
let thanos = new SuperHero("Thanos", ["Punch", "Snap", "Body Slam"], 200, 15);

console.log(ironMan.name)
console.log(thanos.name)

// Testing out attack function 
ironMan.attack(thanos)
thanos.attack(ironMan)
ironMan.attack(thanos)

// Adding HP 
ironMan.gainLife(); 


// Math.floor(Math.random() * 3)
// const randomFloat = Math.random()
// console.log(randomFloat); 
// console.log(randomFloat * 3)
// console.log(Math.floor(randomFloat *3))


/* another way to create objects/instances/classes in JS */
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // no function keyword for instance methods
  drive(){
    console.log("Vroom vroom");
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name);
console.log(myCar2.year);
myCar1.drive();



/////////////// MATH OBJECT

console.log("PI:", Math.PI); // 3.141592653589793
console.log("Round:", Math.round(4.5)); //5
console.log("Round:", Math.round(4.4)); // 4
console.log("Ceil:", Math.ceil(4.1)); // round up: 5 
console.log("Floor:", Math.floor(4.9)); // round down: 4
console.log("Pow:", Math.pow(8, 2)); // raise something to a power: 64 
console.log("Abs:", Math.abs(-5)); // absolute value: 5
console.log("Min:", Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log("Max:", Math.max(0, 150, 30, 20, -8, -200)); // 150 
console.log("Random:", Math.random()); // 0.44610


///////////// Date Object

// Creating a new Date object with the current date and time
// Format: YYYY-MM-DDTHH:mm:ss.sssZ
// The “T” character separates the date from the time portion of the string.
// The “Z” character is the UTC offset representation
// UTC (Universal time constant) is used worldwide as the standard time.
	// It does not change with the seasons and is the same everywhere.
  let currentDate = new Date();
  console.log("Current Date:", currentDate);
  
  // Creating a new Date object with a specific date and time
  let specificDate = new Date("2024-02-10T02:00:00");
  console.log("Specific Date:", specificDate);
  

// Accessing date components
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1); // Adding 1 because months are zero-based
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

currentDate.setDate(currentDate.getDate() + 7);
console.log(currentDate);

currentDate.setMonth(currentDate.getMonth() - 1);
console.log(currentDate);


// Creating a timestamp
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00.0
// known as the Unix epoch
let timeStampDate = new Date();
let timestamp = timeStampDate.getTime();
console.log("Timestamp:", timestamp); // Timestamp: 1726703709861

// Converting timestamps to dates
let newDate = new Date(timestamp);
console.log("Date extracted from timestamp:", newDate); // Date extracted from timestamp: 2024-09-18T23:55:09.861Z

// Getting the time zone offset
// returns the difference between UTC time and local time in minutes
let timeZoneOffset = currentDate.getTimezoneOffset();
console.log("Time Zone Offset (in minutes):", timeZoneOffset);