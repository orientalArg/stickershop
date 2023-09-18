import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <>
        <div className="top">
            <span>
                <img  src="/img/cart.svg" alt="" srcset="" />Cart
            </span>

            <span>
                <img  src="/img/person.svg" alt="" srcset="" />Sign-In
            </span>
        </div>

        <header>
        <div>
            <input type="search" name="search" id="search"/>
        </div>
        <nav>
            <Link to="#">Home</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Products</Link>
            <Link to="#">Information</Link>
            <Link to="#">Ask for Design</Link>
        </nav>
        </header>
        </>
    )
}