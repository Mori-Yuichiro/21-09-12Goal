import { Component, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';
import Home from './components/home/Home.vue';
import Login from './components/login/Login.vue';
import Register from './components/register/Register.vue';

@Component({
    components: {
        Header,
        Home,
        Login,
        Register,
    },
})

export default class App extends Vue {
    private changePageList = ['Register', 'Login', 'Home'];
    private pageNumber = 0;
    private selectedPage = this.changePageList[this.pageNumber];

    private showPageNumber() {
        this.pageNumber += 1;
        this.selectedPage = this.changePageList[this.pageNumber];
    }

    private Logout() {
        this.pageNumber = 1;
        this.selectedPage = this.changePageList[this.pageNumber];
    }
}
