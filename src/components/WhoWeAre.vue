<template>
     <section class="who-we-are scroll-reveal-block">
        <div class="container">
            <div class="who-we-are__wrapper">
                <div class="who-we-are__text-block">
                    <div class="mini-title">
                        КТО МЫ ТАКИЕ
                    </div>
                    <div class="who-we-are__text">
                        КОМАНДА 
                        <span class="color-red">
                            WEB ДИЗАЙНЕРОВ,
                        </span>
                        PАЗРАБОТЧИКОВ,
                        <span class="color-red">
                            МАРКЕТОЛОГОВ
                        </span>
                    </div>
                </div>
                <div class="who-we-are__circle">
                    <img src="../assets/circle.png" alt="Circle">
                </div>
            </div>
        </div>
     </section>
</template>

<style lang="scss">

.who-we-are {
    padding-top: 100px;
    background: #171717;

    &__wrapper {
        display: flex;
        align-items:center;
        justify-content: flex-start;
    }

    &__text-block {
        width: 50%;
    }

    &__circle {
        width: 50%;

        img {
            max-width: 500px;
        }
    }

    &__text {
        margin-top: 25px;
        font-size: 4vw;
        font-weight: 700;
    }
}

</style>