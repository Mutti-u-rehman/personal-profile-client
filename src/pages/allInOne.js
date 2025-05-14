import { useState } from "react";
import ExpendionPanel from "../components/shared/expension-panel";


const AllInOne = () => { 
    const expensionPanelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [activeAccordion, setActiveAccordion] = useState(-1);
    return (
        <>
            {
                expensionPanelList.map((item, index) => {
                    return (
                        <ExpendionPanel key={index} id={index} currentActiveExpensionPanel={activeAccordion} setAccordion={ setActiveAccordion } />
                    )
                })
            }
        </>
    );
};


export default AllInOne;