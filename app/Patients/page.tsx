"use client"
import React, { useState, useEffect } from 'react';

interface Patient {
    PID: string;
    Name: string;
    Age: number;
    details: {  
        user: string;
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
    };
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
        <div>
            <h1>Patients</h1>
            <div className="patient-list">
                {patients.map((patient) => (
                    <div key={patient.PID} className="patient-card" onClick={() => handleCardClick(patient)}>
                        <h2>{patient.Name}</h2>
                        <p>Age: {patient.Age}</p>
                        <button 
                            className="btn btn-primary"
                            onClick={() => handleCardClick(patient)}
                         />
                    </div>
                ))}
            </div>
            {selectedPatient && (
                <div className="patient-details">
                    <h2>Details for {selectedPatient.Name}</h2>
                    cls
                    
                </div>
            )}
        </div>
    );
};

export default PatientsPage;