import style from "./flipkartNav.module.css"
//import { IoMdMore } from "./react-icons"
import logo from "./Images/FlipkartImage.jpg"
const FlipkartNav = () => {
  return (
    <nav>
        <aside className={style.logo}>
            <img src={logo} alt="logoimg" />
         </aside>
        <section className={style.searchContainer}> searchContainer</section>
        <ul>
            <li>logo</li>
            <li>cart</li>
            <li>become a seller</li>
            {/* <li><IoMdMore/></li> */}
        </ul>
    </nav>
  );
};

export default FlipkartNav;