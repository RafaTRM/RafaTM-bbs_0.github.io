//Español


$(function() {
    $(".mx").click(function() {
            //enlaces header
        $(".enlaces-header").children().eq(0).text("Inicio");
        $(".enlaces-header").children().eq(1).text("Servicios");
        $(".enlaces-header").children().eq(2).text("Soluciones");
        $(".enlaces-header").children().eq(3).text("Industrias");
        $(".enlaces-header").children().eq(4).text("Noticias");
        $(".enlaces-header").children().eq(5).text("Contacto");
        $(".lang-selected").text("Español");
        $(".lang-selected").removeClass("change-en");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-mx");            
            //Slogan
        $(".sloganh3").text("Consultoria en Soluciones de Gestión de Negocios.");
         //textos Header
        $(".textos-headerh1").text("CREA, DESARROLLA, CONSOLIDA, INNOVA.");
        $(".textos-headerh2").text("Construye Soluciones de Negocios.");
        $(".textos-headerp").text("Consultoría, asesoría, y tecnología de información para la gestión y desarrollo integral de tu Negocio.");
        //Conocemas
        $(".conocemas").text("Conoce más...");
        //acerca de
        $(".acercadeh4").text("Acerca de BBS");
        $(".acercadep1").text("BBS® es una empresa Mexicana, ubicada en la Ciudad de México, constituida en 2012 por socios con más de 20 años de experiencia en diferentes sectores e industrias, tanto en asesoria para la gestión de procesos de negocios como en la implementación de soluciones de gestión empresarial de clase mundial (ERP, CRM y BI), en empresas de México y del extranjero.");
        $(".acercadep2").text("Estas soluciones permiten a nuestros clientes administrar sus organizaciones de manera eficiente e integral, abarcando tanto las áreas de direccíón, a través de la inteligencia de negocios, como las áreas financieras, administrativas y operativas y administrativas de la empresa, tales como la gestión de la cadena de suministros, ventas y marketing, finanzas, manufactura, servicios y la gestión y ejecución de proyectos.");
        $(".valorh4").text("Nuestra propuesta de valor");
        $(".valorp").text("En BBS ofrecemos soluciones y herramientas de gestión de información y de toma de deciciones para mejorar el enfoque, la dirección y el crecimiento del negocio de nuestros clientes, tomando como referencia estándares, normas y metodologías vanguardistas avaladas por organismos e instituciones de clase mundial.");
        $(".misionh4").text("Nuestra misión");
        $(".misionp").text("Ayudar a las empresas a consolidar, crecer y desarrollar sus Negocios, mediante la implementación de soluciones vanguardistas, innovadoras, y apegadas a las mejores prácticas de negocios.");
    });
});





//Inglés
$(function() {
    $(".en").click(function() {
        //enlaces header
        $(".enlaces-header").children().eq(0).text("Home");
        $(".enlaces-header").children().eq(1).text("Services");
        $(".enlaces-header").children().eq(2).text("Solutions");
        $(".enlaces-header").children().eq(3).text("Industries");
        $(".enlaces-header").children().eq(4).text("News");
        $(".enlaces-header").children().eq(5).text("Contact");
        $(".lang-selected").text("English");      
        $(".lang-selected").removeClass("change-mx");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-en");
        
        //Slogan
        $(".sloganh3").text("Business Management Solutions Consulting.");
         //textos Header
         $(".textos-headerh1").text("CREATE, DEVELOP, CONSOLIDATE, INNOVATE.");
         $(".textos-headerh2").text("Buildning Business Solutions.");
         $(".textos-headerp").text("Consulting, advisory, and technologie of information for the integral management and development of your Business.");
        //Conocemas
        $(".conocemas").text("Know more...");
        //acerca de
        $(".acercadeh4").text("About BBS");
        $(".acercadep1").text("BBS® is a Mexican company, located un Mexico City, founded in 2012 by partners with more than 20 years of experience in several sectors and industries, both, in consulting for the management of business processes and in the implementation of world-class business management sollutions (ERP, CRM and BI), in companies in México and abroad.");
        $(".acercadep2").text("These business solutions allow our customers to manage their organizations in a efficiently and comprehensively way, covering both, the management areas through business intelligence, as well as the financial, administrative areas and their operations, such as supply chain management, sales and marketing, finance, manufacturing, services and project management and project execution.");
        $(".valorh4").text("BBS' Value Proposition");
        $(".valorp").text("Our value proposition is based in three critical dimensions: knowledge and experience about business processes managent and operations, about business solutions, and about standards and methodologies for project management and project execution.");
        $(".misionh4").text("BBS' Mission");
        $(".misionp").text("To colaborate with our Customers to consolidate, grow, and develop their businesses through the implementation of avant-garde, innovative solutions, attached to the best business practices.");
    });
});

//Francés
$(function() {
    $(".fr").click(function() {
    //enlaces header
        $(".enlaces-header").children().eq(0).text("Accueil");
        $(".enlaces-header").children().eq(1).text("Services");
        $(".enlaces-header").children().eq(2).text("Solutions");
        $(".enlaces-header").children().eq(3).text("Industries");
        $(".enlaces-header").children().eq(4).text("Nouvelles");
        $(".enlaces-header").children().eq(5).text("Contacter");
        $(".lang-selected").text("Français");
        $(".lang-selected").removeClass("change-mx");
        $(".lang-selected").removeClass("change-en");
        $(".lang-selected").addClass("change-fr");    
         //Slogan
        $(".sloganh3").text("Conseil en Solutions pour la Gestion des Affaires.");
        //textos Header
        $(".textos-headerh1").text("CRÉEZ, DÉVELOPPEZ, CONSOLIDEZ, INNOVEZ.");
        $(".textos-headerh2").text("Construit des Solutions d'Affaires.");
        $(".textos-headerp").text("Conseil et technologie de l'information pour la gestion et le developpement de votre enterprise.");
        //Conocemas
        $(".conocemas").text("En savoir plus...");
         //acerca de
         $(".acercadeh4").text("Qui sommes-nous");
         $(".acercadep1").text("BBS® est une enterprise Mexicaine, située à la Cité du Mexique, fondée en 2012 par des partenaires ayant plus de 20 ans d’expérience dans plusieurs secteurs et industries, tant en consultation pour la gestion des processus opérationnels que dans la mise en œuvre de solutions de gestion d’entreprise de calibre mondial (ERP, CRM et BI), dans les entreprises du Mexique et à l’étranger.");
         $(".acercadep2").text("Ces solutions d’affaires permettent à nos clients de gérer leurs organisations de manière efficace et complète, couvrant à la fois les domaines de gestion à travers la veille économique, ainsi que les domaines financiers, administratifs et leurs opérations, tels que la gestion de la chaîne d’approvisionnement, ventes et marketing, finance, fabrication, services et gestion de projets et exécution de projets.");
         $(".valorh4").text("Proposition de Valeur de BBS");
         $(".valorp").text("Notre proposition de valeur est basée sur la connaissance et la expérience de trois dimensions critiques:  la gestion des processus d’affaires et des opérations, des solutions informatiques d’affaires, et des normes et méthodologies de gestion et d’exécution des projets.");
         $(".misionh4").text("La Mission de BBS");
         $(".misionp").text("Collaborer avec nos clients pour consolider, faire croître et développer leurs affaires grâce à la mise en œuvre de solutions de gestion d’entreprise avant-gardistes et novatrices, associées aux meilleures pratiques des affaires.");
    });
});