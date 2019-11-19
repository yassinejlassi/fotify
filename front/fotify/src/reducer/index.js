const initialState = {
    isLoading: false,
    users: [],
    phot:[],
    
  };
  export const reducer = (state = initialState, action)=>{
    if (action.type === "GET_USERS") {
      return { isLoading: false, users: [...action.payload] };
    } 
    
    else if (action.type === "Loading_USER") {
      return { ...state, isLoading: true };
    }
    
    
    else if (action.type === "GET_USER") {
      return {  phot: [...action.payload] };
    }
    
    else {
      return state;
      
    }
    
  };


  
  