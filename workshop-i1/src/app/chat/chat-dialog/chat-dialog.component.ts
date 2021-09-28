import { Component, OnInit } from '@angular/core';
import { ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css', '../../../assets/css/main.css', '../../../assets/css/peekobot.css']
})
export class ChatDialogComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getAll();
  }

//On récupére tous les événements de tous les utilisateurs
  getAll() {
    this.chatService.getAll().subscribe(data => {
     //this.recEvents = data;
     // this.errorNotFound = false;
      console.log("ladata")
      console.log(data);
    }, error => {
     /* if (error.status == 404)
        this.errorNotFound = true;
      if(this.errorNotFound)
        this.eventNotFound = "événément introuvable";
      console.log('oops', error);*/
    });
  }

}
