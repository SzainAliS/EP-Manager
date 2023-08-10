import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingModel } from 'src/app/services/shopping-model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private shopingApi:ShoppingService) { }
  shoppingModel:ShoppingModel = new ShoppingModel();
  name!: string[] 
  filteredActivities: string[] = [];
  ngOnInit(): void {
    this.shopingApi.getItemsName().subscribe((resp:any)=>{
      console.log("items resp here : ",resp)
      this.name = resp
    })
  }
  formValue:FormGroup = this.formBuilder.group({
   
    quantityOfItem:['',[Validators.required]],
    priorityOfItem:['',[Validators.required]],
    name: ['',[Validators.required]],
  });
 
  filterActivities(event: any) {
    const inputText = event.target.value;
    console.log(typeof this.name)
    this.filteredActivities = this.name.filter(
      (name) =>
        name.toLowerCase().includes(inputText.toLowerCase())
    );

   }
  selectActivity(name: string) {
    this.formValue.get('name')?.setValue(name);
    this.filteredActivities = [];
  }
  postShopping(){
    this.shoppingModel.name = this.formValue.value.name;
    this.shoppingModel.quantity = this.formValue.value.quantityOfItem;
    this.shoppingModel.priority = this.formValue.value.priorityOfItem;
    this.shopingApi.postShoppingList(this.shoppingModel).subscribe((resp:ShoppingModel)=>{
      console.log("resp here :",resp);
      this.formValue.reset();
    })
 }


}
