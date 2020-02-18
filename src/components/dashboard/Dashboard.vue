<template>
	<div class="row">
		<div class="col-12">
				<h1>That's the dashboard</h1>
				<p>You should only get here if you are authentificated !</p>
		</div>
		<div class="col-12" v-if='getEmail'>
				<h6>Welcome {{getEmail}}</h6>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default{
	
	computed:{
		getEmail(){
			return this.$store.getters.getUser ? this.$store.getters.getUser.email : false  
		}
	},
	created(){
		this.$store.dispatch('fetchUser')
	}
};

</script>

<style scoped>

.col-12{
text-align: center;
}

</style>