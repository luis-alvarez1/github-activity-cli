export interface Activity {
    id: string;
    type: ActivityType;
    actor: Actor;
    repo: ActivityRepo;
    payload: Payload;
    public: boolean;
    created_at: Date;
    org?: Actor;
}

enum ActivityType {
    CreateEvent = 'CreateEvent',
    DeleteEvent = 'DeleteEvent',
    ForkEvent = 'ForkEvent',
    GollumEvent = 'GollumEvent',
    IssueCommentEvent = 'IssueCommentEvent',
    IssuesEvent = 'IssuesEvent',
    MemberEvent = 'MemberEvent',
    PublicEvent = 'PublicEvent',
    PullRequestEvent = 'PullRequestEvent',
    PullRequestReviewEvent = 'PullRequestReviewEvent',
    PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent',
    PullRequestReviewThreadEvent = 'PullRequestReviewThreadEvent',
    PushEvent = 'PushEvent',
    ReleaseEvent = 'ReleaseEvent',
    SponsorshipEvent = 'SponsorshipEvent',
    WatchEvent = 'WatchEvent',
}

interface Actor {
    id: number;
    login: string;
    display_login?: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

interface Payload {
    repository_id?: number;
    push_id?: number;
    size?: number;
    distinct_size?: number;
    ref?: string | null;
    head?: string;
    before?: string;
    commits?: Commit[];
    action?: string;
    number?: number;
    pull_request?: PayloadPullRequest;
    issue?: Issue;
    comment?: Comment;
    ref_type?: string;
    pusher_type?: string;
    master_branch?: string;
    description?: null;
}

interface Comment {
    url: string;
    html_url: string;
    issue_url: string;
    id: number;
    node_id: string;
    user: User;
    created_at: Date;
    updated_at: Date;
    author_association: string;
    body: string;
    reactions: Reactions;
    performed_via_github_app: null;
}

interface Reactions {
    url: string;
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}

interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface Commit {
    sha: string;
    author: Author;
    message: string;
    distinct: boolean;
    url: string;
}

interface Author {
    email: string;
    name: string;
}

interface Issue {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: Label[];
    state: string;
    locked: boolean;
    assignee: User;
    assignees: User[];
    milestone: null;
    comments: number;
    created_at: Date;
    updated_at: Date;
    closed_at: Date | null;
    author_association: string;
    active_lock_reason: null;
    draft: boolean;
    pull_request: IssuePullRequest;
    body: string;
    reactions: Reactions;
    timeline_url: string;
    performed_via_github_app: null;
    state_reason: null;
}

interface Label {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: string;
}

interface IssuePullRequest {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: Date | null;
}

interface PayloadPullRequest {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    number: number;
    state: string;
    locked: boolean;
    title: string;
    user: User;
    body: null | string;
    created_at: Date;
    updated_at: Date;
    closed_at: Date | null;
    merged_at: Date | null;
    merge_commit_sha: null | string;
    assignee: User | null;
    assignees: User[];
    requested_reviewers: User[];
    requested_teams: any[];
    labels: Label[];
    milestone: null;
    draft: boolean;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    head: Base;
    base: Base;
    _links: Links;
    author_association: string;
    auto_merge: null;
    active_lock_reason: null;
    merged: boolean;
    mergeable: null;
    rebaseable: null;
    mergeable_state: string;
    merged_by: User | null;
    comments: number;
    review_comments: number;
    maintainer_can_modify: boolean;
    commits: number;
    additions: number;
    deletions: number;
    changed_files: number;
}

interface Links {
    self: Comments;
    html: Comments;
    issue: Comments;
    comments: Comments;
    review_comments: Comments;
    review_comment: Comments;
    commits: Comments;
    statuses: Comments;
}

interface Comments {
    href: string;
}

interface Base {
    label: string;
    ref: string;
    sha: string;
    user: User;
    repo: BaseRepo;
}

interface BaseRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
}

interface ActivityRepo {
    id: number;
    name: string;
    url: string;
}
