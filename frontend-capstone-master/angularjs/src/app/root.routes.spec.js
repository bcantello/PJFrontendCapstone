describe('transactionList route test', () => {
    beforeEach(angular.mock.module('root'));
    beforeEach(angular.mock.module('ui.router'));

    beforeEach(inject(function ($compile, $rootScope, $state, $httpBackend) {
        this.compile = $compile;
        $httpBackend
            .expectGET('http://127.0.0.1:5000/transactions')
            .respond({ transactions: [] });

        this.element = this.compile('<root></root>')($rootScope.$new());
        $rootScope.$apply();
        $httpBackend.flush();

        this.getTable = () => this.element[0]
            .querySelector('table tbody');
    }));

    it('should go to recenttransactions by default', function () {
        expect(this.getTable()).not.toBeNull();
    });
});
