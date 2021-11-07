import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
    private password = '';

    private setPassword() {
        sessionStorage.setItem('password', this.password);
        this.$emit('changePage');
    }
}
