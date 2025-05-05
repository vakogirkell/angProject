import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public service: ApiService){
  this.getAllCategories()
  this.getAllProducts()
}
  

  public nut: any
  public veg: any


  public spiciness: string = ""
  public nuts: string = ""
  public vegeterian: string = ""
  public categories: any
  public foodList:any

  getAllCategories() {
    this.service.getCategories().subscribe({
      next: (data: any) => {
        console.log(data);
        this.categories = data
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  changeCategory(id:number) {
    this.service.filterByCategory(id).subscribe((data : any) =>{
      this.foodList = data.products
    })
  }


  addToCart(item:any) {
    let cartData = {
      quantity: 1,
      price: item.price,
      productId: item.id,
    };

    this.service.damateba(cartData).subscribe()
  }

getAllProducts() {
  this.service.getProducts().subscribe({
    next: (data: any) => {
      console.log(data);
      this.foodList = data;
      if (data.nuts) {
        this.nut = "checked"
      }
      if (data.vegeterian) {
        this.veg = "checked"
      }
    },
    error: (error: any) => {
      console.log(error);
    }
  })
}

customFilter() {
  console.log(this.spiciness);
  console.log(this.nuts);
  console.log(this.vegeterian);
  this.service.customFilter(this.spiciness, this.nuts, this.vegeterian).subscribe( (data:any) => {
    this.foodList = data
    if (this.spiciness == '-1') {
      return this.getAllProducts()
    }
  } )
}
}
