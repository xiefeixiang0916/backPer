<template>
  <div>
    <div class="flex-container">
      <div class="flex-item">flex item 1</div>
      <div class="flex-item">flex item 2</div>
    </div>
    <div class="flex-container">
      <div style="display: flex;width: 70%">
        <img style="width:50px;height:50px" src="../../assets/img/logo.png" />
        <div>
          <sapn style="display: flex">战火与秩序</sapn>
          <span>人、兽、魔3大种族，4大兵种，12种排列，这才叫策略手游！</span>
        </div>
      </div>

      <div>
        <div>1196人评分</div>
        <div>6.2</div>
      </div>
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