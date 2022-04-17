import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AirState } from './states/air.state';
import { PassangerState } from './states/passenger.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AirState, PassangerState], {
      developmentMode: !environment.production
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
