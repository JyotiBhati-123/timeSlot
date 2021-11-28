import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'timeSlots';
  // selected: string;
  avilableSlotData: any[] = [];
  totalTime = 510;
  slotTime = 30;
  selectedSlot = null;

  constructor() {
  }

  ngOnInit(): void {



    const total = this.totalTime / this.slotTime;
    var startTime = new Date()
    startTime.setHours(9);
    startTime.setMinutes(0);
    for (var i = 0; i < total; i++) {
      let min = new Date(startTime).getMinutes().toString();
      if (min.length < 2) {
        min = 0 + '' + min;
      }
      let hrs = new Date(startTime).getHours().toString();
      if (hrs.length < 2) {
        hrs = 0 + '' + hrs;
      }
      const temp = Number(hrs + '' + min);

      this.avilableSlotData.push(temp);
      const newTime = new Date(startTime).getTime() + this.slotTime * 60000;
      startTime = new Date(newTime);
    }

  }


  slotTimeFormat(time: any) {
    if (time) {
      let quotient = Math.floor(time / 100);
      quotient = quotient < 10 ? 0 + quotient : quotient;
      quotient = quotient > 12 ? quotient - 12 : quotient;
      const hrs = quotient.toString().length > 1 ? quotient.toString() : '0' + quotient.toString();
      let remainder = time % 100;
      const mins = remainder < 10 ? '0' + remainder : remainder;
      const format = Math.floor(time / 100) > 12 ? 'PM' : 'AM';
      let displayTime = hrs + ':' + mins + format;
      return displayTime;
    }
    return '';
  }
  


}

