<template>
    <div class="corusel__item">
        <img class="corusel__img" :src="require('../../assets/' + corusel_item.url)" :alt="`Slide: ${corusel_item.id}`">
    </div>
</template>

<script>

export default {
    name: 'CoruselItem',
    props: {
        corusel_item: {
            type: Object,
            default: () => {}
        },
        prefix: {
            type: String,
            default: "eComerce"
        }
    },
    mounted() {
        document.getElementById(`${this.prefix}-slide_1`).classList.add("active");
    }
}

</script>