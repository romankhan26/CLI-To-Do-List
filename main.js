import inquirer from "inquirer";
import chalk from "chalk";
//inquirer  done
//array    done
//function   done
//operator
let todos = [];
async function createToDo(todos) {
    console.log(chalk.bold.gray("\t\n                                      ***************************************\t"));
    console.log(chalk.bold.gray("\t                              ****    CREATE YOUR TO DO LIST!    ****\t"));
    console.log(chalk.bold.gray("\t                              ***************************************\n\t"));
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: chalk.bgYellow("Select an operation:"),
            name: "todo",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        });
        if (ans.todo === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.gray("What do you want to add:"),
                name: "add",
            });
            if (addTodo.add === "" || addTodo.add === " ") {
                console.log(chalk.red("Invalid Task"));
            }
            else {
                todos.push(addTodo.add);
                todos.forEach((add) => console.log(chalk.yellow(add)));
            }
        }
        else if (ans.todo === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: chalk.grey("What do you want to update:"),
                name: "update",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: chalk.grey("What do you want to add inplace of it:"),
                name: "add",
            });
            let newTodo = todos.filter((val) => val !== updateTodo.update);
            if (addTodo.add === "" || addTodo.add === " ") {
                console.log(chalk.red("Invalid Task"));
            }
            else {
                todos = [...newTodo, addTodo.add];
                todos.forEach((add) => console.log(chalk.yellow(add)));
            }
        }
        else if (ans.todo === "View") {
            console.log(chalk.yellow("************************"));
            console.log(chalk.bold.green("****** TO DO LIST ******"));
            console.log(chalk.yellow("************************"));
            todos.forEach((todos) => console.log(chalk.yellow(todos)));
            console.log(chalk.yellow("************************"));
        }
        else if (ans.todo === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: chalk.gray("What task do you want to delete?"),
                name: "delete",
                choices: todos.map((item) => item),
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.delete);
            todos = [...newTodo];
            todos.forEach((add) => console.log(chalk.yellow(add)));
        }
        else if (ans.todo === "Exit") {
            console.log(chalk.bold.gray("\t\n                                              ************************\t"));
            console.log(chalk.bold.gray("\t                                      ****    Goodbye!    ****\t"));
            console.log(chalk.bold.gray("\t                                      ************************\n\t"));
            process.exit(0);
        }
    } while (true);
}
createToDo(todos);
