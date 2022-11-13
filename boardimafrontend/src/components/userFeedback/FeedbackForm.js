import React, { useState } from 'react';
import './feedbackstyle.css'

function FeedbackForm() {

    return (

        <div className='page'>

            <form>

                <h2 className='form-headline'>Feedback of the Web Site</h2>

                <div className='feedback-form'>

                    <div className='form-group'>
                        <label className='form-label'>Full Name</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Address</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Date of Birth</label>
                        <input type="date" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>University</label>
                        <select required className='form-input'>
                            <option className='form-input' value="University of Colombo">University of Colombo</option>
                            <option className='form-input' value="University of Moratuwa">University of Moratuwa</option>
                            <option className='form-input' value="University of Sri Jayawardanapura">University of Sri Jayawardanapura</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>University Registration No</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Father's Name</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Father's Occupation</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Mother's Name</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Mother's Occupation</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>No of siblings</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Monthly revenue of family</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Certified copy of monthly revenue of family</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Contact No</label>
                        <input type="text" required className='form-input'></input>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default FeedbackForm;