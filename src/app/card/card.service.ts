import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { ICard } from './card';
// import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardUrl = 'assets/cards/cards.json';
  // private baseUrl = 'http://localhost/first/store.php'; SERVER URL
  constructor(private http: HttpClient){}

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // sendOrder(basketContent: IProduct[]): Observable<Product[]> {
  //   return this.http.post(`${this.baseUrl}/store`, { data: basketContent })
  //     .pipe(
  //       tap((res) => { 
  //       console.log('Post result: ', res);
  //       return res;
  //     }),
  //     catchError(this.handleError));
  //    )
  // }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
