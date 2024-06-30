<template>
  <div>
    <School ref="school"/>
    <Student ref="student"/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name:'App',
  components:{School,Student},
  data(){
    return{
      studentName:'',
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>

<style>

</style>