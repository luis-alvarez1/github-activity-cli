import { Octokit } from 'octokit';
import { APIAdapter } from './interfaces/APIAdapter';
import dotenv from 'dotenv';

dotenv.config();

export class GitHubAPIAdapter implements APIAdapter {
    private octokit: Octokit;

    constructor() {
        this.octokit = new Octokit({
            auth: process.env.GITHUB_AUTH_TOKEN,
        });
    }
    async get<T>(url: string, params: any): Promise<T> {
        return await this.octokit.request(`GET ${url}`, params);
    }
}
