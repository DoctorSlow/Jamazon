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
        purchase(res);
    })
};

function purchase(res) {
    inquirer.prompt([{
        name: "choice",
        type: "input",
        message: "Please enter the product name or ID number that you would like to buy"
    }]).then(function (answer) {
        var correct = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name == answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    name: "quantity",
                    type: "input",
                    message: "Please indicate how many jars you would like to purchase.",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function (answer) {
                    if ((res[id].stock_quantity - answer.quantity) > 0) {
                        connection.query("UPDATE products SET stock_quantity =' " + (res[id].stock_quantity - answer.quantity) + " ' WHERE product_name = ' " + product + " ' ", function (err, res2) {
                            console.log("Success. Thank you for your purchase.");
                            tableDisplay();
                        })
                    } else {
                        console.log("Insufficient stock available. Please try a different product or quantity");
                        customerPrompt(res);
                    }
                })
            }
        }
    })
}