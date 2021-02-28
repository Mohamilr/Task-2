import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PatientData } from '../actions/patient.action';

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PatientData());
    }, [])

    return (
        <div>

        </div>
    )
}

export default Dashboard;