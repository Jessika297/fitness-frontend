"use client"

import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetchExercises();
    }, []);

    const fetchExercises = async () => {
        try {
            const response = await axios.get('http://localhost:8080/exercise');
            setExercises(response.data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    return (
        <div className={'mx-2'}>
            <h1 className={'font-medium'}>Exercise List</h1>
            <ul>
                {exercises.map((exercise: any) => (
                    <li key={exercise.id}>{exercise.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseList;
