<template>
  <div >
   <router-view></router-view>
   <FooterGuid v-show="$route.meta.showFooter"/>
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
