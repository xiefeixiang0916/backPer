<template>
  <div class="aside_div_one">
    <div
      v-for="item in menuList"
      :key="item.id"
      class="aside_div_two"
      :class="item.switchover==1?switchoverCss:(item.switchover==2?'defaultColor':'')"
      @click="clickColorMethos(item)"
      @mouseenter="mouseenterColorMethos(item)"
      @mouseleave="mouseleaveColorMethos(item)"
    >
      <i :class="item.menuIcon"></i>
      <span>{{item.menuName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          menuIcon: 'el-icon-s-home',
          menuName: '首页',
          switchover: 0,
        },
        {
          id: 2,
          menuIcon: 'el-icon-s-home',
          menuName: '排行榜',
          switchover: 0,
        },
        {
          id: 3,
          menuIcon: 'el-icon-s-home',
          menuName: '安利墙',
          switchover: 0,
        },
        {
          id: 4,
          menuIcon: 'el-icon-s-home',
          menuName: '发现',
          switchover: 0,
        },
        {
          id: 5,
          menuIcon: 'el-icon-s-home',
          menuName: '动态',
          switchover: 0,
        },
        {
          id: 6,
          menuIcon: 'el-icon-s-home',
          menuName: '视频',
          switchover: 0,
        },
      ],
      switchoverCss: '',
      //切换样式
      clickColor: 0,
    }
  },
  created() {
    //默认展示第一个菜单
    let menu = this.menuList[0]
    console.log(menu)
    menu.switchover = 1
    this.$set(this.menuList, 0, menu)
    this.mouseenterColorMethos(menu)
  },
  methods: {
    clickColorMethos(val) {
      this.switchoverCssArrar(val)
      this.switchoverCss = 'clickColor i_span_color'
    },
    mouseenterColorMethos(val) {
      if (val.switchover == 1) {
        this.switchoverCss = 'hoverColor i_span_color'
      } else {
        let index = this.menuList.findIndex((item) => item.id == val.id)
        val.switchover = 2
        this.$set(this.menuList, index, val)
      }
    },
    mouseleaveColorMethos(val) {
      if (val.switchover == 1) {
        this.switchoverCss = 'clickColor i_span_color'
      } else {
        let index = this.menuList.findIndex((item) => item.id == val.id)
        val.switchover = 0
        this.$set(this.menuList, index, val)
      }
    },
    //
    switchoverCssArrar(val) {
      //   let index = this.menuList.findIndex((item) => item.id == val.id)
      this.menuList.forEach(function (item, index) {
        //找到当前行赋值true
        if (item.id == val.id) {
          item.switchover = 1
        } else {
          item.switchover = 0
        }
      })
    },
  },
}
</script>
<style lang="less">
.aside_div_one {
  text-align: left;
}
.aside_div_two {
  padding: 10px 0px 10px 20px;
  height: 30px;
  i {
    color: #999999;
    font-size: 22px;
  }
  span {
    color: #666666;
    padding: 20px;
  }
}
.clickColor {
  background-color: #e8f8fa;
}
.hoverColor {
  background-color: #dcf5f7;
}
.defaultColor {
  background-color: #f8f8f8;
}
.i_span_color {
  i {
    color: #14b9c8;
  }
  span {
    color: #14b9c8;
  }
}

</style>
