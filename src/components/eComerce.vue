<template>
    <section class="information scroll-reveal-block">
        <div class="container">
            <span class="mini-title mini-title--text-center">что мы &#9825; делать</span>
            <span class="center-text">
                Делим разработку сайта на отдельные задачи. Маркетинговый анализ, 
                разработку дизайна, внедрение программного кода. Поэтому сайты WebKing 
                продают в 2 раза лучше, чем у конкурентов.
            </span>
            <div class="information__wrapper">
                <div class="information__slider-block circle-left">
                    <Corusel
                        prefix='eComerce'
                        :corusel_data="sliderItems"
                    ></Corusel>
                </div>
                <div class="information__text-block">
                    <div class="information__title">
                        E-Commerce
                    </div>
                    <div class="information__text">
                        К интернет-ресурсам для продажи относятся: разработка 
                        интернет-магазина, разработка маркет-плейса, разработка систем обучения. 
                        Благодаря отдельной проработке каждого бизнес-процесса наши сайты ведут человека по пути от первого знакомства до покупки.
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
                {id: 1, name: 'img1', url: 'ecomers-slide-1.png'},
                {id: 2, name: 'img2', url: 'ecomers-slide-2.png'},
                {id: 3, name: 'img3', url: 'ecomers-slide-3.png'}
            ]
        }
    }
}

</script>