<template>
  <div id="app">
  	<link rel="stylesheet" href="./assets/bootstrap.min.css">
  	<div class="container-fluid" style="margin:10px;">
  		<div class="panel">
  			<div>
    			<router-view></router-view>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-pie-rss'
}
</script>

<style>
#app {

}
</style>
