<template>
  <div class="nav-wrapper">
        <div @click="triggerMenu" class="burger toggle" :class="{ active: toggle }">
            <span class="burger-mobile"></span>
        </div>
        <nav :class="{ active: toggle }">
            <ul>
                <li>
                    <a href="#"> {{ nav.home }} </a>
                </li>
                <li>
                    <a href="#"> {{ nav.about }} </a>
                </li>
                <li>
                    <a href="#"> {{ nav.work }} </a>
                </li>
                <li>
                    <a href="#"> {{ nav.blog }} </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
          toggle: false,
          nav: {
            home: 'HOME',
            about: 'ABOUT',
            work: 'WORK',
            blog: 'BLOG'
            }
        };
    },
    methods: {
        triggerMenu: function() {
          this.toggle = !this.toggle;
          console.log(this.toggle);



            // if (this.className.includes('active')) {
            //     this.className = 'burger toggle';
            //     this.nextSibling.className = '';
            // } else {
            //     this.className += ' active';
            //     this.nextSibling.className += ' active';
            // }
        }
    }
};
</script>


<style lang='postcss'>
.nav-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  right: 0;
  z-index: 3;
}

.burger {
  background: var(--black);

  /* border: 4px solid var(--dirty-white); */
  height: 80px;
  width: 80px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transition-property: border;
  transition-duration: 0.2s;

  & .burger-mobile {
    background: var(--blue);
    height: 7px;
    width: 45px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    transition-delay: 0.1s;
  }

  & .burger-mobile::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dirty-white);
    display: block;
    top: -15px;
    left: 0;
    transition-property: top, transform;
    transition-delay: 0.5s, 0;
    transition-duration: 0.5s, 0.5s;
  }

  & .burger-mobile::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--yellow);
    display: block;
    top: 15px;
    left: 0;
    transition-property: top, transform;
    transition-delay: 0.5s, 0;
    transition-duration: 0.5s, 0.5s;
  }
}

.burger.active {
  border: 0;
}

.toggle.active span::before {
  background: var(--blue);
  top: 0;
  transform: rotate(45deg);
}

.toggle.active span::after {
  top: 0;
  transform: rotate(-45deg);
}

.toggle.active span {
  background: transparent;
}

nav {
  background: var(--black);
  color: var(--dirty-white);

  /* TODO: Change positioning with grid layout */
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 0;
  text-align: center;
  text-decoration: none;
  padding: 0;
  transition-duration: 0.5s;

  & ul {
    display: grid;
    justify-content: center;
    align-content: center;
    list-style-type: none;
    margin-top: 1em;
    padding-top: 20vh;

    & li {
      /* height: 80px; */

      & a {
        /* border: 4px solid $dirty-white; */
        color: var(--dirty-white);
        display: block;
        height: 80px;
        font-size: 1em;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}

nav.active {
  width: 100vw;
  height: 100vh;
}

@media (min-width: 768px) {
  .burger {
    width: 160px;
    top: 40px;
    right: 40px;
  }

  nav {
    & ul {
      margin-top: 1em;

      & li {
        & a {
          font-size: 3em;
        }
      }
    }
  }

  nav.active {
    width: 30vw;
  }
}
</style>
