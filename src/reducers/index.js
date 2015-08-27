export {uiState} from './uiState';

export default function reduFunc(state = {}, action) {
    const {type} = action;

    switch (type) {
        default:
            return state;
    }
}
