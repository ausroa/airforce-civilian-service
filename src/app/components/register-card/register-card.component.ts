import {
  ChangeDetectorRef,
  Component, EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'afcs-register-card',
  styleUrls: ['./register-card.component.scss'],
  template: `
    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="close" aria-label="Close" (click)="closeModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="dateOfBirth">Date of birth</label>
            <div class="input-group">
              <input id="dateOfBirth" class="form-control" placeholder="yyyy-mm-dd" name="dp" ngbDatepicker #dp="ngbDatepicker">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary calendar" (click)="dp.toggle()" type="button"></button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
      </div>
    </ng-template>
  `,
})
export class RegisterCardComponent implements OnInit, OnChanges {
  @Input() showRegisterForm: boolean;
  @ViewChild('content') content: any;
  @Output() closedModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.modalService);
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      if(changes.showRegisterForm.currentValue === true) {
        this.modalService.open(this.content);
      }
    }, 1);
  }

  closeModal() {
    this.modalService.dismissAll();
    this.showRegisterForm = false;
    this.closedModal.emit(this.showRegisterForm);
  }
}
