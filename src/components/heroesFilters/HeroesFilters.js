import { useSelector, useDispatch } from "react-redux";
import { filterHero, onPressBtn } from "../../actions";
import classnames from "classnames";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const dispatch = useDispatch();
    const { filters, heroes, isActive } = useSelector(state => state)


   


    const onFilterHero = (heroes, filter, i) => {
        dispatch(filterHero(heroes, filter))
        dispatch(onPressBtn(i))
    }


    const btnStyle = (filter) => {
        let style;
        switch(filter) {
                case 'Все':
                    style = "btn-outline-dark";
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

         const btnClass = classnames({
            btn: true,
            active: isActive == i
        })
        
            let style = btnStyle(filter)
            return  <button 
                        onClick={(e) => onFilterHero(heroes, filter, i)}
                        id={i}
                        key={i}
                        className={`${btnClass} ${style}`}>{filter}
                    </button>
        })
    }

   


    const elButtons = renderFilterButtons(filters);

  
    

   

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elButtons}
                </div>
            </div>
        </div>
    )
}



export default HeroesFilters;