import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http :HttpClient, public cookie: CookieService ) { }
  
  getProducts() {
   return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }
  filterByCategory(id : number){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }
  customFilter(sicxare: any, nuts: any, vegeterian: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${sicxare}`)
  }
  damateba(body: any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }
  getAllBaskets() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }
  updateCart( body:any ) {
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }
  deleteItem(id:any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
    signUp(body:any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_up", body)
  }
  signIn(body:any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", body)
  }
  getUser() {
    return this.http.get("https://api.everrest.educata.dev/auth", {headers: {"Authorization": `Bearer ${this.cookie.get("user")}`}})
  }
}
