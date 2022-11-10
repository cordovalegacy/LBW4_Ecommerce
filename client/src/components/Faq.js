import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div className='faq-main'>
            <h2 id='faq-header-main'>Frequently Asked Question's</h2>
            <div className='faq-container-1'>
                <div id='faq-style-1'>
                    <h3 id='faq-headers'>Computers</h3>
                    <p id='computer-questions-answers'>What kind of computers does Legacy Builds offer?</p>
                    <span id='white'>We specialize in gaming, workstations, streaming setups, and content creation rigs.</span>
                    <p id='computer-questions-answers'>What kind of computer do I need?</p>
                    <span id='white'>It depends! Try sending in a custom order on the <Link to='/computers/customs'>Custom</Link> page and we can work on it together!</span>
                    <p id='computer-questions-answers'>Do you ship computers? Will they be safe?</p>
                    <span id='white'>We do! We ship through UPS, and insure it with shipping insurance so it makes it's way to you safe and sound.</span>
                    <p id='computer-questions-answers'>How many computers have you built? Will mine be in good hands?</p>
                    <span id='white'>Absolutely. We have built over fifty, repaired over seventy-five, and have done <span id='red'>hundreds</span> of hours of mobile technical support and consulting.</span>
                    <p id='computer-questions-answers'>Do you work on laptops?</p>
                    <span id='white'>We do not work on laptops at this time. But we can build you any desktop your heart desires!</span>
                </div>
                <div id='faq-style-2'>
                    <h3 id='faq-headers'>Services</h3>
                    <p id='computer-questions-answers'>Do you do custom room setups?</p>
                    <span id='white'>Upon the order of a computer, we also do custom room setups for an additional charge on an estimate basis.</span>
                    <p id='computer-questions-answers'>Do you offer extra special package protection when shipping?</p>
                    <span id='white'>Yes, we use special expandable foam that sits inside the tempered glass of your case that keeps the parts steady and cushioned.</span>
                    <p id='computer-questions-answers'>Do you offer technical support?</p>
                    <span id='white'>Yes! We offer 3 months of mobile (text) support to help you get started in understanding your PC and all it's quirks.</span>
                    <p id='computer-questions-answers'>Do you offer custom water cooling loops?</p>
                    <span id='white'>Yes, we offer custom loop work. This work is typically more time intensive so the charge for this service is <span id='red'>25%</span> of the total cost of the parts for the build.</span>
                </div>
            </div>
            <div className='faq-container-1'>
                <div id='faq-style-1'>
                    <h3 id='faq-headers'>Cost</h3>
                    <p id='computer-questions-answers'>How much is your typical computer?</p>
                    <span id='white'>This amount depends on what your personal PC needs are. But it can range from <span id='red'>$750</span> to <span id='red'>$10k+</span>.</span>
                    <p id='computer-questions-answers'>How much is shipping?</p>
                    <span id='white'>Shipping is about <span id='red'>$100</span> depending on the weight, insurance and type (ground vs. air).</span>
                </div>
            </div>
        </div>
    )
}

export default Faq;