import { useRouter } from "next/router";
import ProgramCard, {
  ProgramCardProps,
} from "../../../components/Client/Research/ProgramCard";
import { ContentCard } from "../../../components/Common/ContentCard";
import { Section, SectionContent } from "../../../components/Common/Section";

const NeuroOncologyProjects: Array<ProgramCardProps> = [
  {
    projectName:
      "Novel prognostic gene signature for low and high grade Glioma ",
    fundProvider: "ICMR, Government of India",
    translation:
      "https://www.msctr.org/2019/05/30/recursive-consensus-clustering/",
    publications: "https://www.nature.com/articles/s41598-020-67016-3",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["NH Neuro Team"],
  },
  {
    projectName:
      "Studying migration of glioblastoma cells along white matter tracts using an in vitro 3D model",
    fundProvider: "SERB, Department of Science and Technology",
    translation: "https://github.com/MSCTR/3Dgelma",
    publications: "https://www.biorxiv.org/content/10.1101/2021.03.24.436751v1",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["Aditya Chaubey"],
  },
  {
    projectName:
      "Genome wide, novel  alternatively spliced variants in Glioblastoma and their clinical significance",
    fundProvider: "ICMR, Government of India",
    translation: "https://github.com/MSCTR/Denovo-Proteogenomics-Pipeline",
    publications: "https://www.biorxiv.org/content/10.1101/2021.03.24.436751v1",
    members: ["Dr. Ravi Sirdeshmukh", "Dr. Nameeta Shah"],
  },
  {
    projectName: "GPR56 and TG2  and mesenchymal transition in Glioblastoma",
    fundProvider: "ICMR, Government of India",
    members: ["Dr. Ravi Sirdeshmukh", "Dr. Nameeta Shah"],
  },
  {
    projectName:
      "Immuno-Phenotyping of High-Grade Glioma Infiltrating Immune Cells Reveals Grade Specific Differences in Cells of Myeloid Origin",
    fundProvider: "MSMF, IISc",
    translation: "https://www.msctr.org/2021/06/03/flow-cytometry-data/",
    publications: "https://www.biorxiv.org/content/10.1101/2020.09.26.314542v1",
    members: ["Dr. Nameeta Shah"],
    collaborators: ["Dr. Siddharth Jhunjhunwala"],
  },
];

const NeuroOncology = () => {
  const router = useRouter();
  const openTeam = () => {
    router.push("/research/people#neuro-oncology");
  };
  return (
    <Section>
      <SectionContent>
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Research Programs
          </p>
          <p className="text-4xl font-bold uppercase my-3">Neuro Oncology</p>
          <p>
            Gliomas, the most common form of brain tumors of the adult CNS,
            originate from neuroepithelial tissue and are classified
            morphologically as astrocytic, oligodendroglial, ependymal, and
            choroid plexus tumors. Glioblastoma multiforme (grade IV
            astrocytoma; GBM) is one of the most aggressive forms of brain
            tumors and a primary area of focus for the Neurooncology Group at
            MSCTR.
            <br />
            <br /> Gliomas, originate from the neuro-epithelial tissue and are
            classified morphologically as astrocytic, oligodendroglial,
            ependymal and choroid plexus tumors. Glioblastoma multiforme (grade
            IV astrocytoma; GBM) is one of the most aggressive, invasive, and
            destructive malignancies and has attracted clinical attention
            globally. In addition to uncontrolled proliferation and diffuse
            tissue invasion, neuro-degeneration is another attribute and a hall
            mark of malignant gliomas, the mechanism of which is poorly
            understood. Thus, there may be several processes that may be common
            between gliomas and neuro-degenerative disorders.
            <br />
            <br />
            The focus of the Neuro-oncology Group at MSCTR will be: a. To
            continue the discovery effort of understanding these tumors and the
            dynamics of associated molecular patterns from a clinical
            perspective. Also to relate the findings to neuro-degenerative
            conditions. b. To develop well defined strategies, using the data
            that is already available, for translation to diagnostic, prognostic
            or therapeutic applications.
            <br />
            <br />
            We envision implementation of the two arms in parallel, through a
            multi-disciplinary team effort, involving basic scientists with
            expertise in high throughput technologies, cell biologists,
            clinicians and informaticians. Embedded in these efforts will be the
            mission of mentoring young clinicians and research scientists who
            will lead MSCTR both as independent scientists and as a
            well-coordinated team directed towards improved neuro oncology
            practices. This will ensure continued institutional efforts.
            Gliomas, particularly Glioblastoma, are one of the most targeted
            tumors in clinical oncology research globally. Hence, the center
            will aim for networking with other national and international
            clinical centers in our efforts to formulate pioneering treatment
            models for malignant Glioblastoma.
          </p>
        </ContentCard>
        <div className=" bg-msmf-dark flex items-center justify-between px-4 w-full">
          <div id="content" className="w-7/12 px-8 py-8">
            <p className="uppercase font-bold text-research">
              Principal Investigator
            </p>
            <p className="text-white font-semibold text-3xl">
              Dr Ravi Sirdeshmukh
            </p>
            <p className="text-xl text-white">
              Dr. Ravi Sirdeshmukh did his Ph.D. in Biochemistry from the Center
              for Cellular and Molecular Biology (CCMB), Hyderabad – a premier
              national laboratory. He also worked as a post-doctoral visiting
              associate at the Washington University Medical School, St Louis,
              MO, and a visiting Scientist at the National Institute of Health,
              USA. He worked at the CCMB for more than 2 decades, was holding
              the position of Director-Grade Scientist and heading the
              Proteomics Lab before joining the Institute of Bioinformatics as
              Distinguished Scientist. He now holds a joint appointment as
              Principal Advisor, Neuro-oncology Research at MSCTR. His research
              interests span in the areas of protein and nucleic acid
              biochemistry and his earlier work included RNA processing, mRNA
              stability, structure-function relationship of ‘ribonucleases’ and
              their regulation. More recently his interests have been in the
              areas of Proteomics of gliomas – a major class of brain tumors and
              Head & Neck cancers. At the CCMB, he had been the nodal scientist
              in CSIR network programs in Proteomics and also served as the
              Consortium Manager in CSIR Proteomics Network for International
              Collaborations. He is also associated with some of the
              International research initiatives in Proteomics such as Membrane
              Proteomics Initiative of AOHUPO and the ongoing Chromosome Centric
              Human Proteome Project initiated by HUPO. He is an expert reviewer
              for International Proteomics journals, a member of the Editorial
              Board of the International Journal of Proteomics and
              Bioinformatics. Ravi Sirdeshmukh serves on the research advisory
              panels of several Institutes and Centers in India and that of US
              Pharmacopeia for protein therapeutics. He is an elected member of
              the council of Human Proteome Organization (HUPO) and Asian
              Oceanian HUPO. He is the founder President of the Proteomics
              Society, India which is strongly dedicated to Proteomics Education
              and has played an important role in educational activities in
              proteomics in India through a large number of invited lectures,
              organization of training workshops, International Proteomics
              Conferences and Discussions. He has trained and mentored a number
              of young associates, Ph.D. students and post-doctoral fellows. At
              MSCTR, he is spearheading translational research programs in brain
              tumors.
            </p>
          </div>
          <div
            id="image"
            className="w-5/12 px-4 flex justify-center flex-col items-center"
          >
            <img
              src="https://cdn.ms-mf.org/images/Research/Rectangle 1470-2.png"
              alt="Smitha P K"
            />
            <p className="m-0 text-white text-xl">ravisirdeshmukh@gmail.com</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.ms-mf.org/images/Research/4_Program_Neuro group photo.jpg"
            alt="neuro-oncology-team"
          />
          <button onClick={openTeam} className="msmf__secondary-btn">
            Our Team
          </button>
        </div>
        <hr />
        {NeuroOncologyProjects.map((project, key) => (
          <ProgramCard key={key} {...project} />
        ))}
        <ContentCard>
          <p className="text-2xl font-bold text-[#6A6A6A] m-0 uppercase">
            Translations
          </p>
          <div className="flex flex-wrap w-full justify-around mt-4">
            <div className="transition-500 w-5/12 border border-neutral-500/20 rounded hover:shadow p-3 m-3">
              <div className="flex items-center ">
                <p className="text-base font-semibold m-0">
                  Recursive Consensus Clustering
                </p>
                <a
                  href="https://github.com/MSCTR/RecursiveConsensusClustering"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/assets/social-media-icons/icons8-github-120.svg"
                    className="w-6 h-6 m-0 ml-3 "
                  />
                </a>
                <a
                  href="https://www.msctr.org/2019/05/30/recursive-consensus-clustering/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/assets/social-media-icons/link.svg"
                    className="w-6 h-6 m-0 ml-3 "
                  />
                </a>
              </div>
              <p className="m-0 mt-2 text-sm font-medium text-neutral-500/70">
                Software - Free for academic use
              </p>
            </div>
            <div className="transition-500 w-5/12 border border-neutral-500/20 rounded hover:shadow p-3 m-3">
              <div className="flex items-center ">
                <p className="text-base font-semibold m-0">DeNoPro</p>
                <a
                  href="https://github.com/MSCTR/Denovo-Proteogenomics-Pipeline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/assets/social-media-icons/icons8-github-120.svg"
                    className="w-6 h-6 m-0 ml-2 "
                  />
                </a>
              </div>
              <p className="m-0 mt-2 text-sm font-medium text-neutral-500/70">
                Software - Free
              </p>
            </div>
            <div className="transition-500 w-5/12 border border-neutral-500/20 rounded hover:shadow p-3 m-3">
              <div className="flex items-center ">
                <p className="text-base font-semibold m-0">
                  Glioma Infiltrating Immune cell Flow Cytometry
                </p>
                <a
                  href="https://www.msctr.org/2021/06/03/flow-cytometry-data/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/assets/social-media-icons/link.svg"
                    className="w-6 h-6 m-0 ml-3 "
                  />
                </a>
              </div>
              <p className="m-0 mt-2 text-sm font-medium text-neutral-500/70">
                Dataset - Free
              </p>
            </div>
            <div className="transition-500 w-5/12 border border-neutral-500/20 rounded hover:shadow p-3 m-3">
              <div className="flex items-center ">
                <p className="text-base font-semibold m-0">3Dgelma</p>
                <a
                  href="https://github.com/MSCTR/3Dgelma"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src="/assets/social-media-icons/icons8-github-120.svg"
                    className="w-6 h-6 m-0 ml-2 "
                  />
                </a>
              </div>
              <p className="m-0 mt-2 text-sm font-medium text-neutral-500/70">
                Dataset - Free
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionContent>
    </Section>
  );
};

export default NeuroOncology;
