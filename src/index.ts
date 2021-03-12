const name = "Hongcolas",
    age = 24,
    gender = "male";


const sayHi = (name: string, age: number, gender: string): string => {
    console.log (`Hello ${name}, you are ${age}, you are ${gender}`);
    return (`Hello ${name}, you are ${age}, you are ${gender} `);
}

sayHi(name, age, gender );

export{};