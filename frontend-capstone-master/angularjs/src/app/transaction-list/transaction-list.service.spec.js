describe('TransactionListService Tests', () => {
    beforeEach(angular.mock.module('transactionList'));

    beforeEach(inject(function (transactionListService) {
        this.transactionListService = transactionListService;
    }));

    it('should get transactions', inject(function ($httpBackend) {
        $httpBackend
            .expectGET('http://127.0.0.1:5000/transactions')
            .respond({ transactions: [{ name: 'Brandon' }] });

        this.transactionListService.getTransactions().then((res) => {
            expect(res).toEqual({ transactions: [{ name: 'Brandon' }] });
        });
        $httpBackend.flush();
    }));
});
