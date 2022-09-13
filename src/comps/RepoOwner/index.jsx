import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ro.module.css'

const RepoOwner = (props) => {
    const { ownerData } = props
    const navigate = useNavigate()
    return (
        <div className={`w-full p-5`}>
            <div className={`w-full h-full bg-gray-light rounded-2 p-3 text-gray-dark d-flex align-items-center justify-content-between`}>
                <div className="d-flex fw-bolder align-items-center">
                    <img 
                    className={`${styles.picSize} me-1 rounded-circle`} 
                    // src="https://img.icons8.com/ios-filled/50/5e6f82/repository.png" 
                    src={ownerData?.avatar_url}
                    alt="" />
                    {ownerData?.login}'s Repositories
                </div>
                <div className="pointer"
                    onClick={() => navigate("/")}>
                    Back to Search
                </div>
            </div>
        </div>
    )
}

export default RepoOwner