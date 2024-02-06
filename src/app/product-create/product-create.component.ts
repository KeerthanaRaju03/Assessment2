import { Component ,Input} from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {
  @Input() productDetails={name:'',price:'',img:'',description:''};
  constructor(public restApi: RestApiService,public router:Router){}
  ngOnInit(){}
  addProduct(dataProduct:any){
    this.restApi.createProduct(this.productDetails).subscribe((data :{})=>{
      this.router.navigate(['/product-list']);
    })
  }
}
