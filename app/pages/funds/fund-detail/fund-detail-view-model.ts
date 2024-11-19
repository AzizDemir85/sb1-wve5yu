import { Observable } from '@nativescript/core';
import { Fund } from '../../../models/fund.model';
import { alert } from '@nativescript/core';

export class FundDetailViewModel extends Observable {
    private _fund: Fund;

    constructor(fund: Fund) {
        super();
        this._fund = fund;
    }

    get fund(): Fund {
        return this._fund;
    }

    onBuyFund() {
        alert({
            title: "Fon Alım",
            message: "Minimum işlem tutarı: " + this._fund.minAmount + " TL\nDevam etmek istiyor musunuz?",
            okButtonText: "Evet",
            cancelButtonText: "İptal"
        }).then((result) => {
            if (result) {
                // Fon alım işlemi için backend entegrasyonu yapılacak
                alert({
                    title: "Başarılı",
                    message: "Fon alım talebiniz alınmıştır.",
                    okButtonText: "Tamam"
                });
            }
        });
    }

    onSellFund() {
        alert({
            title: "Fon Satım",
            message: "Fon satım işlemini onaylıyor musunuz?",
            okButtonText: "Evet",
            cancelButtonText: "İptal"
        }).then((result) => {
            if (result) {
                // Fon satım işlemi için backend entegrasyonu yapılacak
                alert({
                    title: "Başarılı",
                    message: "Fon satım talebiniz alınmıştır.",
                    okButtonText: "Tamam"
                });
            }
        });
    }
}