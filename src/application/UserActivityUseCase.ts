import { GitHubAPI } from '../domain/api/GithubAPI.js';
import { Activity } from '../domain/adapters/interfaces/GitHubAPIResponse.js';
import { matchActivityType } from '../domain/common/matchActivityType.js';
import chalk from 'chalk';

export class UserActivityUseCase {
    private api: GitHubAPI;
    constructor() {
        this.api = new GitHubAPI();
    }

    async getUserActivity(username: string) {
        try {
            const response: Activity[] = await this.api.get<Activity[]>(
                `/users/${username}/events`,
                {
                    username,
                }
            );
            this.mapResponse(response);
        } catch (error) {
            console.error(
                chalk.redBright('Error fetching user activity:'),
                chalk.redBright((error as Error).message)
            );
        }
    }

    mapResponse(activities: Activity[]) {
        activities.map((activity) => {
            console.log(matchActivityType[activity.type](activity));
        });
    }
}
