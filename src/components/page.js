import {DataProvider, useData} from "../dataProvider";
import Category from "./category";
import Subcategory from "./subcategory";
import Content from "./content";
import styled from "styled-components";

const View = styled.div`
    display: flex;
    height: 100vh
`;

const SideBar = styled.div`
    background-color: #f6f6f6;
    height: 100%;
    width: 20%;
    overflow-y: scroll;
`;

const MainPage = styled.div`
    background-color: #ffffff;
    height: 100%;
    width: 80%;
    overflow-y: scroll;
`;

export default function Page() {
    const {selected, setSelected, subSelected, setSubSelected} = useData();

    return (
        <View>
            <SideBar>
                <Category selected={selected} setSelected={setSelected}/>
            </SideBar>
            <MainPage>
                <Subcategory selected={selected} subSelected={subSelected} setSubSelected={setSubSelected}/>
                <Content selected={selected} subSelected={subSelected}/>
            </MainPage>
        </View>
    )
}