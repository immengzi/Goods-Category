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
    return (
        <View>
            <SideBar>
                <Category/>
            </SideBar>
            <MainPage>
                <Subcategory/>
                <Content/>
            </MainPage>
        </View>
    )
}