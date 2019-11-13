import PageListComponent from '../components/product/PageListComponent'
import PageViewer from '../components/product/PageViewer'
import Login from '../components/user/Login'

const routes = [
    {
        path: "/",
        name: "rootPage",
        component: PageListComponent,
    },
    {
        path: "/login",
        name: "loginPage",
        component: Login,
    },
    {
        path: "/page/:id",
        name: "pageviewer",
        component: PageViewer,
    }
];

export default routes;