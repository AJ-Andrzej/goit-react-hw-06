import css from './SearchBox.module.css'
export default function SearchBox({value, onFilter}) {
    return (
        <div className={css.box}>
            <label className={css.wrapper}>
                <span className={css.lable}>Find contacts by name</span>
                <input
                className={css.field}
                type="text"
                value={value}
                onChange={(event) => onFilter(event.target.value)} />
            </label>
            
        </div>
        
    )

}