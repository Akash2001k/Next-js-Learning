'use client'
import { useRouter } from "next/navigation";
const login = () => {

    const router = useRouter();

    const goToContact = () =>{
      router.push('/profile')
    }

    return (
        <div>
            <h1>This is My Login Page</h1>
            <button onClick={goToContact} className="mt-2">Profile Page</button>
        </div>
    );
};

export default login;
