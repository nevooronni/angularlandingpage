import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

	//create property
	faqs: Array<any>;

	//pass http instance
  constructor(private http:Http) { 

  	//make request
  	this.http.get("https://jsonplaceholder.typicode.com/posts")
  		//get the reponse in json format
  		.map(response => response.json())
  		//add responses the faqs array property
  		.subscribe(res => this.faqs = res);
  }

  //logic for when component initializes
  ngOnInit() {
  }

}
