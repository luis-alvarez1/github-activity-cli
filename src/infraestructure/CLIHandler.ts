import chalk from 'chalk';
import { UserActivityUseCase } from '../application/UserActivityUseCase.js';

export class CLIHandler {
    private userActivity: UserActivityUseCase;

    constructor() {
        this.userActivity = new UserActivityUseCase();
    }

    async run() {
        const username = process.argv[2];
        if (!username) {
            console.log(chalk.redBright('Please provide a GitHub username.'));
            return;
        }
        console.log(
            chalk.yellowBright('LAST GITHUB USER ACTIVITY FOR: '),
            chalk.magentaBright(username)
        );
        await this.userActivity.getUserActivity(username);
    }
}
