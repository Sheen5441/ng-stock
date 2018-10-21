import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor(public router: Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "第一支股票", 1.99, 3.5, "这是第一支股票 ", ["IT","建筑"]),
      new Stock(2, "第二支股票", 2.03, 4.5, "这是第二支股票 ", ["IT","设计"]),
      new Stock(3, "第三支股票", 1.87, 2.5, "这是第三支股票 ", ["建筑","金融"]),
      new Stock(4, "第四支股票", 1.95, 3.5, "这是第四支股票 ", ["金融"]),
      new Stock(5, "第五支股票", 1.91, 4.0, "这是第五支股票 ", ["建筑"]),
      new Stock(6, "第六支股票", 1.93, 2.5, "这是第六支股票 ", ["设计","建筑"]),
      new Stock(7, "第七支股票", 1.91, 3.5, "这是第七支股票 ", ["建筑","IT"]),
      new Stock(8, "第八支股票", 1.89, 1.5, "这是第八支股票 ", ["金融","互联网"]),
      new Stock(9, "第九支股票", 1.90, 3.0, "这是第九支股票 ", ["IT"])
    ];
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}
export class Stock {
  constructor (
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
