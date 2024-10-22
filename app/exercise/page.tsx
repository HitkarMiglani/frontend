"use client";

import { FormEvent, useEffect, useState } from "react";

interface Exercise {
  id: number;
  name: string;
  description: string;
}

const CognitiveExercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const fetchExercises = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exercises/`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setExercises(data.exercises);
    } catch (error) {
      console.error("Failed to fetch exercises:", error);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  
  const [showModal, setShowModal] = useState(false);

  const [newExercise, setNewExercise] = useState({ name: "", description: "", difficulty: "", type: 0 });

  const handleAddExercise = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData();
    form.append("name", newExercise.name);
    form.append("description", newExercise.description);
    form.append("difficulty", newExercise.difficulty);
    form.append("type", newExercise.type.toString());

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addExercise/`, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      // setExercises((prevExercises) => [...prevExercises, data.exercise]);
      setNewExercise({ name: "", description: "",difficulty: "",type:0 });
      setShowModal(false);
      fetchExercises();
    } catch (error) {
      console.error("Failed to add exercise:", error);
    }
  };

  return (
    <div className="bg-gray-900 h-[100vh] text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Cognitive Exercises</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        Add New Exercise
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-500 p-6 rounded-lg shadow-lg w-96 text-black-100">
        <h2 className="text-xl font-bold mb-4">Add New Exercise</h2>
        <form onSubmit={handleAddExercise}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={newExercise.name}
          onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
          required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
          className="w-full px-3 py-2 border rounded-lg"
          value={newExercise.description}
          onChange={(e) => setNewExercise({ ...newExercise, description: e.target.value })}
          required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dificulity</label>
            <textarea
          className="w-full px-3 py-2 border rounded-lg"
          value={newExercise.difficulty}
          onChange={(e) => setNewExercise({ ...newExercise, difficulty: e.target.value })}
          required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <textarea
          className="w-full px-3 py-2 border rounded-lg"
          value={newExercise.type}
          onChange={(e) => setNewExercise({ ...newExercise, type: Number(e.target.value) })}
          required
            />
          </div>
          <div className="flex justify-end">
            <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => setShowModal(false)}
            >
          Cancel
            </button>
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
            Add
            </button>
          </div>
        </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => (
      <div key={exercise.id} className="bg-gray-800 p-6 m-2 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{exercise.name}</h2>
      <p>{exercise.description}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Start Exercise
      </button>
      </div>
      ))}
      </div>
    </div>
  );
};

export default CognitiveExercises;