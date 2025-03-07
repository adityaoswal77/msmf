import { useRouter } from "next/router";
import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const MolecularImmunologyProjects: Array<ProgramCardProps> = [
  {
    projectName: "Clinical potential of LCN2 in Cancer",
    aboutProject:
      "LCN2, a lipocalin, first described for its function in innate immunity has been implicated in various cancer. The team currently is looking at the role of this molecule in Head and Neck  squamous cell carcinoma and various gastro-intestinal cancers.",
    fundProvider: "MSMF",
    publications: (
      <>
        <ol>
          <li>
            <p className="font-bold mb-0">
              Neutrophils homing into the retina trigger pathology in human
              patients and in a mouse model of early age-related macular
              degeneration
            </p>
            <p className="mt-0">
              Sayan Ghosh, Archana Padmanabhan, Tanuja Vaidya, Alan M. Watson,
              Imran A. Bhutto, Stacey Hose, Peng Shang, Nadezda Stepicheva,
              Meysam Yazdankhah, Joseph Weiss, Manjula Das, Santosh Gopikrishna,
              Aishwarya, Naresh Yadav, Thorsten Berger, Tak W. Mak, Shuli Xia,
              Jiang Qian, Gerard A. Lutty, Ashwath Jayagopal, J. Samuel Zigler,
              Jr., Swaminathan Sethu, James T. Handa, Simon C. Watkins,
              Arkasubhra Ghosh and Debasish Sinha; Nature Communications Biology
              , (Sep 2019): 2:348 : DOI 10.1038/s42003-019-0588-y (IF.12.21)
            </p>
          </li>
          <li>
            <p className="font-bold mb-0">
              Lipocalin 2 expression promotes tumor progression and therapy
              resistance by inhibiting ferroptosis in colorectal cancer
            </p>
            <p className="mt-0">
              Nazia Chaudhary, Bhagya Shree Choudhary, Sanket Girish Shah,
              Nileema Khapare, Nehanjali Dwivedi, Anagha Gaikwad, Neha Joshi,
              Jinsy Raichanna, Srikanta Basu, Murari Gurjar, Smitha P.K, Avanish
              Saklani, Poonam Gera, Mukta Ramadwar, Prachi Patil, Rahul Thorat,
              Vikram Gota, Sujan K. Dhar, Sanjay Gupta, Manjula Das, and Sorab
              N. Dalal, International J of Cancer (2021) (In Press) (IF 5.45)
            </p>
          </li>
        </ol>
      </>
    ),
    members: [
      "Nehanjali Dwivedi",
      "Smitha P K",
      "Gouri",
      "Vishnupriyan",
      "Nidhi Shukla",
    ],
    collaborators: ["Dr. Sorab Dalal"],
  },
  {
    projectName: "Hyperglycemia and Cancer",
    aboutProject:
      "Meta-inflammation, metabolism induced inflammation  induces  insulin insensitivity to skewed immune response leading to cancer. ",
    fundProvider: "BBII",
    publications: (
      <>
        <ol>
          <li>
            <p className="font-bold mb-0">
              Anti-diabetic effects of Holarrhena antidysentrica extracts:
              Results from a Longitudinal Meta-analysis
            </p>
            <p className="mt-0">
              C. A. Divya, Sujan K Dhar, Manjula Shantaram, Manjula Das.bioRxiv
              2021.02.11.430868; doi: https://doi.org/10.1101/2021.02.11.430868
            </p>
          </li>
          <li>
            <p className="font-bold mb-0">
              Systematic Review and experimental validation showed methanolic
              extracts of leaf and bark of Holarrhena antidysenterica to be a
              potent anti oxidant
            </p>
            <p className="mt-0">
              C. A. Divya, Sharmila Lakshmi T V., Smitha P K, Sujan K Dhar,
              Manjula Shantaram, Manjula Das (2021) Biomedicine
            </p>
          </li>
        </ol>
      </>
    ),
    members: ["Divya C A", "Shruthi", "Christopher Bathula"],
  },
  {
    projectName: "Bcl2 in hematological malignancies",
    aboutProject:
      "A small molecule Disarib has been developed in IISc. In MSMF we are validating its efficacy in various hematological malignancies.",
    fundProvider: "Glue Grant",
    publications: (
      <>
        <ol>
          <li>
            <p className="font-bold mb-0">
              Relative quantification of BCL2 mRNA for Diagnostic Usage Needs
              Stable Uncontrolled Genes as Reference
            </p>
            <p className="mt-0">
              Nehanjali Dwivedi, Sreejeta Mondal, P K Smitha, Sowmya T, Kartik
              Sachdeva, Christopher Bathula, Vishnupriyan K, Nataraj K S, Sharat
              Damodar, Sujan K Dhar , Manjula Das. PLos One
              https://doi.org/10.1371/journal.pone.0236338 August 12, 2020,
              15(8): e0236338 (IF. 2.74)
            </p>
          </li>
          <li>
            <p className="font-bold mb-0">
              Case Report of a Rare Incidence of IgH Amplification in
              Multiple Myeloma Patient Leading to Acute Kidney Injury
            </p>
            <p className="mt-0">
              Sowmya Thanikachalam, Vijay Kumar Srinivasalua, K. S. Nataraj,
              Sharat Damodar, Manjula Das, (2021) Kargar 14:274–278
              (DOI:10.1159/000510046) (IF. 1.08)
            </p>
          </li>
        </ol>
      </>
    ),
    members: ["Smitha P K", "Sowmya", "Sreejeta Mandal"],
    collaborators: ["Dr Sharat Damodar", "Dr. Sathees C Raghavan"],
  },
  {
    projectName: "Fighting COVID",
    aboutProject:
      "While understanding the spread and molecular nature of the disease, the lab is developing a therapeutic molecule to fight the severity of infection. The team wants to delineate in immunocompromised individuals the immune response to vaccination.",
    fundProvider: "BIRAC",
    publications: (
      <>
        <ol>
          <li>
            <p className="font-bold mb-0">
              Music in the time of COVID
            </p>
            <p className="mt-0">
              Sujan K Dhar and Manjula Das (2020): Biomedical Journal of Scientific and Technical Research: DOI: 10.26717/BJSTR.2020.31.005067 (IF. 0.548)
            </p>
          </li>
          <li>
            <p className="font-bold mb-0">
              IL-6 and IL-10 as predictors of disease severity in COVID 19 patients: Results from Meta-analysis and Regression
            </p>
            <p className="mt-0">
              Sujan K Dhar, Vishnupriyan K, Sharat Damodar, Shashi Gujar and Manjula Das (2021) Heliyon  [Internet]. 2021 Jan 29 [cited 2021 Feb 2];e06155 (IF. 1.650)
            </p>
          </li>
          <li>
            <p className="font-bold mb-0">
               Inflammation and hypercoagulopathy are predominant risk factors of severity in COVID-19 patients with Diabetes Mellitus: Summary of a Meta-analysis
            </p>
            <p className="mt-0">
              Sujan K Dhar, Kartik Sachdeva and Manjula Das (2021) Diabetes & Metabolic Syndrome: Clinical Research & Reviews:  15:639-642 (IF. 1.940) https://doi.org/10.1016/j.dsx.2021.02.021
            </p>
          </li>
        </ol>
      </>
    ),
    members: ["Smitha P K", "Pushkarni", "Neha", "Kunal Biswas"],
    collaborators: ["Dr Varsha Sridhar", "Dr R K Prasad", "Dr. Rammohan Bhatt", "Dr. Shashi Gujar"],
  },
];

const MolecularImmunology = () => {
  const router = useRouter();
  const openTeam = () => {
    router.push("/research/people#molecular-immunology");
  };
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Research Programs
          </p>
          <p className="text-4xl font-bold uppercase my-3">
            Molecular Immunology
          </p>
          <p>
            Molecular Immunology, induced by virus to cancer is the broad
            research areaof the lab. Currently, the lab is focussed on
            delineating the immune response induced by SARS-CoV2 and comparing
            it to other apparently unrelated inflammatory conditions like cancer
            and diabetes. The laboratory works towards translating the research
            to direct benefit of patient through biotherapeutics and diagnostics
            by collaborating actively with clinic, Industry and academia.
          </p>
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-3xl">
              Manjula Das, PhD
            </p>
            <p className="text-xl text-white">
              PhD from Indian Institute of Science with training from McGill
              University – Canada, CNRS, at Rennes, France and MIT-USA during
              post doctoral studies Manjula has spent long years in the
              Industry. She worked on the vaccine candidate, I321, against
              rotavirus during her PhD. Manjula, worked on Canine model for
              cancer during her post doctoral days shifting to Bioinformatics
              and doing experimental verification of the Gene prediction tool,
              GenScan. She is an expert in regulatory development of assays (in
              vitro and in vivo), immunodiagnostics and biotherapeutics. She
              also is a serial entrepreneur, the latest being a consultancy firm
              named Beyond Antibody. Manjula with 25-years long market
              experience concentrates on translating basic clinical research to
              products, processes and policies for direct patient care in
              various areas of cancer and virology.
            </p>
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="https://cdn.ms-mf.org/images/Research/Rectangle 1470.png"
              alt="Manjula Das"
            />
            <p className="m-0 text-white text-xl">manjula.das@ms-mf.org</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.ms-mf.org/images/Research/2_Program_molecular Immunology group photo.jpg"
            alt="molecular-immunology-team"
          />
          <button onClick={openTeam} className="msmf__secondary-btn">
            Our Team
          </button>
        </div>
        <hr />
        {MolecularImmunologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Funds
          </p>
          <table className="table-fixed">
            <thead>
              <tr className="w-full">
                <th className="w-6/12">Title of Fund</th>
                <th className="w-3/12 text-center">Granting Agency</th>
                <th className="w-3/12 text-center">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Exploring Novel BCL2-specific Inhibitors against Leukemia and
                  Lymphoma
                </td>
                <td className="text-center">DBT</td>
                <td className="text-center">April 2018 to March 2021</td>
              </tr>
              <tr>
                <td>
                  Biodesign Bioengineering Initiative Phase II (Towards
                  Deciphering the Interaction between Diabetes and Cancer)
                </td>
                <td className="text-center">DBT</td>
                <td className="text-center">April 2018 to March 2021</td>
              </tr>
              <tr>
                <td>
                  Development Of A Microfluidics Based Point-Of-Care Device For
                  Intra-Operative Detection Of Metastatic Lymph Nodes In Oral
                  Cancer
                </td>
                <td className="text-center">DST</td>
                <td className="text-center">August 2019 to July 2022</td>
              </tr>
              <tr>
                <td>
                  Validation of a RT-PCR kit for the detection of Coronavirus in
                  saliva samples
                </td>
                <td className="text-center">NeoDx</td>
                <td className="text-center">November 2020 to January 2021</td>
              </tr>
              <tr>
                <td>
                  SolAce: Novel Therapeutics against Coronavirus infection
                </td>
                <td className="text-center">BIRAC</td>
                <td className="text-center">October 2020 to May 2021</td>
              </tr>
              <tr>
                <td>
                  Deciphering the tumor immune heterogeneity of Head and Neck
                  Squamous Cell Carcinoma (HNSCC) in Indian patient population:
                  A pilot Study
                </td>
                <td className="text-center">BMS</td>
                <td className="text-center">August 2016 to July 2018</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Patents
          </p>
          <table className="table-fixed">
            <thead>
              <tr className="w-full">
                <th className="w-6/12">Patent Title</th>
                <th className="w-2/12 text-center">Innovators</th>
                <th className="w-2/12 text-center">File Number</th>
                <th className="w-2/12 text-center">Filed Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Compositions and methods for treating coronavirus infection
                  with different level of disease severity <br />
                  <em>[Manjula Das]</em>
                </td>
                <td className="text-center">MSMF</td>
                <td className="text-center">202041036866</td>
                <td className="text-center">27TH AUGUST 2020</td>
              </tr>
              <tr>
                <td>
                  Antibodies against Lipocalin-2 and uses thereof <br />
                  <em>
                    [Sorab N. Dalal, Manjula Das, Sujan K Dhar, Smitha P K,
                    Nazia Chaudhary, Nehanjali Dwivedi, Sanjay Gupta, Sanket
                    Shah, Bhagya Shree. Rahul Thorat and Nileema Khapare]
                  </em>
                </td>
                <td className="text-center">
                  MSMF, ACTREC, BA (Assigned to MSMF)
                </td>
                <td className="text-center">202021000274</td>
                <td className="text-center">3RD JANUARY 2020</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default MolecularImmunology;
