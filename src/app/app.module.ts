import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from 'src/services/customerService';
import { HttpClientModule } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CUSTOMER_SERVICE_BASE_PATH } from 'variables';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,    
    BrowserAnimationsModule,  
    HttpClientModule,
    AppRoutingModule,
    SidenavModule
  ],
  providers: [
    { provide: CUSTOMER_SERVICE_BASE_PATH, useValue: environment.API_ENDPOINT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer){
    overlayContainer.getContainerElement().classList.add('angular-material-router-app-theme');
  }
}
