import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cart", component: CartComponent},
    {path: "menu", component: MenuComponent},
    {path: "profile", component: ProfileComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent}
];
