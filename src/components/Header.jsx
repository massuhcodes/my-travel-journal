import world from "../assets/world.png";

export default function Header() {
    return (
        <header>
            <img src={world}></img>
            <p>my travel journal.</p>
        </header>
    );
}
