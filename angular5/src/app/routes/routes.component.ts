import { RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private dataInfo: any;
  private stopInfo: any;
  private positionInfo: Array<Object> = [];

  constructor(private digitransit: DigitransitService, private router: Router, private route: ActivatedRoute) {
    //this.router.navigate(['routes']);
   }

      getPositionById = (id: string) => {
    let positions: Array<any>;
    let positionForBus;
    this.digitransit.getPosition(id)
    .subscribe(
      (response: Array<any>) => {
          // let result: Array<Object> = [];
          //console.log(response);
      positionForBus = this.sortPositions(response)
      positionForBus = this.splicePositions(positionForBus);
      console.log(positionForBus);
      return positionForBus;
        });
  }

  splicePositions = (positions: Array<Object>) => {
      positions.length = 1;
      return positions;
  }

  sortPositions = (positions) => {
            var vehicles: Array<Object> = [];
            Object.keys(positions).forEach(function(id){
              Object.keys(positions[id]).forEach(function(it){
                var vehicle = positions[id][it];
                vehicles.push(vehicle);
              });
            });
            return vehicles;
          }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) =>
    this.digitransit.getRoutes(params['stop']))
        .subscribe(
          (res) => {
          this.dataInfo = res.data.stops[0].patterns;
          this.stopInfo = res.data.stops[0];

         let landl = this.getPositionById('HSL:1009');

          //this.getPositionById('HSL:5510');
          console.log(landl);

          for (let i = 0, l = this.dataInfo.length; i < l; i++) {

            let id = this.dataInfo[i].route.gtfsId;
            

           // this.dataInfo[i].latlongId = id;
           // let landl = this.getPositionById('HSL:1009');
          this.dataInfo[i].lat = landl;
          this.dataInfo[i].long = landl;

        /*   var x = 1;
            var y = null; // To keep under proper scope

            setTimeout(function() {
               x = x * 3 + 2;
                y = x / 2;
        }, 100); */

        }

        console.log(this.dataInfo);

          }
        );

  }

}

