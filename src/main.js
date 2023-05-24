import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).mount('#app')

const humburger = document.querySelector('.header__burger-btn'),
    menu = document.querySelector('.menu'),
    close_menu = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close_menu.addEventListener('click', () => {
    menu.classList.remove('active');
})

const consult = document.querySelector('.header__btn-consult'),
    contact_us = document.querySelector('.contact-us'),
    close_contact = document.querySelector('.contact-us__close');

consult.addEventListener('click', () => {
    contact_us.classList.add('active');
})

close_contact.addEventListener('click', () => {
    contact_us.classList.remove('active');
})

const social = document.querySelector('.contact_btn'),
    social_modal = document.querySelector('.social'),
    close_social = document.querySelector('.social__close');

social.addEventListener('click', () => {
    social_modal.classList.add('active');
})

close_social.addEventListener('click', () => {
    social_modal.classList.remove('active');
})
    