<template>
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<form>
				<div class="form-group">
					<label for="inputEmail4">Email</label>
					<input type="email" class="form-control" id="inputEmail4" v-model='email'>
				</div>
				<div class="form-group">
					<label for="inputAddress2">Password</label>
					<input type="Password" class="form-control" id="inputAddress2" v-model='password'>
				</div>
				<button type="submit" class="btn btn-primary" @click.prevent='onSubmit'>Sign in</button>
			</form>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			email:'',
			password:''
		}
	},
	methods:{
		onSubmit(){
			const formData={
				email:this.email,
				password: this.password
			};
			
			this.$store.dispatch('login', formData);
			this.$router.push({path:'/dashboard'})
		}
	}
	
};

</script>
<style scoped>



</style>