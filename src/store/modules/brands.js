const state={
	brands:[
		{
			name:'BMW',
			price:110,
			qte:0
		},
		{
			name:'Google',
			price:200,
			qte:0
		},
		{
			name:'Apple',
			price:250,
			qte:0
		},
		{
			name:'Twitter',
			price:8,
			qte:0
		}
		]
};
const getters={
		getBrands(state){
			return state.brands;
		},	
};
const mutations={
		/** Brands Mutations **/
		setBrands(state,payload){
			state.brands=payload;
		},
		setBrandsQteAfterBuy(state,payload){
			//pQte : Portfolios qte to number
			var pQte=state.brands[payload.index].qte;
			state.brands[payload.index].qte+=payload.qte;
		},
		setBrandsQteAfterSell(state,payload){
			//pQte : Portfolios qte to number
			var pQte=state.brands[payload.index].qte;
			state.brands[payload.index].qte-=payload.qte;
			console.log(state.brands[payload.index].qte);
		},

		
		setBrandRandomPrice(state){
			state.brands.forEach(function(value){
				value.price=Math.floor(Math.random()*1000);
			})
		}
};
const actions={};

export default{
	state,
	getters,
	mutations,
	actions
}
