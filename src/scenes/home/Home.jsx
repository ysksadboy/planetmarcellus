import ShoppingList from "../home/ShoppingList";
import Subscribe from "../home/Subscribe";
import MainCarousel from "../home/MainCarousel";

function Home() {
    return (
        <div className="home">
            <MainCarousel />
            <ShoppingList />
            <Subscribe />
        </div>
    );
}

export default Home;