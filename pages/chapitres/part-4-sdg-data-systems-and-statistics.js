import ReportLayout from "layouts/ReportLayout";
import ReportParagraph from "components/ReportParagraph";
import ReportHeading from "components/ReportHeading";
import ReportSubheading from "components/ReportSubheading";
import ReportFigure from "components/ReportFigure";
import Emphasis from "components/Emphasis";
import Italics from "components/Italics";

const PartFour = () => (
  <ReportLayout
    color="#005a86"
    subtitle="Part 4"
    title="SDG Data Systems and Statistics"
  >
    <ReportParagraph>
      <Emphasis primary>
        The COVID-19 pandemic has prompted a massive shift in the demand for
        data, especially for timelier and higher-quality data (UNDESA, 2021). At
        the same time, socioeconomic impacts of the pandemic have rendered much
        of the pre-pandemic data less useful or outdated (Mahler et al., 2021).
        Governments have needed more rapid, geolocated, and granular data not
        only to track the trajectory of COVID-19 cases across their countries,
        but to ensure that basic resources for their citizens are targeted
        effectively and efficiently (UNStats, 2021b). With the elevated focus on
        and interest in data, COVID-19 has also set the stage for new user
        expectations, with many users &ndash; especially the general public
        &ndash; now expecting to obtain data in real time. As such, governments
        have had to find new ways to satisfy user demands with reduced budgets
        and staff resources, while also balancing data timeliness, precision,
        and quality needs. An SDSN initiative, the Thematic Research Network on
        Data and Statistics (TReNDS), mobilizes technical and policy-oriented
        solutions to advance the data revolution for sustainable development.
      </Emphasis>
    </ReportParagraph>
    <ReportParagraph>
      Partnerships across sectors have proven critical in helping to meet this
      challenge (UNStats, 2022c). And in many countries, national statistics
      offices (NSOs) have become innovators during the pandemic. They have
      engaged in partnerships that were previously few and far between &ndash;
      working with stakeholders across sectors, including civil society, the
      private sector, academia, and NGOs to accelerate data innovations for
      policymaking and SDG attainment.
    </ReportParagraph>
    <ReportParagraph>
      In this section, we highlight data innovations across sectors that have
      arisen as a result of the pandemic; discuss how these innovations have led
      to a greater focus on using data to enhance policymaking and SDG
      attainment; and share some of the key lessons learned to sustain and
      advance these developments to support SDG transformations.
    </ReportParagraph>
    <ReportHeading>
      4.1 Data innovations during the COVID-19 pandemic
    </ReportHeading>
    <ReportParagraph>
      Having timely, high-quality data has become the foundation of resilient
      and effective governments throughout the pandemic. However, COVID-19 has
      presented numerous obstacles to achieving this, including office closures;
      stretched government resources and budgets; significant disruptions to
      statistical operations; and delays in planned censuses, surveys, and other
      data programs (UN and World Bank, 2020; UNDESA, 2020).
    </ReportParagraph>
    <ReportParagraph>
      Across countries, pragmatic decisions have been made to reprioritize staff
      and resources to modernize data capture methods and processes.
      Non-traditional sources, including citizen science, social media data,
      mobile phone data, and satellite imagery have been introduced to fill data
      gaps, while improved dissemination schemes have made it easier for
      policymakers and the public to consume the data. To realize these feats,
      countries have embarked on a range of multi-disciplinary and cross-sector
      partnerships.
    </ReportParagraph>
    <ReportSubheading>
      Modernizing data-collection methods and processes
    </ReportSubheading>
    <ReportParagraph>
      Health risks as well as government measures introduced in response to the
      COVID-19 pandemic severely limited traditional mechanisms of primary data
      collection, particularly face-to-face surveys and other in-person
      data-capture methods. At the onset of the pandemic, NSOs around the world
      suspended face-to-face interviews and asked staff to work from home,
      although many lacked adequate technology and infrastructure for remote
      work (Hammer et al., 2021). According to a UN Statistics Division survey,
      two-thirds of national statistics offices reported that these disruptions
      limited their ability to produce essential data and meet international
      reporting requirements (World Bank, 2020). But the pandemic also presented
      an opportunity for countries to modernize their methods and processes
      &ndash; with the support of key global stakeholders, such as the World
      Bank &ndash; notably leveraging mobile and other remote technologies to
      improve enumeration strategies and data collection processes.
    </ReportParagraph>
    <ReportParagraph>
      In response to social distancing measures, for example, the World Bank
      helped countries quickly pivot to telephone surveys to conduct its
      flagship household survey, the Living Standards Measurement Study (LSMS),
      which collects socioeconomic and livelihood data in low-income and
      lower-middle-income countries. The LSMS also provided technical and
      financial assistance to several African countries, including Ethiopia,
      Malawi, Nigeria, Tanzania, and Uganda, to implement high-frequency
      telephone surveys of the pandemic&rsquo;s socioeconomic impacts (World
      Bank, 2022a).
    </ReportParagraph>
    <ReportParagraph>
      To administer its 2020 census, Ethiopia&rsquo;s Central Statistics Agency
      piloted its use of a public-domain Computer Assisted Personal Interviewing
      (CAPI) software package. Compared to the traditional paper-based approach
      used for previous censuses, the CAPI system provided more timely and
      accurate monitoring of field activities, allowing field teams to monitor
      the progress of enumeration activities and to analyze, in near real-time,
      the quality of data collected (Bruno et al., 2020). The CAPI system also
      enabled Ethiopia to introduce geographic information system (GIS)
      technologies to its census methodology, allowing enumerators to capture
      geotagged data at the household level and create associated map products
      for real-time monitoring and reporting. Several other countries within the
      region (including South Africa and Sierra Leone) have similarly adopted
      CAPI systems since the start of the pandemic (Concord Times, 2021;
      Statistics South Africa, n.d.).
    </ReportParagraph>
    <ReportParagraph>
      The Maldives National Bureau of Statistics was also able to continue key
      statistical activities during COVID-19 by adopting innovative methods
      (PARIS21, 2021b). The bureau moved from face-to-face interviews to
      telephone surveys to produce its monthly consumer price index, and
      reweighted variables in its 2019/2020 Household Income and Expenditure
      Survey to account for incomplete data collection during the pandemic
      (National Bureau of Statistics Maldives, n.d.). Individual weights were
      adjusted to account for non-interviewed enumeration blocks, enabling
      estimates to be produced that were representative of the entire
      population.
    </ReportParagraph>
    <ReportParagraph>
      During the pandemic, governments also began to use artificial intelligence
      (AI) and other novel data-collection methods to improve service delivery
      and policymaking. The Swedish region of Halland, for example, developed a
      comprehensive data warehouse to collect timely financial and clinical
      healthcare data from hospitals, primary care facilities, and ambulatory
      care facilities, integrating these disparate data sources into a single
      repository for real-time delivery of healthcare services (Emilsson, 2021).
      As a result, providers and researchers were able to analyze patient
      pathways, identify trends, and predict impacts on the capacity of
      intensive care units throughout the pandemic. In Greece too, the
      government launched a system based on machine-learning algorithms to
      determine which travelers entering the country should be tested for
      COVID-19, which helped authorities to better assess mitigation measures
      (&ldquo;Greece Used AI to Curb COVID,&rdquo; 2021).
    </ReportParagraph>
    <ReportSubheading>Non-traditional data sources</ReportSubheading>
    <ReportParagraph>
      The pandemic has demonstrated the value of innovation to fill data gaps
      for greater accuracy, timeliness, and granularity. Although governments
      have in the past relied primarily on traditional data sources, COVID-19
      helped accelerate the use of non-traditional sources &ndash; including
      citizen science, social media, and earth observation data &ndash; to
      support evidence-based decision making and further SDG attainment at the
      local and national levels (Khanna and Ramachandran, 2022).
    </ReportParagraph>
    <ReportParagraph>
      Marine litter inflicts significant damage on Africa&rsquo;s coastlines
      every year, particularly in Ghana. Yet continuous data to monitor marine
      litter in Ghana was lacking. To help fill the data gaps, Ghana turned to
      an innovative approach. In 2020, the country&rsquo;s statistical service
      partnered with a coalition of key stakeholders to introduce citizen
      science methods to monitor progress on SDG 14.1.1b (plastic debris
      density), aligning methodologies and existing initiatives within the
      country, building partnerships, and fostering more efficient data
      collection (SDSN TReNDS, 2021). And in 2021, Ghana became the first
      country to report on indicator 14.1.1b using citizen science data.
    </ReportParagraph>
    <ReportParagraph>
      Another example can be found in Colombia, where DANE, Colombia&rsquo;s
      National Administrative Department of Statistics, has begun using social
      media data to complement measurement of SDG 16 (promotion of peaceful and
      inclusive societies) (UNStats, 2022c). By analyzing data culled from
      Facebook, exchanges among diverse segments of the population are used to
      determine the prevalence of discrimination within the country, and to
      establish a baseline for SDG indicators 16.b.1 (proportion of the
      population who have felt harassed or discriminated against in the past 12
      months) and 16.7.2 (proportion of the population who believe
      decision-making is inclusive and responsive). Similarly, in Serbia, NSOs
      have supplemented their official statistics by analyzing Facebook
      advertising data to better measure emigration trends (IISD, 2021). Using
      social network data as a proxy for the number of Serbian emigrants and the
      rate of migration, they were able to determine how the pandemic had
      affected Serbian emigration rates.
    </ReportParagraph>
    <ReportParagraph>
      Earth Observation (EO) data is also being increasingly used to support
      evidence-based decision-making. For instance, during the pandemic,
      Thailand and the Philippines both used EO imagery alongside household
      survey and census data to assess poverty levels more accurately (Ernst and
      Soerakoesoemah, 2021). Similarly, GEOGLAM (Group on Earth Observations
      Global Agricultural Monitoring Initiative) uses EO data to improve food
      security and market transparency by producing timely and actionable
      remote-sensing information on agricultural conditions at the national,
      regional, and global scale (GEOGLAM, 2020). GEOGLAM produces monthly
      global &ldquo;Crop Monitors,&rdquo; providing near real-time information
      on crop conditions. Their EO datasets have been used by many low-and
      middle-income countries to make pre-harvest production forecasts, to
      identify anomalies associated with droughts and other weather-related
      events, and to assess the pandemic&rsquo;s impact on the global food
      supply (GEOGLAM, 2022).
    </ReportParagraph>
    <ReportFigure
      number="4.1"
      title="Use of non-traditional data sources by national statistics offices to monitor the COVID-19 pandemic"
      note=": Based on responses from 122 national statistical offices to the question: “Is your institution using alternative/non-traditional data sources/approaches to analyze or monitor aspects of the COVID-19 pandemic?”"
    />
    <ReportSubheading>New dissemination schemes</ReportSubheading>
    <ReportParagraph>
      COVID-19 has also significantly increased the demand for timely data among
      users who may lack technical data skills &ndash; prompting stakeholders to
      reevaluate their user-engagement and dissemination strategies. New dynamic
      dashboards and GIS products have been developed, as well as stronger data
      visualizations and infographics to facilitate a better understanding of
      data and statistics.
    </ReportParagraph>
    <ReportParagraph>
      For instance, in South America, the Colombian-based think-tank, Cepei (
      <Italics>Centro de Pensamiento Estrat&eacute;gico Internacional</Italics>)
      has partnered with Tableau and the UN Multi-Partner Trust Fund
      to&nbsp;launch the COVID-19 Data and Innovation Centre: a platform for
      sharing experiences, knowledge, and recommendations to enhance response
      and recovery efforts in the Global South (Cepei, 2020). The platform
      features data stories targeted toward the public and key decision-makers,
      as well as dashboards and open datasets relating to the pandemic.
    </ReportParagraph>
    <ReportParagraph>
      Eurostat, the European Union&rsquo;s statistical office, has also launched
      a regional dashboard where users can find monthly and quarterly updates on
      a selection of COVID-19 indicators, as well as brief descriptions of the
      economic and social situation in the latest available period (Eurostat,
      2022). The dashboard has proven very successful among users, with several
      additional features and functionalities added recently to help
      policymakers readily access the data they need to make timely decisions in
      response to the COVID-19 crisis. In addition to the dashboard, Eurostat
      has enhanced its monthly commentary with graphical analyses and other
      features to keep pace with user demands (UNStats, 2021a).
    </ReportParagraph>
    <ReportParagraph>
      At the national level, Canada leveraged investments in new analytics tools
      and dashboards during COVID-19 that enabled policymakers to make more
      informed decisions, providing them with richer context and much greater
      data disaggregation (Statistics Canada, 2022; UNStats, 2021c). For
      example, Canada&rsquo;s NSO has developed a statistical geospatial
      explorer that gives users the ability to generate data visualizations at a
      more granular level and produce custom tabs on a range of socioeconomic
      topics (Apolitical, 2021; Statistics Canada, 2020).
    </ReportParagraph>
    <ReportParagraph>
      In addition to data visualization tools, several institutions &ndash; such
      as Paraguay&rsquo;s National Institute of Statistics &ndash; have launched
      open data portals on their websites to make COVID-19 data readily
      available to the public and to respond to growing demands for public
      health information from policy-makers and civil society organizations
      alike (PARIS21, 2020).
    </ReportParagraph>
    <ReportSubheading>
      Innovative and cross-disciplinary partnerships
    </ReportSubheading>
    <ReportParagraph>
      The range of innovative partnerships built across the data sector in
      response to COVID-19 has also been a clear upside of the pandemic. This
      has proven that in times of crisis, new ways of working are needed to be
      able to pivot quickly and strategically, and that cross-sector
      partnerships are essential for building resiliency and innovation across
      government.
    </ReportParagraph>
    <ReportParagraph>
      This was especially true in Jamaica (UNStats, 2022b). Faced with a rapidly
      evolving pandemic situation and growing demand from users, the Statistical
      Institute of Jamaica (STATIN) acknowledged that a non-traditional approach
      to gathering data was required, and that they needed to improve research
      coordination and the production of data on COVID-19 impacts in the
      country. To achieve this, the institute established a national research
      agenda for COVID-19, linking research to policymaking and involving
      stakeholders from across sectors, including the Ministry of Health and
      Wellness, local academia, and the private sector. Additionally, they
      worked to improve research processes using a whole-of-society approach to
      data production, which led to the first nationally-representative
      telephone survey in Jamaica, conducted in collaboration with
      private-sector mobile phone networks. Moreover, partnerships with external
      actors prompted STATIN to reassess their administrative data sources and
      use them more efficiently, and to enhance their data-dissemination tools
      by including more user-friendly infographics.
    </ReportParagraph>
    <ReportParagraph>
      To generate timely and accurate population and infrastructure data in
      response to COVID-19, the government of Sierra Leone, alongside the
      statistical office and some ministries, partnered with a range of leading
      data-science and geospatial organizations from the private sector
      (including Esri and Maxar), as well as regional commissions (including the
      UN Economic Commission for Africa) and NGOs (including GRID3 &ndash;
      Geo-Referenced Infrastructure and Demographic Data for Development). These
      partnerships enabled the country to produce critical geospatial datasets,
      analyses, and tools to support the government&rsquo;s COVID-19 response,
      publishing them under an open, non-commercial license (Government of
      Sierra Leone, 2020).
    </ReportParagraph>
    <ReportParagraph>
      In Chile too, the government worked across sectors to develop a data
      platform to provide the public with timely updates on COVID-19 (UNStats,
      2020). The country&rsquo;s National System of Coordination of Territorial
      Information (SNIT) worked alongside various ministries, the NSO, and
      private sector partners, such as Esri, to develop a COVID-19 Territorial
      Viewer so that all citizens could access territorial information on
      COVID-19 at the national, regional, and municipal levels (IDE Chile,
      2022). A team of journalists and designers contributed to the development
      of the Viewer to ensure that the data was easy for the public to visualize
      and understand.
    </ReportParagraph>
    <ReportParagraph>
      New multi-stakeholder partnerships for the SDGs have also taken shape
      during the pandemic. For instance, in Senegal, multi-stakeholder and
      cross-sectoral partnerships helped enhance capacity-building and
      knowledge-sharing around priority land-use indicators and small-area
      estimation methodologies (Global Partnership for Sustainable Development
      Data, 2022). As part of the multi-stakeholder Data For Now initiative,
      Senegal&rsquo;s National Agency of Statistics and Demography (ANSD,{" "}
      <Italics>
        Agence Nationale de Statistique et de la D&eacute;mographie
      </Italics>
      ) also partnered with UN Habitat, the UN Food and Agriculture Organization
      (FAO), and the UN Statistics Division to build capacity for measuring SDG
      indicators 2.3.1 and 2.3.2.
    </ReportParagraph>
    <ReportHeading>4.2 Emerging lessons for data systems</ReportHeading>
    <ReportParagraph>
      The country examples we have cited underscore recent shifts (in a large
      part due to COVID-19) towards better use of data to inform policymaking
      and SDG attainment. While the pandemic continues to evolve, lessons and
      trends that are likely to continue include the following:
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>
        &bull; The value of developing data that is fit-for-purpose.
      </Emphasis>{" "}
      The pandemic demonstrated that data is not valuable if it is not designed
      with users&rsquo; needs in mind. Data must be timely, disaggregated,
      high-quality, and presented in a format and through a means that
      decision-makers can understand and act quickly on.
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>
        &bull; Post-pandemic, traditional approaches to survey taking, data
        production, and analysis will no longer satisfy user needs &ndash;
        non-traditional approaches are required.
      </Emphasis>{" "}
      As highlighted by the numerous country cases above, governments have
      successfully adopted new data approaches to keep pace with demands that
      have permanently raised user expectations. Partnerships are essential to
      continue to harness these innovations.
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>
        &bull; The importance and value of cross-sector partnerships.
      </Emphasis>{" "}
      Before the pandemic, multi-disciplinary and cross-sector partnerships
      within the data sector were still novel. Fortunately, COVID-19 has changed
      this for the better and enabled countries to take a whole-of-government
      approach to their data strategies.
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>
        &bull; Dissemination efforts should be prioritized alongside production
        efforts.
      </Emphasis>{" "}
      The pandemic prompted the development of hundreds of innovative platforms
      and dashboards to enable the public to understand the impact of COVID in
      near real time. It also encouraged governments to rethink their strategies
      to ensure that data production is accompanied by effective dissemination
      strategies that make data easier to use and understand for individuals who
      may lack technical aptitude and data literacy skills.
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>&bull; Data innovations are working.</Emphasis> As demonstrated,
      many countries are seeing positive, tangible results from the innovations
      they have adopted. For instance, since developing their new products, use
      of Statistics Canada&rsquo;s website has tripled (UNStats, 2021c).
    </ReportParagraph>
    <ReportParagraph>
      <Emphasis>
        &bull; Data innovations are emerging beyond the national level.
      </Emphasis>{" "}
      The pandemic has spurred innovations in data across other sectors,
      including within civil society (where we are seeing greater civic
      engagement in data to hold governments accountable) and the private sector
      (where there have been new efforts to improve ESG reporting) (Cameron,
      2021; Chinn et al., 2021).
    </ReportParagraph>
    <ReportParagraph>
      The COVID-19 pandemic is a major setback for sustainable development
      everywhere. Yet as with other major crises in the past, new ideas emerged
      during the pandemic that may help advance SDG policies and roadmaps to
      2030 and beyond. Data systems and statistics were mobilized in new ways to
      inform countries&rsquo; responses to the pandemic. In particular, the
      pandemic underscored the value of non-traditional data sources and
      approaches, including citizen science, social media, and earth observation
      data. It also catalyzed data partnerships and innovations across sectors
      and fostered the development of more fit-for-purpose, timely, and
      disaggregated data to support targeted policy interventions. Global
      efforts, including by the UN Statistical Commission, aim to solidify these
      improvements and innovations across nations and further greater
      cross-sector knowledge exchange (UNStats, 2022a).
    </ReportParagraph>
    <ReportParagraph>
      Looking ahead, financing data systems continues to be a critical
      challenge, especially in LICs and LMICs. Despite heightened demand for
      data, its financing remains stagnant (PARIS21, 2021a). Cross-sectoral
      partnerships and initiatives to spur innovation &ndash; such as the Joint
      SDG Fund of the United Nations and the recently launched Clearinghouse for
      Financing Development Data &ndash; are positive developments, but to fully
      prepare countries for future epidemics and ensure the achievement of the
      2030 agenda, significant investments in financing for national statistical
      and health information systems are paramount (Joint SDG Fund, 2022;
      PARIS21, 2021c).
    </ReportParagraph>
  </ReportLayout>
);

export default PartFour;
