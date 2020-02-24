import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor() {
    this.getSettings();
  }

  setSettings(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  getSettings(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.applyTheme(this.ajustes.tema);
    }
  }

  applyTheme(theme: string){

    const url = `assets/css/colors/${theme}.css`;
    const element = document.getElementById("tema");
    element.setAttribute('href', url);

    this.ajustes.tema = theme;
    this.ajustes.temaUrl = url;

    this.setSettings();

  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
