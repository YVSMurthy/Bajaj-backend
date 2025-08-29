const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const FULL_NAME = "YVSuyashMurthy";
const DOB = "02062004";
const EMAIL = "suyash.murthy@gmail.com";
const ROLL_NUMBER = "22BCE2019";

function alternateCaps(str) {
    let result = "";
    let toggle = true;
    for (let ch of str.split("").reverse()) {
        result += toggle ? ch.toUpperCase() : ch.toLowerCase();
        toggle = !toggle;
    }
    return result;
}

app.all("/", (req, res) => {
    res.status(200).json({ message: "Server is up and running! Go to /bfhl" });
});

app.post("/bfhl", (req, res) => {
    try {
        const data = req.body.data;
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialChars = [];
        let sum = 0;
        let alphaConcat = "";

        data.forEach((item) => {
            if (!isNaN(item)) {
                const num = parseInt(item, 10);
                if (num % 2 === 0) {
                    evenNumbers.push(item.toString());
                } else {
                    oddNumbers.push(item.toString());
                }
                sum += num;
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alphaConcat += item;
            } else {
                specialChars.push(item);
            }
        });

        const response = {
            is_success: true,
            user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialChars,
            sum: sum.toString(),
            concat_string: alternateCaps(alphaConcat),
        };

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ is_success: false, message: "Server Error" });
    }
});

app.listen(3000, () => console.log(`Server running on port ${3000}`));

module.exports = app;
