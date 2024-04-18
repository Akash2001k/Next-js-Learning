"use client"
import Link from "next/link";

export default function Home() {



  return (
    <main >
     <h1 >Our Next Js Project</h1>
     <Link href='/login'>Click to Login</Link><br/>
     <Link href='/about'>Click to About</Link><br/>
     <Link href='/student'>Click to Student</Link><br/>

     <h3>Admin Pages</h3>
     <Link href='/admin'>Go to Admin</Link><br/>
    </main>
  );
}
