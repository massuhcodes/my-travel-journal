import Post from "./components/Post";
import data from "./test";

export default function App() {
    const posts = data.map(item => {
        return (
            <Post
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="app">
            {posts}
        </div>
    );
}
