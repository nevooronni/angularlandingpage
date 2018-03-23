import { Component } from '@angular/core';

//component decorator for component configuration
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

//this is where all the logic of your application go into e.g dependency injection 
export class AppComponent {

	toggleNav: false;
}
