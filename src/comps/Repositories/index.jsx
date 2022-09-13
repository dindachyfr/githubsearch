import React, { useEffect, useState } from 'react'
import styles from './rp.module.css'
import ReactPaginate from 'react-paginate'
import { repoList } from '../../redux/actions/repoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../base/Modal'
import DetailRepo from '../DetailRepo'

const Repositories = (props) => {
    const dispatch = useDispatch()
    const { username } = props
    const [pageNumber, setPageNumber] = useState(0)
    const [repoName, setRepoName] = useState("")
    const [detail, setDetail] = useState(false)
    const [limitPage, setLimitPage] = useState(5)
    const repos = useSelector(state => state?.repo?.data)
    const pagesVisited = pageNumber * limitPage

    useEffect(() => {
        dispatch(repoList({
            username,
            limit: 100,
            page: 1
        }))
    }, [limitPage])

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const handleModal = (name) => {
        setRepoName(name)
        setDetail(true)
    }
    return (
        <div className={`w-full px-5`}>
            <div className={`w-full h-full bg-gray-light p-3 rounded-2 mb-5`}>
                <div className="text-dark-gray fw-bolder d-flex align-items-center justify-content-between">
                    Repositories
                    <div className="fw-light">
                        Show
                        <select
                            className={`mx-2 bg-transparent rounded-1 border-gray-dark p-1 ${styles.size}`}
                            onChange={(e) => {
                                setLimitPage(e.target.value)
                            }}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>  data
                    </div>
                </div>
                <div className="py-3">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope="col" className="px-4 py-2">id</th>
                                <th scope="col" className="px-4 py-2">Repository Name</th>
                                <th scope="col" className="px-4 py-2">Language</th>
                            </tr>
                        </thead>
                        <tbody className='pointer'>
                            {repos.length>0 && repos?.slice(pagesVisited, pagesVisited + limitPage).map((item, key) => (
                                <tr
                                    key={key}
                                    onClick={() => handleModal(item?.name)}>
                                    <td className="px-4 py-3 max-w-[180px]">
                                        {item?.id}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item?.name}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item?.language}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={Math.ceil(Math.ceil(repos?.length / limitPage))}
                    onPageChange={handlePageChange}
                    containerClassName={`${styles.paginationBtns}`}
                    previousLinkClassName={`${styles.prevBtn}`}
                    nextLinkClassName={`${styles.nextBtn}`}
                    disabledClassName={`${styles.disabledPagination}`}
                    activeClassName={`${styles.activePagination}`}
                />
                {detail &&
                    <Modal
                    Active={detail}
                    Close={() => setDetail(false)}>
                        <DetailRepo name={repoName} username={username}/>
                    </Modal>}
            </div>
        </div>
    )
}

export default Repositories