<template>
    <section class="information scroll-reveal-block">
        <div class="container">
            <div class="information__wrapper">
                <div class="information__slider-block circle-left">
                    <Corusel
                        prefix='Corporate'
                        :corusel_data="sliderItems"
                    ></Corusel>
                </div>
                <div class="information__text-block">
                    <div class="information__title">
                        Corporate
                    </div>
                    <div class="information__text">
                        Как однажды сказал Билл Гейтс: «Если вашего 
                        бизнеса нет в интернете, то Вас нет в бизнесе». 
                        Корпоративный сайт, безусловно, нужен любой компании. 
                        Это та инвестиция, где Ваш клиент знакомится с Вашим 
                        опытом, услугами, продукцией. Он закрепляет влияние Вашей компании.
                    </div>
                    <div class="text-center">
                        <a href="#" class="information__link">Хочу такой же проект</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Corusel from './partials/Corusel.vue';

export default {
    name: 'eComerce',
    components: {
        Corusel
    },
    data() {
        return {
            sliderItems: [
                {id: 1, name: 'img1', url: 'corporate-slide-1.png'},
                {id: 2, name: 'img2', url: 'corporate-slide-2.png'},
                {id: 3, name: 'img3', url: 'corporate-slide-3.png'}
            ]
        }
    }
}

</script>