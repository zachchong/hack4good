import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


function Cart() {
    return (
        <div>
            <h2>Cart</h2>
            <Accordion>
                <AccordionSummary>
                    PlayStation 4 Controller
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Cart;