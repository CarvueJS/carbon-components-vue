<template>
  <div class="bx--pagination" data-pagination>
    <!-- <div class="bx--pagination__left">
      <span class="bx--pagination__text">Items per page:</span>
      <div class="bx--select bx--select--inline">
        <label for="select-id-pagination" class="bx--visually-hidden">Number of items per page</label>
        <select id="select-id-pagination" class="bx--select-input" data-items-per-page>
          <option class="bx--select-option" value="20" v-for="n in numberOfPage" :key="n">
            {{n}}
          </option>
        </select>
        <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
      <span class="bx--pagination__text">
        <span>|&nbsp;</span>
        <span data-displayed-item-range>1-10</span> of
        <span data-total-items>40</span> items
      </span>
    </div> -->
    <div class="bx--pagination__right bx--pagination--inline">
      <span class="bx--pagination__text">
        <span data-displayed-page-number>{{value}}</span> of
        <span data-total-pages>{{numberOfPage}}</span> pages
      </span>
      <button class="bx--pagination__button bx--pagination__button--backward" data-page-backward aria-label="Backward button">
        <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z"></path>
        </svg>
      </button>
      <label for="page-number-input" class="bx--visually-hidden">Page number input</label>
      <div class="bx--select bx--select--inline">
        <label for="select-id-pagination" class="bx--visually-hidden">Number of items per page</label>
        <select id="select-id-pagination" class="bx--select-input" data-page-number-input :value="value" @change="select">
          <option class="bx--select-option" v-for="n in numberOfPage" :key="n" >
            <div>{{n}}</div>
          </option>
        </select>
        <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
      <button class="bx--pagination__button bx--pagination__button--forward" data-page-forward aria-label="Forward button">
        <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { Pagination } from 'carbon-components';

export default {
  name: 'ca-pagination',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    prePage: {
      type: Number,
      default: 5,
    },
    numberOfItems: {
      type: Number,
      default: 100,
    },
  },
  data: () => ({
    pagination: null,
  }),
  computed: {
    numberOfPage() {
      return this.numberOfItems / this.prePage;
    },
  },
  mounted() {
    this.pagination = Pagination.create(this.$el);
    this.pagination.element.addEventListener('pageChange', (e) => {
      if (e.detail.direction === 'forward') {
        this.value > 1 ? this.$emit('input', this.value - 1) : '';
      } else {
        this.$emit('input', this.value + 1);
      }
    });
  },
  methods: {
    select(e) {
      this.$emit('input', parseInt(e.target.value));
    },
  },
};

</script>

<style></style>
