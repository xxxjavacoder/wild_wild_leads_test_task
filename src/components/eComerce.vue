<template>
    <section class="e-comerce">
        <div class="container">
            <span class="mini-title mini-title--text-center">что мы &#9825; делать</span>
            <span class="center-text">
                Делим разработку сайта на отдельные задачи. Маркетинговый анализ, 
                разработку дизайна, внедрение программного кода. Поэтому сайты WebKing 
                продают в 2 раза лучше, чем у конкурентов.
            </span>
            <div class="e-comerce__wrapper">
                <div class="e-comerce__slider-block">
                    <Corusel
                        :corusel_data="sliderItems"
                    ></Corusel>
                </div>
                <div class="e-comerce__text-block">
                    <div class="e-comerce__title">
                        E-Commerce
                    </div>
                    <div class="e-comerce__text">
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using 
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. 
                    </div>
                    <div class="text-center">
                        <a href="#" class="e-comerce__link">Хочу такой же проект</a>
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
                {id: 2, name: 'img2', url: 'ecomers-slide-2.png'}
            ]
        }
    }
}

</script>

<style scoped lang="scss">

.e-comerce {
    padding-top: 100px;

    &__wrapper {
        display: flex;
    }

    &__slider-block,
    &__text-block {
        width: 50%;
    }

    &__title {
        font-size: 4vw;
        font-weight: 700;
        white-space: nowrap;
        margin-bottom: 1rem;
    }

    &__text {
        color: #c3c1c1;
        margin-bottom: 1rem;
    }

    &__link {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: #EB3846;

        &:hover {
            text-shadow: 0 0 25px rgba(235,56,70,.7);
        }
    }
}

</style>