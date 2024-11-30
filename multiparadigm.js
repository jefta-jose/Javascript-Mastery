/**
 * javascript is multi-paradigm
 * it does not define a spefici way to programm it allow programmers to implmment the best method of programming at will depending on the task at hand
 */

//1 OBJECT ORIENTED PROGRAMMING 
/**
 * using prototypes (directly from objects)
 * using classes
 */

// prototypes -> define an object and crete objects from that object
prototypeObjectAnimal = {
  makeSound : function(){
    console.log(`this animal ${this.sound}`);
  }
}

const dog = Object.create(prototypeObjectAnimal)
dog.sound = "barks"
dog.makeSound()

// classes 
class Animal {
  constructor(sound) {
    this.sound = sound
  }

  makeSound(){
    console.log(`this animal ${this.sound}`);
  }
}

const Cat = new Animal("meows")
Cat.makeSound()

// so the way we define objects & classes in Javascript  -> we define them being empty then we use this to assign values

// PROCEDURAL PROGRAMMING -> a series of steps
function sum(a,b){
  let sum = a + b
  console.log(sum);
}

sum(10,1)

//functional programming -> high class functions treated as values 
// can be assigned to variables
const Foo = () => {
  console.log("this is fun");
}

Foo()

// can be passed as an argument
const Bar = () => {
  console.log("this is fun");
}

function executeBar (Bar){
  Bar()
}

// functions can be returned
const FooBar = () => {
  console.log("this is fun");
}

function returnFooBar(){
  return FooBar()
}

//event driven programming -> onClick ...

// declarative programming -> focuses on what a programm should do not how it should it

const App = () => {
  <h1>Hello , World!</h1>
}