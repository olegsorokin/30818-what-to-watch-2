import CLIApplication from './clie-command/cli-application.js';
import HelpCommand from './clie-command/help-command.js';
import VersionCommand from './clie-command/version-command.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand(),
  new VersionCommand()
]);

myManager.processCommand(process.argv);
