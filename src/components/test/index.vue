<template>
  <div>
    <div class="div1">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>3</span>
      <span>4</span>
    </div>

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

.div1 {
  display: flex;
  /* 1. 默认主轴= x 轴  row */
  /* flex-direction: column; */
  /* justify-content  设置主轴属性 */
  /* justify-content 设置主轴上子元素的排列方式 */
  /* justify-content: flex-start; */
  /* justify-content: flex-end; */
  /* 子元素水平居中 */
  /* justify-content: center; */
  /* 平分剩余空间 */
  /* justify-content: space-around; */
  /* 先两边贴边再分配剩余空间 */
  /* justify-content: space-between; */
  /* 以使每个元素之间和元素距离边距的距离都相等，但是兼容性比较差 */
  /* justify-content: space-evenly; */

  /*2. felx中，默认的子元素不换行，如果装不开会缩小子元素的宽度 */
  /* flex-wrap: wrap; */

  /*3.  align-items  单行 */
  /* 侧轴垂直居中 */
  /* align-items: center; */
  /* 侧轴拉伸 需要去除子元素的高度 */
  /* align-items: stretch; */

  /* 4. 换行 */
  flex-wrap: wrap;
  /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
  /* align-content 必须在双行子元素使用 */
  /* align-content: flex-start; */
  align-content: center;



  width: 800px;
  height: 700px;
  background-color: pink;
}
.div1 span {
  margin: 10px;
  width: 150px;
  height: 100px;
  background-color: purple;
}
</style>