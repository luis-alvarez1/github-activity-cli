#!/usr/bin/env node
import { CLIHandler } from './adapters/cli';

// GET /users/{username}/events
const cli = new CLIHandler();

cli.run();
