import React from 'react'
import styles from './md.module.css'

const Modal = (props) => {
    const { Close, Active, children } = props
    return (
        <main class={`${styles.con} container-fluid d-flex flex-column p-0 justify-content-between ${!Active && "d-none"}`}>
            <div class={`${styles["modal-pin"]} bg-light p-3`}>
                <div className="d-flex w-full justify-content-between">
                    <div className='text-gray-dark fw-bolder'>Detail Repository</div>
                    <img
                        onClick={() => Close()}
                        className={`pointer ${styles.picSize}`}
                        src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                        alt="" />
                </div>
                <div className="mt-3">
                {children}
                </div>
            </div>
        </main>
    )
}

export default Modal