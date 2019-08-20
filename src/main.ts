class Animal {
    name: string
    constructor(name) {
        this.name = name;
    }
    sayHi(string) {

    }
}
class Dog extends Animal {
    age;
    constructor(name,age){
        super(name);
        this.age = age;
    }
    sayHi() {
        console.log(`hi ${this.name}`);//this指向Dog实例
    }
}
new Dog('dog',2).sayHi();//hi dog