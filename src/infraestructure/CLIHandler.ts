import chalk from 'chalk';
import { UserActivityUseCase } from '../application/UserActivityUseCase.js';

export class CLIHandler {
    private userActivity = new UserActivityUseCase();

    async run() {
        // const username = process.argv[2];
        const username = 'luis-alvarez1';
        if (!username) {
            console.log(chalk.redBright('Please provide a GitHub username.'));
            return;
        }
        await this.userActivity.getUserActivity(username);
    }
}
