import { Routes, RouterModule } from '@angular/router';
import { ParImparComponent } from './ngifTest/parImpar/parImpar.component';
import { GanarComponenteComponent } from './ganarComponente/ganarComponente.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
   
    { path: 'ruta1', component: GanarComponenteComponent },
    { path: 'ruta2', component: AcercaComponent },

];

export const RoutesRoutes = RouterModule.forChild(routes);
