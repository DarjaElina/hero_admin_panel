import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filtersSlice';




export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
}




// export const activeFilterChanges = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'ACTIVE_FILTER_CHANGED',
//             payload: filter
//         })
//     }, 1000)
// }







// "heroes": [
//     {
//       "id": 1,
//       "name": "Первый герой",
//       "description": "Первый герой в рейтинге!",
//       "element": "fire"
//     },
    // {
    //     "id": 2,
    //     "name": "Неизвестный герой",
    //     "description": "Скрывающийся в тени",
    //     "element": "wind"
    // },
    // {
    //     "id": 3,
    //     "name": "Морской герой",
    //     "description": "Как аквамен, но не из DC",
    //     "element": "water"
    // }
//  ]