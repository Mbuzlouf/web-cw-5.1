// السؤال الأول
// 1
const name = "محمد";
// 2
let age = 15;

// 3 and 4
console.log("أنا" + " " + name + " " + "وعمري" + " " + age);
// 5 and 6
console.log(age);
age = age * 5;
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
console.log(age);
// السؤال الثاني
// 1
const Hobbies = ["foootball", "shooting", "Drawing"];
// 2
age = 15;
Hobbies.push(age);
Hobbies[4] = age;
console.log(Hobbies);
// 3
Hobbies.pop();
console.log(Hobbies);
// 4
let about = {
  type: "web",
  Language: "Css",
  TAs: ["Hussain", "Moudhi", "Rahaf", "Nancy"],
};
// 5

// 6
console.log(about.type);
// 7
console.log(about.TAs[0]);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
about[5] = "I hate this class";
// 2
console.log(about[5]);
// console results => console.png
