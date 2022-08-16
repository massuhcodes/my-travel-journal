// import mount_fuji from "../assets/mount-fuji.png";
import pin from "../assets/pin.png";
import "../styles/post.css"

export default function Post(props) {
    console.log(props);
    return (
        <div className="post">
            <div className="image-details">
                <img
                    src={`./src/assets/${props.image}`}
                    alt="The post's image"
                />
                <div className="details">
                    <div className="location">
                        <div className="pin-country">
                            <img
                                src={pin}
                                alt="A pin designating the location traveled to"
                            />
                            <p className="country">{props.country}</p>
                        </div>
                        <a href="#" className="google">
                            View on Google Maps
                        </a>
                    </div>
                    <h1>{props.site}</h1>
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
