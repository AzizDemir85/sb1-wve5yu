import { Transaction } from '../models/transaction.model';

export class TransactionService {
    getRecentTransactions(): Array<Transaction> {
        return [
            {
                icon: "\uf19c",
                title: "Maaş Yatırıldı",
                date: "Bugün, 10:00",
                amount: "+₺85.000,00"
            },
            {
                icon: "\uf54e",
                title: "Market Alışverişi",
                date: "Dün, 14:30",
                amount: "-₺2.150,50"
            },
            {
                icon: "\uf155",
                title: "ATM Para Çekme",
                date: "Dün, 11:20",
                amount: "-₺5.000,00"
            },
            {
                icon: "\uf53c",
                title: "Restoran Ödemesi",
                date: "2 gün önce",
                amount: "-₺850,30"
            },
            {
                icon: "\uf09d",
                title: "Kredi Kartı Ödemesi",
                date: "2 gün önce",
                amount: "-₺12.500,00"
            }
        ];
    }
}