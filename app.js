const app = Vue.createApp({
    //the data property is a function, and that function should always return an object
    data() {
        return {
            //define key value pairs, you choose the name and the value of the properties yourself
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://developer.mozilla.org/en-US/'
        };
    }
});

app.mount('#user-goal');