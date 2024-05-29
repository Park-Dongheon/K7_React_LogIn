import { useNavigate } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { loginState } from './AtomL';
import { useRecoilState } from 'recoil';

export default function LoginNav() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    
    const handleLogin = () => {
        setIsLogin(!isLogin)
    };

    return (
        <div className='flex'>
            <img className="h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="LoginPage" />
            <p className=''>
                K-Digital 7기
            </p>
            <ul>
                <li className='text-3xl text-green-900'
                    onClick={() => { navigate('/') }}>
                    <HiHome />
                </li>
            </ul>
            <Link to='/Login'
                  className='text-sm p-2 border rounded-md items-end'
                  onClick={handleLogin}>
                  {isLogin ? '로그아웃' : '로그인'}
            </Link>
        </div>
    )
}
