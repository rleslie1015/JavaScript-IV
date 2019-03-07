// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
};
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    };
};

class Instructor extends Person {
    constructor(insAt) {
        super(insAt);
        this.specialty = insAt.specialty;
        this.favLanguage = insAt.favLanguage;
        this.catchPhrase = insAt.catchPhrase;
    };
        demo(subject){
            console.log(`Today we are learning about ${subject}.`)
        }
        grade(student) {
            console.log(`${student.name} receives a perfect score on ${this.subject}.`)
        }
};

class Student extends Person {
    constructor(stuAt) {
        super(stuAt);
        this.previousBackground = stuAt.previousBackground;
        this.className = stuAt.className;
        this.favSubjects = stuAt.favSubjects;
    };
        listsSubjects(){
            console.log(this.favSubjects);
        }
        PRAssignment(subject){
            console.log(`${this.name} has submitted a PR for ${subject}.`)
        }
        sprintChallenge(subject){
            console.log(`${this.name} has begun sprint on ${subject}.`)
        }
};

class ProjectManagers extends Instructor {
    constructor(pmAt){
        super(pmAt);
        this.gradClassName = pmAt.gradClassName;
        this.favInstructor = pmAt.favInstructor;
    }
        standUp(channel){
            console.log(`${this.name} announces to ${channel}, @channel standy times!`)
        }   
        debugsCode(student, subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
        }
}