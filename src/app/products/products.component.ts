import { Component, OnInit ,Input} from '@angular/core';
import { MyMainService } from '../main.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // @Input() products: string; // decorate the property with @Input()
  //  singleProduct;
   isAdded;
   productList:any=[];
  constructor(private mySharedService: MyMainService) { 
    this.productList = this.mySharedService.getProducts();
  }

  ngOnInit() {

   
  }

}
