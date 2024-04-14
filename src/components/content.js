import {DataProvider, useData} from "../dataProvider";

const Content = ({selected, subSelected}) => {
    const {data} = useData();
    const items = data.categories[selected].sub[subSelected].items;

    return (
        <DataProvider>
            <div>
                <div className="tab-content">
                    {
                        items?.map((item) => {
                            return (
                                <div className="card" key={item.tag}>
                                    <img src={item.img}
                                         className="card-img-top" alt={item.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </DataProvider>
    )
}

export default Content;