import { Fund } from '../models/fund.model';

export class FundService {
    getAllFunds(): Array<Fund> {
        return [
            {
                id: '1',
                code: 'TLF',
                name: 'TL Para Piyasası Fonu',
                price: '₺89,45',
                dailyReturn: '+0,05%',
                weeklyReturn: '+0,35%',
                monthlyReturn: '+1,45%',
                yearlyReturn: '+28,50%',
                risk: 'Düşük',
                type: 'Para Piyasası',
                minAmount: 100
            },
            {
                id: '2',
                code: 'HBF',
                name: 'Hisse Senedi Yoğun Fon',
                price: '₺156,78',
                dailyReturn: '-1,20%',
                weeklyReturn: '+2,15%',
                monthlyReturn: '+5,30%',
                yearlyReturn: '+45,20%',
                risk: 'Yüksek',
                type: 'Hisse Senedi',
                minAmount: 500
            },
            {
                id: '3',
                code: 'DBF',
                name: 'Değişken Borçlanma Araçları Fonu',
                price: '₺245,30',
                dailyReturn: '+0,15%',
                weeklyReturn: '+0,85%',
                monthlyReturn: '+2,50%',
                yearlyReturn: '+32,15%',
                risk: 'Orta',
                type: 'Borçlanma Araçları',
                minAmount: 250
            }
        ];
    }

    getPortfolioFunds(): Array<Fund> {
        return [
            {
                id: '1',
                code: 'TLF',
                name: 'TL Para Piyasası Fonu',
                price: '₺89,45',
                dailyReturn: '+0,05%',
                weeklyReturn: '+0,35%',
                monthlyReturn: '+1,45%',
                yearlyReturn: '+28,50%',
                risk: 'Düşük',
                type: 'Para Piyasası',
                minAmount: 100
            }
        ];
    }
}