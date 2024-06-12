import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <>
            <div className={css.infoWrapper}>
                <div className={css.info}>
                    <FaUserLarge />
                    <p>{name}</p>
                </div>
                <div className={css.info}>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </div>
            </div>
            <button
                className={css.btn}
                type="button"
                onClick={() => onDelete(id)}>Delete</button>
        </>
        
        
    )

}