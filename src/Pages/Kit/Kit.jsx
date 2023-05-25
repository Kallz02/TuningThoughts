import React from 'react'
import './Kit.css'

function Kit() {
    return (


        <>
            <h1 className='text-[2.5rem] md:text-[3.5rem] font-medium dark:text-gray-100 my-5'>
                Our Products
            </h1>

            <div className="prose flex flex-col mt-6 dark:text-gray-100 mx-auto max-w-[72rem]">

                <div className="flex flex-wrap ">
                    <div className=''>
                        <h1 className='font-normal'>HAIR CARE</h1>
                        <p className='font-medium'>This Kit will be greatly useful for all types of hair related issues such as</p>
                        <ol>
                            <li>1) Dandruff</li>
                            <li>2) Hair Loss</li>
                            <li>3) Dry Hair</li>
                            <li>4) Split Ends</li>
                            <li>5) Oily/Greasy Hair</li>
                            <li>6) Frizzy Hair</li>
                            <li>7) Dull Hair</li>
                            <li>8) Heat Damaged Hair</li>
                            <li>9) Grey Hair</li>
                        </ol>
                    </div>
                    <img src="/p1.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px] ' />

                </div>
                <div className=" flex flex-wrap">
                    <div className="">
                        <h1 className='font-normal'>SKIN CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Skin-related issues such as</p>
                        <ol>
                            <li>1) Acne</li>
                            <li>2) Psoriasis</li>
                            <li>3) Itching</li>
                            <li>4) Skin Rash</li>
                            <li>5) Detox</li>
                            <li>6) Atopic dermatitis (Eczema)</li>
                            <li>7) Herpes Zoster</li>
                            <li>8) Hives (Urticaria)</li>
                            <li>9) Contact Dermatitis</li>
                        </ol>
                    </div>
                    <img src="/p2.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1 className='font-normal'>BEAUTY</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of hair-related issues such as</p>
                        <ol>
                            <li>1) Pimples</li>
                            <li>2) Dark Circles</li>
                            <li>3) Wrinkles</li>
                            <li>4) Stops Ageing</li>
                            <li>5) Pigmentations</li>
                            <li>6) Face glow and many more benefits to go!!!</li>
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
                    <div className="content">
                        <h1 className='font-normal'>WEIGHT LOSS</h1>
                        <p className="font-medium">This Kit will be greatly useful for Weight Loss and can able to reduce</p>
                        <ol>
                            <li>1) Fat deposits</li>
                            <li>2) Excess fluids such as water or other factors</li>
                            <li>3) Appetite</li>
                        </ol>
                    </div>
                    <img src="/p4.jpeg" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />
                </div>


                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>WEIGHT GAIN</h1>
                        <p className="font-medium">This Kit will be greatly useful for Weight Gain and also improves energy and stamina of our body.</p>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>HEIGHT INCREASE</h1>
                        <p className="font-medium">This Kit will be greatly useful for Increase of height in children. This can able to handle</p>
                        <ol>
                            <li>1) Familial (genetic) short stature</li>
                            <li>2) Delayed (constitutional) growth due to hormones</li>
                        </ol>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>LIVER CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Liver Related issues and are able to regenerate the cells. This can handle variety of factors that damage the liver, such as viruses, alcohol use and obesity.</p>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>KIDNEY CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Kidney Related issues and are able to regenerate the cells. This can handle variety of factors that damage the Kidney, such as Urinary tract issues and inflammation in different parts of the kidney can also lead to long-term functional decline.</p>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>BRAIN BOOSTER</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Brain Related issues and are able to increase neuron connectivity and increase memory power. This can able to handle Autism, Epilepsy, Parkinson’s, Alzheimer's disease and other issues</p>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>EYE CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of eye-related issues such as</p>
                        <ol>
                            <li>1) Myopia</li>
                            <li>2) Hypermetropia</li>
                            <li>3) Cataract</li>
                            <li>4) Glaucoma</li>
                            <li>5) Sensitive Eyes</li>
                            <li>6) Dry eyes and other eye-related problems</li>
                        </ol>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1 className='font-normal'>STOMACH CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of stomach-related issues such as</p>
                        <ul>
                            <li>1) Bleeding</li>
                            <li>2) Bloating</li>
                            <li>3) Constipation</li>
                            <li>4) Diarrhea</li>
                            <li>5) Heartburn</li>
                            <li>6) Incontinence</li>
                            <li>7) Nausea and vomiting</li>
                            <li>8) Pain in the belly</li>
                            <li>9) Irritable bowel syndrome (IBS)</li>
                        </ul>
                    </div>

                    <img src="KIT_PHOTO_URL" className='md:max-w-[500px] rounded-lg mx-auto min-w-[350px]' />

                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>LUNGS CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of lungs-related issues such as</p>
                        <ol>
                            <li>Asthma</li>
                            <li>Lung infection (pneumonia)</li>
                            <li>Other Lung Related issues</li>
                        </ol>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>HEART CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Heart-related issues such as</p>
                        <ol>
                            <li>Prevent Heart Attack</li>
                            <li>Normalize B.P</li>
                        </ol>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>BONE CARE</h1>
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
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>

                <div className="section flex flex-wrap">
                    <div className="content">
                        <h1>NERVE CARE</h1>
                        <p className="font-medium">This Kit will be greatly useful for all types of Nerve-related issues and pain that will strengthen the nerve and also increases the blood flow. This can handle</p>
                        <ol>
                            <li>Varicose veins</li>
                            <li>Nerve Weakness</li>
                            <li>Stroke</li>
                            <li>Paralysis</li>
                            <li>Pain and Aches</li>
                        </ol>
                    </div>
                    <div className="image">
                        <img src="KIT_PHOTO_URL" />
                    </div>
                </div>
                <h3>
                    And many more KITs
                </h3>




            </div>


        </>

    )
}

export default Kit