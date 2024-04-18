import {useData} from "../dataProvider";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ContentContainer = styled.div`
    padding: 1rem;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Card = styled.div`
    flex: 0 1 calc(33.333% - 1rem);
    margin-bottom: 0.5rem;
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
`;

const CardText = styled.div`
    padding: 0.5rem;
    text-align: center;
    font-size: 12px;
`;

const Content = ({selected}) => {
    const {data} = useData();

    if (!data || !data.categories) {
        return <></>;
    }

    const subCategories = data.categories[selected].sub;

    return (
        <ContentContainer>
            {subCategories.map((sub, index) => (
                <div id={`sub-${index}`} key={index}>
                    <h5>{sub.name}</h5>
                    <CardsContainer>
                        {sub.items?.map((item) => (
                            <Card className="card" key={item.tag}>
                                <CardImg src={item.img} alt={item.name}/>
                                <CardText>{item.name}</CardText>
                            </Card>
                        ))}
                    </CardsContainer>
                </div>
            ))}
        </ContentContainer>
    );
};

export default Content;