const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]

// For
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// For
for(let todo of todos) {
    console.log(todo.id);
}


High order array methos


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
}); 

// forEach, map, filter
const todoText = todos.map(function(todo) {
    return todo.text;
}); 

console.log(todoText); 

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) { 
    return todo.text;
})

console.log(todoCompleted);