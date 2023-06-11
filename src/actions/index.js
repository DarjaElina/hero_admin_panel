export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (filteredHeroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: filteredHeroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (heroes, id) => {
    return {
        type: 'HERO_DELETED',
        payload: heroes.filter(hero => hero.id !== id)
    }
}

export const createNewHero = (name, description, element) => {
    return {
        type: 'NEW_HERO',
        payload: {
            name,
            description,
            element,
        }
    }
}

export const addHero = (heroes, newHero) => {
    return {
        type: 'HERO_ADDED',
        payload: [...heroes, newHero]
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}


export const filterHero = (heroes, filter) => {
    return {
        type: "HERO_FILTERED",
        payload: heroes.filter((hero) => {
            switch(filter) {
                case "Огонь":
                    return hero.element === "Огонь"
                case "Вода":
                    return hero.element === "Вода"
                case "Земля":
                    return hero.element === "Земля"
                case "Ветер":
                    return hero.element === "Ветер"
                case 'Все':
                    return heroes;
                default:
                    return heroes;
            }
        })
    }
}

export const onPressBtn = (i) => {
    return {
        type: 'BTN_PRESSED',
        payload: i
    }
}

export const toggleInProp = (inProp) => {
    return {
        type: "IN_PROP_TOGGLED",
        payload: !inProp
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