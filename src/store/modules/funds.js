const state={
funds:500,
};
const getters={
		getFunds(state){
			return state.funds
		},		
};
const mutations={
	/** Funds Mutations **/
		setFunds(state,payload){
			state.funds=payload;
		},

		setFundsAfterBuy(state,payload){
			var price=state.brands[payload.index].price;
			state.funds-=price*payload.qte;
		},
		setFundsAfterSell(state,payload){
			var price=state.brands[payload.index].price;
			state.funds+=price*payload.qte;
		},
};
const actions={};

export default{
	state,
	getters,
	mutations,
	actions
}