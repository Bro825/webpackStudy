<template>
  <div class="box">
    <div class="item">item 100%</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "~~~"
    };
  }
};
</script>
<style>
body,
div {
  margin: 0;
  padding: 0;
}
body {
  width: 250px;
}
.box .item {
  width: 100%;
  height: 100px;
  background-color: pink;
}
</style>



