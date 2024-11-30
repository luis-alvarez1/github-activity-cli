import { RequestParameters } from '@octokit/types';

export interface OctokitParams extends RequestParameters {
    username: string;
}
