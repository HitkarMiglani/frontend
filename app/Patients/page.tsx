
import user from "@/components/User";
import { BackgroundLines } from "@/components/backgroundlines";
import { SidebarDemo } from "@/components/sidebar";
type Patient = {
    Age: number; 
    Gender: string;
    Name: string;
    Predection :string;
    id: number;
    user_id: string;
    user_name: string;
}

export default async function PatientsPage() {
        
    const use = await user();
    const formData = new FormData();
    if (use) {
        formData.append("user_id", use);
    } else {
        console.error('User ID is undefined');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`,{
        method: 'POST',
        body: formData, //type : ignore
    }); // Replace with your API endpoint
    if (!response.ok) {
        console.error('Failed to fetch patients, using default data');
    }
    const patients = await response.json();

    return (
        <main className="min-h-screen bg-black-100">
            <SidebarDemo/>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Patient Deatils <br /> 
            </h2>
            
                </BackgroundLines>
                <div className="">    
                <ul className="flex items-center justify-evenly ">
                {patients.map((patient:Patient) => (
                    <li key={patient.id} className="p-4 w-[16rem] h-[10rem]  bg-black-100 shadow-md border-2 rounded-lg text-white-200 text-xl" >
                    Name : {patient.Name} <br/>
                    Age: {patient.Age} <br/>
                    Gender: {patient.Gender} <br/>
                    Last Predection: {patient.Predection}
                    </li>
                ))}
                </ul>
                <br/>
                <br/>
            </div>

            
        </main>
    );
};

