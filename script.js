let quiz = new Map ([
[
    "What is the mascot for Thaddeus Stevens?", 
    {
    choices: ["bulldog", "snake", "kinght", "panther"],
    correctIndex: 0 
    }
],

[
    "What is the best major in the school?", 
    {
    choices: ["cnsa", "welding", "cset", "buisness"],
    correctIndex: 2 
    }
],

[
    "Who has the record for most Oscars won?", 
    {
    choices: ["morgan freeman", "walt disney", "clint eastwood", "tom cruise"],
    correctIndex: 1
    }
],

[
    "What is the furthest planet from the sun?", 
    {
    choices: ["jupiter", "earth", "neptune", "mars"],
    correctIndex: 2
    }
],

[
    "How many sides does a quadrilateral have?", 
    {
    choices: ["four", "three", "five", "six"],
    correctIndex: 0
    }
],

[
    "Which fast food chain is the largest in the world?", 
    {
    choices: ["mcdonalds", "burger king", "dominos", "subway"],
    correctIndex: 3
    }
],

[
    "What is the most common pizza topping?", 
    {
    choices: ["pepperoni", "mushrooms", "onions", "sausage"],
    correctIndex: 0
    }
],

[
    "Who built the first Apple computer?", 
    {
    choices: ["steve jobs", "larry page", "steve wozniak", "dre king"],
    correctIndex: 2
    }
],

[
    "What was the worlds first sport?", 
    {
    choices: ["basketball", "discus", "racing", "wrestling"],
    correctIndex: 3
    }
],

[
    "How much would could a wood chuck chuck?", 
    {
    choices: ["if a woodchuck", "could chuck wood", "wood", "chuck"],
    correctIndex: 1
    }
],

])


let allquestions = [...quiz.keys()]
let allanswers = [...quiz.values()]
console.log(allanswers)
  

for (i=0; i> quiz.size; i++){
    document.getElementById("question").innerText = `Question ${i+1}:\n ${allquestions[i]}`
    document.getElementById()



    
    
}

