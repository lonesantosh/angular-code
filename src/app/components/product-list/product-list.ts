import { Component } from '@angular/core';

import productData from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faInr } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { DisablePaste } from '../../custom-directives/disable-paste';
import { TextOnly } from '../../custom-directives/text-only';
import { ZoomIn } from '../../custom-directives/zoom-in';
import { ZoomOut } from '../../custom-directives/zoom-out';

@Component({
  imports: [

    FontAwesomeModule,
    NgxPaginationModule,
    TextOnly,
    DisablePaste,
    ZoomIn,
    ZoomOut

  ],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  
  productArr = productData;
  faStar = faStar;
  faInr = faInr;
  p: any;

  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }

  openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

  openSweetAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openConfirmation() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) Swal.fire('Saved!', '', 'success');
      else if (result.isDenied) Swal.fire('Changes are not saved', '', 'info');
    });
  }

}
