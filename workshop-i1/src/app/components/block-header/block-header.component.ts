import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.css']
})
export class BlockHeaderComponent implements OnInit {
  title = 'bienvenue sur le site de support sur le cybermalveillance !';
  description = 'Quelle est la mission de ce site ?';
  constructor() { }

  ngOnInit(): void {
  }

}
