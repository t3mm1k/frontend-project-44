#!/usr/bin/env node
import cli from "../utils/cli.js";

console.log("Welcome to the Brain Games!");

const name = cli();

console.log(`Hello, ${name}!`);

