type User = {
    name: string;
    age: number;
};
const prettyPrintWilder = (users: User[]) => {
    console.log("########################");
    users.map((el) => {
        console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
};

const wilders: User[] = [];

const user1 = { name: "Pierre", age: 23 };

function getAge(string){
    let day = string.split('/')[0];
    let month = string.split('/')[1];
    let year = string.split('/')[2];

    let newDate = new Date(year, month, day);

    var diff = Date.now() - newDate.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

const user2 = { name: "Paul", age:getAge("10/02/1990") };
const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);