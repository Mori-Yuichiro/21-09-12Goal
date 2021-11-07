import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    private password = '';
    private Login() {
        const correctPassword = String(sessionStorage.getItem('password'));
        if (this.password === correctPassword) {
            this.$emit('changePage');
        } else {
            this.password = '';
            alert('パスワードが違います');
        }
    }
}
