import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public brands: any;

  constructor(private brandService: BrandService) {
  }

  ngOnInit() {
    this.brandService.find()
      .pipe(finalize(() => {}))
      .subscribe((data: any) => {
        this.brands = data.items;
      });
  }

}
