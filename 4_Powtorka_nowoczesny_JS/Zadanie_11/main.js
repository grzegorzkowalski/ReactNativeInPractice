//Stwórz klasę Dog.
//
// Ustaw w konstruktorze właściwości name, age, legs, breed.
// Dodaj dwie metody: introduceMyself, która wyświetli w konsoli podane dane i bark, pies niech zaszczeka.
// Stwórz nowy obiekt typu pies, podaj w konstruktorze odpowiednie dane wejściowe i wywołaj metody introduceMyself i bark.

class Dog {
    constructor(name, age, legs, breed) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.breed = breed;
    }
    introduceMyself() {
        console.log(`${this.name}, ${this.age}, ${this.breed}, ${this.legs}`);
    }
    bark() {
        console.log("Woof woof")
    }
}

const doggy = new Dog("Szogi", 10, "Shitzu", 4);

doggy.introduceMyself();
doggy.bark();
