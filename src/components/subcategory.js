import {useData} from "../dataProvider";
import styled from "styled-components";

const SubNav = styled.ul`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

const ButtonContainer = styled.li`
    display: inline-block;
`;

const Button = styled.button`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
    font-size: 12px;
    background-color: #f6f6f6;
    border-radius: 25px;

    &.active {
        font-weight: bold;
        color: #f75602;
        background-color: #fcf7f3;
    }
`;

const Subcategory = ({selected, subSelected, setSubSelected}) => {
    const {data} = useData();

    if (!data || !data.categories) {
        return <></>;
    }

    const subCategories = data.categories[selected].sub;

    const handleScroll = (index) => {
        const element = document.getElementById(`sub-${index}`);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <SubNav className="nav" role="tablist">
            {
                subCategories.map((sub, index) => {
                    let active = subSelected === index ? " active" : "";
                    return (
                        <ButtonContainer className="nav-item mx-1 my-auto" role="presentation" key={index}>
                            <Button className={"nav-link" + active} type={"button"} role={"tab"}
                                    onClick={() => {
                                        setSubSelected(index);
                                        handleScroll(index);
                                    }}
                                    href={`#sub-${index}`}
                            >
                                {sub.name}
                            </Button>
                        </ButtonContainer>
                    )
                })
            }
        </SubNav>
    )
}

export default Subcategory;