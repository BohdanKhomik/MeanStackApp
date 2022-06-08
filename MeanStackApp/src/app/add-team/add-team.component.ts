import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../teams.service';
 
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeam:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private teamservice:TeamsService
    ) {
      this.addTeam = fb.group(
      {
        team_name:['', Validators.required],
        team_region:['', Validators.required],
        team_logotipe:['', Validators.required],
        team_prize_money:['', Validators.required],
      }

      )
     }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addTeam.value);
    this.teamservice.addTeam(this.addTeam.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-team']);
    })
  }
}
