<template>
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<form>
				<div class="form-group">
					<label >Email</label>
					<input type="email" class="form-control"  v-model='email'>
				</div>
				<div class="form-group">
					<label >Your Age</label>
					<input type="number" class="form-control"  v-model='age'>
				</div>
				<div class="form-group">
					<label >Password</label>
					<input type="Password" class="form-control"  v-model='password'>
				</div>
				<div class="form-group">
					<label >Confirm Password</label>
					<input type="Password" class="form-control"  v-model='confirmPassword'>
				</div>
				<div class="form-group">
					<label for="inputState">Country</label>
					<select id="inputState" class="form-control" v-model='country'>
						<option value="usa" selected>usa</option>
						<option>...</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputState">Add some hobbies</label><br>
					<button class="btn btn-danger" @click.prevent="onAddHobby">Add Hobby</button>
					<div 
						 class="input-group mb-3"
						 v-for="hobbyInput in hobbyInputs"
						 :key="hobbyInput.id"
						 >
						<input 
								type="text" 
								class="form-control"
								v-model="hobbyInput.value"
								>
						<div class="input-group-prepend">
							<span class="input-group-text" id="basic-addon1" @click.prevent="onDeleteHobby(hobbyInput.id)">X</span>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" id="terms" v-model='terms'>
						<label class="form-check-label" for="gridCheck">
							Accept terms of use
						</label>
					</div>
				</div>
				<button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Sign in</button>
			</form>
		</div>
		
	</div>
</template>
<script>
	export default{
	data(){
		return {
			email:'',
			age: null,
			password:'',
			confirmPassword:'',
			country:'usa',
			hobbyInputs:[],
			terms: false
		}
	},
	methods:{
		onAddHobby(){
			const newHobby = {
				id: Math.random() * Math.random() * 1000,
				value: ''
			}
			this.hobbyInputs.push(newHobby)
		},
		onDeleteHobby (id) {
			this.hobbyInputs = this.hobbyInputs.filter (function(hobby){
				hobby.id!==id
			})
		},
		onSubmit() {
			const formData = {
				email: this.email,
				age: this.age,
				password: this.password,
				confirmPassword: this.confirmPassword,
				country: this.country,
				hobbies: this.hobbyInputs.map(function(hobby){
					return hobby.value
				}),
				terms: this.terms
			};
			this.$store.dispatch('signup', formData)
			this.$router.push({path:'/dashboard'})


		}
	}
	
};

</script>
<style scoped>

button{
	margin-bottom: 5px
}
span{
	cursor: default;
}

</style>