export {uiState} from './uiState';
export {officeState} from './offices';
export {playgroundState} from '../playground';

export default function reduFunc(state = {}, action) {
    const {type} = action;

    switch (type) {
        default:
            return state;
    }
}
