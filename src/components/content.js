import {useData} from "../dataProvider";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {createRef, useEffect, useRef} from "react";

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
    const {data, selected, subSelected, setSubSelected, userInitiated, setUserInitiated} = useData();
    const subCategories = data?.categories?.[selected]?.sub;
    const subRefs = useRef(subCategories?.map(() => createRef()));

/*    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = subRefs.current.findIndex(ref => ref.current === entry.target);
                    if (!userInitiated) {
                        setSubSelected(index);
                    }
                    setUserInitiated(false);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        subRefs.current.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            subRefs.current.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
            observer.disconnect();
        };
    }, [selected, setUserInitiated]);*/

    useEffect(() => {
        const subCategoryElement = document.getElementById(`sub-${subSelected}`);
        if (subCategoryElement) {
            subCategoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selected, subSelected]);

    return (
        <ContentContainer>
            {subCategories?.map((sub, index) => (
                <div ref={subRefs.current[index]} key={index} id={`sub-${index}`}>
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
}
export default Content;
