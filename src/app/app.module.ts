import { AgmCoreModule } from '@agm/core';
import { MenuServices } from './service/service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuOrderComponent } from './menu-order/menu-order.component';
import { OrderDetailComponent } from './scontrino/order-detail.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { RegistrationComponent } from './registration/registration.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const router: Routes = [
  {
    path:'menu',
    pathMatch:'full',
    component: MenuOrderComponent
  },
  {
    path:'menu/scontrino',
    pathMatch:'full',
    component: OrderDetailComponent
  },
  {
    path:'home',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path:'maps',
    pathMatch:'full',
    component: MapsComponent
  },
  {
    path:'qrcode',
    pathMatch:'full',
    component: QRCodeComponent
  },
  {
    path:'registration',
    pathMatch:'full',
    component: RegistrationComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
]
@NgModule({
  declarations: [
      AppComponent,
      MenuComponent,
      MenuOrderComponent,
      OrderDetailComponent,
      MapsComponent,
      HomeComponent,
      QRCodeComponent,
      RegistrationComponent,
      LoginComponent,
   ],
  imports: [
    ReactiveFormsModule,
    NgxQRCodeModule,
    RouterModule.forRoot(router),
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_lsqgOyljpBrEwCQpzykcVFX0OpAHQdI'
    }),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MenuServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
