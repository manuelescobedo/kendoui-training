import { ITeam } from './team';


export interface IStat {

    teamId: number;
    games: number;
    score: number;
    wins: number;
    draws: number;
    losts: number;
    diff: number;
    id: number;
    team: ITeam;

}