import chalk from 'chalk';
import {
    Activity,
    ActivityType,
} from '../adapters/interfaces/GitHubAPIResponse.js';

export const matchActivityType = {
    [ActivityType.CreateEvent]: (activity: Activity) => {
        return chalk.blueBright(
            `${activity.actor.login} created ${activity.repo.name}`
        );
    },
    [ActivityType.DeleteEvent]: (activity: Activity) => {
        return chalk.redBright(
            `${activity.actor.login} deleted ${activity.repo.name}`
        );
    },
    [ActivityType.ForkEvent]: (activity: Activity) => {
        return chalk.blueBright(
            `${activity.actor.login} forked ${activity.repo.name}`
        );
    },
    [ActivityType.GollumEvent]: (activity: Activity) => {
        return chalk.cyanBright(`${activity.actor.login} created a wiki`);
    },
    [ActivityType.IssueCommentEvent]: (activity: Activity) => {
        return chalk.magentaBright(
            `${activity.actor.login} commented on issue for ${activity.repo.name}`
        );
    },
    [ActivityType.IssuesEvent]: (activity: Activity) => {
        return chalk.magentaBright(
            `${activity.actor.login} interacted on an issue for ${activity.repo.name}`
        );
    },
    [ActivityType.MemberEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} modified repository contributors for ${activity.repo.name}`
        );
    },
    [ActivityType.PublicEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} made ${activity.repo.name} public`
        );
    },
    [ActivityType.PullRequestEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} pull request activit related to ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} pull request review activity related to ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewCommentEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} pull request review comment activity related to ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewThreadEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} pull request review thread activity related to ${activity.repo.name}`
        );
    },
    [ActivityType.PushEvent]: (activity: Activity) => {
        return chalk.cyanBright(
            `${activity.actor.login} pushed ${activity.payload.size} commits to ${activity.repo.name}`
        );
    },
    [ActivityType.ReleaseEvent]: (activity: Activity) => {
        return chalk.yellowBright(
            `${activity.actor.login} release activity related to ${activity.repo.name}`
        );
    },
    [ActivityType.SponsorshipEvent]: (activity: Activity) => {
        return chalk.cyanBright(
            `${activity.actor.login} sponsorship activity related to ${activity.repo.name}`
        );
    },
    [ActivityType.WatchEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} watched ${activity.repo.name}`
        );
    },
};
