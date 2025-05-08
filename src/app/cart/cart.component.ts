import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.showAllCarts()
  }

  public cartData: any;
  public total: any

  showAllCarts() {
    this.service.getAllBaskets().subscribe( {
      next: (data:any) => {
        console.log(data);
        this.cartData = data

        let totalPrices = data.map((item:any) => item.quantity * item.price)
        .reduce((x:number, y:number) => x+y )

        this.total=totalPrices
      },
      error: () => {}
    } )
  }

  increase(item: any) {
    item.quantity++

    let updateObj = {
      "quantity": item.quantity,
      "price": item.product.price,
      "productId": item.product.id
    }

    this.service.updateCart(updateObj).subscribe( () => this.showAllCarts() )
  }

  decrease(item:any) {
    item.quantity--

    let updateObj = {
      "quantity": item.quantity,
      "price": item.product.price,
      "productId": item.product.id
    }

    this.service.updateCart(updateObj).subscribe( () => this.showAllCarts() )
  }

  removeItem(id:any) {
    this.service.deleteItem(id).subscribe(() => this.showAllCarts() )
  }
}
