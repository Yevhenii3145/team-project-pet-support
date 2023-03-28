export const migrations = {
    0: (state) => {
      return {
        ...state,
        device: undefined   
      }
    },
    1: (state) => {
      return {
        device: state.device
      }
    }
  }