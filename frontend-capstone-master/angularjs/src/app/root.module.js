import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import root from './root.component';
import pageHeader from './header/header.module';
import transactionList from './transaction-list/transaction-list.module';
import rootRoutes from './root.routes';
import transactionForm from './transaction-form/transaction-form.module';
import approvalResponse from './approval-response/approval-response.module';

angular
    .module('root', [
        pageHeader,
        approvalResponse,
        transactionList,
        uiRouter,
        transactionForm,
    ])
    .component('root', root)
    .config(rootRoutes);
