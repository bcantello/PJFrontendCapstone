export default ($stateProvider) => {
    const transactionFormState = {
        name: 'transactionForm',
        url: '/newtransaction',
        component: 'transactionForm',
    };
    $stateProvider.state(transactionFormState);
};
