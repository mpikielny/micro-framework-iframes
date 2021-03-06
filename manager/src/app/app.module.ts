import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MasterAppComponent } from './master-app.component';
import { LogComponent } from './log/log.component';
import { LogsrvService } from './logsrv.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterAppComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [LogsrvService],
  bootstrap: [MasterAppComponent]
})
export class AppModule { }
