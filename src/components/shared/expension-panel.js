import { useState } from 'react';
import Card from './card';

const Accordion = ({ id, currentActiveExpensionPanel, setAccordion}) => {
    const [isOpen, setIsOpen] = useState(false);

    // If any other accordion is open, close it
    if (id !== currentActiveExpensionPanel && isOpen) {
        setIsOpen(false);
    }

    // Accordion click handler
    const accordionClickHandler = () => { 
        setAccordion(isOpen ? -1 : id);
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* Accordion */}
            <div className="flex flex-col">

                {/* Accordion header */}
                <div className="flex justify-between py-3"> 
                    <div className="flex gap-1">
                        <span className="font-bold">Accordion Heading</span>
                        <span className="font-semibold">{ id } $</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-down" onClick={() => {accordionClickHandler()}}></i>
                    </div>
                </div>

                {/* Accordion content */}
                {
                    isOpen &&
                    <div className="expension-panel-content mt-4">
                        <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                        <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                        <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                        <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                    </div>
                }
            </div>
        </>
    );
}

const ExpendionPanel = (props) => <Card><Accordion {...props} /></Card>;
// export {Accordion};
export default ExpendionPanel;