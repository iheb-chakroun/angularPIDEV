import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [


    {
        path: '', title: 'Notifications', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/notification/students', title: 'Student', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/notification/teachers', title: 'Teacher', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'PfeFile', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/pfefile/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/pfefile/accepted', title: 'Accepted', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'School', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/school/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Payement', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/categorie/paying', title: 'files statistics', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    
    {
        path: '/supervisor/change/request', title: 'Request supervisor change', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/payement/checkout', title: 'checkout', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }


];
