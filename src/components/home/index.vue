<template>
  <div class="div_top">
    <div></div>
    <div style="border: 1px solid;width:900px;height: 1000px">
      <div>
        <img style="height:auto" src="../../assets/img/home/1.jpg" alt />
      </div>
      <div style="display:flex;margin-top: 15px">
        <div style="width:70%;
    margin-right: 5%;
    border: 1px solid">
          <div>
            <!-- -->
            <div
              style=" height:40px;line-height: 40px;font-size: 14px;display:flex;justify-content: space-between;"
            >
              <div>来自广告</div>
              <button>AD</button>
            </div>
            <div>
              <img style="height:auto" src="../../assets/img/home/2.jpg" alt />
            </div>
            <div style="height:70px;">
              下方
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
          </div>
        </div>
        <div style="width:30%">2</div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.div_top {
  display: flex;
  background-color: #f2f2f2;
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