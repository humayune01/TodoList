import inquirer from "inquirer";

let todos : string[] = [];

let todosQ;

do {

    todosQ = await inquirer.prompt(
        {
            name: "task",
            type: "confirm",
            message: "Do you want to add any task?"
        }
    );

    if (todosQ.task) {
        let addTask = await inquirer.prompt({
            name: "taskToAdd",
            type: "input",
            message: "Please type in your task here: "
        });
        todos.push(addTask.taskToAdd);
        
    } else {
        let todosQ;
        do {
            todosQ = await inquirer.prompt(
                {
                    name: "delete",
                    type: "confirm",
                    message: "Do you want to delete any task?"
                }
            );
            if (todosQ.delete) {
                let deleteQues = await inquirer.prompt(
                    {
                        type: "list",
                        choices: todos,
                        message: "Select any task to delete:",
                        name: "deleteTask"
                    }
                );
                
                if (todos.includes(deleteQues.deleteTask))
                {
                    let i : number = todos.indexOf(deleteQues.deleteTask);
                    todos.splice(i, 1);
                    console.log("Your task has been deleted.");
                }
            }
        } while(todosQ.delete);
        
    }

    console.log("Here is your todo list: ");
    for (let todo of todos)
    {
        console.log(todo);
    }

} while (todosQ.task);
