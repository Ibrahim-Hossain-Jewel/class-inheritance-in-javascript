//Class inheritance
//Constructor will stay in every class.
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log("I'm from parent class");
    }
}
//Now extends the Person class with sub class.
class employee extends Person{
    constructor(name,age,position){
        //use the super() method. we have to invoke the super() method first otherwise dose not work
        super(name,age);
        this.position = position;
    }
    //Now inherite the greetings function inside employee class.
    testGreetings(){
        const parentString = super.greetings();
        console.log(`${this.name} thinks ${this.parentString}`);
    }
}

class customer extends Person{
    //Set default value for the object parameter. 
    constructor({name="Customer",age = "N/A", contactMethod}){
        super(name,age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;//Now this property are global.
    }
    addCredit(amount){
        this.accountCredit +=amount;
    }
    reduceCredit(amount){
        this.accountCredit -=amount;
    }
    //Make a static method that will accept all objects.
    static sayCustomerName(...customer){
        //Find-out all the name from each object using for of loop.
        for(const prop of customer){
            console.log(prop.name);
            console.log(prop.contactMethod)
        }
    }
    static transferCredit(source, target){
        const amt = source.accountCredit; //here source.accountCredit = 25
        target.accountCredit +=amt;
        source.accountCredit -=amt;
    }
}
//Now instantiate the customer class.
const customer1 = new customer({name: 'Jewel Rana', contactMethod: "email"});
const customer2 = new customer({name: 'Jane Doe', contactMethod: "mobile"});
const customer3 = new customer({name: 'Korim', contactMethod: 'skype'});
customer1.addCredit(100);
customer1.reduceCredit(50);
customer2.addCredit(25);

console.log(customer1.accountCredit, customer2.accountCredit)
// customer.transferCredit(customer2,customer1);
// console.log(customer1.accountCredit, customer2.accountCredit)

//Another class design.
console.log("Another class design");



class familyMember{
    constructor(lastName,fristName,relationship){
        this.lastName = lastName;
        this.fristName = fristName;
        this.relationship = relationship;
    }
    sayFamilyName(){
        console.log(`we are the ${this.lastName}s`);
    }
}
class familyGroup{
    constructor(parent = [], children = []){
        this.parent = parent;
        this.children = children;
    }
    addMember(member){
        this.children.push(member);
    }
}
//Now reuse the familyMember class.
const famObj = {
    1: ['Smith', 'bill', 'father'],
    2: ['Smith', 'catherine', 'mother'],
    3: ['Smith', 'Annie', 'Daughter'],
    4: ['Smith', 'Will', 'son']
}
//The createFamilyGroup function use to seperate parent and children or kiddies
// function createFamilyGroup(famArray){
//     const famGroup = new familyGroup();
//     for(const prop of famArray){
//         if (prop.relationship === 'father' || prop.relationship === 'mother') {
//             famGroup.parent.push(prop);
//         }else{
//             famGroup.children.push(prop);
//         }
//     }
//     return famGroup;
// } 
const anotherFamily = {
    1: ['wilsone','ballybob','father'],
    2: ['wilsone','jeweljeweljewel','son']
}
function createFamily(famObj) {
    const allMembers = [];
    const newFamObj = new familyGroup();
    for(let prop in famObj){
        const [last,first,relationship] = famObj[prop];
        const newMember = new familyMember(last,first,relationship);
        if(relationship === 'father' || relationship === 'mother'){
            newFamObj.parent.push(newMember);
        }else{
            newFamObj.children.push(newMember);
        }
    }
    console.log(newFamObj);
}
createFamily(famObj);
createFamily(anotherFamily);