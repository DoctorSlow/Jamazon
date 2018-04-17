var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "jamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful!");
    customerPrompt();
});

function customerPrompt() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "    * * * * * \nWelcome to Jamazon--your one-stop shop for 'J & A's Erotic Jammery & Chutneria'. \n     * * * * * \nChoose 'Shop' below to get started or 'Quit' to exit.\n     * * * * * ".blue,
        choices: ["Shop", "Quit"]
    }).then(function (user) {
        if (user.action == "Shop") {
            tableDisplay();
        } else {
            process.exit();
        }
    })
};

function tableDisplay() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
        }
        // purchase(res);
    })
};