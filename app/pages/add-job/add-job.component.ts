import {Component, OnInit, ViewChild} from '@angular/core';
import {PageServiceService} from "../page-service.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false})
  form!: NgForm;
  NgForm = NgForm

  constructor(private pageService: PageServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addJob (form: NgForm): void {
    if (form.invalid) {
      return
    }
    const { category, position, description } = form.value;
    console.log(form.value);
    this.pageService.addJob({category, position, description}).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
