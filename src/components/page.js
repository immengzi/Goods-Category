import {useState} from "react";
import Category from "./category";
import Subcategory from "./subcategory";
import Content from "./content";

export default function Page() {
    const [selected, setSelected] = useState(0);
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-3"}>
                    <Category selected = {selected} setSelected={setSelected}/>
                </div>
                <div className={"col-9"}>
                    <Subcategory selected = {selected}/>
                    <Content selected = {selected}/>
                </div>
            </div>

        </div>
    )
}