import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
    private password = '';

    private setPassword() {
        console.log(this.password);
        sessionStorage.setItem('password', this.password);
        this.$emit('changePage');
    }
}
