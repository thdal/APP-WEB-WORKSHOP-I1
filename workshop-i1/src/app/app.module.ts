import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app/services/interceptor.service';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { BlockFooterComponent } from './components/block-footer/block-footer.component';
import { BlockBodyComponent } from './components/block-body/block-body.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { MenuTopComponent } from './components/menu/menu-top/menu-top.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent,
    BlockHeaderComponent,
    BlockFooterComponent,
    BlockBodyComponent,
    ChatBotComponent,
    MenuTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
