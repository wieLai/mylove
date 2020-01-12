<template>
  <div class="mohu">
   <input type="text" v-model="keyword">
    <div class="showTable">
      <table>
          <tr v-for="(item,index) in getData" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.brank}}</td>
              <td>{{item.dec}}</td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      keyword: '',
      proList: [
        {
          id: '1',
          brank: '李宁',
          dec: '李宁是很出名的运动服装品牌'

        },
        {
          id: '2',
          brank: '阿迪达斯',
          dec: '阿迪达斯是很出名的国外运动服装品牌'

        },
        {
          id: '3',
          brank: '冰淇淋',
          dec: '冰淇淋是很好吃的东西'

        }
      ]
    }
  },
  // 添加计算属性，监听关键字的变化
  computed: {
    getData () {
    //   方法一：
      // let arr = []
      // for (let i = 0; i < this.brandList.length; i++) {
      //   if (this.brandList[i].bname.toLowerCase().indexOf(this.userKey.toLowerCase()) !== -1) {
      //     arr.push(this.brandList[i])
      //   }
      // }
      // return arr

      // 方法二
      // filter它可以过滤出不满足条件的记录
      // 它有一个回调函数，如果回调函数返回的值为true,则说明当前value满足条件的，那么就会将这个value添加到filter函数中所创建的局部数组
      // filter最终会返回一个数组，数组中就包含着当前满足条件的记录
      return this.proList.filter(value => {
        return value.dec.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style>

</style>
