export interface Fund {
    id: string;
    code: string;
    name: string;
    price: string;
    dailyReturn: string;
    weeklyReturn: string;
    monthlyReturn: string;
    yearlyReturn: string;
    risk: 'Düşük' | 'Orta' | 'Yüksek';
    type: string;
    minAmount: number;
}