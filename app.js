const app = Vue.createApp({
    //the data property is a function, and that function should always return an object
    data() {
        return {
            //define key value pairs, you choose the name and the value of the properties yourself
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://developer.mozilla.org/en-US/'
        };
    }, 
    //methods here are a reserved name
    //this contains all the methods that can be called in the Vuejs application
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Learn React!';
            }
        }
    }
});

app.mount('#user-goal');