import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { DefaultModule } from './default/default.module';
import './icons';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DefaultModule);
