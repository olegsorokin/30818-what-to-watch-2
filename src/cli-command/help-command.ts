import chalk from 'chalk';
import { CliCommandInterface } from './cli-command.interface.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
      Программа для подготовки данных для REST API сервера.

      Пример: cli.js --<${chalk.blue('command')}> [${chalk.cyan('--arguments')}]

      Команды:

       ${chalk.cyan('--version')}:                   ${chalk.magenta('# выводит номер версии')}
       ${chalk.cyan('--help')}:                      ${chalk.magenta('# печатает этот текст')}
       ${chalk.cyan('--import')} <path>:             ${chalk.magenta('# импортирует данные из TSV')}
       ${chalk.cyan('--generate')} <n> <path> <url>  ${chalk.magenta('# генерирует произвольное количество тестовых данных')}
    `);
  }
}
