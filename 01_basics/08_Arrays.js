const myArr = [0,1,2,3,4, "Ashish"]
    console.log(myArr);
myArr.push(6)
console.log(myArr);
myArr.unshift(9);
myArr.shift(9)
console.log(myArr);
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);   //Reuslt it simply makes array to String

const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Flash" , "Batman"]
console.log(marvel_heros);
marvel_heros.push(dc_heros)
console.log(marvel_heros);
marvel_heros.concat(dc_heros)
const allHeros =  marvel_heros.concat(dc_heros)
console.log(allHeros);

const Name = "Ashish"
console.log(Array.from({name: "Ashish"}));



