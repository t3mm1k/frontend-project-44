import readlineSync from "readline-sync";

export default function () {
    return readlineSync.question("May I have your name? ");
}