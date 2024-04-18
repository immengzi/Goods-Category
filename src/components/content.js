import {useData} from "../dataProvider";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 1rem);
  margin-bottom: 1rem;

  .card-img-top {
    width: 100%;
    height: auto;
  }
`;

const Content = ({selected, subSelected}) => {
    const {data} = useData();

    if (!data || !data.categories) {
        return <div>Loading...</div>;
    }

    const items = data.categories[selected].sub[subSelected].items;

    return (
        <CardsContainer>
            {items?.map((item) => (
                <Card className="card" key={item.tag}>
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                    </div>
                </Card>
            ))}
        </CardsContainer>
    )
}

export default Content;