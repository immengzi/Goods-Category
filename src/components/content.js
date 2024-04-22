import {useData} from "../dataProvider";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {useEffect, useRef} from "react";

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

const Content = () => {
    const { data } = useData();
    const { selected, subSelected, setSubSelected } = useData();
    const subCategories = data.categories[selected].sub;
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scrolling...");
            const positions = data.categories[selected].sub.map((sub, index) => {
                const element = document.getElementById(`sub-${index}`);
                return {
                    top: element.offsetTop,
                    bottom: element.offsetTop + element.offsetHeight,
                    index
                };
            });

            const scrollPosition = containerRef.current.scrollTop + containerRef.current.offsetTop;
            const currentSub = positions.find(p => p.top <= scrollPosition && p.bottom >= scrollPosition);
            if (currentSub && currentSub.index !== subSelected) {
                console.log("Updating subSelected to", currentSub.index);
                setSubSelected(currentSub.index);
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [data, selected, subSelected, setSubSelected]);

    return (
        <ContentContainer ref={containerRef}>
            {subCategories.map((sub, index) => (
                <div id={`sub-${index}`} key={index}>
                    <h5>{sub.name}</h5>
                    <CardsContainer>
                        {sub.items?.map((item) => (
                            <Card className="card" key={item.tag}>
                                <CardImg src={item.img} alt={item.name} loading={"lazy"}/>
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
