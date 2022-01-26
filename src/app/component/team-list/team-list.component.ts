import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/model';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];


  constructor(
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(result => {
      this.teams = result;
    });
  }
}
