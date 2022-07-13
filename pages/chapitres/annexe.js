import ReportLayout from "layouts/ReportLayout";
import ReportParagraph from "components/ReportParagraph";
import ReportFigure from "components/ReportFigure";
import ReportTable from "components/ReportTable";
import ReportHeading from "components/ReportHeading";
import ReportSubheading from "components/ReportSubheading";
import ReportFootnote from "components/ReportFootnote";
import { Box } from "@mui/material";

const Annexe = () => (
  <ReportLayout
    color="#005a86"
    subtitle="Méthodologies et tables des indicateurs"
    title="Annexe"
  >
    <ReportHeading>
      A.1. Interpr&eacute;tation des r&eacute;sultats de l&rsquo;indice des ODD
      et des tableaux de bord
    </ReportHeading>
    <ReportParagraph>
      Ce Rapport sur le d&eacute;veloppement durable est un rapport pilote de
      r&eacute;f&eacute;rence qui d&eacute;crit les progr&egrave;s accomplis par
      le B&eacute;nin dans la r&eacute;alisation des ODD et indique les domaines
      n&eacute;cessitant des progr&egrave;s plus rapides. Le score global de
      l&rsquo;indice des ODD et les scores pour les ODD individuels peuvent
      &ecirc;tre interpr&eacute;t&eacute;s comme un pourcentage de performance
      optimale. La diff&eacute;rence entre 100 et les scores des pays est donc
      la distance en points de pourcentage qui doit &ecirc;tre surmont&eacute;e
      pour atteindre une performance optimale en mati&egrave;re d&rsquo;ODD. Les
      m&ecirc;mes indicateurs sont utilis&eacute;s pour tous les pays de la
      Communaut&eacute; Economique des Etats de l&rsquo;Afrique de l&rsquo;Ouest
      (CEDEAO), afin de g&eacute;n&eacute;rer les indices et tableaux de bord
      des ODD comparables.
    </ReportParagraph>
    <ReportParagraph>
      Les tableaux de bord des ODD fournissent une repr&eacute;sentation
      visuelle de la performance des pays par ODD. La palette de couleurs
      &laquo;&nbsp;feux de circulation&nbsp;&raquo; (vert, jaune, orange et
      rouge) illustre &agrave; quel point un pays est loin d&rsquo;atteindre un
      objectif particulier.
    </ReportParagraph>
    <ReportParagraph>
      Les tendances des ODD indiquent si un pays est sur la bonne voie pour
      atteindre un objectif particulier d&rsquo;ici 2030, en fonction des
      performances r&eacute;centes d&rsquo;un indicateur donn&eacute;. Les
      tendances des indicateurs sont ensuite agr&eacute;g&eacute;es au niveau de
      l&rsquo;objectif pour donner une indication de la fa&ccedil;on dont le
      pays progresse vers cet ODD.
    </ReportParagraph>
    <ReportParagraph>
      Cette section fournit un bref r&eacute;sum&eacute; des m&eacute;thodes
      utilis&eacute;es pour calculer l&rsquo;indice des ODD et les tableaux de
      bord. La m&eacute;thodologie utilis&eacute;e est la m&ecirc;me que dans le
      &laquo;&nbsp;Rapport sur le d&eacute;veloppement durable&nbsp;&raquo;. Un
      document m&eacute;thodologique d&eacute;taill&eacute; est accessible en
      ligne (Lafortune et al., 2018). Le Centre commun de recherche (CCR) de la
      Commission europ&eacute;enne a r&eacute;alis&eacute; un audit statistique
      ind&eacute;pendant de la m&eacute;thodologie et des r&eacute;sultats du
      rapport en 2019. L&rsquo;audit a examin&eacute; la coh&eacute;rence
      conceptuelle et statistique de la structure de l&rsquo;indice. Le rapport
      d&rsquo;audit statistique d&eacute;taill&eacute; et les tableaux de
      donn&eacute;es suppl&eacute;mentaires sont disponibles sur notre site Web
      : www.sdgindex.org
    </ReportParagraph>
    <ReportHeading>A.2. Principales limites</ReportHeading>
    <ReportParagraph>
      Malgr&eacute; tous nos efforts pour identifier les donn&eacute;es
      relatives aux ODD, plusieurs lacunes en mati&egrave;re d&rsquo;indicateurs
      et de donn&eacute;es persistent au niveau international (se
      r&eacute;f&eacute;rer au tableau 5.2 de l&rsquo;annexe
      m&eacute;thodologique du SDR, 2022). Pour assurer une comparabilit&eacute;
      maximale des donn&eacute;es, nous n&rsquo;utilisons que des donn&eacute;es
      provenant de sources comparables &agrave; l&rsquo;&eacute;chelle
      internationale. Les fournisseurs de ces donn&eacute;es peuvent ajuster les
      donn&eacute;es nationales pour assurer la comparabilit&eacute;
      internationale. Par cons&eacute;quent, certains points de donn&eacute;es
      pr&eacute;sent&eacute;s dans le pr&eacute;sent rapport peuvent
      diff&eacute;rer des donn&eacute;es disponibles aupr&egrave;s des instituts
      nationaux de statistique ou d&rsquo;autres sources nationales. En outre,
      la longueur des processus de validation par les organisations
      internationales peut entra&icirc;ner des retards importants dans la
      publication de certaines donn&eacute;es. Les instituts nationaux de
      statistique peuvent donc disposer de donn&eacute;es plus r&eacute;centes
      pour certains indicateurs que celles pr&eacute;sent&eacute;es dans le
      pr&eacute;sent rapport.
    </ReportParagraph>
    <ReportHeading>A.3. M&eacute;thodologie</ReportHeading>
    <ReportParagraph>
      Ce Rapport sur le d&eacute;veloppement durable pour le B&eacute;nin
      fournit une &eacute;valuation compl&egrave;te de la distance &agrave;
      parcourir pour atteindre les cibles, sur la base des donn&eacute;es les
      plus r&eacute;centes disponibles couvrant l&rsquo;ensemble des 15 pays de
      la CEDEAO. Le rapport de cette ann&eacute;e comprend 91&nbsp;indicateurs,
      dont 77 indicateurs sont issus du Rapport sur le d&eacute;veloppement
      durable 2022, auxquels 14&nbsp;indicateurs pertinents dans le contexte du
      B&eacute;nin et du reste de la CEDEAO ont &eacute;t&eacute;
      ajout&eacute;s.
    </ReportParagraph>
    <ReportParagraph>
      Les sections suivantes donnent un aper&ccedil;u de la m&eacute;thodologie
      de s&eacute;lection, de normalisation, d&rsquo;agr&eacute;gation et de
      g&eacute;n&eacute;ration d&rsquo;indications sur les tendances. Des
      informations suppl&eacute;mentaires, y compris des donn&eacute;es brutes,
      des tableaux de donn&eacute;es suppl&eacute;mentaires et des tests de
      sensibilit&eacute;, sont disponibles en ligne.
    </ReportParagraph>
    <ReportSubheading>
      A.3.1. S&eacute;lection des donn&eacute;es
    </ReportSubheading>
    <ReportParagraph>
      Dans la mesure du possible, le rapport utilise des indicateurs officiels
      des ODD approuv&eacute;s par la Commission de statistique des Nations
      Unies. Lorsqu&rsquo;il y a des lacunes dans les donn&eacute;es ou des
      donn&eacute;es insuffisantes disponibles pour un indicateur officiel, nous
      incluons d&rsquo;autres mesures provenant de fournisseurs officiels et non
      officiels. Cinq crit&egrave;res de s&eacute;lection des indicateurs ont
      &eacute;t&eacute; utilis&eacute;s pour d&eacute;terminer les mesures
      appropri&eacute;es &agrave; inclure dans le rapport :
    </ReportParagraph>
    <ReportParagraph>
      1. Pertinence et applicabilit&eacute; &agrave; un large &eacute;ventail de
      contextes nationaux.
    </ReportParagraph>
    <ReportParagraph>
      2. Ad&eacute;quation statistique : les indicateurs
      s&eacute;lectionn&eacute;s repr&eacute;sentent des mesures valides et
      fiables.
    </ReportParagraph>
    <ReportParagraph>
      3. Actualit&eacute; : les indicateurs s&eacute;lectionn&eacute;s sont
      &agrave; jour et publi&eacute;s selon un calendrier raisonnablement
      rapide.
    </ReportParagraph>
    <ReportParagraph>
      4. Couverture : les donn&eacute;es doivent &ecirc;tre disponibles pour au
      moins 80% des &Eacute;tats membres de la CEDEAO ayant une population
      nationale sup&eacute;rieure &agrave; 1 million d&rsquo;habitants
      <ReportFootnote
        number="24"
        content="Il existe une exception à cette règle : Enfants impliqués dans le travail
        des enfants"
      />
      .
    </ReportParagraph>
    <ReportParagraph>
      5. Permettre de mesurer la distance par rapport aux cibles (possible pour
      d&eacute;terminer les performances optimales).
    </ReportParagraph>
    <ReportSubheading>Sources de donn&eacute;es</ReportSubheading>
    <ReportParagraph>
      Les donn&eacute;es incluses dans le pr&eacute;sent rapport proviennent
      d&rsquo;un m&eacute;lange de sources de donn&eacute;es officielles et non
      officielles. La plupart des donn&eacute;es (environ les deux tiers)
      proviennent d&rsquo;organisations internationales (Banque mondiale, OCDE,
      OMS, FAO, OIT, UNICEF, autres) qui disposent de processus de validation
      des donn&eacute;es &eacute;tendus et rigoureux. D&rsquo;autres sources de
      donn&eacute;es (environ un tiers) proviennent de statistiques moins
      traditionnelles, notamment des enqu&ecirc;tes aupr&egrave;s des
      m&eacute;nages (Gallup World Poll), des organisations et des
      r&eacute;seaux de la soci&eacute;t&eacute; civile (Oxfam, Tax Justice
      Network, World Justice Project, Reporters sans fronti&egrave;res, et
      autres) et des revues &agrave; comit&eacute; de lecture. La liste
      compl&egrave;te des indicateurs et des sources de donn&eacute;es est
      ci-dessous (Tableau A.1.)
    </ReportParagraph>
    <ReportSubheading>
      A.3.2. Donn&eacute;es manquantes et imputations
    </ReportSubheading>
    <ReportParagraph>
      L&rsquo;objectif de ce rapport est d&rsquo;accompagner le pays pour le
      suivi et &agrave; l&rsquo;&eacute;valuation de ses progr&egrave;s et
      efforts pour la mise en œuvre de l&rsquo;Agenda 2030&nbsp;; sur la base de
      donn&eacute;es disponibles et solides. Afin de minimiser les biais dus aux
      donn&eacute;es manquantes, l&rsquo;indice ODD ne comprend que les pays qui
      disposent de donn&eacute;es pour au moins 80 % des indicateurs inclus dans
      le rapport. Le Cabo Verde et la Guin&eacute;e-Bissau n&rsquo;ont pas
      &eacute;t&eacute; inclus dans la comparaison des indices ODD, en raison de
      la disponibilit&eacute; insuffisante des donn&eacute;es. Le Cabo Verde
      enregistre 19 valeurs manquantes, soit 21% de l&rsquo;ensemble des
      indicateurs&nbsp;; et 20 valeurs sont manquantes pour la
      Guin&eacute;e-Bissau, soit 22% des indicateurs. Les deux pays ont
      n&eacute;anmoins &eacute;t&eacute; conserv&eacute;s dans les tableaux de
      bord (Partie&nbsp;1) et l&rsquo;analyse des &laquo;&nbsp;Six
      Transformations &raquo; (Partie&nbsp;2.2).
    </ReportParagraph>
    <ReportParagraph>
      &Eacute;tant donn&eacute; que de nombreuses priorit&eacute;s en
      mati&egrave;re d&rsquo;ODD ne disposent pas de mod&egrave;les statistiques
      largement accept&eacute;s pour imputer les donn&eacute;es au niveau des
      pays, nous n&rsquo;avons g&eacute;n&eacute;ralement pas imput&eacute; ou
      mod&eacute;lis&eacute; les donn&eacute;es manquantes, &agrave;
      l&rsquo;exception de quelques circonstances exceptionnelles. La liste des
      indicateurs o&ugrave; les imputations sont effectu&eacute;es est
      disponible en ligne.
    </ReportParagraph>
    <ReportSubheading>
      A.3.3. M&eacute;thode de construction de l&rsquo;indice des ODD et des
      tableaux de bord
    </ReportSubheading>
    <ReportParagraph>
      La proc&eacute;dure de calcul de l&rsquo;indice des ODD comportait trois
      &eacute;tapes : (i) &eacute;tablir des seuils de performance et censurer
      les valeurs extr&ecirc;mes &agrave; partir de la distribution de chaque
      indicateur ; ii) redimensionner les donn&eacute;es pour assurer la
      comparabilit&eacute; entre les indicateurs (normalisation) ; iii)
      agr&eacute;ger les indicateurs au sein des ODD et entre eux.
    </ReportParagraph>
    <ReportSubheading>
      &Eacute;tablissement de seuils de performance
    </ReportSubheading>
    <ReportParagraph>
      Pour rendre les donn&eacute;es comparables entre les indicateurs, chaque
      variable a &eacute;t&eacute; redimensionn&eacute;e de 0 &agrave; 100, la
      pire performance &eacute;tant indiqu&eacute;e par 0 et 100
      d&eacute;crivant l&rsquo;optimum. Le redimensionnement est
      g&eacute;n&eacute;ralement tr&egrave;s sensible au choix des limites et
      des valeurs extr&ecirc;mes (valeurs aberrantes) aux deux
      extr&eacute;mit&eacute;s de la distribution. Ces derniers peuvent devenir
      des seuils involontaires et introduire une variabilit&eacute; fallacieuse
      dans les donn&eacute;es. Par cons&eacute;quent, le choix des limites
      sup&eacute;rieure et inf&eacute;rieure peut affecter le classement relatif
      des pays dans l&rsquo;indice.
    </ReportParagraph>
    <ReportParagraph>
      La limite sup&eacute;rieure de chaque indicateur a &eacute;t&eacute;
      d&eacute;termin&eacute;e &agrave; l&rsquo;aide d&rsquo;un arbre de
      d&eacute;cision en cinq &eacute;tapes :
    </ReportParagraph>
    <ReportParagraph>
      1. Utiliser des seuils quantitatifs absolus dans les ODD et les objectifs
      : par exemple, la pauvret&eacute; z&eacute;ro, l&rsquo;ach&egrave;vement
      universel des &eacute;tudes, l&rsquo;acc&egrave;s universel &agrave;
      l&rsquo;eau et &agrave; l&rsquo;assainissement, la pleine
      &eacute;galit&eacute; des sexes.
    </ReportParagraph>
    <ReportParagraph>
      2. Lorsqu&rsquo;aucune cible explicite des ODD n&rsquo;est disponible,
      appliquez le principe &laquo;&nbsp;Ne laissez personne de
      c&ocirc;t&eacute;&nbsp;&raquo; pour fixer une limite sup&eacute;rieure
      &agrave; l&rsquo;acc&egrave;s universel ou &agrave; la privation
      z&eacute;ro.
    </ReportParagraph>
    <ReportParagraph>
      3. Lorsqu&rsquo;il existe des objectifs scientifiques qui doivent
      &ecirc;tre atteints d&rsquo;ici 2030 ou plus tard, utilisez-les pour fixer
      une limite sup&eacute;rieure de 100 % (p. ex. z&eacute;ro &eacute;mission
      de gaz &agrave; effet de serre provenant du CO₂, comme l&rsquo;exige au
      plus tard 2050 pour rester &agrave; 1,5 &deg;C, une gestion durable
      &agrave; 100 % des p&ecirc;ches).
    </ReportParagraph>
    <ReportParagraph>
      4. Lorsque plusieurs pays d&eacute;passent d&eacute;j&agrave; une cible
      des ODD, utilisez la moyenne des 5 pays les plus performants (par exemple,
      la mortalit&eacute; infantile).
    </ReportParagraph>
    <ReportParagraph>
      5. Pour tous les autres indicateurs, utiliser la moyenne des indicateurs
      les plus performants.
    </ReportParagraph>
    <ReportParagraph>
      Ces principes interpr&egrave;tent les ODD comme des &laquo;&nbsp;cibles
      extensibles&nbsp;&raquo; et attirent l&rsquo;attention sur les indicateurs
      o&ugrave; un pays est en retard. La limite inf&eacute;rieure a
      &eacute;t&eacute; d&eacute;finie au 2,5<sup>e</sup> percentile de la
      distribution. Chaque distribution d&rsquo;indicateur a &eacute;t&eacute;
      censur&eacute;e, de sorte que toutes les valeurs d&eacute;passant la
      limite sup&eacute;rieure ont obtenu un score de 100 et les valeurs
      inf&eacute;rieures &agrave; la limite inf&eacute;rieure ont obtenu un
      score de 0.
    </ReportParagraph>
    <ReportSubheading>Normalization</ReportSubheading>
    <ReportParagraph>
      Apr&egrave;s avoir &eacute;tabli les limites sup&eacute;rieure et
      inf&eacute;rieure, les variables ont &eacute;t&eacute; transform&eacute;es
      lin&eacute;airement sur une &eacute;chelle comprise entre 0 et 100
      &agrave; l&rsquo;aide de la formule de redimensionnement suivante pour la
      plage [0 ; 100] :
    </ReportParagraph>
    <Box display="flex" justifyContent="center">
      <img
        src="/static/chapters/normalization-formula.webp"
        style={{
          maxWidth: "50%",
          border: 0,
        }}
      />
    </Box>
    <ReportParagraph>
      O&ugrave; x est la valeur brute des donn&eacute;es ; max/min
      d&eacute;signent les limites sup&eacute;rieure et inf&eacute;rieure,
      respectivement ; et x&rsquo; est la valeur normalis&eacute;e apr&egrave;s
      redimensionnement.
    </ReportParagraph>
    <ReportParagraph>
      L&rsquo;&eacute;quation de redimensionnement a permis de s&rsquo;assurer
      que toutes les variables redimensionn&eacute;es &eacute;taient
      exprim&eacute;es sous forme de variables ascendantes (c.-&agrave;-d. des
      valeurs plus &eacute;lev&eacute;es indiquaient un meilleur rendement). De
      cette fa&ccedil;on, les donn&eacute;es redimensionn&eacute;es sont
      devenues faciles &agrave; interpr&eacute;ter et &agrave; comparer pour
      tous les indicateurs : un pays qui obtient un score de 50 sur une variable
      est &agrave; mi-chemin de l&rsquo;atteinte de la valeur optimale ; un pays
      avec un score de 75 a parcouru les trois quarts de la distance du pire au
      meilleur.
    </ReportParagraph>
    <ReportSubheading>Pond&eacute;ration et agr&eacute;gation</ReportSubheading>
    <ReportParagraph>
      Les r&eacute;sultats de plusieurs s&eacute;ries de consultations
      d&rsquo;experts sur les versions ant&eacute;rieures de l&rsquo;indice des
      ODD ont clairement montr&eacute; qu&rsquo;il n&rsquo;y avait pas de
      consensus au sein des diff&eacute;rentes communaut&eacute;s
      &eacute;pist&eacute;miques sur l&rsquo;attribution de poids plus
      &eacute;lev&eacute;s &agrave; certains ODD qu&rsquo;&agrave;
      d&rsquo;autres. En tant qu&rsquo;hypoth&egrave;se normative, nous avons
      donc opt&eacute; pour un poids fixe et &eacute;gal &agrave; chaque ODD
      afin de refl&eacute;ter l&rsquo;engagement des d&eacute;cideurs politiques
      &agrave; traiter tous les ODD de mani&egrave;re &eacute;gale et comme un
      ensemble int&eacute;gr&eacute; et indivisible d&rsquo;objectifs. Cela
      implique que pour am&eacute;liorer leur score de l&rsquo;indice des ODD,
      les pays doivent accorder une attention particuli&egrave;re &agrave; tous
      les objectifs, en mettant l&rsquo;accent sur les objectifs o&ugrave; ils
      sont les plus &eacute;loign&eacute;s de la r&eacute;alisation des ODD et
      o&ugrave; les progr&egrave;s progressifs devraient donc &ecirc;tre les
      plus rapides.
    </ReportParagraph>
    <ReportParagraph>
      Pour calculer l&rsquo;indice ODD, nous estimons d&rsquo;abord les scores
      pour chaque objectif en utilisant la moyenne arithm&eacute;tique des
      indicateurs pour cet objectif. Ces scores d&rsquo;objectifs sont ensuite
      moyenn&eacute;s sur les 17 ODD pour obtenir le score de l&rsquo;indice
      ODD. Divers tests de sensibilit&eacute; sont disponibles en ligne, y
      compris des comparaisons de la moyenne arithm&eacute;tique par rapport
      &agrave; la moyenne g&eacute;om&eacute;trique et des simulations de
      Monte-Carlo au niveau de l&rsquo;indice et de l&rsquo;objectif. Les
      simulations Monte-Carlo appellent &agrave; la prudence dans
      l&rsquo;interpr&eacute;tation de petites diff&eacute;rences dans les
      scores et les classements de l&rsquo;indice entre les pays, car ceux-ci
      peuvent &ecirc;tre sensibles au syst&egrave;me de pond&eacute;ration.
    </ReportParagraph>
    <ReportSubheading>Tableaux</ReportSubheading>
    <ReportParagraph>
      Nous avons introduit des seuils quantitatifs suppl&eacute;mentaires pour
      chaque indicateur afin de regrouper les pays dans un tableau des
      &laquo;&nbsp;feux de signalisation&nbsp;&raquo;. Des seuils ont
      &eacute;t&eacute; &eacute;tablis sur la base de techniques statistiques et
      dans le cadre de diverses s&eacute;ries de consultations avec des experts
      men&eacute;es depuis 2016.
    </ReportParagraph>
    <ReportParagraph>
      La moyenne de tous les indicateurs d&rsquo;un ODD peut masquer des
      domaines de pr&eacute;occupation politique si un pays obtient de bons
      r&eacute;sultats sur la plupart des indicateurs, mais fait face &agrave;
      de graves lacunes sur un ou deux param&egrave;tres au sein du m&ecirc;me
      ODD (souvent appel&eacute; la question de la
      &laquo;&nbsp;substituabilit&eacute;&nbsp;&raquo; ou de la
      &laquo;&nbsp;compensation&nbsp;&raquo;). Cela s&rsquo;applique en
      particulier aux pays &agrave; revenu &eacute;lev&eacute; et aux pays
      &agrave; revenu interm&eacute;diaire de la tranche sup&eacute;rieure qui
      ont r&eacute;alis&eacute; des progr&egrave;s significatifs sur de
      nombreuses dimensions des ODD, mais qui peuvent &ecirc;tre
      confront&eacute;s &agrave; de graves lacunes sur des variables
      individuelles.
    </ReportParagraph>
    <ReportParagraph>
      En cons&eacute;quence, les tableaux de bord des ODD se concentrent
      exclusivement sur les deux variables sur lesquelles un pays obtient les
      moins bons r&eacute;sultats. Nous avons appliqu&eacute; la r&egrave;gle
      ajout&eacute;e selon laquelle une note rouge n&rsquo;&eacute;tait
      appliqu&eacute;e que si les deux indicateurs les moins performants
      obtenaient un score rouge. De m&ecirc;me, pour obtenir un score vert, les
      deux indicateurs devaient &ecirc;tre verts. Plus de d&eacute;tails sur la
      construction des tableaux de bord sont accessibles en ligne.
    </ReportParagraph>
    <ReportSubheading>Tendances des ODD</ReportSubheading>
    <ReportParagraph>
      &Agrave; l&rsquo;aide de donn&eacute;es historiques, nous estimons
      &agrave; quelle vitesse un pays a progress&eacute; vers un ODD et
      d&eacute;terminons si, s&rsquo;il est extrapol&eacute; &agrave;
      l&rsquo;avenir, ce rythme sera suffisant pour atteindre l&rsquo;ODD
      d&rsquo;ici 2030. Pour chaque indicateur, la r&eacute;alisation des ODD
      est d&eacute;finie par le seuil vert d&eacute;fini pour les tableaux de
      bord des ODD. La diff&eacute;rence de points de pourcentage entre le seuil
      vert et le score normalis&eacute; du pays indique l&rsquo;&eacute;cart qui
      doit &ecirc;tre combl&eacute; pour atteindre cet objectif. Pour estimer
      les tendances au niveau de l&rsquo;indicateur, nous avons calcul&eacute;
      les taux de croissance annuels lin&eacute;aires (c.-&agrave;-d. les
      pourcentages d&rsquo;am&eacute;lioration annuels) n&eacute;cessaires pour
      atteindre l&rsquo;objectif d&rsquo;ici 2030 (c.-&agrave;-d. 2015-2030),
      que nous avons compar&eacute; au taux de croissance annuel moyen au cours
      de la p&eacute;riode la plus r&eacute;cente depuis l&rsquo;adoption des
      ODD en 2015 (p. ex. 2015-2019). Les progr&egrave;s vers la
      r&eacute;alisation d&rsquo;un indicateur particulier sont d&eacute;crits
      &agrave; l&rsquo;aide d&rsquo;un syst&egrave;me &agrave; 4 fl&egrave;ches
      (Figure&nbsp;A.1). La Figure&nbsp;A.2 illustre graphiquement la
      m&eacute;thodologie.
    </ReportParagraph>
    <ReportParagraph>
      &Eacute;tant donn&eacute; que les projections sont bas&eacute;es sur le
      taux de croissance pass&eacute; sur plusieurs ann&eacute;es, un pays peut
      avoir observ&eacute; une baisse de performance au cours de la
      derni&egrave;re ann&eacute;e (par exemple en raison de l&rsquo;impact de
      la COVID-19), mais &ecirc;tre toujours consid&eacute;r&eacute; comme
      &eacute;tant sur la bonne voie. Cette m&eacute;thodologie met
      l&rsquo;accent sur les changements structurels &agrave; long terme au fil
      du temps depuis l&rsquo;adoption des ODD en 2015, et moins sur les
      changements annuels qui peuvent &ecirc;tre cycliques ou temporaires.
    </ReportParagraph>
    <ReportFigure
      number="A-1"
      title="Le système à 4 flèches pour désigner les tendances des ODD"
      format="webp"
    />
    <ReportFigure
      number="A-2"
      title="Représentation graphique de la méthodologie des tendances des ODD"
      format="webp"
      source="Auteurs"
    />
    <ReportTable
      number="A-1.1"
      format="webp"
      title="Indicateurs inclus dans le rapport pilote de référence « Indice et tableaux de bord des ODD au Bénin »"
    />
    <ReportTable number="A-1.2" format="webp" title="Suite" />
    <ReportTable number="A-1.3" format="webp" title="Suite" />
    <ReportTable number="A-1.4" format="webp" title="Suite" />
    <ReportTable number="A-1.5" format="webp" title="Suite" />
    <ReportTable number="A-1.6" format="webp" title="Suite" />
    <ReportTable number="A-1.7" format="webp" title="Suite" />
    <ReportTable number="A-1.8" format="webp" title="Suite" />
    <ReportTable
      number="A-1.9"
      format="webp"
      title="Suite"
      note={
        <>
          <strong>Légende à noter </strong>
          <p>
            [a] Indicateur non issu du Rapport sur le développement durable ;
            ajouté pour leur pertinence dans le contexte du Bénin et de la
            CEDEAO.
          </p>
          <p>
            [b] Indicateur utilisé pour les graphiques de l&apos;analyse des «
            Six Transformations » (Partie 2.2).
          </p>
        </>
      }
    />
    <ReportSubheading>
      A.3.4 &laquo; Ne laisser personne de c&ocirc;t&eacute; &raquo;
    </ReportSubheading>
    <ReportParagraph>
      La m&eacute;thodologie d&eacute;crite ci-dessus a &eacute;t&eacute;
      utilis&eacute;e pour calculer, &agrave; l&rsquo;&eacute;chelle des 12
      d&eacute;partements du B&eacute;nin, des indices couvrant
      diff&eacute;rentes formes de disparit&eacute;s &agrave; consid&eacute;rer
      pour &laquo; ne laisser personne de c&ocirc;t&eacute; &raquo; : les
      in&eacute;galit&eacute;s d&apos;acc&egrave;s aux services publics (14
      indicateurs), l&rsquo;extr&ecirc;me pauvret&eacute; et la privation
      mat&eacute;rielle (7&nbsp;indicateurs), les in&eacute;galit&eacute;s entre
      les sexes (12 indicateurs) et les in&eacute;galit&eacute;s de revenu et de
      richesse (3 indicateurs). Seule la limite inf&eacute;rieure pour la
      normalisation des indicateurs a &eacute;t&eacute; chang&eacute;e. Elle
      correspond pour chaque indicateur, &agrave; la valeur la plus basse
      (&laquo; pire valeur &raquo;) parmi les d&eacute;partements du
      B&eacute;nin.
    </ReportParagraph>
    <ReportParagraph>
      Les donn&eacute;es utilis&eacute;es ont &eacute;t&eacute; fournies par
      l&rsquo;Institut National de la Statistique et de la D&eacute;mographie
      (INStaD) du B&eacute;nin et proviennent de leur production statistique
      ainsi que des services statistiques des minist&egrave;res. La table A.2
      comprend la liste compl&egrave;te, par cat&eacute;gorie, des indicateurs
      utilis&eacute;s.
    </ReportParagraph>
    <ReportParagraph>
      A noter que les sources de donn&eacute;es fournies par l&rsquo;INStaD,
      not&eacute;es EDSB-5 (2017/2018), EHCVM-1 (2018/2019) et ERI-ESI
      correspondent respectivement &agrave; : l&rsquo;Enqu&ecirc;te
      D&eacute;mographique et de Sante du B&eacute;nin, 5e &eacute;dition
      (2017/2018) ; l&rsquo;Enqu&ecirc;te Harmonis&eacute;e sur les Conditions
      de Vie des M&eacute;nages, 1e &eacute;dition (2018/2019) ; et
      l&rsquo;Enqu&ecirc;te R&eacute;gionale Int&eacute;gr&eacute;e sur
      l&rsquo;Emploi et le Secteur Informel (2018).
    </ReportParagraph>
    <ReportTable
      number="A-2.1"
      format="webp"
      title="Indicateurs pour l’analyse « Ne laisser personne de côté »"
    />
    <ReportTable number="A-2.2" format="webp" title="Suite" />
    <ReportTable number="A-2.3" format="webp" title="Suite" />
  </ReportLayout>
);

export default Annexe;
