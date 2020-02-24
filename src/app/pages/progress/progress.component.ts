import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent1: number = 50;
  percent2: number = 40;

  constructor() { }

  ngOnInit() {
  }

  updateProgress( event:number, progressNumber:number ){
    
    if(progressNumber == 1){
      this.percent1 = event;
      return;
    }
    this.percent2 = event;

  }


}
