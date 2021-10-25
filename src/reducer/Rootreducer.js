import itemreducer from "./Reducer";
import {mayankreducer} from "./Reducer";
import {combineReducers} from 'redux';

const Rootreducer = combineReducers({
    todo1:itemreducer,
    post2:mayankreducer
})

export default Rootreducer;

