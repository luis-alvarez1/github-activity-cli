import { GitHubAPI } from '../domain/adapters/GithubAPI.js';
import { Activity } from '../domain/adapters/interfaces/GitHubAPIResponse.js';

export class UserActivityUseCase {
    private api = new GitHubAPI();

    async getUserActivity(username: string) {
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
    // TODO: Map response for CLI hanlder and printing elements with styling
    async mapResponse(response: Activity[]) {}
}
