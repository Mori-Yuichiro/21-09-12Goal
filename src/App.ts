import { Component, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';
import Main from './components/Main.vue';

@Component({
    components: {
        Main,
        Header,
    },
})

export default class App extends Vue {}
