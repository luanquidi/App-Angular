import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  public tema: string;

  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService
  ) { }

  ngOnInit() {
    this.putCheck();
  }

  changeColor(name: string, link:any){
    this.setCheck(link);
    this._ajustes.applyTheme(name);
  }

  setCheck(link:any){
    let selectores = this._document.getElementsByClassName('selector');
    
    for(let i of selectores){

      if(i.classList.contains('working')){
        
        i.classList.remove('working');

      }
    }

    link.classList.add('working');
  }

  putCheck(){
    let selectores = this._document.getElementsByClassName('selector');
    
    for(let i of selectores){
      if(i.getAttribute('data-theme') == this._ajustes.ajustes.tema){
        i.classList.add('working');
        break;
      }
    }
  }
}
