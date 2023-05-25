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
    
let prevScrollPos = window.pageYOffset;
let isScrollingUp = false;
let revealTimeout;

window.addEventListener('scroll', revealBlocksOnScroll);

function revealBlocksOnScroll() {
  const currentScrollPos = window.pageYOffset;
  isScrollingUp = currentScrollPos < prevScrollPos;
  prevScrollPos = currentScrollPos;

  clearTimeout(revealTimeout);

  const blocks = document.getElementsByClassName('scroll-reveal-block');

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const blockTop = block.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (isScrollingUp) {
      if (blockTop < windowHeight) {
        block.classList.remove('visible');
      }
    } else {
      if (blockTop < windowHeight) {
        block.classList.add('visible');
      }
    }
  }

  if (isScrollingUp) {
    revealTimeout = setTimeout(hideBlocks, 300);
  }
}

function hideBlocks() {
  const blocks = document.getElementsByClassName('scroll-reveal-block');

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const blockTop = block.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockTop < windowHeight) {
      block.classList.add('visible');
    }
  }
}
