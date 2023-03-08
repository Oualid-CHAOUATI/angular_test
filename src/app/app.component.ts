import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isConnected = false;
  title = 'angular_form';

  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  codepostal: string;
  numeroRue: string;
  rue: string;
}
