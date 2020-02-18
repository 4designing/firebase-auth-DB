<template>
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<router-link  exact tag="a" class="navbar-brand" :to="{name:'welcome'}">Vue - Complete Guide</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">

					<ul class="navbar-nav ml-auto">
						<li class="nav-item active" v-if='!auth'>
							<router-link :to="{name:'signup'}" tag="a" class="nav-link">Sign Up</router-link>
						</li>
						<li class="nav-item active" v-if='!auth'>
							<router-link :to="{name:'signin'}" tag="a" class="nav-link">Sign In</router-link>
						</li>
						<li class="nav-item active" v-if='auth'>
							<router-link :to="{name:'dashboard'}" tag="a" class="nav-link">Dashboard</router-link>
						</li>
						<li class="nav-item active" v-if='auth'>
							<a class="nav-link" @click='onLogout()' href="#">Log out</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>
<script>

export default{
	computed:{
		auth(){
			return this.$store.getters.isAuth
		},
		
	},
	methods:{
		onLogout(){
			this.$store.dispatch('logout');
		}
	}
};
</script>
<style>
form{
	border: 1px solid lightgrey;
	background: #F8F9FA;
	padding: 15px
}
</style>