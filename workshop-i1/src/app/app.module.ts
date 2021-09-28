import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockChatBotComponent } from './components/block-chat-bot/block-chat-bot.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { BlockFooterComponent } from './coponents/block-footer/block-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockChatBotComponent,
    BlockHeaderComponent,
    BlockFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
