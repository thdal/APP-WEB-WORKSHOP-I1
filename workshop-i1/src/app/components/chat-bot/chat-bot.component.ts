import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor() { }

  const green = document.querySelector('.vert');
  const orange = document.querySelector('.orange');
  const red = document.querySelector('.rouge');
  const hello = document.querySelector('.bonjour');
  const writing = document.querySelector('.ecrire');
  const eyes = document.querySelectorAll('.chatbot-eye-green')
  const arms = document.querySelectorAll('.chatbot-arm-hello')
  const mark = document.querySelector('.chatbot-mark-green')
  const beam = document.querySelector('#chatbot-beam-pulsar')
  
  green.onclick = function(event) {
    eyes.forEach(eye => {
      eye.className = "chatbot-eye-green centered"
    })
    arms.forEach(arm => {
      arm.className = 'chatbot-arm-green'
    })
    mark.className = 'chatbot-mark-green'
    beam.className = 'green'
  }
  
  orange.onclick = function(event) {
    eyes.forEach(eye => {
      eye.className = "chatbot-eye-orange centered"
    })
    arms.forEach(arm => {
      arm.className = 'chatbot-arm-orange'
    })
    mark.className = 'chatbot-mark-orange'
    beam.className = 'orange'
  }
  
  red.onclick = function(event) {
    eyes.forEach(eye => {
      eye.className = "chatbot-eye-red centered"
    })
    arms.forEach(arm => {
      arm.className = 'chatbot-arm-red'
    })
    mark.className = 'chatbot-mark-red'
    beam.className = 'red'
  }
  
  hello.onclick = function(event) {
    eyes.forEach(eye => {
      eye.className = "chatbot-eye-green centered"
    })
    arms.forEach(arm => {
      arm.className = 'chatbot-arm-hello'
    })
    mark.className = 'chatbot-mark-green'
    beam.className = 'green'
  }
  
  writing.onclick = function(event) {
    eyes.forEach(eye => {
      eye.className = "chatbot-eye-writing centered"
    })
    mark.className = 'chatbot-mark-writing'
  }
  

  ngOnInit(): void {
  }

}
