import { FaHouse } from 'react-icons/fa';
import Link from 'next/link'


export default function NavigationBar() {
    return (
        <>
            <nav style={{  
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between'
            }}>
                <Link href="/">
                    <a style={{ color: '#5f43b2', fontSize: '20px', fontWeight: 'bold', marginLeft: '15px' }}>
                        <FaHome style={{  color: '#5f43b2' }} /> 
                    </a>
                </Link>
            </nav>

        </>
    );
}

