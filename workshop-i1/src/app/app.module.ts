import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
