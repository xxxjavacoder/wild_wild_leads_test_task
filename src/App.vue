<template>
  <div class="menu">
        <div class="menu__block">
            <div class="menu__close">
                <img src="./assets/close.svg" alt="Close">
            </div>
            <div class="menu__list">
              <div class="menu__item">
                <span class="fz-16">
                  01
                </span>
                <a href="#">
                  Бонус
                </a>
              </div>
              <div class="menu__item color-red">
                <span class="fz-16">
                  02
                </span>
                <a class="color-red" href="#">
                  Прайс
                </a>
              </div>
              <div class="menu__item">
                <span class="fz-16">
                  03
                </span>
                <a href="#">
                  Кейси
                </a>
              </div>
              <div class="menu__item color-red">
                <span class="fz-16">
                  04
                </span>
                <a class="color-red" href="#">
                  О Нас
                </a>
              </div>
              <div class="menu__item">
                <span class="fz-16">
                  05
                </span>
                <a href="#">
                  Контакти
                </a>
              </div>
            </div>
        </div>
        <div class="menu__overlay"></div>
    </div>
    <div class="contact-us">
		<div class="contact-us__block contact-us__block--contact">
			<div class="contact-us__close">
				<img src="./assets/close.svg" alt="Close">
			</div>
			<form action="#">
				<div class="form-group my-2">
					<input type="text" class="contact-us__input" id="name" placeholder="Введите ваше имя">
				</div>
				<div class="form-group mb-2">
					<input type="phone" class="contact-us__input" id="phone_number" placeholder="Введите ваш телефон">
				</div>
				<div class="form-group">
					<input type="email" class="contact-us__input" id="email" placeholder="Введите вашу почту">
				</div>
			</form>
		</div>
		<div class="contact-us__overlay"></div>
    </div>
	<div class="social">
		<div class="social__block social__block--social">
			<div class="social__close">
				<img src="./assets/close.svg" alt="Close">
			</div>
			<div class="row mb-4">
				<div class="col-6">
					<div class="social__card">
						<img src="./assets/whatsapp.png" alt="WhatsApp">
					</div>
				</div>
				<div class="col-6">
					<div class="social__card">
						<img src="./assets/telegram.png" alt="Telegram">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="social__card">
						<img src="./assets/viber.png" alt="Viber">
					</div>
				</div>
				<div class="col-6">
					<div class="social__card">
						<img src="./assets/Email.png" alt="Email">
					</div>
				</div>
			</div>
		</div>
		<div class="social__overlay"></div>
	</div>
  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <red-circle></red-circle>
  <HeaderSection></HeaderSection>
  <InformationSection></InformationSection>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import RedCircle from './components/RedCircle.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import InformationSection from './components/InformationSection.vue';


export default {
  name: 'App',
  components: {
    LoadingScreen,
    HeaderSection,
    RedCircle,
	InformationSection
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}

</script>

<style lang="scss">

body {
	background-color: #1b1b1b !important;
	color: #fff !important;
	margin: 0 !important;
	word-spacing: 1px !important;
	line-height: 1.5 !important;
	font-family: "VisueltPro",sans-serif !important;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

.mini-title {
	display: block;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;

	&--text-center {
		text-align: center;
	}
}

.center-text {
	display: block;
	font-size: 30px;
	line-height: 44px;
	padding: 4rem 0;
}

.color-white {
  color: #fff;
}

.color-red {
  color: #eb3846 !important;
}

.fz-10 {
  font-size: 10px;
}

.fz-14 {
  font-size: 14px;
}

.fz-16 {
  font-size: 16px;
}

.fz-18 {
  font-size: 18px;
}

.fz-20 {
  font-size: 20px;
}

.menu,
.contact-us,
.social {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    transition: all .6s;

    &.active {
        right: 0;
        visibility: visible;
        opacity: 1;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    &__block {
        padding: 40px;
        position: relative;
        width: 500px;
        border-radius: 35px 0 0 35px;
        background: linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), #272727;
        height: fit-content;
        transition: all .6s;
        z-index: 10;

		&--contact-us {
			padding: 100px;
			background: linear-gradient(0deg, #191919, #191919), #343434;
			box-shadow: 11.9794px 11.9794px 71.8761px rgba(0, 0, 0, 0.4);
		}

		&--social {
			background: linear-gradient(318.88deg, rgba(0, 0, 0, 0.4) 3.69%, rgba(0, 0, 0, 0.4) 98%), #343434;
			height: fit-content;
			width: 320px;
			padding: 50px;
		}
    }

    &__list {
		display: grid;
		justify-items: start;
		justify-content: space-evenly;
    }

    &__item {
		display: flex;
		font-size: 35px;
		align-items: center;

		a {
			text-decoration: none;
			color: #fff;
			margin-left: 10px;
		}
    }

	&__input {
		background: linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), #272727;
		border-radius: 30px;		
		border: 3px #000 solid;
		width: 100%;
		padding: 5px 10px;
		text-align: center;
		color: #606266;
	}

	&__card {
		padding: 30px;
		background: linear-gradient(318deg,rgba(0,0,0,.4) -1.9%,rgba(36,36,36,.4) 105%),#343434;
		border-radius: 30px;

		&:hover {
			box-shadow: 0 0 20px 10px rgba(235,56,70,.4);
		}

		img {
			height: 40px;
			width: 40px;
		}
	}

    &__close {
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
    }

    &__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1B1B1B;
        opacity: 0.75;
        z-index: 5;
        transition: all .6s;
    }
}

</style>
