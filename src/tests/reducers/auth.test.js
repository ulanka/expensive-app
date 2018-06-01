import authReducer  from '../../reducers/auth'

test('should set default state', ()=>{
    const state = authReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({})
})

test('shoud set uid for login', ()=>{
    const uid='1'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('shoud remove uid for logout', ()=>{
    const uid='1'
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid:'1'}, action)
    expect(state).toEqual({})
})