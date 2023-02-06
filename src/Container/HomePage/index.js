import CategoryCard from "../../Components/CategoryCard";
import image from '../../Assets/Images/Image1.jpg';

const HomePage = (props) => {

    const categoryItems = [
        {
            id: 1,
            name: 'HATS',
            subName: 'SHOP NOW',
            url: image
        }, 
        {
            id: 2,
            name: 'JACKETS',
            subName: 'SHOP NOW',
            url: ''
        },
        {
            id: 3,
            name: 'SNEAKERS',
            subName: 'SHOP NOW',
            url: ''
        },
        {
            id: 4,
            name: `MEN'S`,
            subName: 'SHOP NOW',
            url: ''
        },
        {
            id: 5,
            name: `WOMEN'S`,
            subName: 'SHOP NOW',
            url: ''
        }
    ];

    const categoryElements = categoryItems?.map((eE) => <CategoryCard key={eE?.id} className={eE?.name === `MEN'S` && 'mens'} name={eE?.name} url={eE?.url} />);

    return <div className="basic-home-page">
        {categoryElements}
    </div>;
}

export default HomePage;