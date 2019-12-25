import transactionForm from './transaction-form.html';

function transactionFormController($http, $state, approvalResponseService) {
    const $ctrl = this;
    $ctrl.$onInit = () => {
        $ctrl.user = {
            amount: '',
            cvv: '',
            expmonth: '',
            expyear: '',
            cardnumber: '',
            cardname: '',
        };
    };

    function handleSuccessfulTransactionResponse() {
        $state.go('recentTransactions');
        approvalResponseService.showApprovalResponse();
    }

    $ctrl.processTransaction = () => {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:5000/transactions',
            data: {
                amount: $ctrl.user.amount,
                cardCvv: $ctrl.user.cvv,
                cardExpMonth: $ctrl.user.expmonth,
                cardExpYear: $ctrl.user.expyear,
                cardNumber: $ctrl.user.cardnumber,
                name: $ctrl.user.cardname,
            },
        }).then(handleSuccessfulTransactionResponse)
            .catch((apiErrorResponse) => {
                $ctrl.error = apiErrorResponse.data;
            });
    };
}

export default {
    template: transactionForm,
    controller: transactionFormController,
};
