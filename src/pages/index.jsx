/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Layout from '../comps/base/Layout';
import SearchBox from '../comps/SearchBox';
import { usersList } from '../redux/actions/userSlice'
import styles from './home.module.css'

const Main = () => {
  const dispatch = useDispatch();
  // const posts = useSelector(state => state.posts)
  const users = useSelector(state => state?.user)
  useEffect(() => {
    dispatch(usersList())
  }, [])

  return (
    <Layout>
      <div className={`d-flex flex-column justify-content-center align-items-center ${styles["wrapper-box"]}`}>
        <div className={`bg-gray-light rounded-1 p-3 ${styles.style} position-relative`}>
          <h3 className="text-black-c1 text-center fw-bolder">Github User Search</h3>
          <div className="d-flex justify-content-center align-items-center">
            <img src="https://img.icons8.com/plasticine/200/000000/github.png" alt="" />
          </div>
          <SearchBox />
        </div>
      </div>
    </Layout>
  )
}

export default Main