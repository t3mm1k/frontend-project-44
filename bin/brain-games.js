#!/usr/bin/env node
import cli from "./cli.js";

console.log("Welcome to the Brain Games!");

const name = cli();

console.log(`Hello, ${name}!`);

