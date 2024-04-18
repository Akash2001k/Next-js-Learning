import Link from "next/link";

const layout = ({ children }) => {
    return (
        <div>
            {children}
            <Link href='/admin/dashboard'>Go to dashboard</Link><br />
            <Link href='/admin/orders'>Go to orders</Link><br />
        </div>
    )
}

export default layout