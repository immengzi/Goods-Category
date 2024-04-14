import {useData} from "../dataProvider";

const Category = ({selected, setSelected}) => {
    const {data} = useData();
    const categories = data.categories;

    return (
        <div>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" role="tablist">
                    {
                        categories.map((category, index) => {
                            let active = selected === index ? " active" : "";
                            return (
                                <button className={"nav-link" + active} type={"button"} role={"tab"}
                                        onClick={() => setSelected(index)} key={index}>
                                    {category.name}
                                </button>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Category;