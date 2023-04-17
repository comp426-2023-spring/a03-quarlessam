#!/usr/bin/env node

import { rps } from "../lib/rpsls.js"
import { rpsls } from "../lib/rpsls.js"
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
if (args.r || args.rules) {
  rpsls('rules')
  return
}
console.log(rpsls(args._[0]))