<template>
  <div>
    <h3>News</h3>
    <hr>
    <ul>
      <li>news <input type="text"></li>
      <li>news <input type="text"></li>
      <li>news <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'News',
  beforeDestroy(){
    console.log('news组件即将被销毁')
  }
}
</script>
