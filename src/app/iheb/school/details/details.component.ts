import {Component, OnInit, Input} from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {School} from '../../Models/School';
import {CrudModalComponent} from '../crud-modal/crud-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogService} from '../crud-modal/confirmation-dialog/confirmation-dialog.service';
import {Site} from '../../Models/Site';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    id = this.actRoute.snapshot.params['id'];
    school: School;
    sites: Site[] = [];

    constructor(
        public restApi: RestApiService,
        public actRoute: ActivatedRoute,
        public router: Router,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService
    ) {
    }

    ngOnInit() {
        this.load(this.id);
        this.loadSites(this.id);

    }

    load(id: any) {
        return this.restApi.get(id).subscribe((data) => {
            this.school = data;
        })
    }

    loadSites(id: number) {
        return this.restApi.getSites(id).subscribe((data) => {
            this.sites = data;
        })
    }

    editSchool(id: number) {
        const modalRef = this.modalService.open(CrudModalComponent);
        modalRef.componentInstance.id = id; // should be the id
        modalRef.componentInstance.data = {
            name: this.school.name,
            address: this.school.address,
            slogon: this.school.slogon,
            email: this.school.email,
            tel: this.school.tel
        }; // should be the data

        modalRef.result.then((result) => {
            this.school.name = result.name;
            this.school.address = result.address;
            this.school.slogon = result.slogon;
            this.school.email = result.email;
            this.school.tel = result.tel;
            this.restApi.updateSchool(this.school).subscribe(data => {
                this.load(id);
            });

        }).catch((error) => {
            console.log(error);
        });
    }

    deleteSchool(id: number) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this school ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.restApi.deleteSchool(id).subscribe(data => {
                        this.load(id);
                    })
                }
            })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }

    editSite(id: number) {
        
    }

    deleteSite(id: number) {
        
    }
}
