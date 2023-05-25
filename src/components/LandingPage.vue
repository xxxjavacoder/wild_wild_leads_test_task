<template>
    <section class="information scroll-reveal-block">
        <div class="container">
            <div class="information__wrapper">
                <div class="information__text-block">
                    <div class="information__title">
                        Landing Page
                    </div>
                    <div class="information__text">
                        Для того, чтобы Landing page продавал, нужно 
                        пройти много этапов: детальный анализ конкурентов, 
                        создание портрета ЦА, разработку стратегии продаж, 
                        разработку прототипа и дизайна, написание текстов и 
                        только потом - внедрение всей этой работы в программный код.
                    </div>
                    <div class="text-center">
                        <a href="#" class="information__link">Хочу такой же проект</a>
                    </div>
                </div>
                <div class="information__slider-block circle-right">
                    <Corusel
                        prefix="LandingPage"
                        :corusel_data="sliderItems"
                    ></Corusel>
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
                {id: 1, name: 'img1', url: 'landing-slide-1.png'},
                {id: 2, name: 'img2', url: 'landing-slide-2.png'},
                {id: 3, name: 'img3', url: 'landing-slide-3.png'},
                {id: 4, name: 'img4', url: 'landing-slide-4.png'}
            ]
        }
    }
}

</script>