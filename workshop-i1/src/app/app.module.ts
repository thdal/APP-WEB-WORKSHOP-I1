import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockChatBotComponent } from './components/block-chat-bot/block-chat-bot.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { BlockFooterComponent } from './components/block-footer/block-footer.component';
import { BlockBodyComponent } from './components/block-body/block-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockChatBotComponent,
    BlockHeaderComponent,
    BlockFooterComponent,
    BlockBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
