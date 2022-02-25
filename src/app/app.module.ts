import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserAuthModule } from './user-auth/user-auth.module';

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: HelloComponent }]),
    UserAuthModule,
  ],
  declarations: [AppComponent, HelloComponent, TopComponent, MenuComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
