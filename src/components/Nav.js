import React ,{ useState, useEffect }from 'react';
import "./Nav.css"

export default function Nav(){
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log("window.scrollY", window.scrollY);
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    //show 가 true 일때 css nav__black 적용 이라는 의미
    return (<nav className={`nav ${show && "nav__black"} `}>
        <img
            alt="Neflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
            className="nav__logo"
            onClick={()=>window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-1/302707731_621394982820133_5846964301414567292_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AgfG1rLRIt0AX9Y6kHo&_nc_oc=AQngByguACEA_8EdTz5MWz3tFuI4OmXxDRAo42x_WQBdBpryRmX1u4tYsrbeLT3i_DA&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBsh6rT8tvNyzZ9cbMHGW7pnDcVCg67x1Om180bEZ_2cg&oe=6532BC0E"
            className="nav__avatar"
        />
    </nav>);
}