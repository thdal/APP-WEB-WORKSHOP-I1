import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChatBotComponent } from './block-chat-bot.component';

describe('BlockChatBotComponent', () => {
  let component: BlockChatBotComponent;
  let fixture: ComponentFixture<BlockChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockChatBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
