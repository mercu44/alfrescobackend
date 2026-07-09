require("dotenv").config();

const bcrypt = require("bcrypt");

async function main(){
    const hash = await bcrypt.hash(
        process.env.USER_PASSWORD,
        10
    );
    console.log(hash);

}

main();