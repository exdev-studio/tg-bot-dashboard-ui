import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [
      AuthGuard,
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AppComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
