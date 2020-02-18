<template>
	<div class="row">
		<div class="col-12">
			<div class="home">
				<h1>Time to learn something new !</h1>
				<p>You found the best place to learn - and now you are just one sign in (or sign up) away from it !</p>
				<router-link tag='button' class='btn' :to="{name:'signup'}">Sign Up</router-link>
				<router-link tag='button' class='btn' :to="{name:'signin'}">Sign In</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	methods:{
		getFunds(){
			return this.$store.getters.getFunds
		},

	}
};
</script>
<style>
.home{

	padding: 15px;
	text-align: center;

}
button{
	border: 1px solid grey !important;
	padding: 2px;
	background: none
}
</style>