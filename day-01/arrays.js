// Create an array of your five favorite technologies.

const technologies =[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
]
    
console.log (technologies[3])


// Create an array called tools that contains five developer tools you either use already or plan to use.

const tools =[
    "VS Code",
    "Git",
    "Postman",
    "Figma",
    "Chrome"
]

console.log("First Tools:", tools[0]);
console.log("Last Tools:", tools[4]);
console.log("Total Tools:", tools.length);


// Challenge 1
// Add another tool to the end of the array.
tools.push("GitHub")
console.log("Updated Tools:", tools);


// Challenge 2

// Print the second tool.

console.log("Second Tools:", tools[1]);

// Challenge 3

// Print the last tool without writing its index (5 or 4).
console.log("Last Tools:", tools[tools.length-1]);