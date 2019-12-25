import approvalResponseComponent from './approval-response.component';
import './approval-response.styles.css';
import approvalResponseService from './approval-response.service';

const approvalResponse = angular
    .module('approvalResponse', [])
    .component('approvalResponse', approvalResponseComponent)
    .service('approvalResponseService', approvalResponseService)
    .name;

export default approvalResponse;
