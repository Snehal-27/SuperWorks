import { Component, OnInit ,Input} from '@angular/core';
import { MyMainService } from '../main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: string; // decorate the property with @Input()
  constructor(private mySharedService: MyMainService) { }

  ngOnInit(): void {
  }

}
