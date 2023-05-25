<template>
    <div class="wrapper">
        <div class="corusel" :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }">
            <CoruselItem
                v-for="item in corusel_data"
                :key="item.id"
                :corusel_item="item"
            >
            </CoruselItem>
        </div>
        <div class="wrapper__btns-block">
            <div
                class="wrapper__btn"
                :id="'eComerce-slide_' + item.id"
                @click="GoToSlide(item.id)"
                v-for="item in corusel_data"
                :key="item.id"
            ></div>
        </div>
    </div>
</template>

<script>
import CoruselItem from './CoruselItem.vue';

export default {
    name: 'V-Corusel',
    components: {
        CoruselItem
    },
    data() {
        return {
            prevIndex: 0,
            currentSlideIndex: 0
        }
    },
    props: {
        corusel_data: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        GoToSlide(id) {
            this.prevIndex = this.currentSlideIndex;
            this.currentSlideIndex = id - 1;
            document.getElementById(`eComerce-slide_${id}`).classList.add("active");
            if(this.prevIndex !== this.currentSlideIndex) document.getElementById(`eComerce-slide_${this.prevIndex + 1}`).classList.remove("active");
        }
    }
}

</script>

<style lang="scss">

.wrapper {
    max-width: 500px;
    overflow: hidden;

    @media(max-width: 1200px) {
        max-width: 400px;
    }

    @media(max-width: 992px) {
        max-width: 300px;
    }

    &__btns-block {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__btn {
        display: inline-block;
        background: #B5B0B0;
        border-radius: 100%;
        height: 10px;
        width: 10px;
        transition: 0.3s all ease;

        &.active {
            background-color: #EB3846;
            width: 15px;
            height: 15px;
        }

        &:not(:last-child) {
            margin-right: 8px;
        }
    }
}

.corusel {
    display: flex;
    overflow: hidden;
    transition: 0.5s all ease;

    &__img {
        max-width: 500px;

        @media(max-width: 1200px) {
            max-width: 400px;
        }

        @media(max-width: 992px) {
            max-width: 300px;
        }
    }
}

</style>