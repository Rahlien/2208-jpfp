import React, {useEffect, useState} from "react";
import { getCampuses } from "../features/campusSlice";
import { useDispatch, useSelector } from "react-redux";

function SelectCampus ({onChange}) {
    const dispatch = useDispatch()
    const { campuses } = useSelector((state) => state)
    const [updated, setUpdate] = useState(false)
    
    console.log(campuses)

    useEffect(() => {
        dispatch(getCampuses())
    },[])

    function handleChange(e) {
        console.log(e.target.value)
    }
    
    return (
        <select id="selector" defaultValue={""} onChange={onChange}>
            <option value="" disabled>Please Choose a School</option>
            {
                campuses.campuses.map(campus => (
                    <option value={campus.id} key={campus.id}>{campus.name}</option>
                ))
            }
        </select>
    )
}

export default SelectCampus