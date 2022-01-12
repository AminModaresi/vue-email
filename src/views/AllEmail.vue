<template>
  <base-email-line
    v-for="comments in itemList"
    :key="comments.id"
    :name="comments.name"
    :description="comments.body"
  ></base-email-line>
  <base-pagination
    v-if="showPagination"
    :row="rowsLenght"
    @change-page="changePage"
  />
</template>
<script>
export default {
  data: () => ({
    row: [],
    startList: 0,
    showItemNumber: 50,
    itemList: [],
    perPage: 40,
    showPagination: true,
  }),
  methods: {
    async addPage(start, lengthItem) {
      this.itemList = [];
      this.showPagination = false;
      await this.$store.dispatch("inbox/getComments");
      for (let i = start; i <= lengthItem; i++) {
        await this.itemList.push(this.showComments[i]);
      }
      this.showPagination = true;
    },
    changePage(value) {
      this.addPage((value - 1) * 50, 50 * value);
    },
    async rows() {
      this.showPagination= false
      await this.$store.dispatch("inbox/getComments");
      if (this.showComments.length > 0) {
        let lenghtItems = this.showComments.length / 50;
        for (let i = 1; i <= lenghtItems - 1; i++) {
          if (i == 1) {
            this.row.push({
              pageNum: i,
              done: true,
            });
          } else {
            this.row.push({
              pageNum: i,
              done: false,
            });
          }
        }
      }
      this.addPage(0, 50);
      setTimeout(()=>{
      this.showPagination= true
      } , 2000)
    },
  },
  computed: {
    showComments() {
      return this.$store.getters["inbox/showComments"];
    },
    rowsLenght() {
      return this.row;
    },
  },

  created() {
    this.rows();
  },
};
</script>