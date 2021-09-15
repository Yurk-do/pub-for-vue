<template>
  <div class="work-hour-container">
    <li class="work-hour-row d-flex">
      <p class="work-day">{{ workDay }}</p>
      <p class="work-time">{{ workTime }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "WorkHour",
  props: {
    workDay: {
      type: String,
      required: true,
    },
    workTime: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.work-hour-row {
  color: white;
  .work-day {
    text-transform: uppercase;
    color: rgb(202, 202, 89);
  }
  .work-time {
    margin-left: 15px;
    color: rgb(114, 185, 173);
  }
}
</style>
