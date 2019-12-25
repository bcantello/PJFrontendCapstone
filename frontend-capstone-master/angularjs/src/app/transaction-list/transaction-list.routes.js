export default ($stateProvider) => {
    const transactionListState = {
        name: 'recentTransactions',
        url: '/recenttransactions',
        component: 'transactionList',
        resolve: {
            tableData: (transactionListService) => transactionListService.getTransactions(),
        },
    };
    $stateProvider.state(transactionListState);
};
