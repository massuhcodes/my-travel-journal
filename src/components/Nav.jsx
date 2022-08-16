import world from "../assets/world.png";
import Toggler from "../components/Toggler";
import "../styles/nav.css";

export default function Nav() {
    return (
        <nav>
            <div>
                <img src={world} />
                <p>my traval journal</p>
            </div>
            <Toggler />
        </nav>
    );
}
