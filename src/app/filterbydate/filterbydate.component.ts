import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddDetails } from '../add-details';
import { BookingDTO } from '../booking-dto';
import { BookingOperationService } from '../booking-operation.service';

@Component({
  selector: 'app-filterbydate',
  templateUrl: './filterbydate.component.html',
  styleUrls: ['./filterbydate.component.css']
})



export class FilterbydateComponent {


  allBookings:BookingDTO[]=[];

  constructor(private bookingService :BookingOperationService)
  {}

    // bookingService:getBookingsById().subscribe(
      
    //   data=>{
    //     this.allBookings = data;
    //   },
    //   err=>{
    //   console.log("error from spring ",err);

    getBookingsById(bookingId:string){
      this.bookingService.getBookingsById(parseInt(bookingId)).subscribe(
        data=>{
          console.log("data :- "+data);
         
          this.allBookings = data;
        },err=>{
          console.log("error from spring ",err);
  
    

    }
  );
}
}




  // function getBookingsById(bookingId: any, number: any) {
  //   throw new Error('Function not implemented.');
  // }
// function getBookingsById() {
//   throw new Error('Function not implemented.');
// }
// //   filteredBookings: any;
//   selectedCheckinDate: Date;
//   bookings: any;
  
//   constructor(){
//     this.selectedCheckinDate=new Date();
//   }
//   filterBookingsByCheckinDate(checkinDate: Date) {
//     if(this.bookings){
//     this.filteredBookings = this.bookings.filter((booking: { checkinDate: Date; }) => booking.checkinDate === checkinDate);
//   }
// }
//   onSubmit() {
//     this.filterBookingsByCheckinDate(this.selectedCheckinDate);
//   }
// }



// __bookingService:BookingOperationService;

// allBookingDetails : Array<AddDetails> = [];
//   filteredBookings: AddDetails[]=[];


// constructor(bookingService:BookingOperationService)
// {
//   this.__bookingService=bookingService;
//   this.allBookingDetails=this.__bookingService.getBookingArr();

// }

// getFilterData(filterValue:string)
// {
//   console.log("Filter Value"+filterValue);

//   // this.allBookingDetails = this.__bookingService.getFilterByDate (Date.parse(filterValue));

//   this.filteredBookings = this.__bookingService.getFilterByDate (parseInt(filterValue));
// }

// }


//

// allBookingDetails: AddDetails[] = [];
//   filteredBookings: AddDetails[]=[];

//   constructor(private bookingService: BookingOperationService) {
//     this.allBookingDetails = this.bookingService.getBookingArr();
//   }

//   getFilterData(filterValue: string) {
//     console.log("Filter Value: " + filterValue);
//     const filterDate = new Date(filterValue).getTime(); // convert filterValue to timestamp
//     this.filteredBookings = this.allBookingDetails.filter(booking => booking.bookedFrom === filterDate);
//   }
  
// }




