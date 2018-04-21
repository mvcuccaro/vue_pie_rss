<template>
  <div id="landing-page">
  	<h1>Vue Pie Rss</h1>
  	<select id="rss_select">
  		<option value="http://www.feedforall.com/sample.xml">http://www.feedforall.com/sample.xml</option>
  	</select>
  	<button @click="getRss()">Get Feed</button>
  	<ul>
  		<li v-for="item in feed.items">{{ item.title }}</li>
  	</ul>
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
  			this.feed = result;
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
