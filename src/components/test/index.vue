<template>
  <div>
    <div class="flex-container">
      <div class="flex-item">flex item 1</div>
      <div class="flex-item">flex item 2</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  width: 500px;
  height: 250px;
  background-color: lightgrey;
  justify-content: space-between;
}

.flex-item {
  background-color: cornflowerblue;
  width: 100px;
  height: 100px;
  margin: 20px;
}
</style>