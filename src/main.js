import { createApp } from 'vue';
import App from './App.vue';
import Card from './components/ui/Card.vue';
import Button from './components/ui/Button.vue';
import StoredResources from './components/resources/StoredResources.vue';
import AddResource from './components/resources/AddResource.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.component('Card', Card);
app.component('Button', Button);
app.component('StoredResources', StoredResources);
app.component('AddResource', AddResource);
app.component('Dialog', BaseDialog);

app.mount('#app');
