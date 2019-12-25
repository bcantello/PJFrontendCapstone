import pageHeaderComponent from './header.component';
import './headerStyles.css';

const pageHeader = angular
    .module('pageHeader', [])
    .component('pageHeader', pageHeaderComponent)
    .name;

export default pageHeader;
