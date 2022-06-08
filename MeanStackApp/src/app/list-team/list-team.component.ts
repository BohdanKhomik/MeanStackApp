import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../teams.service';
@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
  teams:any;
  constructor(private teamservice:TeamsService, private routes:Router) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(){
    this.teamservice.listTeam().subscribe((data:any)=>{
      //console.log(data);
      this.teams = data;

    })
  }

  delTeam(datas:any){
    this.teamservice.deleteTeam(datas._id).subscribe(data=>{
      console.log(datas);
      this.teams = this.teams.filter((u:any)=>u!==datas)
    })

  }
}
