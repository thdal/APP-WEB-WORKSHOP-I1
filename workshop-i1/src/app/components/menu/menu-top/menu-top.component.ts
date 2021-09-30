import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  apiUrl = environment.apiBaseUrl;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    //Ici on gère manuellement le clique sur un bouton du menu top pour l'affichage du background-color
    //Récupére le pathname de la route actuelle sans paramètre ex: eventsList/1 -> eventsList
    //let url = (window.location.hash).split('/')[1];
    let url = window.location.pathname ;
    console.log("danslurl");
    console.log(url);
    console.log(window.location.pathname);
    $(this).closest('li').addClass('active-gl');

    //Cherche tous les id du template qui match avec le pathname
    $('li a').each(function() {
      if ($(this).attr('id') === url) {
        console.log("coucouici");
        //Ajoute la classe active-gl à id===pathname (donc on fait matcher nos id dans le template)
        //On a une classe spécifique pour les mobiles
        $(this).closest('li').addClass('active-gl');

        if(!(window.screen.width <= 480)){
          $(this).closest('li').addClass('active-gl');
        }else{
          $(this).closest('li').addClass('active-mobile-gl');
        }
      }
    });
  }

  //Call la route de la page de l'ajout d'un événement formEvent
  addAnEvent() {
    //this.router.navigate(['/addAnEvent']);
  }
  //Call la route de la page sur la politique de confidentialité RGPD
  goToPrivacyPolicy(){
    //this.router.navigate(['/editProfile', this.currentUser.id]);
  }
  //Call la route de la gestion des utilisateurs (route admin)
  manageUsers(){
    //this.router.navigate(['/manageUsers']);
  }
  //Call la route home ou recharche si on s'y trouve
  goToHome(){
    let url = (window.location.hash).split('/')[1];
    if(!url){
      window.location.reload();
    }
    this.router.navigate(['']);
  }

}
