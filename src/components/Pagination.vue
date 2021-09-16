<template>
  <div>
    <div v-for="item in resultList" :key="item.id">
      {{ item.name }} - {{ item.population }}
    </div>
    <div class="paginationButtonWrapper">
      <PaginationButton
        :buttonName="back"
        @pagination-button-click="changePage"
      ></PaginationButton>
      <PaginationButton
        :buttonName="this.getButtonPage + 0"
        :class="[this.getButtonPage + 0 === this.page ? activeClass : '']"
        @pagination-button-click="changePage"
      ></PaginationButton>
      <PaginationButton
        :buttonName="this.getButtonPage + 1"
        @pagination-button-click="changePage"
        :class="[this.getButtonPage + 1 === this.page ? activeClass : '']"
      ></PaginationButton>
      <PaginationButton
        :buttonName="this.getButtonPage + 2"
        @pagination-button-click="changePage"
        :class="[this.getButtonPage + 2 === this.page ? activeClass : '']"
      ></PaginationButton>
      <PaginationButton
        :buttonName="forward"
        @pagination-button-click="changePage"
      ></PaginationButton>
    </div>
  </div>
</template>

<script>
import PaginationButton from "./PaginationButton.vue";
export default {
  name: "PaginationComponent",
  components: {
    PaginationButton,
  },
  props: {
    itemsList: Array,
    limit: Number,
  },
  data() {
    return {
      params: {
        offset: 0,
        limit: this.limit,
      },
      page: 1,
      resultList: "",
      back: "<",
      forward: ">",
      displayData: "",
      buttonNumber: 0,
      activeClass: "active",
    };
  },
  computed: {
    getEndPage() {
      return Math.ceil((this.itemsList.length - 1) / this.params.limit);
    },
    getButtonPage() {
      if (this.page === this.getEndPage) {
        return this.page - 2;
      }
      if (this.page === this.getEndPage - 1) {
        return this.page - 1;
      } else {
        return this.page;
      }
    },
  },
  mounted() {
    this.resultList = this.getUserFromBackEnd(this.params);
  },
  methods: {
    getUserFromBackEnd(params) {
      return this.itemsList.slice(params.offset, params.limit + params.offset);
    },

    changePage(page) {
      if (this.page === 1 && page === this.back) return;
      if (this.page === this.getEndPage && page === this.forward) return;
      if (page === this.back) {
        this.page = this.page - 1;
      } else if (page === this.forward) {
        this.page = this.page + 1;
      } else {
        this.page = page;
      }
      this.params.offset = (this.page - 1) * this.params.limit;
      this.resultList = this.getUserFromBackEnd(this.params);
    },
  },
};
</script>

<style>
.paginationButtonWrapper {
  display: flex;
  justify-content: center;
}
.active {
  background-color: rgb(147, 158, 43);
}
</style>
