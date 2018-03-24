import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Books from '@/components/books/Books';
import BookPage from '@/components/books/BookPage';
import Members from '@/components/members/Members';
import About from '@/components/About';
import NotFound from '@/components/NotFound';
// import Test from '@/components/Test';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', name: 'HomePage', component: HomePage, },
    { path: '/books', name: 'Books', component: Books },
    { path: '/books/:isbn', name: 'BookPage', component: BookPage },
    { path: '/about', name: 'About', component: About },
    { path: '/members', name: 'Members', component: Members },
    // { path: '/test', name: 'Test', component: Test },
    { path: '*', component: NotFound }
  ],
});
