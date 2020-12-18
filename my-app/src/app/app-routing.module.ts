import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由。
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//将 RouterModule 添加到 AppRoutingModule 的 imports 数组中，同时通过调用 RouterModule.forRoot() 来用这些 routes 配置它：
  exports: [RouterModule] //导出 RouterModule，以便它在整个应用程序中生效
})
export class AppRoutingModule { }
