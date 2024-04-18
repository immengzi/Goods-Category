import {useData} from "../dataProvider";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 20vw;

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
    border: none;
    background-color: transparent;

    &.active {
        font-weight: bold;
        color: #f75602;
        outline: none;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 75%;
            background-color: #f75602;
        }
    }
`;

const Category = ({selected, setSelected}) => {
    const {data} = useData();

    if (!data || !data.categories) {
        return <div>Loading...</div>;
    }

    const categories = data?.categories;

    return (
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
    )
}

export default Category;