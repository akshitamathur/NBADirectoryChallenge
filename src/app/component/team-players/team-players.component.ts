import { Component, OnInit } from '@angular/core';
import { Player} from '../../model/model';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayerService,
    ){}

  ngOnInit(): void {

    this.playerService.getAllPlayers().subscribe(result => {
      this.players = result;
    });
  }

sortHeight(){
  this.players.sort(function (a, b) {
  return a.heightInches - b.heightInches;
});
 }

sortWeight(){
this.players.sort(function (a, b) {
  return a.weightPounds - b.weightPounds;
});
}
}




 