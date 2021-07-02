import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgSpriteModule } from '@app/component/svg-sprite/svg-sprite.module';
import { SvgIconModule } from '@app/component/svg-icon/svg-icon.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgSpriteModule,
    SvgIconModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
