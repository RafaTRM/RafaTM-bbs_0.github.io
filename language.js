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
        $(".navham").children().eq(0).text("Inicio");
        $(".navham").children().eq(1).text("Servicios");
        $(".navham").children().eq(2).text("Soluciones");
        $(".navham").children().eq(3).text("Industrias");
        $(".navham").children().eq(4).text("Noticias");
        $(".navham").children().eq(5).text("Contacto");
        
        $(".lang-selected").text("ES");
        $(".lang-selected").removeClass("change-en");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-mx");            
            //Slogan
        //$(".sloganh3").text("Consultoria en Soluciones de Gestión de Negocios.");
         //textos Header
        $(".textos-headerh1").text("Consultoria & Tecnología para la Gestión de Negocios");
        $(".textos-headerh2").text("Construye Soluciones de Negocios");
        $(".textos-headerp").text("Consultoría, asesoría, y tecnología de información para la gestión y desarrollo integral de tu Negocio.");
        //Conocemas
        $(".conocemas").text("Acerca de BBS");
        //acerca de
        $(".acercadeh4").text("Acerca de BBS");
        $(".acercadep1").text("BBS® – BBSbyS, S de RL de CV - es una empresa de consultoría y asesoría para la gestión de procesos empresariales y de negocios, así como para la implementación de soluciones de tecnología de información ERP, CRM y Business Intelligence.");
        $(".acercadep2").text("BBS es una empresa 100% mexicana, ubicada en la Ciudad de México, constituida en 2011 por socios con amplia experiencia en consultoría, quienes han implementado soluciones de gestión de negocios y han brindado asesoría a empresas de diferentes sectores e industrias de México y del extranjero.");
        $(".acercadep3").text("Nuestra oferta de soluciones permiten a nuestros clientes administrar sus organizaciones de manera eficiente e integral, abarcando tanto las áreas de direccíón y gerencias, a través de la inteligencia de negocios, como las áreas financieras, administrativas y operativas de la empresa, tales como la gestión de la cadena de suministros, ventas y marketing, finanzas, manufactura, servicios y la gestión y ejecución de proyectos.");
        $(".valorh4").text("Nuestra propuesta de valor");
        $(".valorp").text("En BBS ofrecemos soluciones y herramientas de gestión de información y de toma de deciciones para mejorar el enfoque, la dirección y el crecimiento del negocio de nuestros clientes, tomando como referencia estándares, normas y metodologías vanguardistas avaladas por organismos e instituciones de clase mundial.");
        $(".misionh4").text("Nuestra misión");
        $(".misionp").text("Ayudar a las empresas a consolidar, crecer y desarrollar sus Negocios, mediante la implementación de soluciones vanguardistas, innovadoras, y apegadas a las mejores prácticas de negocios.");
        //SERVICIOS
        $(".sectiontitle1").text("Portafolio de Servicios");
        $(".descsectiontitle1").text("Acompañamos la gestión de tu negocio de manera integral, desde su fundación, en su proceso de desarrollo y crecimiento, y durante su consolidación");
        $(".portafolioh11").text("Consultoria &  Asesoria Empresarial");
        $(".portafoliop111").text("Asesoría y soluciones alineadas a estándares de clase mundial, así como a las mejores prácticas de negocios");
        $(".portafoliop112").text("Tecnología para la gestión de negocios   |   Asesoría contable - administrativa   |   Gestión y control de las operaciones - SCM, Manufactura, Proyectos, Gestión de Servicios -   |   Gestión de finanzas, contabilidad general y contabilidad de costos");
        $(".portafolioh12").text("MS Dynamics 365");
        $(".portafoliop121").text("Implementación de Soluciones de Gestión de Negocios: Microsoft Dynamics 365 & MS Power Plattform");
        $(".portafoliop122").text("Soluciones para la pequeña, mediana y gran empresa: Dynamics 365 Finance & Operations | Dynamics 365 Business Central | Dynamics 365 Sales");
        $(".portafoliop123").text("Automatización de procesos y análisis inteligente y estratégico del negocio con MS Power Automate y MS Power BI");
        $(".portafolioh13").text("ISV's & Soluciones y Aplicaciones Empresariales");
        $(".portafoliop131").text("Solución a los requerimientos específicos de tu empresa con mayor eficiencia y rapidéz mediate el diseño y desarollo de soluciones o aplicaciones específicas de la industria, y a la medida de tu empresa");
        $(".portafoliop132").text("Localización Mexicana y Módulo Fiscal para Dynamics 365 F&O y Dynamics Business Central");
        $(".portafolioh14").text("Capacitación & Soporte");
        $(".portafoliop141").text("Capacitación funcional y técnica para Dynamics 365 F&O, Dynamics 365 Business Central y Dynamics 365 Sales");
        $(".portafoliop142").text("Capacitación sobre fundamentos teóricos de Contabilidad de Costos, Contabilidad General y Finanzas,  Gestión de Operaciones y Gestión de Proyectos, basados en estándares tales como IFRS®, PMI® y ASCM® APICS®");
        $(".portafoliop143").text("Soporte funcional post-go live para Dynamics 365 F&O, Dynamics 365 Business Central y Dynamics 365 Sales");
        $(".portafolioh15").text("Gestión de Proyectos");
        $(".portafoliop151").text("Gestión de Proyectos de Implementación, Migración y Actualización para Dynamics 365 F&O y Dynamics Business Central");
        $(".portafoliop152").text("Aplicación de LCS y MS DevOps para garantizar el monitoreo y el control del proceso de implementación");
        $(".portafoliop153").text("Aplicación de metodologías de gestión de proyecto basadas en normas y estandares del PMI y el IPMA -ágiles, de cascada o waterfall, o híbridas-, dependiendo de la complejidad y los requerimientos del proyecto");
        $(".portafolioh16").text("Micro & Pequeña Empresa");
        $(".portafoliop161").text("Asesoria específica enfocada en el entorno y la problemática actual de la micro y pequeña empresa de México");
        $(".portafoliop162").text("Acercamos las mejores prácticas y herramientas de gestión de negocios a la micro y pequeña empresa para fomentar su crecimiento y desarrollo");
        $(".portafoliop163").text("Capacitación en áreas tales como planeación estratégica, BSC y reingenieria de procesos, operaciones, contabilidad y finanzas, así como en el uso e implementación de tecnologias de información para la gestión de negocios");
        //SOLUCIONES
        $(".sectiontitle2").text("Tecnología para la Gestión Integral de Negocios");
        $(".descsectiontitle2").text("Suite de Soluciones Tecnológicas de MS Dynamics 365 para la Gestión Integral de la Empresa, adecuada al tamaño, a la complejidad del negocio, y a las necesidades específicas de la industria");
        $(".vp11").text("Dynamics 365 es una cartera de aplicaciones empresariales inteligentes");
        $(".vp12").text("Impulsa una mayor eficiencia, reduciendo costos y creando un negocio interconectado que vincula las personas, los datos y los procesos de toda su organización");
        $(".vp13").text("Ofrece una eficiencia operativa superior y experiencias de cliente innovadoras, que permiten a las empresas volverse más ágiles y reducir la complejidad de su operación sin aumentar sus costos");
        $(".vp21").text("Dynamics 365 F&O es un planificador de recursos ");
        $(".vp22").text("empresariales (ERP) muy potente para la gestión e integración de las finanzas y las operaciones.");
        $(".vp23").text("Ayuda a las empresas globales y mayores ");
        $(".vp24").text("a organizar, automatizar y optimizar sus procesos.");
        $(".vp31").text("Gestión ágil, integral, dinámica ");
        $(".vp32").text("y eficiente de la contabilidad, ");
        $(".vp33").text("las finanzas y las operaciones de la ");
        $(".vp34").text("pequeña y mediana empresa");
        $(".vp41").text("Solución flexible y personalizable adaptada a los ");
        $(".vp42").text("requisitos de su negocio. Puede elegir una aplicación ");
        $(".vp43").text("independiente para satisfacer las necesidades de una línea ");
        $(".vp44").text("de negocio específica, o use varias aplicaciones ");
        $(".vp45").text("CRM que funcionen juntas como una solución potente y completa");
        $(".vp51").text("Indicadores financieros y de la operación presentados ");
        $(".vp52").text("en tableros de control que son actualizados en tiempo ");
        $(".vp53").text("real, para dirigir y controlar el desempeño y el rendimiento de su empresa, y para la toma oportuna de decisiones estratégicas");
        $(".vp54").text("");
        $(".pwr-solutionsa").text("Conecte   |   Modele   |   Visualice");
        $(".vp61").text("Desarrollo o adaptación rápida y ");
        $(".vp62").text("ágil de aplicaciones especificas y profesionales,");
        $(".vp63").text(" de manera colaborativa entre equipos, a un menor costo y con menos recursos");
        $(".vp64").text("");
        $(".pwr-solutionsb").text("Desarrolle   |   Personalice   |   Conecte   |   Adapte");
        $(".vp71").text("Automatización de tareas y procesos repetitivos para ");
        $(".vp72").text("enfocar los recursos en actividades que agregan valor a ");
        $(".vp73").text("sus clientes, y que permiten aumentar la eficiencia, la ");
        $(".vp74").text("productividad y la rentabilidad de la empresa");
        $(".pwr-solutionsc").text("Eficiencia   |   Productividad   |   Valor   |   Automatización");
        //INDUSTRIAS
        $(".sectiontitle3").text("Industrias");
        $(".descsectiontitle3").text("Soluciones para atender los requerimientos negocio que son particulares y específicos de cada sectores e industria");
        $(".indh1").text("Sector Inmobiliario");
        $(".indp11").text("Nuestra oferta de soluciones atiende de manera integral los aspectos más particulares de la industria, tales como el financiamiento – crowdfunding -, el desarrollo, la comercialización y el arrendamiento de los inmuebles");
        $(".indp12").text("Otros aspectos de la operación tambien son considerados en la solución, tales como el control presupuestal, la gestión de cartera de clientes, de inversionistas y comisionistas, así como el seguimiento y el control de subcontratistas");
        $(".indp13").text("El modelo de negocios del sector inmobiliario puede estár sujeto a las particularidades de cada empresa; nuestro portafolio de soluciones permite atender tales particularidades de manera ágil y práctica");
        $(".indh2").text("Retail");
        $(".indp21").text("La suite de soluciones de gestión de negocios representa una herramienta muy poderosa  para manejar la complejidad inherente al modelo de negocios de la industria del retail:");
        $(".indp22").text("la gestión de los procesos de front office -POS- y back office a través de Dynamics 365 integrados a Power BI para analizar los patrones y tendencicas de la demanda, e identificar el qué, dónde, cuándo, cuánto y cómo son requeridos los productos y servicios, permiten gestionar la cadena de suministros de manera integral para enfrentar los retos de variedad, dinamismo, inmediatez y personalización que el mercado requiere.");
        $(".indh3").text("Servicios Administrativos, Contables & Financieros");
        $(".indp31").text("Gestión de servicios administrativos, contables y financieros");
        $(".indp32").text("Monitoreo continuo de los niveles de servicio requeridos por la industria");
        $(".indp33").text("Gestión de contratos, ordenes de servicio y la planificación de los recursos, identificación de los recursos asignados a cada contrato u orden de servicio, y control del trabajo y costo real ejecutado");
        $(".indp34").text("Facturación periódica o por evento, en base a los servicios efectuados o en base a un acuerdo comercial");
        $(".indh4").text("Comercio & Distribución");
        $(".indp41").text("Planificación de la demanda y de los abastecimientos, con múltiples modelos de cobertura.");
        $(".indp42").text("Gestión del inventario: planificación y trazabilidad  de productos. Identificación de productos: código de barras, múltiples unidades de medida y empaques.  Múltiples almacenes con modelo de almacenaje caótico u organizado");
        $(".indp43").text("Costeo del inventario: costo por almacén, producto y variante. Integración de los costos de importación y diferentes cargos de costos del producto");
        $(".indp44").text("Se puede conectar de manera ágil y práctica con las soluciones de sus proveedores y clientes para una total integración de la cadena de suministros.");
        $(".indh5").text("Marketing | Customer Service  &  Field Service");
        $(".indp51").text("Gestión de las relaciones con el cliente: incrementa el nivel de servicio y satisfacción de tus clientes a través de interacciones planificadas y programadas. Enfoca los esfuerzos de tus equipos de ventas mediante la gestión de leads y el diseño de campañas de marketing, a través del canal y el enfoque adecuado a cada nicho o segmento de mercado");
        $(".indp52").text("Planea, programa, publicita tus eventos e invita a tus contactos y prospectos adecuados dependiendo de cada contenido, y da el seguimiento oportuno hasta convertirlos en tus socios de negocios");
        $(".indh6").text("Moda & Industria de la Confección");
        $(".indp61").text("La cadena de suministros que involucra a la manufactura de textiles: mayoristas, puntos de venta y el comercio electrónico, necesitan una gran precisión y oportunidad en la información para poder integrar y optimizar sus operaciones.");
        $(".indp62").text(" Necesidades tales como la administración decenas de miles de SKU’s y su mantenimiento, así como la especificación de variantes como talla y color para cada producto, representan un reto bastante complejo tanto para la gestión eficiente del inventario, como para la estimación de precisa de la demanda y la elaboración y ejecución de los planes y programas de producción. Estas necesidades y requerimientos, entre otros, son atendidos mediante nuestra oferta de soluciones de gestión de negocios");
        $(".indh7").text("Servicios Técnicos y/o Especializados");
        $(".indp71").text("Solución a la complejidad que representan los servicios especializados debido a la necesidad de especificaciones técnicas detalladas que se requieren en la industria");
        $(".indp72").text("Definición y asignación de los diferentes tipos de trabajo requeridos, así como sus costos y lista de precios. Control de los insumos y la asignación de recursos para cada orden de servicio o contrato");
        $(".indp73").text("El análisis del nivel de servicio, diagnósticos y resoluciones de fallas, entre otros indicadores, es posible gracias un set de alternativas que pueden adaptarse de manera ágil e integral a la complejidad del modelo de negocio y a las necesidades de gestión y control de cada empresa");
        $(".indh8").text("Manufactura");
        $(".indp81").text("Gestion de procesos de manera integral, ágil y eficiente, en ambientes de producción de manufactura discreta, por flujo de procesos, formulaciones, manufactura ágil, o en una combinación de entornos de producción.");
        $(".indp82").text("Dynamics 365 cuenta con un conjunto de funcionalidades que se adaptan a las características de cada sistema de manufactura,  y que se integran con la planificación maestra, la cadena de suministros, la contabilidad de costos de producción, con el área comercial, y con el resto de las áreas de la empresa");
        $(".indp83").text("Soluciones en un marco de referencia de estándares de clase mundial - ASCM (APICS)");
        $(".indh9").text("Administración & Ejecución de Proyectos");
        $(".indp91").text("Configuración de proyectos que se adapta tanto a la naturaleza del proyecto como a la metodología de gestión de proyectos utilizada, ya sean metodologías “waterfall” o metodologías ágiles");
        $(".indp92").text("Configuración de la WBS y la OBS del proyecto en función del tipo, complejidad y necesidad de control de cada proyecto. Asignación de listas de precios y costos en función de los tipos de trabajo ejecutado");
        $(".indp93").text("Reconocimiento de los ingresos y los costos del trabajo en curso del proyecto, e integración del proyecto con el resto de las áreas de la empresa, tales como la facturación, planificación de abastecimientos e inventarios");
        $(".indh10").text("Almacenaje - 3PL");
        $(".indp101").text("Integración del almacenaje del inventario a la cadena de suministros con énfasis en las operaciones propias del almacén, tales como el flujo y manejo de productos y materiales integrando tecnológías avanzadas – lectores de radiofrecuencia y códigos de barras – para optimizar las actividades del almacén y el uso de los recursos");
        $(".indp102").text("Gestión de los costos asociados y derivados del almacenaje, con diferentes bases de asignación, como volumen o peso de los artículos almacenados");
        $(".indp103").text("Configuración compatible con el modelo de almacenaje caótico u organizado");
        //CONTACTO
        $(".sectiontitle4").text("Escríbenos y Solicita una Demostración");
        $(".descsectiontitle4").text("");
        $(".cname").text("Nombre:");
        $(".cmail").text("Correo electrónico:");
        $(".cphone").text("Teléfono");
        $(".ccname").text("Nombre / Giro de tu Empresa:");
        $(".csubject").text("Asunto:");
        $(".cmessage").text("Platícanos de tu proyecto:");
        $(".cenviar").text("Enviar");
        //footer
        $(".politica-privacidad").text("Política de privacidad");
        $(".politica-privacidad1").text("Terminos y Condiciones");
        $(".copyright").text("© Copyright RTMCo. 2023 Todos los derechos reservados");



    });
});


//Inglés*******
$(function() {
    $(".en").click(function() {
        //enlaces header
        $(".enlaces-header").children().eq(0).text("Home");
        $(".enlaces-header").children().eq(1).text("Services");
        $(".enlaces-header").children().eq(2).text("Solutions");
        $(".enlaces-header").children().eq(3).text("Industries");
        $(".enlaces-header").children().eq(4).text("News");
        $(".enlaces-header").children().eq(5).text("Contact");
        $(".navham").children().eq(0).text("Home");
        $(".navham").children().eq(1).text("Services");
        $(".navham").children().eq(2).text("Solutions");
        $(".navham").children().eq(3).text("Industries");
        $(".navham").children().eq(4).text("News");
        $(".navham").children().eq(5).text("Contact");
        $(".lang-selected").text("EN");      
        $(".lang-selected").removeClass("change-mx");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-en");
        
        //Slogan
        $(".sloganh3").text("Consulting & Solutions for Business Management");
         //textos Header
         $(".textos-headerh1").text("Consulting and Technology for Business Management");
         $(".textos-headerh2").text("Buildning Business Solutions");
         $(".textos-headerp").text("Consulting, advisory, and technology of information for the integral management and development of your Business");
        //Conocemas
        $(".conocemas").text("About BBS");
        //acerca de
        $(".acercadeh4").text("About BBS");
        $(".acercadep1").text("BBS® is a Mexican company, located at Mexico City, founded in 2012 by partners with more than 20 years of experience in several sectors and industries, both, in consulting for the business process management but also the implementation of world-class business management sollutions (ERP, CRM and BI), for companies in México and abroad.");
        $(".acercadep2").text("Our business solutions allow our customers to manage their organizations in a efficiently and comprehensively way, covering both, the management and strategic areas through business intelligence, as well as the finance and administrative areas, and their operations, such as supply chain management, sales and marketing, finance managemente and GL, manufacturing, field  and customer service, and project management and project execution.");
        $(".acercadep3").text("");
        $(".valorh4").text("BBS' Value Proposition");
        $(".valorp").text("Our value proposition is based in three critical dimensions: functional knowledge and background about business processes managent and business operations management, technical knowledge about business solutions, and konowledge and experience about standards and methodologies for project management and project execution");
        $(".misionh4").text("BBS' Mission");
        $(".misionp").text("To collaborate with our Customers to consolidate, grow, and develop their businesses by achieving their business and strategic objectives through the implementation of avant-garde and innovative solutions, attached to the best business practices");
        //SERVICIOS
        $(".sectiontitle1").text("Our Services");
        $(".descsectiontitle1").text("we're the partner for your business management, from its own foundation, to go along through its growing up, and to achieve the consolidation and evolution of your Business");
        $(".portafolioh11").text("Consulting & Business Advisory");
        $(".portafoliop111").text("Consultig and solutions based on world class standards and the best business practices");
        $(".portafoliop112").text("Technology for Business Management | Finance and Administrative Advisory | Operations Management - SCM, Manufacturing, Project Management, Service Management- | Finance Management, General Ledger & Cost Accounting");
        $(".portafolioh12").text("MS Dynamics 365");
        $(".portafoliop121").text("Business Solutions Implementation: MS Dynamics 365 & MS Power Plattform");
        $(".portafoliop122").text("Solutions for Small Business and Main Enterprises: Dynamics 365 Business Central | Dynamics 365 Finance and Operations | Dynamics 365 Sales");
        $(".portafoliop123").text("Process automatization and strategic business analisys with MS Power Automate and MS Power BI");
        $(".portafolioh13").text("ISV's & Customizations and Business Apps");
        $(".portafoliop131").text("Solutions for specific business requierements in a faster and more efficient way, by designing and developing specific customizations for each industry or sector, accondingly with your company business necesities");
        $(".portafoliop132").text("Mexican localization and Tax Add-on for mexican taxes calculation and reporting, integrated to MS Dynamics 365 F&O and MS Dynamics 365 BC");
        $(".portafolioh14").text("Training & Support");
        $(".portafoliop141").text("Technical and functional training for Dynamics F&O, Dynamics 365 BC and Dynamics 365 Sales");
        $(".portafoliop142").text("Training for teorical concepts in areas such as general ledger, cost accounting, finance, operations and project managment, based on IFRS®, PMI® y ASCM® APICS® standards and concepts");
        $(".portafoliop143").text("Support for post go-live operation");
        $(".portafolioh15").text("Project Management");
        $(".portafoliop151").text("Project management for the implemantation, update and upgrade of your Dynamics 365 business solution: Finance and operations and Business Central");
        $(".portafoliop152").text("LCS and DevOps methodologies and tools for planning, monitoring and controlling the implementation process");
        $(".portafoliop153").text("PMI and IPMA standards and methodologies - agile or waterfall- supporting the implementation process, depending on the project's complexity");
        $(".portafolioh16").text("Small Business");
        $(".portafoliop161").text("Specific advisory regarding the current context and the environment of the small businessess in México");
        $(".portafoliop162").text("We bring the best business practices and tools to the small companies with the aim to encouraging and supporting their growth and development");
        $(".portafoliop163").text("Training for small businessess in key and strategic areas such as reengineering of processes, operations, accounting and finance, strategic planning and BSC, as well as training for the use and implementation of technologies of information for business management");
        //SOLUCIONES
        $(".sectiontitle2").text("Technology for Business Management");
        $(".descsectiontitle2").text("MS Dynamics 365 is the suite of solutions for a fullly integrated business management, easily adapted to the company size as well as the complexity and business specific requirements");
        $(".vp11").text("Dynamics 365 is a suite of intelligent business applications that ");
        $(".vp12").text("encourage your business to be more efficient, by reducing costs and creating an interconected business that links data, processess and the people in the whole organization");
        $(".vp13").text("Offers a higher opperative efficiency and innovative experiences for the customer, which drives the companies become more agile and to reduce the complexity of their operations, with no increasing costs");
        $(".vp21").text("Dynamics 365 Finance and Operations is a very powerfull enterprise resources planning (ERP) ");
        $(".vp22").text("that allows the integration and management of all financials, administrative and operations processess in an organization");
        $(".vp23").text("Supports and drives the main and higher companies to organize, automate ");
        $(".vp24").text("and to optimate all their business processes");
        $(".vp31").text("Agil, comprehensive, dynamic ");
        $(".vp32").text("and efficient managment for the accounting, ");
        $(".vp33").text("finance and operations ");
        $(".vp34").text("of the medium and small business");
        $(".vp41").text("A flexible and customizable solution ");
        $(".vp42").text("to meet the specific business requirements. You're able to choose a ");
        $(".vp43").text("single application to fit specific requierements of a business unit, ");
        $(".vp44").text("or choose several CRM applications that can work togheter as a unique powerfull solution");
        $(".vp45").text("");
        $(".vp51").text("KPI for finance and operations, portrayed ");
        $(".vp52").text("in a dashboard that is updated on real time, ");
        $(".vp53").text("to manage and control the yield of your ");
        $(".vp54").text("business, as drives and encourages the confident and the oportunity of strategic decision making");
        $(".pwr-solutionsa").text("Connect   |   Model   |   Visualize");
        $(".vp61").text("Agile and faster development and customizations ");
        $(".vp62").text("for specific and professional applications, ");
        $(".vp63").text("in an efficient collaborative teams, with lower costs and less consumption of resources");
        $(".vp64").text("");
        $(".pwr-solutionsb").text("Create   |  Develop   |   Customize   |   Connect");
        $(".vp71").text("Automate processes and repetitive tasks,");
        $(".vp72").text("to assign resources and to be focused in processes and activities that");
        $(".vp73").text(" really add value for your customers and your organization, and encourage a higher efficiency as well as a higher the productivity and profitability of the company");
        $(".vp74").text("");
        $(".pwr-solutionsc").text("Efficiency   |  Productivity   |   Value   |   Automation");
        //INDUSTRIAS
        $(".sectiontitle3").text("Industry & Sector");
        $(".descsectiontitle3").text("Set of solutions to fit specific business requirements for a sector or industry");
        $(".indh1").text("Real Estate Sector");
        $(".indp11").text("Our portfolio of solutions fits in a comprehensive way the most specific requirements for the industry, such as crowfunding, bulding, marketing and property leasing");
        $(".indp12").text("Offers a higher opperative efficiency and innovative experiences for the customer, which drives the companies become more agile and to reduce the complexity of their operations, with no increasing costs");
        $(".indp13").text("Dynamics 365 Finance and Operations is a very powerfull enterprise resources planning (ERP) ");
        $(".indh2").text("Retail");
        $(".indp21").text("The business suite is a very powerful tool to manage the inherent complexity to the retail industry:");
        $(".indp22").text("the front office -POS- and back office process management trhough Dynamics 365 are integrated to Power BI to analyze the demmand patterns and trends, so then is possible to have the information about what, when, when, how many and how the items and services are needed. This information is critical to manage the supply chain in a comprehensive way, and fulfill the variaty, dynamims, immediacy and customization required for the market");
        $(".indh3").text("Administrative, Accounting & Financial Services");
        $(".indp31").text("Acounting, finance and administrative process management");
        $(".indp32").text("Monitoring in a continuous basis for service levels indicators to meet the industry standards");
        $(".indp33").text("Contract and service order management, as well as resources planning. Identification and tracking for all resources consumed and assigned to the contract and service orders. Work in process recognizing and actual costing of work execution");
        $(".indp34").text("Periodic or event invoicing, based on the service deliverables or based on commercial agreements");
        $(".indh4").text("Trade & Distribution");
        $(".indp41").text("Demmand planning and purchasing, with several coverage models");
        $(".indp42").text("Inventory management: item planning and item tracking. Item identification though bar codes, multiple unit of measures and packaging. Multiple warehouses with organized or cahotic warehousing rules,");
        $(".indp43").text("Inventory costing: costing by warehouse, item and variant. Item charges integration with different assignation basis");
        $(".indp44").text("Can be connected with another third-party solutions in an easier and practical way, to achieve a full supply chain integration");
        $(".indh5").text("Marketing | Customer Service  &  Field Service");
        $(".indp51").text("Customer relations management: increase the customer service level and satisfaction by planning, scheduling and having efective interactions. Focus your sales teams efforts through lead management and the design of marketing campaigns, through the channel and the appropriate approach to each market segment");
        $(".indp52").text("Plan, schedule, and advertise your events and invite your appropriate contacts and prospects depending on each content, and follow up on time until they become a business partners for your company");
        $(".indh6").text("Fashion & Clothing Industry");
        $(".indp61").text("The supply chain that involves the manufacture of textiles: wholesalers, points of sale and e-commerce, need higher accurate and timming about the market information to be able to integrate and optimize their operations");
        $(".indp62").text("Necessities such as the administration of thousands of SKU's and their maintenance, as well as the specification of variants such as size and color for each product, represent a big challenge both for efficient inventory management and for accurate demand estimation, as well as the preparation and execution of production plans and programs. These necessities and requirements, among others, are addressed through our offer of business management solutions");
        $(".indh7").text("Technical and Specialized Services");
        $(".indp71").text("Solution for the complexity that specialized services represent due to the necessity for detailed technical specifications that are required in the industry");
        $(".indp72").text("Definition and assignment of different types of work required, as well as their costs and price lists. Control of inputs and allocation of resources for each service order or contract");
        $(".indp73").text("Service level analysis, fault diagnosis and resolution, among other indicators, is possible through a set of alternatives that can be quickly and comprehensively adapted to the complexity of the business model but also the management and control needs of each company");
        $(".indh8").text("Manufacturing");
        $(".indp81").text("Comprehensive, agile and efficient Manufacturing process management, in a discrete manufacturing, flow manufacturing, agile manufacturing environments or a combination of two or more manufacturing environments");
        $(".indp82").text("Dynamics 365 has a set of functionalities that adapt and meet the characteristics of each manufacturing system, integrated with master planning, supply chain, manufacturing cost accounting, but also with the commercial area and another areas of the company");
        $(".indp83").text("Solutions within a framework of world class standards - ASCM (APICS)");
        $(".indh9").text("Project Management and Project Execution");
        $(".indp91").text("Project configuration that fullfit both the nature of the project and the project management methodology used, whether they are waterfall methodologies or agile methodologies");
        $(".indp92").text("Configuration of the WBS and the OBS for the project depending on the type, complexity and control needs of each project. Price lists and costs assignment based on the work types performed");
        $(".indp93").text("Income and costs recognition for the project work in process. Full integration with the other areas in the company, such as invoicing, inventory, purchasing and resources planning");
        $(".indh10").text("Warehousing & 3PL");
        $(".indp101").text("Inventory storage integrated to the supply chain focused on warehousing operations management, such as the flow and handling of products and materials, integrating advanced technologies such as radio frequency and barcodes readers, to optimize warehouse activities and usage of resources");
        $(".indp102").text("Cost management for all item charges related to item storage and warehousing activities, with a cost allocation based on item weight or item volume");
        $(".indp103").text("Organized or chaotic warehousing models supported by the business solution configuration");
        //INDUSTRIAS
        $(".sectiontitle4").text("Get in touch with us");
        $(".descsectiontitle4").text("");
        $(".cname").text("Your name");
        $(".cmail").text("e-mail address");
        $(".cphone").text("Phone number");
        $(".ccname").text("Company name");
        $(".csubject").text("Subject");
        $(".cmessage").text("Let us know about your project");
        $(".cenviar").text("Send");
        //footer
        $(".politica-privacidad").text("Privacy statement");
        $(".politica-privacidad1").text("Terms & Conditions");
        $(".copyright").text("© Copyright RTMCo. 2023 All rights reserved");
        
 



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
        $(".navham").children().eq(0).text("Accueil");
        $(".navham").children().eq(1).text("Services");
        $(".navham").children().eq(2).text("Solutions");
        $(".navham").children().eq(3).text("Industries");
        $(".navham").children().eq(4).text("Nouvelles");
        $(".navham").children().eq(5).text("Contacter");
        $(".lang-selected").text("FR");
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