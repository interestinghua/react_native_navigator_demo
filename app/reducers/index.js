import {combineReducers} from 'redux'

import reducer01 from './reducer01'
import reducer02 from './reducer02'

const reducers = combineReducers({
    reducer01, reducer02
})

export default reducers