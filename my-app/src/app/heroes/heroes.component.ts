import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //导入hero.ts里的Hero接口
// import { HEROES } from '../mock-heroes'; //从mock-heros.ts文件中导入HEROES数组
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({  //装饰器函数
  selector: 'app-heroes', //选择器（css元素选择器），该组件被引用时，将这个名称作为html元素标签，类似p、div的用法
  templateUrl: './heroes.component.html', //组件对应的模板页文件的位置
  styleUrls: ['./heroes.component.scss'] //组件私有样式表的位置
})
// export class HeroesComponent implements OnInit {
//   selectedHero!: Hero;
//   // hero: Hero = { //初始化Hero
//   //   id: 1,
//   //   name: 'Windstorm'
//   // };
//   heroes!: Hero[];
//   // heroes = HEROES;
  
//   // onSelect(hero: Hero): void {
//   //   this.selectedHero = hero;
//   // }

//   //这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
//   //当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
//   constructor(private heroService: HeroService, private messageService: MessageService) { }

//   ngOnInit(): void { //ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
//     this.getHeroes();
//   }

//   // onSelect(hero: Hero): void {
//   //   this.selectedHero = hero;
//   //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   // }
  
//   // getHeroes(): void {
//   //   this.heroes = this.heroService.getHeroes();//这种赋值方式默认是同步的，即数据能够立即返回，但实际工作中，从接口中拿数据必然是异步的
//   // }
//   //新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 
//   // 然后，subscribe() 方法把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性,使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了。
//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe((heroes: Hero[]) => this.heroes = heroes);
//   }

// }

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
