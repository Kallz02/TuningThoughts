import React from 'react'
import './Kit.css'

function Kit() {
    return (


        <div className='mx-[1.5rem]'>
            <h1 className='text-[2.5rem] md:text-[3.5rem] font-medium dark:text-gray-100 my-5'>
                Our Products
            </h1>

            <div className="prose  prose-li:list-decimal  flex flex-col mt-6 dark:text-gray-100 mx-auto max-w-[72rem]">

                <div className="flex flex-wrap ">
                    <div className='mx-auto'>
                        <h1 className='font-normal'>HAIR CARE</h1>
                        <p className='font-medium'>This Kit will be greatly useful for all types of hair related issues such as</p>
                        <ol>
                            <li> Dandruff</li>
                            <li> Hair Loss</li>
                            <li> Dry Hair</li>
                            <li> Split Ends</li>
                            <li> Oily/Greasy Hair</li>
                            <li> Frizzy Hair</li>
                            <li> Dull Hair</li>
                            <li> Heat Damaged Hair</li>
                            <li> Grey Hair</li>
                        </ol>
                    </div>
                    <img src="/p1.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px] ' />

                </div>
                <div className=" flex flex-wrap">
                    <div className="mx-auto">
                        <h1 className='font-normal'>SKIN CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Skin-related issues such as</p>
                        <ol>
                            <li> Acne</li>
                            <li> Psoriasis</li>
                            <li> Itching</li>
                            <li> Skin Rash</li>
                            <li> Detox</li>
                            <li> Atopic dermatitis (Eczema)</li>
                            <li> Herpes Zoster</li>
                            <li> Hives (Urticaria)</li>
                            <li> Contact Dermatitis</li>
                        </ol>
                    </div>
                    <img src="/p2.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>BEAUTY</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of hair-related issues such as</p>
                        <ol>
                            <li> Pimples</li>
                            <li> Dark Circles</li>
                            <li> Wrinkles</li>
                            <li> Stops Ageing</li>
                            <li> Pigmentations</li>
                            <li> Face glow and many more benefits to go!!!</li>
                        </ol>
                    </div>
                    <img src="/p3.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                {/* <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>RADIATION</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Radiations effect from Sun and Phone Signals such as U.V, Radio Waves, etc., that causes serious issues on our body</p>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div> */}

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>WEIGHT LOSS</h1>
                        <p className="font-medium">This Kit will be greatly useful for Weight Loss and can able to reduce</p>
                        <ol>
                            <li> Fat deposits</li>
                            <li> Excess fluids such as water or other factors</li>
                            <li> Appetite</li>
                        </ol>
                    </div>
                    <img src="/p4.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>


                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>WEIGHT GAIN</h1>
                        <p className="font-medium">This Kit will be greatly useful for Weight Gain <br /> and also improves energy and stamina of our body.</p>
                    </div>

                    <img src="/p5.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>HEIGHT INCREASE</h1>
                        <p className="font-medium">This Kit will be greatly useful for Increase of height  in children. <br /> This can able to handle</p>
                        <ol>
                            <li> Familial (genetic) short stature</li>
                            <li> Delayed (constitutional) growth due to hormones</li>
                        </ol>
                    </div>

                    <img src="/p6.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>LIVER CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Liver Related issues <br /> and are able to regenerate the cells. This can handle variety of factors <br /> that damage the liver,  such as viruses, alcohol use and obesity.</p>
                    </div>

                    <img src="/p7.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>KIDNEY CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Kidney Related issues and are able to regenerate the cells. This can handle variety of factors that damage the Kidney, such as Urinary tract issues and inflammation in different parts of the kidney can also lead to long-term functional decline.</p>
                    </div>

                    <img src="/p8.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>BRAIN BOOSTER</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Brain Related issues and are able to increase neuron connectivity and increase memory power. This can able to handle Autism, Epilepsy, Parkinson’s, Alzheimer's disease and other issues</p>
                    </div>

                    <img src="/p9.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>EYE CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of eye-related issues such as</p>
                        <ol>
                            <li> Myopia</li>
                            <li> Hypermetropia</li>
                            <li> Cataract</li>
                            <li> Glaucoma</li>
                            <li> Sensitive Eyes</li>
                            <li> Dry eyes and other eye-related problems</li>
                        </ol>
                    </div>

                    <img src="/p10.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />

                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>STOMACH CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of stomach-related issues such as</p>
                        <ul>
                            <li> Bleeding</li>
                            <li> Bloating</li>
                            <li> Constipation</li>
                            <li> Diarrhea</li>
                            <li> Heartburn</li>
                            <li> Incontinence</li>
                            <li> Nausea and vomiting</li>
                            <li> Pain in the belly</li>
                            <li> Irritable bowel syndrome (IBS)</li>
                        </ul>
                    </div>

                    <img src="/p11.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />

                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>LUNGS CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of lungs-related issues such as</p>
                        <ol>
                            <li>Asthma</li>
                            <li>Lung infection (pneumonia)</li>
                            <li>Other Lung Related issues</li>
                        </ol>
                    </div>

                    <img src="/p12.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>HEART CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Heart-related issues such as</p>
                        <ol>
                            <li>Prevent Heart Attack</li>
                            <li>Normalize B.P</li>
                        </ol>
                    </div>

                    <img src="/p13.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>BONE CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Bone-related issues such as</p>
                        <ul>
                            <li>Kit</li>
                            <li>Kit</li>
                            <li>Kit</li>
                            <li>Osteogenesis Imperfecta</li>
                            <li>Osteonecrosis</li>
                            <li>Osteoporosis</li>
                            <li>Rheumatoid Arthritis, etc.</li>
                        </ul>
                        <p>Improves Calcium and Strengthens bone</p>
                    </div>

                    <img src="/p14.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content mx-auto">
                        <h1 className='font-normal'>NERVE CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Nerve-related issues <br />and pain that will strengthen the nerve and also increases <br /> the blood flow. This can handle</p>
                        <ol>
                            <li>Varicose veins</li>
                            <li>Nerve Weakness</li>
                            <li>Stroke</li>
                            <li>Paralysis</li>
                            <li>Pain and Aches</li>
                        </ol>
                    </div>

                    <img src="/p15.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>
                <h3 className='text-center'>
                    And many more KITs
                </h3>




            </div>


        </div>

    )
}

export default Kit