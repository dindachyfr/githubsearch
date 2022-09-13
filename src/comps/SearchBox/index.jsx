import React, { useState, useEffect } from 'react'
import Input from '../base/Input'
import Button from '../base/Button'
import styles from './sb.module.css'
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from '../../redux/actions/userSlice'
import { useNavigate } from 'react-router-dom';

const SearchBox = (props) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state?.user)
    const [text, setText] = useState("")
    const navigate = useNavigate()
    const [hide, setHide] = useState(false)
    const handleChange = (string) => {
        setText(string)
        if (string) {
            setHide(false)
            dispatch(searchUser({ q: text, limit: 5, page: 1 }))
        }
    }
    const handleSearch = (e) => {
        e.preventDefault()
        window.location.replace(`/repositories/${text}`)
    }

    const autoComplete = (username) => {
        setText(username)
        setHide(true)
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="d-flex w-100 justify-content-center mt-3 p-2 bg-white rounded-2">
                <img className={`${styles.searchIcon}`}
                    src="https://img.icons8.com/android/48/000000/search.png"
                    alt="" />
                <Input
                    type="text"
                    className={`bg-transparent ms-2 w-100 outline-transparent border-0 border-none`}
                    onChange={(e) => handleChange(e.target.value)}
                    value={text}
                    // onBlur = {() => {
                    //     setTimeout(() => {
                    //         setHide(!hide)
                    //     }, 100)
                    // }}
                    placeholder="Find a User"
                    autoFocus />
            </div>
            <div
                className={`position-absolute ${styles.suggestionBox} bg-white d-flex flex-column justify-content-center ${hide && 'd-none'}`}>
                {users?.data?.items && users?.data?.items?.map((item, index) =>
                    <div
                        className="p-2 d-flex w-full pointer" key={index}
                        onClick={() => autoComplete(item?.login)}
                    >
                        <img className={styles.avaUser} src={item?.avatar_url} alt="" />
                        <p className='ms-2'>{item?.login}</p>
                    </div>

                )}
            </div>

            <div className="d-flex w-100 justify-content-center pt-4">
                <Button
                    type='submit'
                    className={`bg-gray-dark text-gray-light p-2 w-50 border-0 rounded-3 pointer`}>
                    Go
                </Button>
            </div>
        </form>
    )
}

export default SearchBox