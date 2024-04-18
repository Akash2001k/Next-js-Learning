import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>Student</h1>
        <ul>
            <l1>
                <Link href='student/akash'>akash</Link>
            </l1><br/>
            <l1>
                <Link href='student/ajay'>ajay</Link>
            </l1><br/>
            <l1>
                <Link href='student/vicky'>vicky</Link>
            </l1><br/>
            
        </ul>
    </div>
  )
}

export default page