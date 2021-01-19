import { Component, OnInit } from '@angular/core';
import { MyMainService } from '../main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  totalAmount: any;


  constructor(
    private mySharedService: MyMainService
  ) {
    this.cartItems = this.mySharedService.getCartItem();
    this.totalAmount = this.mySharedService.getTotalPrice();
  }

  ngOnInit() {


  }
  ngAfterViewInit(){
    this.mySharedService.valueChange.subscribe(
      ()=>{
        this.totalAmount = this.mySharedService.getTotalPrice();

      }
    )
  }

  removeItemFromCart(productId) {

    this.mySharedService.removeProductFromCart(productId);
    this.mySharedService.valueChangeEvent();

  }

  emptyCart() {
    this.mySharedService.emptryCart();
    this.mySharedService.emptyCartEvent();
  }

}
