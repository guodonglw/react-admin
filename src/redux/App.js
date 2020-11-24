export const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    name
  }
}

const initState = {
  name: 'Admin'
}

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state, name: action.name}
    default:
      return state
  }
}

export default {initState, reducer}