import { Octokit } from '@octokit/rest';
import { APIAdapter } from './interfaces/APIAdapter.js';
import dotenv from 'dotenv';
import { OctokitParams } from './interfaces/OctokitParams.js';

dotenv.config();

export class GitHubAPI implements APIAdapter {
    private octokit: Octokit;

    constructor() {
        this.octokit = new Octokit({
            auth: process.env.GITHUB_AUTH_TOKEN,
        });
    }
    async get<T>(url: string, params: OctokitParams): Promise<T> {
        const response = await this.octokit.request(`GET ${url}`, params);
        return response.data;
    }
}
