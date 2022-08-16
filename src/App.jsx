import Post from "./components/Post";
import data from "./test";
import { useEffect } from "react";
import { getTheme } from "./utils/themes";

export default function App() {
    useEffect(() => {
        getTheme();
    });

    const posts = data.map((item) => {
        return <Post key={item.id} {...item} />;
    });
    return <div className="app">{posts}</div>;
}
