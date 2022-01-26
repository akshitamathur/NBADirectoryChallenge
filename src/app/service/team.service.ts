import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<any> {
    return this.http.get("/teams/");
  }

  getTeamDetails(teamId: number): Observable<any> {
    return this.http.get("/teams/" + teamId);
  }
}
