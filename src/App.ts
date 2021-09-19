import { Component, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';
import HelloWorld from './components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
        Header,
    },
})

export default class App extends Vue {}
