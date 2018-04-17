var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "jamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome to Jamazon--your one-stop shop for 'J & A's Erotic Jammery & Chutneria'. Choose 'Shop' below to get started.",
        choices: [
            "Shop", "Quit"
        ]
    })
}