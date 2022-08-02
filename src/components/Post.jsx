import mount_fuji from "../assets/mount-fuji.png";
import pin from "../assets/pin.png";

export default function Post() {
    return (
        <div class="post">
            <div class="image-details">
                <img src={mount_fuji} alt="The post's image" />
                <div class="details">
                    <div class="location">
                        <div class="pin-country">
                            <img
                                src={pin}
                                alt="A pin designating the location traveled to"
                            />
                            <p class="country">Japan</p>
                        </div>
                        <a href="#" class="google">
                            View on Google Maps
                        </a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <p class="date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p class="description">
                        Mount Fuji is the tallest mountain in Japan, standing at
                        3,776 meters (12,380 feet). Mount Fuji is the single
                        most popular tourist site in Japan, for both Japanese
                        and foreign tourists.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}
