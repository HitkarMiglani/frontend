
type Patient = {
    PID: string;
    Name: string;
    Age: number; 
    Gender: string;
    LastPredection :string;
}

export default function PatientsPage() {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`); // Replace with your API endpoint
        // if (!response.ok) {
        //     console.error('Failed to fetch patients, using default data');
            const patients = [
                {
                    PID: '1',
                    Name: 'John Doe',
                    Age: 30,
                    Gender: 'Male',
                    LastPredection: 'Healthy'
                },
                {
                    PID: '2',
                    Name: 'Jane Smith',
                    Age: 25,
                    Gender: 'Female',
                    LastPredection: 'At Risk'
                }
            ];
        // }
        // const patients = await response.json();
           

    return (
        <div className="container ">
            <h1 className="title">Patients</h1>
            <ul className="flex space-y-5 space-x-4 p-5 w-[45rem]  ">
            {patients.map((patient:Patient) => (
                <li key={patient.PID} className="p-4 bg-white shadow-md rounded-lg text-black-100" >
                Name : {patient.Name} <br/>
                Age: {patient.Age} <br/>
                Gender: {patient.Gender} <br/>
                Last Predection: {patient.LastPredection}
                {/* </div> */}
                </li>
            ))}
            </ul>
        </div>
    );
};

