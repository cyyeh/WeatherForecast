import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER: 
			// we don't mutate the state, instead we return new state
			return [action.payload.data, ...state]; 
	}

	return state;
}