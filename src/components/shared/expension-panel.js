import Card from './card';

const Accordion = () => {

    // Accordion click handler
    const accordionClickHandler = () => { 
        console.log('Accordion clicked');
    }

    return (
        <>
            {/* Accordion */}
            <div className="flex flex-col">

                {/* Accordion header */}
                <div className="flex justify-between py-3"> 
                    <div className="flex gap-1">
                        <span className="font-bold">Accordion Heading</span>
                        <span className="font-semibold">24 $</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-down" onClick={() => {accordionClickHandler()}}></i>
                    </div>
                </div>

                {/* Accordion content */}
                <div className="expension-panel-content mt-4">
                    <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                    <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                    <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                    <p>this is going to be the long empty text that we are going to put here in the end of the text</p>
                </div>
            </div>
        </>
    );
}

const ExpendionPanel = () =>  <Card><Accordion /></Card>;
export default ExpendionPanel;