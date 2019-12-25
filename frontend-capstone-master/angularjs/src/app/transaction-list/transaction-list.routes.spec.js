describe('transactionList route test', () => {
    beforeEach(angular.mock.module('root'));
    beforeEach(angular.mock.module('ui.router'));

    beforeEach(inject(function ($compile, $rootScope, $state, $httpBackend) {
        $httpBackend
            .expectGET('http://127.0.0.1:5000/transactions')
            .respond({ transactions: [{ name: 'Brandon' }] });

        this.element = $compile('<root></root>')($rootScope.$new());
        $httpBackend.flush();

        this.getTable = () => this.element[0]
            .querySelector('table tbody');
    }));

    it('should go to the correct route', function () {
        expect(this.getTable()).not.toBeNull();
    });

    it('should contain data element', function () {
        const tableData = this.getTable()
            .querySelector('tbody tr:nth-of-type(1) td:nth-of-type(3)');

        expect(tableData.innerText).toBe('Brandon');
    });
});
