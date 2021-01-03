import { Component , OnInit} from '@angular/core';
import { MyMainService } from './main.service';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: any = [];

  constructor(
    private myMainService: MyMainService,
   ) { }

  ngOnInit() {
    // Get all product list on component init
       this.products = this.myMainService.getProducts();
   }  
}
