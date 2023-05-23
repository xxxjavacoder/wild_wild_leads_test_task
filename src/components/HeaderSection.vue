<template>
    <section class="header">
        <div class="container">
            <div class="header__wrapper">
                <img src="../assets/logo.svg" alt="Logo">
                <div class="header__burger-btn">
                    <div class="line-1 line" />
                    <div class="line-2 line" />
                    <div class="line-3 line" />
                </div>
                <div class="header__btn-wrapper">
                    <button class="header__btn-consult">
                        Консультація
                    </button>
                        <div class="header__lang-text">
                            <span>
                                RU
                            </span>
                        </div>
                </div>
            </div>
            <div class="header__block">
                <ul class="header__list">
                    <li class="header__list-item">
                        <a href="" class="header__list-link">
                            Бонус
                        </a>
                    </li>
                    <li class="header__list-item">
                        <a href="" class="header__list-link">
                            Прайс
                        </a>   
                    </li>
                    <li class="header__list-item">
                        <a href="" class="header__list-link">
                            Кейси
                        </a>
                    </li>
                    <li class="header__list-item">
                        <a href="" class="header__list-link">
                            О Нас
                        </a>
                    </li>
                    <li class="header__list-item">
                        <a href="" class="header__list-link">
                            Контакти
                        </a>
                    </li>
                </ul>
                <h1 class="header__title-block">
                    ПРОДАЮЩИЕ САЙТЫ С
                    <span class="color-red">
                        ВЫСОКОЙ КОНВЕРСИЕЙ
                    </span>
                </h1>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

.header {
    padding: 10px 0;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
    }

    &__burger-btn {
        display: grid;
        grid-auto-flow: row;
        justify-items: center;
        align-content: center;
        grid-gap: 10px;
        width: 65px;
        height: 65px;
        box-shadow: -8px -8px 16px rgba(18,18,18,.4), 8px 8px 24px rgba(0,0,0,.5);
        border: 5px double transparent;
        border-radius: 50%;
        background-image: linear-gradient(163.01deg,#181818 8.23%,#181818 91.98%),linear-gradient(hsla(0,.4%,48%,.16) 4.48%,rgba(0,0,0,.16) 69.33%);
        background-origin: border-box;
        background-clip: content-box,border-box;
        transition: all .5s ease;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 20px 10px rgba(235,56,70,.4);
        }

        .line {
            background: #c3c1c1;
            height: 4px;
            border-radius: 3px;
        }

        .line-1, .line-3 {
            width: 20px;
        }

        .line-2 {
            width: 40px;
        }
    }

    &__btn-wrapper {
        display: flex;
        align-items: center;
    }

    &__lang-text {
        position: relative;
        color: #c3c1c1;
        width: 48px;
        height: 48px;
        box-shadow: -8px -8px 16px rgba(18,18,18,.4), 8px 8px 24px rgba(0,0,0,.5);
        border: 5px double transparent;
        border-radius: 50%;
        background-image: linear-gradient(163.01deg,#181818 8.23%,#181818 91.98%),linear-gradient(hsla(0,.4%,48%,.16) 4.48%,rgba(0,0,0,.16) 69.33%);
        background-origin: border-box;
        background-clip: content-box,border-box;
        transition: all .5s ease;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 20px 10px rgba(235,56,70,.4);
        }

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &__btn-consult {
        margin-right: 2rem;
        background: linear-gradient(180deg,#681217,#bc333c);
        border: 1px solid #bc333c;
        box-sizing: border-box;
        border-radius: 100px;
        height: fit-content;
        padding: 0.5rem 2rem;
        font-size: 16px;
        font-weight: 500;
        color: #fff;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 20px 10px rgba(235,56,70,.4);
        }
    }

    &__block {
        display: grid;
        grid-template-columns: minmax(100px,150px) 1fr minmax(100px,150px);
        justify-content: center;
        grid-gap: 1rem;
        padding-bottom: 10rem;
    }

    &__list {
        display: inline-block;
        list-style: none;
        padding-right: 2rem;
    }

    &__list-item {
        padding: 2rem 1rem 2rem 2rem;
    }

    &__list-link {
        text-decoration: none;
        color: #c3c1c1;
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        transition: all .5s ease;

        &:hover {
            color: #EB3846;
        }
    }

    &__title-block {
        font-size: 3.5vw;
        padding: 10rem 0;
        text-align: center;

        span {
            display: inline-block;
        }
    }
}

</style>