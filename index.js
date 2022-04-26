import app from "./app.js";
import { connectToDB } from "./utils/mongoose.js";

const PORT = process.env.PORT || 3030;

function main() {
    connectToDB();
    app.listen(PORT);
    console.log(`http://localhost:${PORT}`);
}

main();
