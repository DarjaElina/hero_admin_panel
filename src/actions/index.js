export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
}

export const heroCreated = (hero) => {
    return {
        type: 'HERO_CREATED',
        payload: hero
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}





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