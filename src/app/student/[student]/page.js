'use client'

const page = ({params}) => {
 
    console.log(params)

  return (
    <div>
        <h1>Student details</h1>
        <h2>Name : {params.student}</h2>
    </div>
  )
}

export default page