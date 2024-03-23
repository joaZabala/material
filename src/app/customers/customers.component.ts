import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from '../models/Customer';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit , OnInit{

  customers!:Customer[]
  dataSource = new MatTableDataSource<Customer>(this.customers);

constructor(private http: HttpServiceService){};

  ngOnInit(): void {
    this.get();
  };

get():void{
  this.http.getAll()
  .subscribe((data:Customer[]) => {this.customers = data;
    console.log(this.customers);
    this.dataSource.data = data})
};

delete(id:string){
  this.http.delete(id).subscribe(response =>{console.log(response)})
}

  displayedColumns: string[] = ['customerId', 'companyName', 'contactName', 'contactTitle', 'address', 'city', 'region' , 'postalCode' ,'country' ,'phone' , 'fax' , 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.get()

  }


}
