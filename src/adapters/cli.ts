import chalk from 'chalk';
import { GitHubAPIAdapter } from './GithubAPI';
import { Activity } from '../domain/common/GitHubAPIResponse';

export class CLIHandler {
    private api = new GitHubAPIAdapter();
    async run() {
        // const username = process.argv[2];
        const username = 'luis-alvarez1';
        if (!username) {
            console.log(chalk.redBright('Please provide a GitHub username.'));
            return;
        }

        try {
            const response: Activity[] = await this.api.get<Activity[]>(
                `/users/${username}/events`,
                {
                    username,
                }
            );
            console.log(response);
        } catch (error) {
            console.error(
                'Error fetching user activity:',
                (error as Error).message
            );
        }
    }
}
