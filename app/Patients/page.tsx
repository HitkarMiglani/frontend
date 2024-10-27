"use client"
import React, { useState, useEffect } from 'react';

interface Patient {
    PID: string;
    Name: string;
    Age: number; 
    user_id: number;
    Gender: string;
    Smoking : number;
    Hypertension :number;
    CholestrolTotal :number;
    CholestrolHDL :number;
    MSME :number;
    FunctionalAssessment :number;
    MemoryComplaints :number;
    BehavioralProblems :number;
    ADL :number;
    Disorientation :number;
    PersonalityChanges :number;
    Predection :string;
}

const PatientsPage: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    useEffect(() => {
        // Fetch patients data from an API or a static source
        const fetchPatients = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`); // Replace with your API endpoint
            const data = await response.json();
            console.log(data);
            setPatients(data.patients);
        };

        fetchPatients();
    }, []);

    const handleCardClick = (patient: Patient) => {
        setSelectedPatient(patient);
    };

    return (
        <div className="container ">
            <h1 className="title">Patients</h1>
            <div className="patient-list">
            {patients.map((patient) => (
                <div key={patient.PID} className="patient-card" onClick={() => handleCardClick(patient)}>
                <h2>{patient.Name}</h2>
                <p>Age: {patient.Age}</p>
                <button 
                    className="btn btn-primary"
                    onClick={() => handleCardClick(patient)}
                >
                    View Details
                </button>
                </div>
            ))}
            </div>
            
            {selectedPatient && (
            <div className="patient-details-popup">
                <div className="popup-content">
                <span className="close" onClick={() => setSelectedPatient(null)}>&times;</span>
                <h2>Details for {selectedPatient.Name}</h2>
                <p><strong>PID:</strong> {selectedPatient.PID}</p>
                <p><strong>Age:</strong> {selectedPatient.Age}</p>
                <p><strong>User ID:</strong> {selectedPatient.user_id}</p>
                <p><strong>Behavioral Problems:</strong> {selectedPatient.BehavioralProblems}</p>
                <p><strong>Memory Complaints:</strong> {selectedPatient.MemoryComplaints}</p>
                <p><strong>ADL:</strong> {selectedPatient.ADL}</p>
                <p><strong>Disorientation:</strong> {selectedPatient.Disorientation}</p>
                <p><strong>Personality Changes:</strong> {selectedPatient.PersonalityChanges}</p>
                <p><strong>Prediction:</strong> {selectedPatient.Predection}</p>
                </div>
            </div>
            )}
        </div>
    );
};

export default PatientsPage;
