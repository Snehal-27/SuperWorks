import { Component, OnInit } from '@angular/core';
import { MyMainService } from '../main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //  cartItems;
  //  totalAmmount;

  constructor(
    private mySharedService: MyMainService
  ) { }

  ngOnInit() {

    // this.mySharedService.getProducts().subscribe(data => {
    //   this.cartItems = data;

    //   this.totalAmmount = this.mySharedService.getTotalPrice();
    // });

  }

  // Remove item from cart list
  // removeItemFromCart(productId) {
  //   /* this.cartItems.map((item, index) => {
  //     if (item.id === productId) {
  //       this.cartItems.splice(index, 1);
  //     }
  //   });

  //   this.mySharedService.setProducts(this.cartItems); */

  //   this.mySharedService.removeProductFromCart(productId);

  // }

  // emptyCart() {
  //   this.mySharedService.emptryCart();
  // }

}
