import {data} from "../data";
import {useState} from "react";

export default function Category({selected, setSelected}) {
    const categories = Array.from(data.categories);
    // const [selected, setSelected] = useState(0);
    return (
        <div>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" role="tablist">
                    {
                        categories.map((category, index)=>{
                            let active = selected === index ? " active" : "";
                            return (
                                <button className={"nav-link"+ active} type={"button"} role={"tab"}
                                        onClick={() => setSelected(index)} key={index}>
                                    { category.name }
                                </button>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}