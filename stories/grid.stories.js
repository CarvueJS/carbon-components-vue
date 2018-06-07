import { storiesOf } from '@storybook/vue';

storiesOf('Grid', module)
  .add('Default', () => ({
    template: `
    <ca-layout wrap>
      <ca-flex col="x12" >
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex v-for="i in 2" :key="i" col="x6">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex v-for="i in 3" :key="i" col="x4">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex v-for="i in 4" :key="i" col="x3">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex v-for="i in 6" :key="i" col="x2">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

    </ca-layout>
    `,
  })).add('Offset', () => ({
    template: `
    <ca-layout wrap>
      <ca-flex col="x10" offset="x1">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex col="x6" offset="x4">
        <ca-tile style="background: #5cbbf6"/>
      </ca-flex>

      <ca-flex col="x4" offset="x2">
        <ca-tile style="background: #1867c0"/>
      </ca-flex>

      <ca-flex col="x3" offset="x3">
        <ca-tile style="background: #4caf50"/>
      </ca-flex>

    </ca-layout>
    `,
  }));
