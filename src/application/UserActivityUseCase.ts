import { GitHubAPI } from '../domain/api/GithubAPI.js';
import { Activity } from '../domain/adapters/interfaces/GitHubAPIResponse.js';
import { matchActivityType } from '../domain/common/matchActivityType.js';

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
                'Error fetching user activity:',
                (error as Error).message
            );
        }
    }

    mapResponse(activities: Activity[]) {
        activities.map((activity) => {
            console.log(matchActivityType[activity.type](activity));
        });
    }
}
