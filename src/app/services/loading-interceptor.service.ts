import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { IndikatorService } from './indikator.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor{

constructor(private loadingIndikator: IndikatorService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndikator.loading = true;
    return next.handle(req).pipe(finalize(() => {
      this.loadingIndikator.loading = false;
    }))
  }

}
