import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcriptor: Subscription;

  constructor() {

    this.subcriptor = this.regresaObservable().pipe( 
      retry(2)
    )   
    .subscribe(
      //3 calls backs 1 informacion, 2 error, 3 terminó el observer
      numero => console.log('Subs', numero),
      error => console.log('Error', error),
      () => console.log('El observador terminó')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subcriptor.unsubscribe();
  }

  regresaObservable(): Observable<any>{

    return new Observable<any>( observer => {

      let contador = 0;

      const interval = setInterval(()=>{
        
        contador++;

        const salida = {
          valor: contador
        }

        observer.next(salida);
        
        // if(contador == 4){
        //   clearInterval(interval);
        //   observer.complete();
        // }

      }, 1000);

    }).pipe(
      map(resp => {
        return resp.valor;
      }),
      filter((valor)=> {
        if((valor % 2) === 0){
          return true;
        }
        return false;
      })
    );
  }

}
