import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit{
  teamIds: number;
  team: Team;
  players: Player[];
  // filtered array of players in each team
  filteredPlayers = [];


// function to filter players using the teamId from Players, and id from Teams
  filterData(teamId: number = null) {
    if (teamId) {
      this.filteredPlayers = this.players.filter(
        x => x.teamId == teamId);
    }
  }

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,    
    private route: ActivatedRoute
  ){
    this.teamIds = +this.route.snapshot.paramMap.get("teamId");
  }

  ngOnInit(): void {

    this.playerService.getAllPlayers().subscribe(result => {
      this.players = result;
      this.filterData(this.teamIds);
    });

    this.teamService.getTeamDetails(this.teamIds).subscribe(resultt => {
      this.team = resultt;
    });
  }
}
