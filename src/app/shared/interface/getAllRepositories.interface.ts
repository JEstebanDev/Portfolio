export interface GetAllRepositories {
  map(arg0: (obj: Repositories) => any): any;
}
export interface Repositories {
  id: number;
  nodeID: string;
  name: string;
  fullName: string;
  private: boolean;
  owner: Owner;
  htmlURL: string;
  description: null | string;
  fork: boolean;
  url: string;
  forksURL: string;
  keysURL: string;
  collaboratorsURL: string;
  teamsURL: string;
  hooksURL: string;
  issueEventsURL: string;
  eventsURL: string;
  assigneesURL: string;
  branchesURL: string;
  tagsURL: string;
  blobsURL: string;
  gitTagsURL: string;
  gitRefsURL: string;
  treesURL: string;
  statusesURL: string;
  languagesURL: string;
  stargazersURL: string;
  contributorsURL: string;
  subscribersURL: string;
  subscriptionURL: string;
  commitsURL: string;
  gitCommitsURL: string;
  commentsURL: string;
  issueCommentURL: string;
  contentsURL: string;
  compareURL: string;
  mergesURL: string;
  archiveURL: string;
  downloadsURL: string;
  issuesURL: string;
  pullsURL: string;
  milestonesURL: string;
  notificationsURL: string;
  labelsURL: string;
  releasesURL: string;
  deploymentsURL: string;
  createdAt: Date;
  updatedAt: Date;
  pushedAt: Date;
  gitURL: string;
  sshURL: string;
  cloneURL: string;
  svnURL: string;
  homepage: null | string;
  size: number;
  stargazersCount: number;
  watchersCount: number;
  language: null | string;
  hasIssues: boolean;
  hasProjects: boolean;
  hasDownloads: boolean;
  hasWiki: boolean;
  hasPages: boolean;
  forksCount: number;
  mirrorURL: null;
  archived: boolean;
  disabled: boolean;
  openIssuesCount: number;
  license: null;
  allowForking: boolean;
  isTemplate: boolean;
  webCommitSignoffRequired: boolean;
  topics: string[];
  visibility: Visibility;
  forks: number;
  openIssues: number;
  watchers: number;
  defaultBranch: DefaultBranch;
}

export enum DefaultBranch {
  Main = 'main',
  Master = 'master',
}

export interface Owner {
  login: Login;
  id: number;
  nodeID: NodeID;
  avatarURL: string;
  gravatarID: string;
  url: string;
  htmlURL: string;
  followersURL: string;
  followingURL: string;
  gistsURL: string;
  starredURL: string;
  subscriptionsURL: string;
  organizationsURL: string;
  reposURL: string;
  eventsURL: string;
  receivedEventsURL: string;
  type: Type;
  siteAdmin: boolean;
}
export enum Login {
  JEstebanDev = 'JEstebanDev',
}

export enum NodeID {
  MDQ6VXNlcjMzNjYzNjU4 = 'MDQ6VXNlcjMzNjYzNjU4',
}

export enum Type {
  User = 'User',
}

export enum Visibility {
  Public = 'public',
}
