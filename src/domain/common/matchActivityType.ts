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
            `${activity.actor.login} commented on issue (${activity.payload.issue?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.IssuesEvent]: (activity: Activity) => {
        return chalk.magentaBright(
            `${activity.actor.login} ${activity.payload.action} on an issue (${activity.payload.issue?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.MemberEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} ${activity.payload.action} ${activity.payload.member?.login} as a collaborator for ${activity.repo.name}`
        );
    },
    [ActivityType.PublicEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} made ${activity.repo.name} public`
        );
    },
    [ActivityType.PullRequestEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} ${activity.payload.action} pull request (${activity.payload.pull_request?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} ${activity.payload.action} a review (${activity.payload.review?.state}) for pull request (${activity.payload.pull_request?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewCommentEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} ${activity.payload.action} a comment for a review for pull request (${activity.payload.pull_request?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.PullRequestReviewThreadEvent]: (activity: Activity) => {
        return chalk.whiteBright(
            `${activity.actor.login} marked as ${activity.payload.action} a review for pull request (${activity.payload.pull_request?.title}) for ${activity.repo.name}`
        );
    },
    [ActivityType.PushEvent]: (activity: Activity) => {
        return chalk.cyanBright(
            `${activity.actor.login} pushed ${activity.payload.size} commits to ${activity.repo.name}`
        );
    },
    [ActivityType.ReleaseEvent]: (activity: Activity) => {
        return chalk.yellowBright(
            `${activity.actor.login} ${activity.payload.action} a release (${activity.payload.release?.name}) for ${activity.repo.name}`
        );
    },
    [ActivityType.SponsorshipEvent]: (activity: Activity) => {
        return chalk.cyanBright(
            `${activity.actor.login} ${activity.payload.action} a sponsorship for ${activity.repo.name}`
        );
    },
    [ActivityType.WatchEvent]: (activity: Activity) => {
        return chalk.greenBright(
            `${activity.actor.login} ${activity.payload.action} watching ${activity.repo.name}`
        );
    },
};
