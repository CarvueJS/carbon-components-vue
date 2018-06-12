<template>
  <div :class="bindClass" >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ca-flex',
  props: {
    // TODO: the validation of props should be stronger
    col: {
      type: String,
      default: null,
    },
    offset: {
      type: String,
      default: null,
    },
  },
  computed: {
    bindClass() {
      const breakpoints = this.col.split(' ');
      let res = '';
      breakpoints.forEach((bp) => {
        res += `ca-flex__${bp} `;
      });
      const offsets = this.offset ? this.offset.split(' ') : [];
      offsets.forEach((os) => {
        res += `ca-flex__offset-${os} `;
      });
      return res;
    },
  },
};
</script>

<style src="./ca-flex.css">
/* TODO: use preprocessor to refactor this code ? */
@media only screen and (max-width: 600px) {
  .ca-flex__offset-xs1 {
    margin-left: 8.333333%;
  }

  .ca-flex__offset-xs2 {
    margin-left: 16.66667%;
  }

  .ca-flex__offset-xs3 {
    margin-left: 25%;
  }

  .ca-flex__offset-xs4 {
    margin-left: 33.333333%;
  }

  .ca-flex__offset-xs5 {
    margin-left: 41.66666%;
  }

  .ca-flex__offset-xs6 {
    margin-left: 50%;
  }

  .ca-flex__offset-xs7 {
    margin-left: 58.333333%;
  }

  .ca-flex__offset-xs8 {
    margin-left: 66.66667%;
  }

  .ca-flex__offset-xs9 {
    margin-left: 75%;
  }

  .ca-flex__offset-xs10 {
    margin-left: 83.333333%;
  }

  .ca-flex__offset-xs11 {
    margin-left: 91.66667%;
  }

  .ca-flex__offset-xs12 {
    margin-left: 100%;
  }

  .ca-flex__xs1 {
    flex: 0 0 8.33333333%;
  }

  .ca-flex__xs2 {
    flex: 0 0 16.66667%;
  }

  .ca-flex__xs3 {
    flex: 0 0 25%;
  }

  .ca-flex__xs4 {
    flex: 0 0 33.333333%;
  }

  .ca-flex__xs5 {
    flex: 0 0 41.66666%;
  }

  .ca-flex__xs6 {
    flex: 0 0 50%;
  }

  .ca-flex__xs7 {
    flex: 0 0 58.333333%;
  }

  .ca-flex__xs8 {
    flex: 0 0 66.66667%;
  }

  .ca-flex__xs9 {
    flex: 0 0 75%;
  }

  .ca-flex__xs10 {
    flex: 0 0 83.333333%;
  }

  .ca-flex__xs11 {
    flex: 0 0 91.66667%;
  }

  .ca-flex__xs12 {
    flex: 0 0 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .ca-flex__offset-sm1 {
    margin-left: 8.333333%;
  }

  .ca-flex__offset-sm2 {
    margin-left: 16.66667%;
  }

  .ca-flex__offset-sm3 {
    margin-left: 25%;
  }

  .ca-flex__offset-sm4 {
    margin-left: 33.333333%;
  }

  .ca-flex__offset-sm5 {
    margin-left: 41.66666%;
  }

  .ca-flex__offset-sm6 {
    margin-left: 50%;
  }

  .ca-flex__offset-sm7 {
    margin-left: 58.333333%;
  }

  .ca-flex__offset-sm8 {
    margin-left: 66.66667%;
  }

  .ca-flex__offset-sm9 {
    margin-left: 75%;
  }

  .ca-flex__offset-sm10 {
    margin-left: 83.333333%;
  }

  .ca-flex__offset-sm11 {
    margin-left: 91.66667%;
  }

  .ca-flex__offset-sm12 {
    margin-left: 100%;
  }

  .ca-flex__sm1 {
    flex: 0 0 8.33333333%;
  }

  .ca-flex__sm2 {
    flex: 0 0 16.66667%;
  }

  .ca-flex__sm3 {
    flex: 0 0 25%;
  }

  .ca-flex__sm4 {
    flex: 0 0 33.333333%;
  }

  .ca-flex__sm5 {
    flex: 0 0 41.66666%;
  }

  .ca-flex__sm6 {
    flex: 0 0 50%;
  }

  .ca-flex__sm7 {
    flex: 0 0 58.333333%;
  }

  .ca-flex__sm8 {
    flex: 0 0 66.66667%;
  }

  .ca-flex__sm9 {
    flex: 0 0 75%;
  }

  .ca-flex__sm10 {
    flex: 0 0 83.333333%;
  }

  .ca-flex__sm11 {
    flex: 0 0 91.66667%;
  }

  .ca-flex__sm12 {
    flex: 0 0 100%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .ca-flex__offset-md1 {
    margin-left: 8.333333%;
  }

  .ca-flex__offset-md2 {
    margin-left: 16.66667%;
  }

  .ca-flex__offset-md3 {
    margin-left: 25%;
  }

  .ca-flex__offset-md4 {
    margin-left: 33.333333%;
  }

  .ca-flex__offset-md5 {
    margin-left: 41.66666%;
  }

  .ca-flex__offset-md6 {
    margin-left: 50%;
  }

  .ca-flex__offset-md7 {
    margin-left: 58.333333%;
  }

  .ca-flex__offset-md8 {
    margin-left: 66.66667%;
  }

  .ca-flex__offset-md9 {
    margin-left: 75%;
  }

  .ca-flex__offset-md10 {
    margin-left: 83.333333%;
  }

  .ca-flex__offset-md11 {
    margin-left: 91.66667%;
  }

  .ca-flex__offset-md12 {
    margin-left: 100%;
  }

  .ca-flex__md1 {
    flex: 0 0 8.33333333%;
  }

  .ca-flex__md2 {
    flex: 0 0 16.66667%;
  }

  .ca-flex__md3 {
    flex: 0 0 25%;
  }

  .ca-flex__md4 {
    flex: 0 0 33.333333%;
  }

  .ca-flex__md5 {
    flex: 0 0 41.66666%;
  }

  .ca-flex__md6 {
    flex: 0 0 50%;
  }

  .ca-flex__md7 {
    flex: 0 0 58.333333%;
  }

  .ca-flex__md8 {
    flex: 0 0 66.66667%;
  }

  .ca-flex__md9 {
    flex: 0 0 75%;
  }

  .ca-flex__md10 {
    flex: 0 0 83.333333%;
  }

  .ca-flex__md11 {
    flex: 0 0 91.66667%;
  }

  .ca-flex__md12 {
    flex: 0 0 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .ca-flex__offset-lg1 {
    margin-left: 8.333333%;
  }

  .ca-flex__offset-lg2 {
    margin-left: 16.66667%;
  }

  .ca-flex__offset-lg3 {
    margin-left: 25%;
  }

  .ca-flex__offset-lg4 {
    margin-left: 33.333333%;
  }

  .ca-flex__offset-lg5 {
    margin-left: 41.66666%;
  }

  .ca-flex__offset-lg6 {
    margin-left: 50%;
  }

  .ca-flex__offset-lg7 {
    margin-left: 58.333333%;
  }

  .ca-flex__offset-lg8 {
    margin-left: 66.66667%;
  }

  .ca-flex__offset-lg9 {
    margin-left: 75%;
  }

  .ca-flex__offset-lg10 {
    margin-left: 83.333333%;
  }

  .ca-flex__offset-lg11 {
    margin-left: 91.66667%;
  }

  .ca-flex__offset-lg12 {
    margin-left: 100%;
  }

  .ca-flex__lg1 {
    flex: 0 0 8.33333333%;
  }

  .ca-flex__lg2 {
    flex: 0 0 16.66667%;
  }

  .ca-flex__lg3 {
    flex: 0 0 25%;
  }

  .ca-flex__lg4 {
    flex: 0 0 33.333333%;
  }

  .ca-flex__lg5 {
    flex: 0 0 41.66666%;
  }

  .ca-flex__lg6 {
    flex: 0 0 50%;
  }

  .ca-flex__lg7 {
    flex: 0 0 58.333333%;
  }

  .ca-flex__lg8 {
    flex: 0 0 66.66667%;
  }

  .ca-flex__lg9 {
    flex: 0 0 75%;
  }

  .ca-flex__lg10 {
    flex: 0 0 83.333333%;
  }

  .ca-flex__lg11 {
    flex: 0 0 91.66667%;
  }

  .ca-flex__lg12 {
    flex: 0 0 100%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .ca-flex__offset-xl1 {
    margin-left: 8.333333%;
  }

  .ca-flex__offset-xl2 {
    margin-left: 16.66667%;
  }

  .ca-flex__offset-xl3 {
    margin-left: 25%;
  }

  .ca-flex__offset-xl4 {
    margin-left: 33.333333%;
  }

  .ca-flex__offset-xl5 {
    margin-left: 41.66666%;
  }

  .ca-flex__offset-xl6 {
    margin-left: 50%;
  }

  .ca-flex__offset-xl7 {
    margin-left: 58.333333%;
  }

  .ca-flex__offset-xl8 {
    margin-left: 66.66667%;
  }

  .ca-flex__offset-xl9 {
    margin-left: 75%;
  }

  .ca-flex__offset-xl10 {
    margin-left: 83.333333%;
  }

  .ca-flex__offset-xl11 {
    margin-left: 91.66667%;
  }

  .ca-flex__offset-xl12 {
    margin-left: 100%;
  }

  .ca-flex__xl1 {
    flex: 0 0 8.33333333%;
  }

  .ca-flex__xl2 {
    flex: 0 0 16.66667%;
  }

  .ca-flex__xl3 {
    flex: 0 0 25%;
  }

  .ca-flex__xl4 {
    flex: 0 0 33.333333%;
  }

  .ca-flex__xl5 {
    flex: 0 0 41.66666%;
  }

  .ca-flex__xl6 {
    flex: 0 0 50%;
  }

  .ca-flex__xl7 {
    flex: 0 0 58.333333%;
  }

  .ca-flex__xl8 {
    flex: 0 0 66.66667%;
  }

  .ca-flex__xl9 {
    flex: 0 0 75%;
  }

  .ca-flex__xl10 {
    flex: 0 0 83.333333%;
  }

  .ca-flex__xl11 {
    flex: 0 0 91.66667%;
  }

  .ca-flex__xl12 {
    flex: 0 0 100%;
  }
}

</style>
