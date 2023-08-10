import { NgModule } from "@angular/core";
import { ShoppinglistComponent } from "./shoppinglist.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ShoppinglistComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
    exports:[
        ShoppinglistComponent
    ]
})
export class ShoppingModule {}