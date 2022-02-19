
//interfaces

interface ITodo {
    title: string;
    text: string;
}

function showTodo( todo: ITodo) 
{
    console.log(`${todo.title} ${todo.text}`);
}

let myTodo: ITodo = {title: 'eat dinner', text: 'lorem'};

showTodo(myTodo);

