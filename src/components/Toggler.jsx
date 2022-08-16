import React, { useEffect, useState } from "react";
import "../styles/toggler.css";
import { setTheme } from "../utils/themes";

export default function Toggler() {
    const [active, setActive] = useState(false);
    let theme = localStorage.getItem("theme");

    const changeThemeAndToggle = () => {
        if (localStorage.getItem("theme") === "theme-dark") {
            setTheme("theme-light");
            setActive(true);
        } else {
            setTheme("theme-dark");
            setActive(false);
        }
    };

    useEffect(() => {
        localStorage.getItem("theme") === "theme-dark"
            ? setActive(false)
            : setActive(true);
    }, [theme]);

    return (
        <div className="toggler">
            <label id="switch" className="switch">
                <input
                    type="checkbox"
                    id="slider"
                    onClick={changeThemeAndToggle}
                    checked={active}
                    readOnly
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
