import { Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _balance: string = "$12,459.32";
    private _transactions: Array<any>;

    constructor() {
        super();
        
        this._transactions = [
            {
                icon: "\uf19c",
                title: "Salary Deposit",
                date: "Today, 10:00 AM",
                amount: "+$3,500.00"
            },
            {
                icon: "\uf54e",
                title: "Grocery Store",
                date: "Yesterday, 2:30 PM",
                amount: "-$85.50"
            },
            {
                icon: "\uf155",
                title: "ATM Withdrawal",
                date: "Yesterday, 11:20 AM",
                amount: "-$200.00"
            },
            {
                icon: "\uf53c",
                title: "Restaurant Payment",
                date: "2 days ago",
                amount: "-$65.30"
            },
            {
                icon: "\uf09d",
                title: "Credit Card Payment",
                date: "2 days ago",
                amount: "-$500.00"
            }
        ];
    }

    get balance(): string {
        return this._balance;
    }

    get transactions(): Array<any> {
        return this._transactions;
    }

    onTransfer() {
        console.log("Transfer tapped");
        // Implement transfer functionality
    }

    onPayBills() {
        console.log("Pay Bills tapped");
        // Implement bill payment functionality
    }

    onTopUp() {
        console.log("Top Up tapped");
        // Implement top up functionality
    }
}