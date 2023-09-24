import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup = new FormGroup({}); // Initialize as an empty form initially
  showGeneral: boolean = false;
  showImage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Create the form group and define the form controls with initial values.
    this.myForm = this.fb.group({

      Settings: this.fb.group({
        GeneralLabels: this.fb.group({
          LabelInclusionFilters: ['',],
          LabelExclusionFilters: ['', ],
          LabelCategoryInclusionFilters: ['', ],
          LabelCategoryExclusionFilters: ['', ],
          MaxLabels: [null, ],
          MinConfidence: [null, ],
        }),
        ImageProperties: this.fb.group({
          MaxDominantColors: [null,],
        }),
      }),
    });
  }

  // You can add form submission logic here.
  onSubmit() {
    if (this.myForm.valid) {
      // Handle form submission here
      const formData = this.myForm.value;
      console.log(formData);
    }
  }
}
