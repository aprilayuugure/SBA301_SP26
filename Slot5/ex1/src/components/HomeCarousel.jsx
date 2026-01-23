import { Carousel } from "react-bootstrap";
import banner from "../data/Banner";

function HomeCarousel() {
    return (
        <Carousel fade interval = {3000} className = "mb-0">
            {
                banner.map((bannerItem) =>
                    <Carousel.Item key={bannerItem.id}>
                        <img className = "d-block w-100" src = {bannerItem.image} alt={bannerItem.title} 
                            style={{height: "400px", objectFit: "cover"}}
                        />
                    
                        <Carousel.Caption style = {{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "10px"}}>
                            <h3>{bannerItem.title}</h3>
                            <p>{bannerItem.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default HomeCarousel;