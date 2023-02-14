import CategoryCard from "../../Components/CategoryCard";
import Hats from "../../Assets/Images/Hats.jpg";
import Jackets from "../../Assets/Images/Jackets.jpg";
import Mens from "../../Assets/Images/Mens.jpg";
import Womens from "../../Assets/Images/Womens.jpg";
import Sneakers from "../../Assets/Images/Sneakers.jpg";

const HomePage = (props) => {

    const categoryItems = [
        {
            id: 1,
            name: 'HATS',
            subName: 'SHOP NOW',
            url: Hats
        }, 
        {
            id: 2,
            name: 'JACKETS',
            subName: 'SHOP NOW',
            url: Jackets
        },
        {
            id: 3,
            name: 'SNEAKERS',
            subName: 'SHOP NOW',
            url: Sneakers
        },
        {
            id: 4,
            name: `WOMEN'S`,
            subName: 'SHOP NOW',
            url: Womens
        },
        {
            id: 5,
            name: `MEN'S`,
            subName: 'SHOP NOW',
            url: Mens
        },
        {
            id: 6,
            name: `MEN'S`,
            subName: 'SHOP NOW',
            url: Mens
        }
    ];

    const categoryElements = categoryItems?.map((eE) => {
        const className = `grid-item-${eE?.id}`;
        return <CategoryCard key={eE?.id} className={className} name={eE?.name} url={eE?.url} />;
    });

    return <div className="basic-home-page">
        {categoryElements}
    </div>;
}

export default HomePage;