export interface FeedText {
    [key: string]: any;
}
export declare enum FeedTypes {
    INVESTMENT = "Investment",
    AWARD = "Award",
    UPDATE = "Update",
    COLLABORATORS = "Collaborators"
}
export interface Feed {
    feedId: string;
    teamId: string;
    feedType: FeedTypes;
    text: FeedText;
    date: Date;
}
//# sourceMappingURL=index.d.ts.map