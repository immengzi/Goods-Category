import {DataProvider, useData} from "../dataProvider";
import Category from "./category";
import Subcategory from "./subcategory";
import Content from "./content";

export default function Page() {
    const {selected, setSelected, subSelected, setSubSelected} = useData();

    return (
        <DataProvider>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <Category selected = {selected} setSelected={setSelected}/>
                    </div>
                    <div className={"col-9"}>
                        <Subcategory selected = {selected} subSelected={subSelected} setSubSelected={setSubSelected}/>
                        <Content selected = {selected} subSelected={subSelected}/>
                    </div>
                </div>
            </div>
        </DataProvider>
    )
}