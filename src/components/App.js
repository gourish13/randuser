import router from '../router';

export default () => ({
        init() { this.getRandomUser(); },
            
        router,
        user: {},
        likedUsers: [],
        likedCount: 0,
    
        getRandomUser() {
            fetch('https://www.randomuser.me/api')
                .then( res => res.json() )
                .then( user => this.setRandomUser( user.results[0] ) )
                .catch(console.log);
        },

        setRandomUser(user) {
                this.user.name = (user.name instanceof Object) ? 
                        user.name.first + ' ' + user.name.last :
                        user.name;
                this.user.gender = user.gender;
                this.user.email = user.email;
                this.user.country = ('location' in user) ? 
                                user.location.country :
                                user.country;
                this.user.picture = (user.picture instanceof Object) ? 
                                user.picture.large :
                                user.picture;
        },

        likeThisUser() {
                for (let user of this.likedUsers)
                        if (user.email === this.user.email)
                                return;
                this.likedUsers = [ ...this.likedUsers, {
                        id: Date.now(),
                        name: this.user.name,
                        gender: this.user.gender,
                        email: this.user.email,
                        country: this.user.country,
                        picture: this.user.picture
                } ];
                this.likedCount = this.likedUsers.length;
                this.getRandomUser();
        },

        showUser(id) {
                this.setRandomUser( this.likedUsers
                        .find( user => user.id === id ));
                this.navigate('/');
        },

        removeUser(id) {
                this.likedUsers = this.likedUsers.
                        filter( user => user.id !== id );
                this.likedCount = this.likedUsers.length;
        },

        navigate(route) {
                if ( !(window.location.hash.substring(2) === route) )
                        this.router.navigate(route);
        }
});
