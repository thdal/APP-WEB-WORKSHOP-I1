import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app/services/interceptor.service';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { BlockFooterComponent } from './components/block-footer/block-footer.component';
import { BlockBodyComponent } from './components/block-body/block-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent,
    BlockHeaderComponent,
    BlockFooterComponent,
    BlockBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
