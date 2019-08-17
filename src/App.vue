<template>
  <div >
   <router-view></router-view>
   <FooterGuid/>
  </div>
</template>

<script>

import FooterGuid from './components/FooterGuid/FooterGuid'
export default {
 components:{
    FooterGuid
 }
}
</script>

<style>
</style>
