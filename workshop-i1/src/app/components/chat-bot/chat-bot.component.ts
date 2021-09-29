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

  constructor() { }

  ngOnInit(): void {
    this.green = document.querySelector('.vert');
    this.orange = document.querySelector('.orange');
    this.red = document.querySelector('.rouge');
    this.hello = document.querySelector('.bonjour');
    this.writing = document.querySelector('.ecrire');
    this.eyes = document.querySelectorAll('.chatbot-eye-green');
    this.arms = document.querySelectorAll('.chatbot-arm-hello');
    this.mark = document.querySelector('.chatbot-mark-green');
    this.beam = document.querySelector('#chatbot-beam-pulsar');
  }

  greenEye() {
    this.eyes.forEach(eye => {
      eye.className = 'chatbot-eye-green centered';
    });
    this.arms.forEach(arm => {
      arm.className = 'chatbot-arm-green';
    });
    this.mark.className = 'chatbot-mark-green';
    this.beam.className = 'green';
  }

  orangeEye() {
    this.eyes.forEach(eye => {
      eye.className = 'chatbot-eye-orange centered';
    });
    this.arms.forEach(arm => {
      arm.className = 'chatbot-arm-orange';
    });
    this.mark.className = 'chatbot-mark-orange';
    this.beam.className = 'orange';
  }

  redEye() {
    this.eyes.forEach(eye => {
      eye.className = 'chatbot-eye-red centered';
    });
    this.arms.forEach(arm => {
      arm.className = 'chatbot-arm-red';
    });
    this.mark.className = 'chatbot-mark-red';
    this.beam.className = 'red';
  }

  sayHello() {
    this.eyes.forEach(eye => {
      eye.className = 'chatbot-eye-green centered';
    });
    this.arms.forEach(arm => {
      arm.className = 'chatbot-arm-hello';
    });
    this.mark.className = 'chatbot-mark-green';
    this.beam.className = 'green';
  }

  write() {
    this.eyes.forEach(eye => {
      eye.className = 'chatbot-eye-writing centered';
    });
    this.mark.className = 'chatbot-mark-writing';
  }




}
