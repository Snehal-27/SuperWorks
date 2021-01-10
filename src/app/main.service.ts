import { Injectable } from '@angular/core';


@Injectable()
export class MyMainService {
    products: any = [];
    cartItems : any = [];

    constructor() {

        this.products = [
            {
                "id": "001",
                "name": "Mi LED Smart TV 4A 108 cm (43)",
                "price": 22999,
                "isAdded":false,
                "image": "assets/images/handwash.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            },
            {
                "id": "002",
                "name": "Vu 80cm (32 inch) HD Ready LED TV",
                "price": 15999,
                "isAdded":false,
                "image": "assets/images/immunity.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            },
            {
                "id": "003",
                "name": "Micromax 81cm (32 inch) HD Ready LED TV",
                "price": 11999,
                "isAdded":false,
                "image": "assets/images/mask.png",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            },
            {
                "id": "004",
                "name": "Thomson LED Smart TV B9 Pro 80cm (32)",
                "price": 24000,
                "isAdded":false,
                "image": "assets/images/PPE-kit-1.jpeg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            },
            {
                "id": "005",
                "name": "Panasonic 109cm (43 inch) Ultra HD (4K) LED TV",
                "price": 41000,
                "isAdded":false,
                "image": "assets/images/sanitizer.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            },
            {
                "id": "006",
                "name": "Panasonic 109cm (43 inch) Ultra HD (4K) LED TV",
                "price": 15400,
                "isAdded":false,
                "image": "assets/images/travelKit.jpg",
                "description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }
        ]


    }

    getProducts() {
        return this.products;

    }

    getCartItem(){
        return this.cartItems;
    }

    setProducts(products) {
        this.cartItems.push(...products);
        this.products.next(products);
      }
    
      //  Add single product to the cart
      addProductToCart(product) {
        this.cartItems.push(product);
        this.products.next(this.cartItems);
      }
      
    // Remove single product from the cart
   removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    //  Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
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