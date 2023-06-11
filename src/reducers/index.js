const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    newHero: {},
    filters: [],
    filteredHeroes: [],
    i: '',
    inProp: false
} 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: action.payload
            }
        case 'HERO_ADDED':
            return {
                ...state,
                heroes: action.payload
            }
        case 'NEW_HERO':
            return {
                ...state,
                newHero: action.payload
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'HERO_FILTERED':
            return {
                ...state,
                filteredHeroes: action.payload
            }
        case 'BTN_PRESSED':
            return {
                ...state,
                isActive: action.payload
            }
        case 'IN_PROP_TOGGLED':
            return {
                ...state,
                inProp: action.payload
            }
        default: return state
    }
}

export default reducer;