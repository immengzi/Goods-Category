import React, {createContext, useContext, useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const initialData = {
        "categories": [
            {
                "name": "运动",
                "tag": "sports",
                "sub": [
                    {
                        "name": "跑步",
                        "tag": "running",
                        "items": [
                            {
                                "name": "跑步鞋",
                                "tag": "running-shoes",
                                "img": "/assets/img1.png"
                            },
                            {
                                "name": "运动短裤",
                                "tag": "shorts",
                                "img": "/assets/img2.png"
                            }
                        ]
                    },
                    {
                        "name": "游泳",
                        "tag": "swimming",
                        "items": [
                            {
                                "name": "泳镜",
                                "tag": "goggles",
                                "img": "/assets/img3.png"
                            },
                            {
                                "name": "泳帽",
                                "tag": "swim-cap",
                                "img": "/assets/img4.png"
                            }
                        ]
                    },
                    {
                        "name": "篮球",
                        "tag": "basketball",
                        "items": [
                            {
                                "name": "篮球鞋",
                                "tag": "basketball-shoes",
                                "img": "/assets/img5.png"
                            },
                            {
                                "name": "篮球",
                                "tag": "basketballs",
                                "img": "/assets/img6.png"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "技术",
                "tag": "technology",
                "sub": [
                    {
                        "name": "电脑",
                        "tag": "computers",
                        "items": [
                            {
                                "name": "笔记本电脑",
                                "tag": "laptops",
                                "img": "/assets/img7.png"
                            },
                            {
                                "name": "台式机",
                                "tag": "desktops",
                                "img": "/assets/img8.png"
                            }
                        ]
                    },
                    {
                        "name": "手机",
                        "tag": "mobile-phones",
                        "items": [
                            {
                                "name": "智能手机",
                                "tag": "smartphones",
                                "img": "/assets/img9.png"
                            },
                            {
                                "name": "折叠手机",
                                "tag": "foldables",
                                "img": "/assets/img10.png"
                            }
                        ]
                    },
                    {
                        "name": "相机",
                        "tag": "cameras",
                        "items": [
                            {
                                "name": "数码相机",
                                "tag": "digital-cameras",
                                "img": "/assets/img11.png"
                            },
                            {
                                "name": "单反相机",
                                "tag": "dslr-cameras",
                                "img": "/assets/img12.png"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "服装",
                "tag": "clothing",
                "sub": [
                    {
                        "name": "男装",
                        "tag": "mens-clothing",
                        "items": [
                            {
                                "name": "西装",
                                "tag": "suits",
                                "img": "/assets/img13.png"
                            },
                            {
                                "name": "休闲裤",
                                "tag": "casual-pants",
                                "img": "/assets/img14.png"
                            }
                        ]
                    },
                    {
                        "name": "女装",
                        "tag": "womens-clothing",
                        "items": [
                            {
                                "name": "连衣裙",
                                "tag": "dresses",
                                "img": "/assets/img15.png"
                            },
                            {
                                "name": "高跟鞋",
                                "tag": "high-heels",
                                "img": "/assets/img16.png"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const [selected, setSelected] = useState(0);
    const [subSelected, setSubSelected] = useState(0);

    const value = {
        data: initialData,
        selected,
        setSelected,
        subSelected,
        setSubSelected,
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}