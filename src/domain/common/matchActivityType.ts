import { ActivityType } from '../adapters/interfaces/GitHubAPIResponse';

export const matchActivityType = {
    [ActivityType.CreateEvent]: () => {},
    [ActivityType.DeleteEvent]: () => {},
    [ActivityType.ForkEvent]: () => {},
    [ActivityType.GollumEvent]: () => {},
    [ActivityType.IssueCommentEvent]: () => {},
    [ActivityType.IssuesEvent]: () => {},
    [ActivityType.MemberEvent]: () => {},
    [ActivityType.PublicEvent]: () => {},
    [ActivityType.PullRequestEvent]: () => {},
    [ActivityType.PullRequestReviewEvent]: () => {},
    [ActivityType.PullRequestReviewCommentEvent]: () => {},
    [ActivityType.PullRequestReviewThreadEvent]: () => {},
    [ActivityType.PushEvent]: () => {},
    [ActivityType.ReleaseEvent]: () => {},
    [ActivityType.SponsorshipEvent]: () => {},
    [ActivityType.WatchEvent]: () => {},
};
