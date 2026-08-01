// const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "TypeScript"
// ];

// const updatedSkills = [...skills, "Git"];

// console.log("Original Skills:", skills);
// console.log("Updated Skills:", updatedSkills);

// Exercise 1: Now that you've seen how it works, try these on your own: Add "GitHub" to the beginning of the array using the spread operator. Add "Tailwind CSS" between "React" and "Next.js" using the spread operator. Create a new array called frontendSkills by combining these two arrays:

// const skills = ["HTML", "CSS", "JavaScript"];
// const frameworks = ["React", "Next.js"];
// const newSkills =[ "GitHub", ...skills];
// const newFrameworks = [
//     frameworks[0],
//     "Tailwind CSS",
//     frameworks[1]
// ];
// const frontendSkills = [...newSkills, ...newFrameworks];

// console.log("Frontend Skills:", frontendSkills);


// Exercise2: Without changing frontendSkills, create a new array called allSkills that becomes:

const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript"
];

const allSkills = [
    "Git",
    ...frontendSkills,
    "React",
    "Next.js"
];

console.log(allSkills);

// Exercise3: Without modifying the original array: Create a new array called newNumbers that becomes:

const numbers = [2, 3, 4];

const newNumbers = [
    1,
    ...numbers,
    5
]

console.log(newNumbers);