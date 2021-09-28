import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-body',
  templateUrl: './block-body.component.html',
  styleUrls: ['./block-body.component.css']
})
export class BlockBodyComponent implements OnInit {
title = 'Page d affichage dynamique en tant que page d accueil et de présentation après avoir débuter la conversation avec le chatbot';
  constructor() { }

  ngOnInit(): void {
  }

}
