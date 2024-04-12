import {data} from "../data";

export default function Subcategory({selected, setSelected}) {
    const categories = Array.from(data.categories);
    return (
        <div>
            <div className="tab-content">
                {
                    categories.map((category, index)=>{
                        let active = selected === index ? " show active" : "";
                        return (
                            <div className={"tab-pane fade"+ active} role={"tabpanel"} tabIndex="0"
                                 key={index}>
                                { category.name }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}