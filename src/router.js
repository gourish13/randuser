import Router from 'alpine-router';

const router = new Router([
        {
                path: '/',
                templateUrl: 'templates/user.html',
        },
        {
                path: 'liked',
                templateUrl: 'templates/liked.html',
        }
]);

console.log('Alpine-Router loaded');

export default router;
