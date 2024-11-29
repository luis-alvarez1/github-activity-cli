import chalk from 'chalk';
import { GitHubAPIAdapter } from './GithubAPI';

export class CLI {
    private api = new GitHubAPIAdapter();
    async run() {
        const username = process.argv[2];
        if (!username) {
            console.log(chalk.redBright('Please provide a GitHub username.'));
            return;
        }

        try {
            await this.api.get(`/users/${username}/events`, { username });
        } catch (error) {
            console.error(
                'Error fetching user activity:',
                (error as Error).message
            );
        }
    }
}
