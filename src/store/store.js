import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth.js'
import globalAxios from 'axios'
import {router} from '../main.js'
Vue.use(Vuex);


export const store = new Vuex.Store ({
	state:{
		idToken:null,
		userId:null,
		currentUser:null,
		email:null
	},

	mutations:{
		authUser(state,payload){
			state.idToken=payload.idToken;
			state.userId=payload.localId
		},
		storeUser(state, payload){
			state.user=payload;
		},
		clearToken(state){
			state.idToken=null;
			state.userId=null
		}
	},

	actions:{

		signup({state, commit, dispatch}, payload){
			axios.post('/accounts:signUp?key=AIzaSyDLmn0pap5VXSzXcCwpIZ1PUlunGcORR6U',{email:payload.email,
				password: payload.password,
				returnSecureToken:true })
			.then(response => {
				commit('authUser',{ idToken: response.data.idToken,
					localId: response.data.localId});
				state.email=response.data.email

				//define expiration time
				let now = new Date()
				let expireTimeMS = now.getTime() + response.data.idToken * 1000

				//Save data in local storage for auto auth in refresh
				localStorage.setItem('idToken',response.data.idToken)
				localStorage.setItem('userId',response.data.localId)
				
				localStorage.setItem('expiresIn',expireTimeMS)

				dispatch('storeUser', payload);
				dispatch('setLogoutTimer', response.data.expiresIn)
			})
			.catch(error=> console.log(error));
			
		},

		login({state,commit, dispatch}, payload){
			axios.post('/accounts:signInWithPassword?key=AIzaSyDLmn0pap5VXSzXcCwpIZ1PUlunGcORR6U',{ email:payload.email,
				password:payload.password,
				returnSecureToken:true
			})
			.then(response => {
				commit('authUser',{idToken: response.data.idToken,
					localId: response.data.localId})
				state.email=response.data.email

				//define expiration time
				let now = new Date()
				let expireTimeMS = now.getTime() + response.data.expiresIn * 1000


				//Save data in local storage for auto auth in refresh
				localStorage.setItem('idToken',response.data.idToken)
				localStorage.setItem('userId',response.data.localId)
				localStorage.setItem('expiresIn',expireTimeMS)

				dispatch('setLogoutTimer', response.data.expiresIn)

			})
			.catch(error=> console.log(error));
			
		},

		tryAutoLogin ({commit}){
			const idToken = localStorage.getItem('idToken')
			if(!idToken)
				return
			const expireTime = localStorage.getItem('expiresIn')
			const now = new Date().getTime()
			if(now >= expireTime)
				return
			const idUser = localStorage.getItem('userId')
			commit('authUser', {idToken : idToken, localId : idUser})

		},

		storeUser({state}, userData){
			if(!state.idToken){
				return
			}
			globalAxios.post('/users.json'+'?auth=' + state.idToken , userData)
			.then(response=>{
				return response;

			}).
			catch(error =>{
				console.log(error);
			})
		},

		fetchUser({commit, state}){
			if(!state.idToken){
				return
			}
			globalAxios.get('/users.json'+'?auth=' + state.idToken)
			.then(response=>{
				for(let key in response.data){

					if(response.data[key].email == state.email)
						state.currentUser = response.data[key]
				}
				commit('storeUser', state.currentUser)
			})
			.catch(error=> console.log(error))
		},

		logout({commit}){
			commit('clearToken');
			router.replace({path:'/'})
		},

		setLogoutTimer({dispatch}, expirationTime){
			setTimeout(function(){
				dispatch('logout')
			}, expirationTime * 1000)
		}

	},

	getters:{
		getUser(state){
			return state.currentUser
		},
		isAuth(state){
			return state.idToken !== null
		},
	}
});