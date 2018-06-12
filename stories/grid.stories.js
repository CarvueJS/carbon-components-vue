import { storiesOf } from '@storybook/vue';

storiesOf('Grid', module)
  .add('Default', () => ({
    template: `
    <ca-layout wrap>
      <ca-flex col="xs12 sm12 md12 lg12 xl12" >
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex v-for="i in 2" :key="i + 'item1'" col="xs6 sm6 md6 lg6 xl6">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex v-for="i in 3" :key="i + 'item2'" col="xs4 sm4 md4 lg4 xl4">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex v-for="i in 4" :key="i + 'item3'" col="xs3 sm3 md3 lg3 xl3">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex v-for="i in 6" :key="i + 'item4'" col="xs2 sm2 md2 lg2 xl2">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

    </ca-layout>
    `,
  })).add('Offset', () => ({
    template: `
    <ca-layout wrap>
      <ca-flex col="xs10 sm10 md10 lg10 xl10" offset="xs1 sm1 md1 lg1 xl1">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex col="xs6 sm6 md6 lg6 xl6" offset="xs4 sm4 md4 lg4 xl4">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex col="xs4 sm4 md4 lg4 xl4" offset="xs2 sm2 md2 lg2 xl2">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex col="xs3 sm3 md3 lg3 xl3" offset="xs3 sm3 md3 lg3 xl3">
        <ca-tile style="background: #4caf50"/>
      </ca-flex>

    </ca-layout>
    `,
  })).add('Breakpoint', () => ({
    template: `
    <ca-layout wrap>
      <ca-flex col="xs10 sm3 md5 lg3 xl2" offset="xs1 sm4 md3 lg3 xl8">
        <ca-tile style="background: #1867c0">
          please change viewport
        </ca-tile>
      </ca-flex>

      <ca-flex col="xs6 sm4 md3 lg2 xl6" offset="xs4 sm6 md4 lg6 xl6">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex col="xs4 sm2 md6 lg2 xl3" offset="xs2 sm4 md2 lg5 xl5">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex col="xs3 sm7 md2 lg6 xl4" offset="xs3 sm2 md5 lg1 xl6">
        <ca-tile style="background: #4caf50"/>
      </ca-flex>

    </ca-layout>
    `,
  }))
