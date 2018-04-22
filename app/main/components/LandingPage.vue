<template>
	<div class="row">
		<div class="col-sm-6">
			<div class="panel" id="landing-page">
				<div class="row p-1">
					<div class="col-sm-3">
			  			<button class="btn" @click="getRss()">Get Feed</button>
			  		</div>
				  	<div class="col-sm-9">
					  	<select class="form-control" id="rss_select">
					  		<option value="http://www.feedforall.com/sample.xml">http://www.feedforall.com/sample.xml</option>
					  	</select>
				  	</div>
				</div>
				<div class="row p-1">
					<ul> 
						<li v-for="(item, index) in feed.items" @click="itemClick(index)">{{ item.title }}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="panel card p-1 mt-1 mb-1" id="story-panel" style="min-height:400px;">
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'landing-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      feed: {}
    }
  },
  methods: {
  	getRss: function(){
  		this.$rss.parseURL(document.getElementById('rss_select').value)
  		.then( result => {
  			console.log(result.items[0]);
  			this.feed = result;
  		})
  	},
  	itemClick: function(arg_index){
  		document.getElementById('story-panel').innerHTML = this.feed.items[arg_index].content;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
