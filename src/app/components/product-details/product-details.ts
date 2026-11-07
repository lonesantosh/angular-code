import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

   product:any;
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params=>{
      this.product = params;
      console.log(params)
    })
  }

}
