import { FaHome } from 'react-icons/fa';
import Link from 'next/link'


export default function NavigationBar() {
    return (
        <>
            <nav style={{ backgroundColor: 'white', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/">
                    <a style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', marginLeft: '15px' }}>
                        <FaHome style={{  color: 'black' }} /> 
                    </a>
                </Link>
            </nav>

        </>
    );
}

