import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCompetition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Competition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly year?: number | null;
  readonly country?: string | null;
  readonly ComToMatches?: (Match | null)[] | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompetition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Competition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly year?: number | null;
  readonly country?: string | null;
  readonly ComToMatches: AsyncCollection<Match>;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Competition = LazyLoading extends LazyLoadingDisabled ? EagerCompetition : LazyCompetition

export declare const Competition: (new (init: ModelInit<Competition>) => Competition) & {
  copyOf(source: Competition, mutator: (draft: MutableModel<Competition>) => MutableModel<Competition> | void): Competition;
}

type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataTime: string;
  readonly city: string;
  readonly price: number;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly refereeName?: string | null;
  readonly refereeImage?: string | null;
  readonly description?: string | null;
  readonly competitionID: string;
  readonly imageUrl?: string | null;
  readonly MatchToTeams?: (Team | null)[] | null;
  readonly homeTeam?: string | null;
  readonly awayTeam?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataTime: string;
  readonly city: string;
  readonly price: number;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly refereeName?: string | null;
  readonly refereeImage?: string | null;
  readonly description?: string | null;
  readonly competitionID: string;
  readonly imageUrl?: string | null;
  readonly MatchToTeams: AsyncCollection<Team>;
  readonly homeTeam?: string | null;
  readonly awayTeam?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly coach?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly imageUrl?: string | null;
  readonly matchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly coach?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly imageUrl?: string | null;
  readonly matchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}