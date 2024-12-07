import style from "./flipkartNav.module.css"
import { IoMdMore } from "react-icons/io";
import logo from "./Images/FlipkartImage.jpg"
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
const FlipkartNav = () => {
  return (
    <nav>
        <aside className={style.logo}>
            <img src={logo} alt="logoimg" />
         </aside>
        <section className={style.searchContainer}> searchContainer

        </section>
        <ul>
            <li><FaRegCircleUser/>Login</li>
            <li><BsCart3 />Cart</li>
            <li><CiShop />Become a seller</li>
            <li><IoMdMore/></li>
        </ul>
    </nav>
  );
};

export default FlipkartNav;