import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {SET_LOADING, SET_QUERIES, isLoading, selectQueries} from "../../redux/stats/statsSlice" 
import Loader from "../loader/Loader"
import QueriesCard from "../queriesCard/QueriesCard"
import { getAllQueries } from '../../services/statsServices'
import st from './userQueries.module.css'
const UserQueries = () => {
    const dispatch = useDispatch();
    const queries = useSelector(selectQueries);
    const seleLoading = useSelector(isLoading)
    const getMessage = async () => {
        dispatch(SET_LOADING(true))
        const queries = await getAllQueries();
        if (queries == null) {
            dispatch(SET_LOADING(false));
        }
        else {
            dispatch(SET_QUERIES(queries.data[0]));
        }
        dispatch(SET_LOADING(false))
        console.log(queries);
    }
    useEffect(() => {
        getMessage();
    }, [])
    return (
        <div className={`w-full h-full flex-row overflow-y-auto flex flex-wrap justify-start gap-14 px-14 items-start pt-8 ${st.syy}`}>
            {seleLoading && <Loader/>}
            {
                queries.map((elem)=>{
                    return <QueriesCard message={elem.query} name={elem.name} email={elem.email}/>
                })
            }
        </div>
    )
}

export default UserQueries
