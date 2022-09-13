/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { repoDetail } from '../../redux/actions/repoSlice'

const DetailRepo = (props) => {
    const dispatch = useDispatch()
    const repDetail = useSelector(state => state?.repo?.detail)
    const { name, username } = props

    useEffect(() => {
        dispatch(repoDetail({ name, username }))
    }, [name])

    const DATE_OPTIONS = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };


    return (
        <table className="w-full text-xs font-nunito">
            <tbody>
                <tr>
                    <td>ID</td>
                    <td className="px-4 py-1">:</td>
                    <td>{repDetail?.data?.id}</td>
                </tr>
                <tr>
                    <td>Repository Name</td>
                    <td className="px-4 py-1">:</td>
                    <td>{repDetail?.data?.name}</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td className="px-4 py-1">:</td>
                    <td>{repDetail?.data?.language || "-"}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td className="px-4 py-1">:</td>
                    <td>{repDetail?.data?.description}</td>
                </tr>
                <tr>
                    <td>Created at</td>
                    <td className="px-4 py-1">:</td>
                    <td>{new Date(repDetail?.data?.created_at).toLocaleDateString("en-GB", DATE_OPTIONS)}</td>
                </tr>
                <tr>
                    <td>Updated at</td>
                    <td className="px-4 py-1">:</td>
                    <td>{new Date(repDetail?.data?.updated_at).toLocaleDateString("en-GB", DATE_OPTIONS)}</td>
                </tr>

            </tbody>
        </table>
    )
}

export default DetailRepo