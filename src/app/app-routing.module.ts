import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';


const routes: Routes = [
  { path: '', redirectTo: 'virtual_scroll', pathMatch: 'full' },
  { path: 'virtual_scroll', component: VirtualScrollComponent},
  { path: 'infinite_scroll', component: InfiniteScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
