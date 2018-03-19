import * as PageIndex from './page';
import * as Tab from './tab';
import * as Todolist from './todolist';
import Root from './root/root';

export const route = [
    {
        path: '/component',
        component: Root,
        routes: [].concat(PageIndex.route, Tab.route, Todolist.route)
    }
];
