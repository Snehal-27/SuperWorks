import { Component, OnInit } from '@angular/core';
import { MyMainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   cartProductCount: number = 0;

  constructor(private mySharedService: MyMainService) { }

  ngOnInit(): void {
    // this.cartProductCount = this.mySharedService.getCartItem().length;
  }
  ngAfterViewInit(){
    this.mySharedService.emptyCart.subscribe(
      ()=>{
        this.cartProductCount = this.mySharedService.getCartItem().length;
      }
    )
    this.mySharedService.valueChange.subscribe(
      ()=>{
        this.cartProductCount = this.mySharedService.getCartItem().length;
      }
    )
  }
  
}
