#!/usr/bin/env node
import cli from "../src/utils/cli.js";

const name = cli();

console.log(`Hello, ${name}!`);
