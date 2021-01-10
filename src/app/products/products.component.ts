import { Component, OnInit, } from '@angular/core';
import { MyMainService } from '../main.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // @Input() products: string; // decorate the property with @Input()
  singleProduct: any;
  isAdded;
  productList: any = [];



  constructor(private mySharedService: MyMainService) {
    this.productList = this.mySharedService.getProducts();
  }

  ngOnInit() {


  }
  addToCart(event, productId) {
  
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.productList.map((item, index) => {
      if (item.id === productId) {
        item.isAdded = true;
      }
    })



    this.singleProduct = this.productList.filter(product => {
      return product.id === productId;
    });
    this.singleProduct.isAdded = true;
    // this.cartItems.push(this.singleProduct[0]);

    this.mySharedService.addProductToCart(this.singleProduct[0]);
    this.mySharedService.valueChangeEvent();
  }
}
