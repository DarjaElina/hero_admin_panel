import { useSelector, useDispatch } from "react-redux";
import { filterHero, heroesFetched } from "../../actions";
import { useEffect } from "react"
import { useHttp } from "../../hooks/http.hook";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const dispatch = useDispatch();
    const { filters, heroes, filteredHeroes } = useSelector(state => state)
    
    

    console.log(filteredHeroes)
    
   const btnStyle = (filter) => {
        let style;
        switch(filter) {
                case 'Все':
                    style = "btn-outline-dark active";
                    break;
                case 'Вода':
                    style = "btn-primary";
                    break;
                case 'Огонь':
                    style = "btn-danger";
                    break;
                case 'Ветер':
                    style = "btn-success";
                    break;
                case 'Земля':
                    style = "btn-secondary";
                    break;
                default:
                    style = "btn-outline-dark";
            }
      return style;
   }

   
    const renderFilterButtons = (filters) => {
        
       return filters.map((filter, i) => {
            const style = btnStyle(filter)
            return <button onClick={() => dispatch(filterHero(heroes, filter))} key={i} className={`btn ${style}`}>{filter}</button>
        })
    }

   


    const elButtons = renderFilterButtons(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}
                    {elButtons}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;