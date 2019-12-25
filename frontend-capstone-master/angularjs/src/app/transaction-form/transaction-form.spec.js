describe('transaction-form POST test', () => {
    beforeEach(angular.mock.module('transactionForm'));

    beforeEach(inject(function ($injector, $compile, $rootScope, $httpBackend, $state,
                                approvalResponseService) {
        this.httpBackend = $httpBackend;
        this.state = $state;
        this.element = $compile('<transaction-form></transaction-form>')($rootScope.$new());
        $rootScope.$apply();
        this.approvalResponse = approvalResponseService;
        spyOn(this.state, 'go');
        spyOn(this.approvalResponse, 'showApprovalResponse');

        this.setFormValue = (query, value) => {
            const e = this.element[0].querySelector(query);
            const $e = angular.element(e).val(value);
            $e.triggerHandler('input');
        };
    }));

    it('should POST transactions, route to Recent Transactions, '
        + 'and call showApprovalResponse() upon success', function () {
        this.httpBackend
            .expectPOST('http://127.0.0.1:5000/transactions', {
                amount: '25.00',
                cardCvv: '555',
                cardExpMonth: '05',
                cardExpYear: '20',
                cardNumber: '5555555555555555',
                name: 'Brandon',
            })
            .respond(200);

        this.setFormValue('#amount', '25.00');
        this.setFormValue('#cardCvv', '555');
        this.setFormValue('#cardExpMonth', '05');
        this.setFormValue('#cardExpYear', '20');
        this.setFormValue('#cardNumber', '5555555555555555');
        this.setFormValue('#name', 'Brandon');
        this.element[0].querySelector('button[type=submit]').click();
        this.httpBackend.flush();

        expect(this.state.go).toHaveBeenCalledWith('recentTransactions');
        expect(this.approvalResponse.showApprovalResponse).toHaveBeenCalled();
    });

    it('should display error messages upon submit with incorrect input', function () {
        this.httpBackend
            .expectPOST('http://127.0.0.1:5000/transactions')
            .respond(400,
                {
                    amount: ['things'],
                    cardCvv: ['other things'],
                    cardExpMonth: ['still more things'],
                    cardExpYear: ['now stuff'],
                    cardNumber: ['other stuff'],
                    name: ['still more stuff'],
                });

        this.element[0].querySelector('button[type=submit]').click();
        this.httpBackend.flush();

        expect(this.state.go).not.toHaveBeenCalledWith('recentTransactions');

        expect(this.element[0].querySelector('#amount-error').innerText).toBe('things');
        expect(this.element[0].querySelector('#name-error').innerText).toBe('still more stuff');
        expect(this.element[0].querySelector('#cardNumber-error').innerText).toBe('other stuff');
        expect(this.element[0].querySelector('#cardExpMonth-error').innerText).toBe('still more things');
        expect(this.element[0].querySelector('#cardExpYear-error').innerText).toBe('now stuff');
        expect(this.element[0].querySelector('#cardCvv-error').innerText).toBe('other things');
    });
});
