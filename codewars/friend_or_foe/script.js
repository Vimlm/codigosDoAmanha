// const people =  ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
// const friends = []

// for(let i = 0; i < people.length; i++) {
//   if (people[i].length == 4) {
//     friends.push(people[i]);
//   }
// }

// console.log(friends);
// console.log(people)

const numbers1 = [1,2,3,4,5];
const numbers2 = [1,-2,3,4,5];
const numbers3 = [-1,2,3,4,-5];

let sum = 0;

for (const key in numbers1) {
  if(key >= 0) {
    sum += +key;
  }
}