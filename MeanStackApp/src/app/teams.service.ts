import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  addTeam(team:any){
    return this.http.post('http://localhost:3000/teams/add-team', team);
  }
  listTeam(){
    return this.http.get('http://localhost:3000/teams/');
  }
  deleteTeam(id:any){
    return this.http.delete('http://localhost:3000/teams/del-team/'+id);
  }  
  singleTeam(id:any){
    return this.http.get('http://localhost:3000/teams/team/'+id);
  }

  updateTeam(id:any, team:any){
    return this.http.put('http://localhost:3000/teams/update-team/'+id, team);
  }
}
