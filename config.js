const API_BASE = '/mayang/';
const API_BASE_ITEM = '/ms-master-data/';
const API_BASE_TRANSACTION = '/ms-transaction/api/';
const API_BASE_NOTIFICATION = '/ms-notification/';
const API_BASE_ACCOUNTING = '/ms-accounting/';
const API_BASE_INVENTORY = '/ms-other-transaction/';
const API_BASE_INVENTORY_SERVICE = '/svc-inventory/';
const API_BASE_PORTAL = '/portal/';
const API_BASE_MARKETPLACE = '/ms-mp-aggregator/';
const API_BASE_BILLER = '/ms-biller/';
const API_BASE_REPORT = '/ms-report/';
const API_BASE_PROMO = '/ms-promo/';
const API_BASE_REPORT_DATAMART = '/svc-data-reporting/';
const API_BASE_EMENU_UTILITIES = '/ms-e-menu-utilities/';

const colors = [{
        pointBorderColor: '#00b7b5', // green
        borderColor: '#ccf5f5',
    }, {
        pointBorderColor: '#fcc419', // yellow
        borderColor: '#ffe79c',
    }, {
        pointBorderColor: '#c871cc', // purple
        borderColor: '#f8d5fa',
    }, {
        pointBorderColor: '#ed4337', // red
        borderColor: '#F6958E',
    }, {
        pointBorderColor: '#2081FB', // blue
        borderColor: '#539EFC',
    },
];


const actionTimer = (reject, dispatch = null, action = null, reason = 'Fetch data timeout') => setTimeout(() => {
        if (dispatch && action) dispatch(action(false, reason));
        reject({ status: false, msg: reason });
    }, 30000);

const roleWarehouse = 5;

// TODO: move this to env
const amqpVHost = 'vhuser';

const tDisplayOpt = [5, 10, 20, 30, 50];

const isMobile = window.matchMedia('(max-width: 767px)');
const isTablet = window.matchMedia('(max-width: 991px)');

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export {
    API_BASE, API_BASE_NOTIFICATION, API_BASE_ACCOUNTING, API_BASE_INVENTORY, API_BASE_INVENTORY_SERVICE, colors, actionTimer, roleWarehouse, amqpVHost, tDisplayOpt,
    API_BASE_TRANSACTION,
    API_BASE_ITEM,
    API_BASE_BILLER,
    isMobile,
    isTablet,
    API_BASE_PORTAL,
    API_BASE_MARKETPLACE,
    isIOS,
    API_BASE_REPORT,
    API_BASE_REPORT_DATAMART,
    API_BASE_PROMO,
    API_BASE_EMENU_UTILITIES,
};
