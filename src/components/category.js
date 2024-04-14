import {useData} from "../dataProvider";
import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    &:focus-within {
        background-color: #ffffff;
    }
`;

const Button = styled.button`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
    &.active {
        font-weight: bold;
        color: #f75602;
        background-color: #ffffff;
        border-left: 3px solid #f75602;
    }
`;

const Category = ({selected, setSelected}) => {
    const {data} = useData();
    const categories = data.categories;

    return (
        <div>
            <div className="d-flex align-items-start">
                <div className="nav" role="tablist">
                    {
                        categories.map((category, index) => {
                            let active = selected === index ? " active" : "";
                            return (
                                <ButtonContainer className={"my-0 py-2"} key={index}>
                                    <Button className={"nav-link" + active} type={"button"} role={"tab"}
                                            onClick={() => setSelected(index)}>
                                        {category.name}
                                    </Button>
                                </ButtonContainer>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;