import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import TypeList from './pages/TypeList.vue';
import NotFound from './pages/PageNotFound.vue';
import ContactForm from './pages/ContactForm.vue';
import ThankYouPage from './pages/ThankYou.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/email',
        name: 'email',
        component: ContactForm
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: ThankYouPage 
    },
    {
        path: '/project',
        name: 'project',
        component: ProjectList
    },
    {
        path: '/type',
        name: 'type',
        component: TypeList
    },
    {
        path: '/determinato_proggetto/:title',
        name: 'determinato_proggetto',
        component: SingleProject
    },
    {
        path: '/pagina-non-trovata',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/:catchALL(.*)',
        redirect: '/pagina-non-trovata'
    },
]
});
export { router };