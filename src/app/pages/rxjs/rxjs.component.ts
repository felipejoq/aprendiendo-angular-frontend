import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

/**
 * MAS INFORMACIÓN SOBRE LOS OBSERVABLES
 * http://reactivex.io/documentation/observable.html
 */

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    // REINTENTAR
    // this.regresaObservable()
    // .pipe(retry(2))
    // .subscribe(
    //   numero => console.log("Subs ", numero),
    //   error => console.log('Error en el observable: ', error),
    //   () => console.log('El observador terminó')
    // );

    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log("Subs ", numero),
        error => console.log("Error en el observable: ", error),
        () => console.log("El observador terminó")
      );
  }

  ngOnInit() {}

  ngOnDestroy(){
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador ++;

        const salida = {
          valor: contador
        }

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2){
        //   // clearInterval(intervalo);
        //   observer.error('Hubo un error! :(');
        // }
      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter( (resp, index) => {
        // console.log('filter: ', resp, index);
        if((resp % 2) === 1){
          //impar
          return true;
        }else{
          //par
          return false;
        }
      })
    );
  }
}
