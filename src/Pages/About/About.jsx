// import Header from "./Header";
// import './About.css'
import { Link } from "react-router-dom";

import PhotoCarousel from "../../components/Carousel/PhotoCarousel";
import PhotoCarousel2 from "../../components/Carousel/PhotoCarousel2";

const About = () => {
   return (


      <>
         <div className="prose mt-[1rem] prose-li:list-decimal mx-auto flex flex-col items-center dark:text-gray-200 px-6 max-w-[80rem] overflow-x-clip">

            <h1 className="dark:text-gray-100 font-light text-[2.5rem] md:text-[3.5rem] "><center>About</center></h1>


            <p><b>Dr.S.Seshathiri B.A.S.M (ALT.)., M.D (ALT.). </b> , is an Researcher and Registered
               Alternative Medicine Practitioner. He is also The Founder and Chairperson of
               S.S Alternative medicines and Saantham Trust. He has completed different
               diploma and has got certified from many alternative medicine association and
               council all over the globe. He is also a Registered Bach Flower Remedies
               Practitioner from Bach Centre, England and has also completed Bachelor of
               Alternative System of Medicines and Doctor of Medicine in Alternative
               Medicines.
               He is also an alternative medicines mentor and has taught over 3000+ students
               for their Self-Healing Purpose. He also runs a YouTube Channel named “ Tuning
               Thoughts “ , where several viewers and Subscribers Learn.</p>

            <PhotoCarousel folderName={"myphoto"} />


            <h1 className="dark:text-gray-100 font-light mt-10" > <center> S.S Alternative Medicines </center> </h1>

            {/* <PhotoCarousel2 folderName={"accreditation"} /> */}

            <div className="flex flex-row flex-wrap my-[2rem] mx-auto gap-2">
               <div className="grow shrink basis-1/4 bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                     className="mx-auto aspect-auto "
                     src="/accreditation/1.jpg"

                     alt="accreditation"
                  />
               </div>

               <div className="grow shrink basis-1/4 bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                     className="mx-auto aspect-auto md:h-[224px] "
                     src="/accreditation/2.jpg"

                     alt="accreditation"
                  />
               </div>

               <div className="grow shrink basis-1/4 bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                     className="mx-auto aspect-auto md:h-[224px] "
                     src="/accreditation/3.jpg"

                     alt="accreditation"
                  />
               </div>

               <div className="grow shrink basis-1/4 bg-white border shadow-sm rounded-lg hover:shadow-lg transition dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <img
                     className="mx-auto aspect-auto"
                     src="/accreditation/4.jpg"

                     alt="accreditation"
                  />
               </div>


            </div>

            <p>It is an<b> ISO 9001:2015 Certified Company with Good Manufacturing Practices
               ( GMP ) Certification</b>.
               It has also got MSME Certification , <b>FDA Certified facility</b>, UDYAM Registration for Manufacture of
               Pharmaceuticals, medicinal chemicals and botanical products.
               Our Company does Research and Development on Flower remedies and
               Alternative Medicines with Manufacture and sales of Flower remedies and
               Alternative Medicines.
               <div className="">

               </div>
            </p>

            <h1 className="dark:text-gray-100 font-light mb-[2px]">Saantham Trust</h1>
            
               <div class="lg:col-span-4 mt-0 lg:mt-0">
                 <img class="w-[23rem] h-[19rem] rounded-lg rounded-xl border-2 border-black" src="/logo3.jpg" alt="logo 2" />
               </div>
             

            <p>Saantham Trust is a Registered Trust Running in Gudiyatham for the benefits of the
               Public. We Voice for Flower remedies and Alternative Medicines Miracles and
               benefits. We also help people who are in need for medical aid and promote
               Natural Medicines.</p>




            <div className=" flex items-center gap-4">
               <p className='dark:text-gray-100 '><a href="https://www.youtube.com/channel/UCU1U_hqYjzEKjG6txI3OHjQ" >Youtube : TuningThoughts</a></p>



               {/* <Link
                  href="https://www.youtube.com/channel/UCU1U_hqYjzEKjG6txI3OHjQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=''
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width={24}
                     height={24}
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth={2}
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-youtube dark:fill-gray-100"
                  >
                     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                     <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
               </Link> */}

            </div>
            <h1 className="dark:text-gray-100 font-light mt-6"> <center> SUPREME COURT JUDGMENT</center> </h1>

            <p> No Harassment To Alternative Medical Practitioners, Hon'ble Supreme
               Court Of India
               Latest contents of judgment of Hon'be Supreme court of India SLP (Civil) No. 11262/
               24/11/2000 (In the judgment and order date 18/11/1998 in F.A.Q. No.205/92)
               For want of certain clarification etc. Delhi govt. & union of India (ministry of health & family welfare)
               has filled an appeal (SLP) in the Hon'ble supreme court of india challenging the order of Hon'ble
               Delhi high court dated 18/11/1998upon hearing on 12/11/2000. The division bench of Hon'ble
               justice R.C. Lahoti & Hon'ble justice Shivraj V. Patil has rejected the plea of Delhi govt. & union of
               India and finally on 24/11/2000 the bench of the Hon'ble court comprising justice Rajendra Babu
               and B.N. Agarwal has directed to entertain the matter and SLP Filled by petitioner (Delhi govt. &
               union of India ) has been dismissed. The Hon'ble supreme court of India also maintained that
               status quo of Hon'ble Delhi high court (FAO205/92) dated 18/11/1998 by which it has been ordered
               that any legally constituted institution imparting education facilities in the field of Alternative
               medicines may issue diploma / certificate and holder of such diploma / certificate are entitled to
               practice the particular faculties covered by the said diploma / certificate
               <ol>
                  <li>

                     According to the judgment of high court Chennai, planning commission report & the latter of
                     govt. (No.110/8/4/77MPT/ME(P)1979&No.4-6/70 MPT of govt. of India) The RMP certificate holder
                     can practice in alternative medicine only he can't practice in surgery , obstetrics & radiation therapy
                     in any form. He can not prescribed any medicine includes G,H&L of drugs & cosmetics rules 1945
                     and other dangers drug at any cost.
                  </li>
               </ol>
            </p>
            <p>
               <h3 className="dark:text-gray-300 text-center font-normal">  LEGAL GROUNDS
                  SOME LEGAL DECLARATION AND VARIOUS COURT'S ORDERS IN FAVOR OF
                  ALTERNATIVE SYSTEM OF MEDICINE
               </h3>

               <ol>
                  <li>  THE HON'BLE HIGH COURT OF KARNATAKA :
                     In its final judgment write petitions no.17534-96/94 and no 36960 /94 noted the constitutional
                     validity of section 16(2) 16(2A) etc in order to develop propagate and promote any alternative
                     system of medicines no permission is required under any statute
                  </li><li>
                     THE HON'BLE HIGH COURT OF DELHI :
                     Stated in its Judgment dt. 18/11/1998 of CWP No. 4015/1996 & OM No.8468/ 1997 in which the
                     Government has to take proper action to regularize and recognize the alternative medicine in India.
                  </li><li>

                     THE HON'BLE HIGH COURT OF CALCUTTA :
                     In its final judgment constitution writ jurisdiction matter no 546 of 1988 dt. 07/05/1990 which has
                     been reported in Calcutta Law Journal 1991 (2) CLJ page No. 173 to 187 held the following
                     important points regarding the constitutional rights and legal validity of Alternative system of
                     Medicines in India.

                  </li><li>
                     THE HON'BLE SUPREME COURT OF INDIA :
                     Stated in its final judgment of a case on alternative system of Medicine that “the judgment of Hon'
                     ble High court of Delhi must be strictly followed by the Govt. of India within Eight weeks” to
                     regularise the alternative system of Medicines .
                     Union of india and Delhi Govt. fild by a SLP(civil) No. 11262/2000 against the judgement and order
                     by Delhi high court CWP No. 4015/1996 dated 18/11/1998 in FAQ 205/92. The supreme court has
                     dismissed the SLP Of Union of India and delhi Govt. Dated 24/11/2000.
                  </li><li>
                     05-05-2010 Electro Homoeopathy is governed vide no.25011/276/2009-HR dated 5th
                  </li><li>
                     02-05-2008 Supreme Court recognized the practice. Maharashtra directorate Health. may 2010
                  </li><li>
                     23-04-2008 Vijyanagaram Addi Judi Court Magistrate Recognized the BEMS Practice and kept
                     it with in settled law.
                  </li><li>
                     22-12-2006 Hon'ble Bombay High court recognized the Electro Homoeopathy Practice.
                  </li><li>

                     10-01-2005 Metropolitan session court, Sec-bad Recognized MD (EH) Practice and Electro
                     Homoeopathy Board also.
                  </li><li>
                     25-11-2003 Central Govt. of India, Ministry of Health & Family Welfare, and Department of
                     Health Research recognized Electro homoeopathy.
                  </li><li>
                     14-02-2003 Hon'ble Supreme court of India and Medical Council of India have declared that,
                     those who are having community Medical Service & ED Certificate (CMS) of Rural medical
                     practitioner (RMP) can do Practice on 42 drug groups of life saving drugs in Allopathy.
                  </li><li>

                     16-05-2001 Hon'ble Metropolitan session court Sec-bad Recognized the Electro homoeopathy
                     Practice. The court also ordered that “Any Medical council, centre in India has no right to interfere
                     in the Practice.
                  </li><li>
                     23-10-2000 XI Metropolitan court, Sec-bad recognized the Practice of Electro Homoeopathy &
                     relevant medical college also.

                  </li><li>
                     THE ORDER ISSUED BY GOVT. OF INDIA (MINISTRY OF H&FW) DEPARTMENT OF
                     HEALTH RESEARCH NO. V.25011/276/2009-HR Dated.05.05.2010&C.30011/22/2010-HR
                     Dated 21.06.2011.
                  </li>
                  <li>
                     15. To give the rights of practicing to registered Medical Practitioners enrolled by the council as
                     qualified physicians, without any restriction, and entitling them to issue medical certificates such
                     as sickness, fitness etc of any other certificate required by any law. To establish the faculty to
                     control the examinations of teaching and educational institutions or colleges etc; and to award
                     degrees, diplomas, Certificates etc., thereof.



                     It is fact that many states including Tamilnadu have implemented clinical establishment Act. 2010.
                     All states are giving honour and weight age to the order of Central Govt. dated 14/02/2011 with
                     regard to education and practice of Electro Homoeopathy. On the suggestion and mutual
                     consultation of Ministry of Health & Family Welfare Govt. of India. Hon'ble Supreme Court of India
                     has also passed order on 22/01/2015 that there is no ban on medical practice of Electro
                     Homoeopathy.
                  </li>
               </ol>

            </p>
            <p>
               Ministry of Health & Family Welfare Govt. of India has already clarified on 14/02/2011 that Electro
               Homoeopathy is not applicable under clinical establishment (Registration & Regulation) Act. 2010
               for registration to the clinics of the practitioners of it but there is no practicing electro homoeopathy
               or imparting education as per central Govt. order V.25011/276/2009-HR Dated 05/05/2010.
               Madras High Court has also passed an order on 28/11/2016 that as per Ministry of Health & Family
               Welfare Govt. of India order No. V.25011/276/2009-HR Dated 05/05/2010. The petitioner can
               rightfully practice Electro Homoeopathy Medicine in every state in India without hindrance. Hence,
               there is no need to take permission from local health authorities or joint director of health of the
               district of Tamilnadu. Government has already accepted this order as this order remains
               unchallenged by the state Govt. in Hon'ble Supreme court of India. Therefore, the state Govt.
               should also give honour of it.
            </p>
            <p>
               Electro Homoeopathy legal and scientific analysis committee setup by Rajasthan Govt. consist of
               the experts of botanists, pharmacologists, clinical research, electro homoeopathy expert, of other
               medical system viz. senior scientist-17, CMO-40, legal expert-5 and other expert including vice
               chancellors of the universities of Rajasthan Govt.-16. On the basis of the evidences and
               documents received and examined, the committee has a clear judgment that electro homoeopathy
               is a simple, economical, accessible and secure therapeutic approach, it must be recognized in the
               state. Taking into consideration the utility and merits of electro homoeopathy, the committee
               expresses its though conviction and strongly recommends the state Government to draft essential
               law and initiate the statutory administrative process to grant due recognition to electro
               homoeopathy in the state. Ultimately on 09/03/2018 the Assembly of Rajasthan Govt. has passed
               Electro Homoeopathy System of Medicine Bill No. 13 of 2018 recognizing the system in Rajasthan
               State. Hon'ble Govt. of Rajasthan state has already signed on the Bill on 10th October, 2018.
               Therefore, Electro Homoeopathy system of medicine is a recognized system in a state like
               Rajasthan</p>



         </div></>
   );
};

export default About;
