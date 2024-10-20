"use client";

import { useEffect, useState } from "react";

interface Exercise {
  id: number;
  name: string;
  description: string;
}

const CognitiveExercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exercises/`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched exercises:", data); // Debugging log

        // // Ensure data is an array
        // const exercisesArray = Array.isArray(data.exercises) ? data.exercises : data[0];
        // console.log("Exercises array:", exercisesArray); // Debugging log

        setExercises(data.exercises);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cognitive Exercises</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <div key={exercise.name} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{exercise.name}</h2>
            <p>{exercise.description}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Start Exercise
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CognitiveExercises;