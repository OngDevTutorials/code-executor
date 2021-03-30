import { createApp } from 'vue';
import { Button, Input, List, Card } from 'ant-design-vue';
import App from './App.vue';

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Input);
app.use(List);
app.use(List.TextArea);
app.use(Card);
app.mount('#app');
