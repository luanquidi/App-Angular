import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string =  '';
  @Input() percent: number = 50;


  @Output() changeValueOut: EventEmitter<number> = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {

  }

  changeValue( value:number ){

    const calc = this.percent + value;

    if(calc < 0 || calc > 100){
      return;
    }

    this.percent = calc;
    this.changeValueOut.emit(this.percent);
  }

}
