import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
export class EmiSchedulerService {


    http = inject(HttpClient);


    url = "http://localhost:8080/api/v1/loan/{loanId}/emi-schedule";
    getEmischeduleById() {
        return this.http.get(this.url);
    }
}