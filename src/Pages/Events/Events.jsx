import React from 'react'
import Cards from './Cards'


function Events() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='prose prose-li:list-decimal max-w-[75rem] mx-[1.5rem]'>
                <h1 className="font-normal text-[2.5rem] md:text-[3.5rem] dark:text-gray-200">Events</h1>
                <p className="dark:text-gray-200 mx-[1rem]">
                    <h3 className='dark:text-gray-200 font-normal'>  Direct Consultation available on our different branches all over India.
                    </h3>
                    <Cards />
                    <br />
                    <ol className='text-[1.2rem] text-center'>
                        <li>Gudiyatham - Vellore</li>
                        <li>Chennai</li>
                        <li>Bangalore</li>
                        <li>Salem</li>
                        <li>Coimbatore</li>
                    </ol>
                    <br />
                    <p className='text-center'>
                        Both online and offline Consultation available for 365 days dedicated to our people.
                    </p>

                    <br />
                    <h1 className="font-normal dark:text-gray-200">Education and Registration</h1>
                    <p className="dark:text-gray-200 ">
                        <p className='text-center'> Proper Education is provided for Healers with Guidelines of Alternative Medicine Association, and registration is given for them for their practice after conducting exams.
                            <br />
                            For Registration and other details, </p>
                        <p className='font-bold text-center'> WhatsApp Office: +91 8838793089 </p>
                        <br />
                        <br />
                        <h1 className="font-normal dark:text-gray-200">Benefits Of Registering</h1>
                        <ol className='list-decimal text-center'>
                            <li>Free Alternative medical camp</li>
                            <li>Guiding Higher Educations</li>
                            <li>Update information about Alternative medicines</li>
                            <li>Consultations on 'How to Increase Your Practice'</li>
                            <li>Free Hosting, Programming, and Web Page</li>
                            <li>We get benefits from W.H.O. / Central & State Government Policies</li>
                            <li>Referral for Professional Liability Insurance</li>
                            <li>Award and Honours</li>
                        </ol>
                        <br />
                        <h1 className="font-normal dark:text-gray-200">Members Rules & Regulation</h1>
                        <ol>
                            <li>
                                Any Alternative Medicine Practitioner can apply for Registration. He/she must have experience & Qualification in the said field. He/She can write (Hr.) Healer/Therapist in front of his/her name, but don't misguide any person (wrong practice is not allowed). You can advertise about your practice through Boards, pamphlets, newspapers. But you must mention your way of treatment in your Advertisement.
                            </li>
                            <li>
                                The medical attendant (registered person) should avoid taking any serious case. If the situation arises where the case (i.e. patient) must be transferred/admitted to the hospital immediately.
                            </li>
                            <li>
                                A person who has applied for registration must work in his/her field honestly and sincerely. Alternative Medicine Practitioner cannot prescribe any Ayurveda/Siddha/Homeopathic/Unani/Allopathic medicine to any patient who comes for treatment.
                            </li>
                            <li>
                                The alternative medicine practitioner means a registered individual cannot sign and issue a death certificate. He/She can only issue a casual certificate and fees receipt.
                            </li>
                            <li>
                                If the registered person changes their Residential address/Practice address/Contact number, they are requested to intimate the association about the same in writing immediately.
                            </li>
                            <li>
                                If a registered person is found doing a very good job for poor people in his/her subject, they may be considered for the Best Practitioner Award.
                            </li>
                            <li>
                                The ceremony venue will be communicated to all members by various means, like post/Mobile SMS & email.
                            </li>
                            <li>
                                If any registered person is found guilty due to misconduct or negligence under any or all acts like the Indian Penal Code Act, State Medical Council Act, Indian Medical Council Act, they will never be helped at any cost. The registration of such an individual will be terminated/cancelled.
                            </li>
                            <li>
                                The registered person can use RMAMP. The full form is “Register as a Member of Alternative Medicines Practitioner”. The registered person must mention RMAMP. Don't misguide any person who comes for treatment.
                            </li>
                            <li>
                                The registered person will work honestly and sincerely. Please do not issue excess billing receipts or false bills to patients.
                            </li>
                            <li>
                                When you are honest, sincere, and correct in your duties, if you still face any genuine problem from any Medical Practitioner or Council in your locality, the association will extend help and support, but the legal expenditure has to be borne and paid by you.
                            </li>
                            <li>
                                The association conducts health camps during which a registered individual can join in. The health camp may be organized by any other person anywhere in India & abroad.
                            </li>
                            <li>
                                If any registered person wants to conduct a medical camp, they must mention the full name of the association in their communications.
                            </li>
                            <li>
                                If there is any change or modification made in the rules and regulations of the association, a revised copy will be sent to you by email.
                            </li>
                            <li>
                                The Registered person must adopt, abide by, and implement the rules and regulations of the association during their practice.
                            </li>
                        </ol>
                    </p>
                </p>

            </div>
        </div>
    )
}

export default Events