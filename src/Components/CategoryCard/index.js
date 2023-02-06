const CategoryCard = (props) => {
    const { name, url, className, bodyClassName, imgClassName, nameClassName, subNameClassName } = props;

    return <div className={`basic-category-card ${className}`}>
        <img className={`basic-category-card-img ${imgClassName}`} src={url}></img>
        <div className={`basic-category-card-body ${bodyClassName}`}>
            <h6 className={`basic-category-card-name ${nameClassName}`}>{name}</h6>
            <p className={`basic-category-card-subname ${subNameClassName}`}>SHOP NOW</p>
        </div>
    </div>
    
};

export default CategoryCard;