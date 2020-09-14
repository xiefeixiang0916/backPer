<template>
  <div class="div_top" style="padding: 45px 100px 55px;width: 1070px">
    <div>
      <img
        src="https://img.tapimg.com/market/images/09b681d7e5d888364c85bdc67a69ba1c.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1"
      />
    </div>
    <div style="margin-top: 20px;">
      <el-row :gutter="100">
        <el-col :span="16" style="border:1px solid">
          <div style="background:#FFFFFF">
            <div class="title">
              <span style="float: left;
    margin: 0 19px 0px">来自广告</span>
              <div>12312</div>
            </div>

            <div>
              <img
                style="width:100%;height:300px"
                src="https://static-tapad.tapdb.net/MTY5MjUzNDFANWNiZWFiNTE3ZDI1NA.jpg?imageView2/0/w/1080/q/80/format/jpg/interlace/1/ignore-error/1"
              />
            </div>
            <div>
              <img
                style="width:50px;height:50px"
                src="https://img.tapimg.com/market/lcs/efc4373e78ce7a2a0973bf3da7317884_360.png?imageView2/1/w/240/q/80/interlace/1/ignore-error/1"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="8" style="border:1px solid">
          <div>222</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.div_top {
  background-color: #f2f2f2;
  img {
    width: 100%;
    height: 500px;
  }
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
</style>