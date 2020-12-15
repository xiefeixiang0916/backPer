<template>
  <div class="div_top">

  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.div_top {
  display: flex;
  background-color: #0000;
  height: 100%;
  img {
    width: 100%;
    height: 500px;
  }
}
.div_top div:nth-child(1) {
  flex: 1;
}
.div_top div:nth-child(3) {
  flex: 1;
}

.title {
  height: 50px;
  line-height: 50px;
  color: #a699a6;
}
.title_button {
  // text-align: right;
  // height: 40px;
  // line-height: 40px;
  // color: #a699a6
  background-color: #dcf5f7;
}

.flex-container {
  display: -webkit-flex;
  display: flex;
  // width: 500px;
  // height: 250px;
  background-color: lightgrey;
  justify-content: space-between;
}

.flex-item {
  background-color: cornflowerblue;
  // width: 100px;
  // height: 100px;
  margin: 20px;
}
</style>
