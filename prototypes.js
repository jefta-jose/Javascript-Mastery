// prototype-based programming is a way of programming that allows creation of objects without first creating classes

Animal = {
    makeSound : function(){
        console.log(`this animal ${this.sound}`);
    }
}

//-------------------------------------------------
const Dog = Object.create(Animal)
Dog.sound = "barks"
Dog.makeSound()

//-------------------------------------------------
const Cat = Object.create(Animal)
Cat.sound = "meows"
Cat.makeSound()