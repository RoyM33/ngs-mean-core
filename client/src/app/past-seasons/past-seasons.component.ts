import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { TimeserviceService } from '../services/timeservice.service';

@Component({
  selector: 'app-past-seasons',
  templateUrl: './past-seasons.component.html',
  styleUrls: ['./past-seasons.component.css']
})
export class PastSeasonsComponent implements OnInit {

  constructor(private HS: HistoryService, private timeService: TimeserviceService) { }

  seasonsList = [];
  selectedSeason;

  divisionList = [];
  selectedDivision;

  ngOnInit() {
    this.timeService.getSesasonInfo().subscribe(
      res => {
        let currentSeason = res.value;
        this.HS.getPastSeasons().subscribe(
          res => {
            res.forEach(element => {
              if (parseInt(element.season) != parseInt(currentSeason)){
                this.seasonsList.push(element.season);
              }
            });
          },
          err => {
            console.log(err);
          }
        )
      }
    );

  }

  seasonSelected(){
    this.HS.getSeasonDivisions(this.selectedSeason).subscribe(
      res=>{
        // console.log(res);
        this.divisionList = [];
        res.forEach(element=>{
          this.divisionList.push(element.object);
        });
        console.log(this.divisionList);

      },
      err=>{
        console.log(err);
      }
    )
  }

  divisionSelected(){

  }

}
