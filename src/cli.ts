#!/usr/bin/env node

import CLIApplication from './clie-command/cli-application.js';
import HelpCommand from './clie-command/help-command.js';
import VersionCommand from './clie-command/version-command.js';
import ImportCommand from './clie-command/import-command.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand(),
  new VersionCommand(),
  new ImportCommand()
]);

myManager.processCommand(process.argv);
