import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHttp } from '../../hooks/http.hook';
import { addHero, createNewHero, filtersFetched } from "../../actions";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const {heroes, filters} = useSelector(state => state)
    const dispatch = useDispatch()
    const {request} = useHttp();

    const addNewHero = (filteredHeroes, newHero) => {
        const {name, description, element} = newHero;
        dispatch(createNewHero(name, description, element))
        request(`http://localhost:3001/heroes/`, "POST", JSON.stringify(newHero))
        .then(dispatch(addHero(heroes, newHero)))
    }

    useEffect(() => {
        request("http://localhost:3001/filters")
        .then(filters => dispatch(filtersFetched(filters)))
    }, [])

    const renderFilters = (arr) => {
        return arr.map((filter, i) => {
            if (filter === "Все") {
                return <option key={i}>Я владею элементом...</option>
            } else {
                return <option key={i} value={filter}>{filter}</option>
            }
        })
    }

    const elementOptions = renderFilters(filters);
    
    
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            element: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .min(2, 'Type at least two characters')
              .required('Required'),
            description: Yup.string()
              .min(10, 'Type at least ten characters')
              .required('Required'),
            element: Yup.string()
              .required('Please choose one element')
        }),
        onSubmit: values => addNewHero(heroes, {...values, id: uuidv4()})
    })


    



    return (
        
        <form onSubmit={formik.handleSubmit}
            className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    name="description" 
                    className="form-control" 
                    id="description" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
                    {formik.touched.description && formik.errors.description ? (
                        <div>{formik.errors.description}</div>
                    ) : null}
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    className="form-select" 
                    id="element"
                    name="element"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.element}
                    >
                        {elementOptions}
                </select>
                {formik.touched.element && formik.errors.element ? (
                    <div>{formik.errors.element}</div>
                ) : null}
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;