<template>
    <section class="information">
        <div class="container">
            <span class="mini-title mini-title--text-center">что мы &#9825; делать</span>
            <span class="center-text">
                Делим разработку сайта на отдельные задачи. Маркетинговый анализ, 
                разработку дизайна, внедрение программного кода. Поэтому сайты WebKing 
                продают в 2 раза лучше, чем у конкурентов.
            </span>
            <div class="information__wrapper">
                <div class="information__slider-block">
                    <carousel :items-to-show="1">
                        <slide v-for="slide in 2" :key="slide">
                            <img src="../assets/ecomers-slide-1.png" alt="1">
                        </slide>

                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>
                </div>
                <div class="information__text-block">
                    <span class="information__title">
                        E-Commerce
                    </span>
                    <span class="information__text">
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using 
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. 
                    </span>
                    <a href="#" class="information__link">Хочу такой же проект</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
        name: 'InformationSection',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        }
    }
</script>

<style scoped lang="scss">

.information {
    padding-top: 100px;
}

</style>