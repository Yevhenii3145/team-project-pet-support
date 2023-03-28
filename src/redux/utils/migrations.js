const searchParams = new URLSearchParams(document.location.search);
const usertoken = searchParams.get('token'); 

export const migrations = {
    0: (state) => {
      return {
        ...state, 
        auth: {
            ...state.auth,
            token: usertoken ? usertoken : null,
        }
      }
    }
  }