import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { DivisionService } from 'src/app/services/division.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  constructor(public TeamService:TeamService, private DivisionService:DivisionService) { }

  allTeams = [];
  displayTeams = [];
  divisions = [];
  index='*';

  loading: boolean = true;
  ngOnInit() {
    this.TeamService.getRegisteredTeams().subscribe(
      res=>{
        this.allTeams = res;
        this.displayTeams = res;
        this.loading = false;
      },
      err=>{
        console.log(err);
      }
    )



    this.DivisionService.getDivisionInfo().subscribe(
      res=>{
        this.divisions = res;
      },
      err=>{
        console.log(err);
      }
    )


  }

  filterTeams(val){
    this.index = val;
    if(val == '*'){
      this.displayTeams = this.allTeams;
    }else{
      this.displayTeams = this.allTeams.filter( a=>{
        if(a.divisionConcat == val){
          return true;
        }
      });
    }
  }

}
