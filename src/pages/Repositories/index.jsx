/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { repoList } from '../../redux/actions/repoSlice'
import { useParams } from 'react-router-dom'
import Layout from '../../comps/base/Layout';
import RepoOwner from '../../comps/RepoOwner';
import Repositories from '../../comps/Repositories';

const DetailRepo = () => {
  const dispatch = useDispatch()
  const { username } = useParams()
  const [page, setPage] = useState(1)
  const repos = useSelector(state => state?.repo)
  const ownerData = repos?.data[0]?.owner

  useEffect(() => {
    dispatch(repoList({
      username, 
      limit: 100, 
      page}))
  },[page])
console.log(ownerData);
console.log(repos);
  return (
    <Layout>
      <RepoOwner ownerData={ownerData}/>
      <Repositories username={username}/>
    </Layout>
  )
}

export default DetailRepo