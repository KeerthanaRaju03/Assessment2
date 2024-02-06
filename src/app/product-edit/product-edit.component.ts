import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {

  id=this.actRoute.snapshot.params['id'];
  productData!:FormGroup;
  constructor(
    public restApi:RestApiService,
    public actRoute: ActivatedRoute,
    public router:Router,
    public fb:FormBuilder
  ){}
  ngOnInit(){
    this.productData=this.fb.group({
      id:[],
      name:[],
      img:[],
      price:[],
      description:[],
    })
    this.restApi.getProduct(this.id).subscribe((data:any)=>{
      this.productData.setValue(data);
    })
  }
  updateProduct(){
    if(window.confirm('Are you sure you want to update?')){
      this.restApi.updateProduct(this.id, this.productData.value).subscribe(data =>{
        this.router.navigate(['/product-list']);
      })
    }
  }

}
