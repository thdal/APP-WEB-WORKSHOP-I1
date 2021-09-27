import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockChatBotComponent } from './components/block-chat-bot/block-chat-bot.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockChatBotComponent,
    BlockHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
