import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  public green: any;
  public orange: any;
  public red: any;
  public hello: any;
  public writing: any;
  public eyes: any;
  public arms: any;
  public mark: any;
  public beam: any;
  public mood: any;
  public observer: any;
  public test:any;

  constructor() {}

  ngOnInit(): void {
    this.green = document.querySelector('.vert');
    this.orange = document.querySelector('.orange');
    this.red = document.querySelector('.rouge');
    this.hello = document.querySelector('.bonjour');
    this.writing = document.querySelector('.ecrire');
    this.mood = document.querySelector('#peekobot-mood');
    this.observer = new MutationObserver(function (event) {
      this.eyes = document.querySelectorAll('.chatbot-eye');
      this.arms = document.querySelectorAll('.chatbot-arm');
      this.mark = document.querySelector('.chatbot-mark');
      this.beam = document.querySelector('#chatbot-beam-pulsar');
      if (event[0].target.className) {
        switch (event[0].target.className) {
          case 'green':
            this.eyes.forEach(eye => {
              eye.className = 'chatbot-eye chatbot-eye-green centered';
            });
            this.arms.forEach(arm => {
              arm.className = 'chatbot-arm chatbot-arm-green';
            });
            this.mark.className = 'chatbot-mark chatbot-mark-green';
            this.beam.className = 'chatbot-beam-green';
            break;

            case 'orange':
              this.eyes.forEach(eye => {
              eye.className = 'chatbot-eye chatbot-eye-orange centered';
            });
            this.arms.forEach(arm => {
              arm.className = 'chatbot-arm chatbot-arm-orange';
            });
            this.mark.className = 'chatbot-mark chatbot-mark-orange';
            this.beam.className = 'chatbot-beam-orange';
            break;
        
            case 'red':
              this.eyes.forEach(eye => {
              eye.className = 'chatbot-eye chatbot-eye-red centered';
            });
            this.arms.forEach(arm => {
              arm.className = 'chatbot-arm chatbot-arm-red';
            });
            this.mark.className = 'chatbot-mark chatbot-mark-red';
            this.beam.className = 'chatbot-beam-red';
            break;
        
            case 'hello':
              this.eyes.forEach(eye => {
              eye.className = 'chatbot-eye chatbot-eye-green centered';
            });
            this.arms.forEach(arm => {
              arm.className = 'chatbot-arm chatbot-arm-hello';
            });
            this.mark.className = 'chatbot-mark chatbot-mark-green';
            this.beam.className = 'chatbot-beam-green';
            break;
        
            case 'writing':
              this.eyes.forEach(eye => {
              eye.className = 'chatbot-eye chatbot-eye-writing centered';
            });
            this.mark.className = 'chatbot-mark chatbot-mark-writing';
            break;
          }
        }
    });
    this.observer.observe(this.mood, {
      attributes: true, 
      attributeFilter: ['class'],
      childList: false, 
      characterData: false
    })
  }
}
