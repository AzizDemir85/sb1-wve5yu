import { Observable } from '@nativescript/core';
import { FundService } from '../../services/fund.service';
import { Fund } from '../../models/fund.model';
import { NavigationService } from '../../services/navigation.service';

export class FundsViewModel extends Observable {
    private _funds: Array<Fund> = [];
    private _selectedFilter: string = 'all';
    private fundService: FundService;
    private navigationService: NavigationService;

    constructor() {
        super();
        this.fundService = new FundService();
        this.navigationService = new NavigationService();
        this.loadFunds();
    }

    get funds(): Array<Fund> {
        return this._funds;
    }

    get selectedFilter(): string {
        return this._selectedFilter;
    }

    set selectedFilter(value: string) {
        if (this._selectedFilter !== value) {
            this._selectedFilter = value;
            this.notifyPropertyChange('selectedFilter', value);
            this.loadFunds();
        }
    }

    onFilterTap() {
        this.selectedFilter = 'all';
    }

    onPortfolioTap() {
        this.selectedFilter = 'portfolio';
    }

    onFundTap(args: any) {
        const fund = args.object.bindingContext;
        this.navigationService.navigate('pages/funds/fund-detail/fund-detail-page', {
            context: fund
        });
    }

    private loadFunds() {
        this._funds = this.selectedFilter === 'all' 
            ? this.fundService.getAllFunds()
            : this.fundService.getPortfolioFunds();
        this.notifyPropertyChange('funds', this._funds);
    }
}