describe('transactionList display test', () => {
    beforeEach(angular.mock.module('transactionList'));

    beforeEach(inject(function ($compile, $rootScope) {
        this.scope = $rootScope.$new();
        this.compile = $compile;
        this.scope.tableData = {
            transactions: [
                {
                    status: 'Approved',
                    name: 'Brandon',
                    amount: 25.00,
                    created: '08/05',
                },
                {
                    status: 'Approved',
                    name: 'Nicole',
                    amount: 30.00,
                    created: '07/27',
                },
            ],
        };
        this.element = $compile('<transaction-list table-data="tableData"></transaction-list>')(this.scope);
        this.scope.$apply();

        this.getTableColumnText = (row, column) => this.element[0]
            .querySelector(`tbody tr:nth-of-type(${row}) td:nth-of-type(${column})`).innerText;
    }));

    it('displays transaction information correctly', function () {
        expect(this.element[0]
            .querySelectorAll('tbody tr').length).toBe(2);
        expect(this.getTableColumnText(1, 3)).toBe('Brandon');
        expect(this.getTableColumnText(1, 2)).toBe('APPROVED');
        expect(this.getTableColumnText(1, 4)).toBe('$25.00');
        expect(this.getTableColumnText(1, 5)).toBe('08/05');
        expect(this.getTableColumnText(2, 3)).toBe('Nicole');
    });

    it('should route to New Transaction page upon button click', function () {
        const anchor = this.element[0].querySelector('div a').href.split('#')[1];

        expect(anchor).toBe('!/newtransaction');
    });
});
