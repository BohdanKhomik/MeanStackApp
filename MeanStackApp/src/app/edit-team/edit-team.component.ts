import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  addTeam:any;
  id: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private teamservice:TeamsService,
    private url:ActivatedRoute
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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.teamservice.singleTeam(this.id).subscribe(data=>{
      this.addTeam.patchValue(data);
    })
  }

  onSubmit(){
    console.log(this.addTeam.value);
    //this.id = this.url.snapshot.params['id'];
    this.teamservice.updateTeam(this.id, this.addTeam.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-team']);
    })
  }

}
