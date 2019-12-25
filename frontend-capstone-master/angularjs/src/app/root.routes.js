export default ($stateProvider, $urlServiceProvider) => {
    $stateProvider.state('app', {
        url: '/',
        abstract: true,
    });

    $urlServiceProvider.rules.otherwise({ state: 'recentTransactions' });
};
