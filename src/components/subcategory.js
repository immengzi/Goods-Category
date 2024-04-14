import {useData} from "../dataProvider";

const Subcategory = ({selected, subSelected, setSubSelected}) => {
    const {data} = useData();
    const subCategories = data.categories[selected].sub;

    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    subCategories.map((sub, index) => {
                        let active = subSelected === index ? " active" : "";
                        return (
                            <li className="nav-item" role="presentation" key={index}>
                                <button className={"nav-link" + active} type={"button"} role={"tab"}
                                        onClick={() => setSubSelected(index)}>
                                    {sub.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Subcategory;