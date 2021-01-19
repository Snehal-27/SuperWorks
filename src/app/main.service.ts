import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class MyMainService {
    products: any = [];
    cartItems : any = [];
    @Output() valueChange = new EventEmitter();
    @Output() emptyCart = new EventEmitter();
    constructor() {

        this.products = [
            {
                "id": "001",
                "name": "Handwash",
                "price": 120,
                "isAdded":false,
                "image": "assets/images/handwash.jpg",
                "description": "Use the Klenz Hand Wash and keep your hands germ-free and refreshed for a long time."
            },
            {
                "id": "002",
                "name": "Immunity",
                "price": 110,
                "isAdded":false,
                "image": "assets/images/immunity.jpg",
                "description": "Yashad in Ayurveda means pure Zinc, which is scientifically processed in Aloe vera juice to create bioactive."
            },
            {
                "id": "003",
                "name": "Mask",
                "price": 150,
                "isAdded":false,
                "image": "assets/images/mask.png",
                "description": "NEA Face Protective Masks Are High Quality Certified CE FDA ISO Masks ,Made with N95 ,FFP2 standards."
            },
            {
                "id": "004",
                "name": "PPE-Kit",
                "price": 1000,
                "isAdded":false,
                "image": "assets/images/PPE-kit-1.jpeg",
                "description": "The PPE kit covers you from head to toe to reduce exposure to disease causing germs and keep you safe."
            },
            {
                "id": "005",
                "name": "Sanitizer",
                "price": 200,
                "isAdded":false,
                "image": "assets/images/sanitizer.jpg",
                "description": "While we always remember to sanitize our hands, we often forget about germs on surfaces that are frequently touched. "
            },
            {
                "id": "006",
                "name": "First Aid Kit",
                "price": 500,
                "isAdded":false,
                "image": "assets/images/travelKit.jpg",
                "description": "Made from high quality and durable plastic, this medical box features a see-through lid for easy accessibility."
            }
        ]


    }

    valueChangeEvent(){
      this.valueChange.emit();


    }

    emptyCartEvent(){
      this.emptyCart.emit();
    }

    getProducts() {
        return this.products;

    }

    getCartItem(){
        return this.cartItems;
    }

    setProducts(products) {
        this.cartItems.push(products);
        // this.products.next(products);
      }
    
      //  Add single product to the cart
      addProductToCart(product) {
        this.cartItems.push(product);
        // this.products.next(this.cartItems);
      }
      
    // Remove single product from the cart
   removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });
    this.products.map((item, index) => {
      if (item.id === productId) {
        item.isAdded=false ;
      }
    });

   
  }

  // Remove all the items added to the cart
  emptryCart() {
    // this.products.next(this.cartItems);
    this.products.map((item, index) => {
       
        item.isAdded=false ;
      
    });
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      total += item.price;
    });

    return total
  }

}