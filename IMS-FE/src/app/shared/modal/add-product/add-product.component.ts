import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEventsService } from 'src/app/core/appServices/app-events.service';
import { ProductDto } from 'src/app/core/openapi/models';
import { ProductService } from 'src/app/core/openapi/services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService,
    private appEventsService: AppEventsService
  ) {}

  productForm: FormGroup = new FormGroup({});

  // when null it means product is going to be add other wise update
  @Input()
  product!: ProductDto;
  @Input() isDetails: boolean = false;

  title: string = 'Add Product';
  SaveBtnText: string = 'Save';
  ngOnInit() {
    if (this.isDetails && this.product?.id) this.title = 'Details';

    if (!this.isDetails && this.product?.id) {
      this.title = 'Update Product';
      this.SaveBtnText = 'Update';
    }

    this.productForm = new FormGroup({
      name: new FormControl(
        { value: this.product?.name, disabled: this.isDetails },
        [Validators.required]
      ),
      description: new FormControl({
        value: this.product?.description,
        disabled: this.isDetails,
      },  [Validators.required]),
     
    });
  }

  submit() {
    if (!this.productForm.valid) return;

    if (!this.product?.id) {
      this.productService.apiProductAddPost({ body: this.product }).subscribe(
        (x) => {
          this.appEventsService.getAllProducts.emit();
          this.activeModal.dismiss();
        },
        () => {
          // handle error
        }
      );
    } else {
      this.productService.apiProductUpdatePut({ body: this.product }).subscribe(
        (x) => {
          this.appEventsService.getAllProducts.emit();
          this.activeModal.dismiss();
        },
        () => {
          // handle error
        }
      );
    }
  }
}
