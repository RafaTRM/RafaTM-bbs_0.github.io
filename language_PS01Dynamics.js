//Español


$(function() {
    $(".mx").click(function() {
            //enlaces header
        $(".enlaces-header").children().eq(0).text("Inicio");
        $(".enlaces-header").children().eq(1).text("ERP");
        $(".enlaces-header").children().eq(2).text("CRM");
        $(".enlaces-header").children().eq(3).text("BI & Productividad");
        $(".enlaces-header").children().eq(4).text("Contacto");
        //$(".enlaces-header").children().eq(5).text("Contacto");
        $(".enlaces-header").children().eq(0).text("Inicio");
        $(".enlaces-header").children().eq(1).text("ERP");
        $(".enlaces-header").children().eq(2).text("CRM");
        $(".enlaces-header").children().eq(3).text("BI & Poductividad");
        $(".enlaces-header").children().eq(4).text("Contacto");
        //$(".enlaces-header").children().eq(5).text("Contacto");
        
        $(".lang-selected").text("ES");
        $(".lang-selected").removeClass("change-en");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-mx");            
            //Slogan
        $(".sloganh3").text("Consultoria & Soluciones para la Gestión de Negocios.");
         //textos Header
        
        //Dyn365
        $(".cd365-headerh1").text("Dynamics 365 ERP - CRM  &  Productividad e Inteligencia de Negocios");
        $(".cd365-headerh2").text("Gestión e integración total de negocios");
        $(".cd365-headerp1").text("Desarrolla y evoluciona tu negocio a través de la gestión eficaz de las operaciones y sus finanzas, mediante la implementación de soluciones tecnológicas que permiten contar con información certera y en tiempo real, que permiten el análisis detallado de resultados para la toma de decisiones estratégicas confiables y oportunas");
        $(".carderp").text("Dynamics 365 ERP");   
        $(".carderptitulo").text("Dynamics 365 ERP");
        $(".carderpdesc1").text("Dynamics 365 BUSINESS CENTRAL y Dynamics 365 FINANCE & OPERATIONS permiten gestionar e integrar todas las áreas y procesos de tu organización de una manera ágil y eficiente. Dynamics 365 ERP te ofrece alternativas que se adaptan facilmente tanto al tamaño de tu organización como a la complejidad de su operación y modelo de negocios");
        $(".carderpleer1").text("Leer más...");
        $(".cardcrm").text("Dynamics 365 CRM");   
        $(".cardcrmtitulo").text("Dynamics 365 CRM");
        $(".cardcrmdesc1").text("La solución CRM de Dynamics 365 incluye los sistemas para gestionar las relaciones con los clientes y sus interacciones: MARKETING, VENTAS y SERVICIO de una forma totalmente integrada. Así, le permite contar con un perfil y un enfoque más preciso de sus clientes, para crear más y mejores relaciones, aumentar su eficiencia y productividad, y tener una mejor interacción con ellos");
        $(".cardcrmleer1").text("Leer más...");
        $(".cardppt").text("Productividad e Inteligencia de Negocios");   
        $(".cardppttitulo").text("Power Platform");
        $(".cardpptdesc1").text("PLATFORM es un conjunto de herramientas, integradas a la suite de Dynamics 365, que le ayudan a dirigir y gestionar su negocio: a través de POWER BI puede generar KPI's y visualizarlos en tableros de mando para soportar su toma de decisiones, Power AUTOMATE le permite automatizar procesos empresariales repetitivos, y con POWER APPS  puede generar aplicaciones y soluciones a la medida de su empresa");
        $(".cardpptleer1").text("Leer más...");

        /****BA****/
        $(".baerptitle1").text("Dynamics 365 ERP");
        $(".baerpdesc1").text("Dynamics 365 ERP gestiona e integra los procesos y actividades centrales de la empresa, incluyendo la contabilidad y las finanzas, la cadena de suministros, las operaciones -manufactura, proyectos, servicios-, los recursos humanos de la empresa y la elaboración de informes");
        $(".bctitle").text("Dynamics 365 Business Central");
        $(".bcgralbtn").text("Generalidades");
        $(".bcfunbtn").text("Funcionalidad");
        $(".bcgeneralidadtitle").text("BUSINESS CENTRAL - Generalidades");
        $(".bcgenli01").text("Es una solución ERP de implementación rápida y ágil, de customización y ampliación simple, que puede utilizarse en cualquier dispositivo y en cualquier lugar, con visualización de datos en tiempo real");
        $(".bcgenli02").text("Multi-empresa y multi-divisa, unificada en un entorno que puede implementarse en la nube o de manera local");
        $(".bcgenli03").text("Integración con Microsoft 365 y con recursos de Business Intelligence. Seguridad y permisos de acceso basado en roles del usuario");
        $(".bcgenli04").text("Ideal para la pequeña y mediana empresa, ya que le permite gestionar y, eventualmente, ordenar y alinear sus procesos y actividades financieras y operativas");
        $(".bcfunciontitle").text("BUSINESS CENTRAL - Funcionalidad");
        $(".bcfunli01").text("Gestión de Contabilidad General, Contabilidad de Costos, y Finanzas");
        $(".bcfunli02").text("Contabilidad Digital y Facturación Electrónica. Capacidad de integración con módulos fiscales");
        $(".bcfunli03").text("Gestión de Presupuestos, Activos Fijos, Caja y Bancos, Cuentas por Cobrar y Cuentas por Pagar");
        $(".bcfunli04").text("Gestión integral de la cadena de suministros: Inventarios y Almacenes, Gestión de la Producción, Gestión de Compras y Gestión de Ventas");
        $(".bcfunli05").text("Gestión de Proyectos y Gestión de Servicios administrativos y técnicos, así como la capacidad para gestionar múltiples alamacenes, múltiples unidades de medida, y trazabilidad de los productos");
        $(".fotitle").text("Dynamics 365 Finance & Operations");
        $(".fogralbtn").text("Generalidades");
        $(".fofunbtn").text("Funcionalidad");
        $(".fogeneralidatitle").text("FINANCE & OPERATIONS - Generalidades");
        $(".fogenli01").text("Ofrece a las medianas y grandes empresas la capacidad de automatizar y gestionar sus operaciones globales");
        $(".fogenli02").text("Es un sistema ERP muy robusto, con capacidad de registro y de procesamiento de altos volúmenes de datos y de transacciones de manera simultánea, desde diversos orígenes");
        $(".fogenli03").text("Funcionalidad robusta, con capacidad superior para atender requerimientos de procesos de negocio específicos de las diferentes áreas de la empresa");
        $(".fogenli04").text("Integración y colaboración con Microsoft 365, Business Intelligence, Automate y otras herramientas y aplicaciones empresariales. Seguridad y acceso a la aplicación y sus funcionalidades basado en roles");
        $(".fofunciontitle").text("FINANCE & OPERATIONS - Funcionalidad");
        $(".fofunli01").text("Finance: Contabilidad de Costos, Contabilidad General, Planeación y Control Presupuestal, Gestion de Tesorería y Bancos, Gestión de Crédito y de las Cuentas por Cobrar, Cuentas por Pagar, Análisis e Informes Financieros");
        $(".fofunli02").text("Supply Chain Management: Configurador y Gestión de Productos, Gestión de Inventarios, Almacenes y Transporte, Gestión de Costos, Planeación Maestra, Gestión de la Fabricación, Gestión del Servicio y Gestión de la Logística");
        $(".fofunli03").text("Commerce: Gestión de Ventas, del Back Office, Tiendas y del Centro de llamadas");
        $(".fofunli04").text("Project Operations and Service Management: visibilidad, colaboración y agilidad para los negocios centrados en el proyecto, en contratos u órdenes de servicio");
        $(".bacrmtitle").text("Dynamics 365 CRM");
        $(".bacrmdesc1").text("Dynamics 365 CRM permite optimizar y automatizar los procesos y las actividades de marketing, de ventas, así como los servicios de campo y de atención al cliente, a través de un proceso de mejora continua de las relaciones con los clientes");        
        $(".slstitle").text("Dynamics 365 VENTAS");
        $(".slsgralbtn").text("Generalidades");        
        $(".slsfunbtn").text("Funcionalidad");
        $(".slsfuciontitle").text("Dyn365 VENTAS - Funcionalidad");        
        $(".slsfunli01").text("Integración con MS Teams para una mejor comunicación entre los vendedores y sus clientes. También integra la IA para diseñar ciclos de venta a traves de las mejores propuestas de interacciones");
        $(".slsfunli02").text("Predicción de las fluctuaciones de los ingresos y visualización de las áreas para enfocarse en la parte alta del embudo de ventas");        
        $(".slsfunli03").text("Proporciona información inmediata sobre las emociones del cliente, del mercado y de las prioridades, para ejecutar una venta guiada");
        $(".slsgeneralidatitle").text("Dyn365 VENTAS - Generalidades");
        $(".slsgenli01").text("Priorización de clientes y de actividades");
        $(".slsgenli02").text("Planificación y prevision. Visualización de datos en tiempo real");        
        $(".slsgenli03").text("Diseño de roles específicos para el usuario");
        $(".slsgenli04").text("Ciclos y procesos de venta configurables");        
        $(".mkttitle").text("Dynamics 365 MARKETING");
        $(".mktgralbtn").text("Generalidades");        
        $(".mktfunbtn").text("Funcionalidad");
        $(".mktgeneralidatitle").text("Dynamics 365 MARKETNG - Generalidades");
        $(".mktgenli01").text("Interacciones de cliente fluidas. Marketing B2C y B2B. Contenido multicanal");
        $(".mktgenli02").text("Asistencia de IA que permite diseñar experiencias en tiempo real dirigidas al cliente a través de la sugerencia del canal adecuado");
        $(".mktgenli03").text("Colaboración mediante la integración de MS Teams, y definición de disparadores de eventos en todas las aplicaciones");
        $(".mktfuciontitle").text("Dynamics 365 MARKETING - Funcionalidad");
        $(".mktfunli01").text("Interacciones de cliente fluidas. Marketing B2C y B2B. Contenido multicanal");
        $(".mktfunli02").text("Asistencia de IA que permite diseñar experiencias en tiempo real dirigidas al cliente a través de la sugerencia del canal adecuado");
        $(".mktfunli03").text("Colaboración mediante la integración de MS Teams, y definición de disparadores de eventos en todas las aplicaciones");
        $(".srvtitle").text("Dynamics 365 SERVICIO");
        $(".srvfunbtn").text("Funcionalidad");
        $(".srvgralbtn").text("Generalidades");
        $(".srvgeneralidatitle").text("Dynamics 365 SERVICIO  Generalidades");
        $(".srvgenli01").text("Servicio al cliente: Asistencia de IA y herramientas de colaboración para maximizar la productividad y la calidad en el servicio");
        $(".srvgenli02").text("Reduce costos en una plataforma única e intuitiva que proporciona información de manera oportuna y que se adapta a necesidades futuras");
        $(".srvgenli03").text("Proporciona a tus colaboradores las herramientas adecuadas y la información necesaria para despachar cada orden de servicio, en cualquier momento");
        $(".srvfuciontitle").text("Dynamics 365 SERVICIO  Funcionalidad");
        $(".srvfunli01").text("Gestión de casos integrada. Línea de tiempo de la atención al cliente. Transcripción y traducción integradas. Visibilidad y seguimiento de incidencias");
        $(".srvfunli02").text("Planeación inteligente de rutas. Integración con IoT. Colaboración remota con expertos mediante el uso de realidad mixta");
        
        
        /****POWER PLATFORM****/
        $(".pptitleh1").text("Productividad e Inteligencia de Negocios");
        $(".ppdesc1").text("Automatización de Procesos - Inteligencia de Negocios - Innovación y Desarrollo de Aplicacionese Empresariales");
        $(".ppbititle1").text("POWER BI");
        $(".ppbidesc1").text("Análisis & Inteligencia de Negocios");
        $(".ppbidesc2").text("Visualización de Datos para la Toma de Decisiones Estratégicas de Negocios");
        $(".ppbili1").text("Centralización de datos desde diferentes orígenes para crear una fuente de información única y accesible");
        $(".ppbili2").text("Transforma sus datos en información útil de fácil interpretación, a través de cuadros de mando y con lienzos tipo arrastrar y colocar");
        $(".ppbili3").text("Integración con Microsoft 365");
        $(".ppbili4").text("Aplicación de IA para la generación de informes: describa la información que necesita y Copilot de PBI analizará y extraerá los datos correctos en un informe");
        $(".pauttitle1").text("POWER AUTOMATE");
        $(".pautdesc1").text("Productividad & Automatización");
        $(".pautdesc2").text("Aumenta la productividad de tu organización a través de la automatización de actividades, tareas y procesos repetitivos");
        $(".pautli1").text("Automatización digital de procesos mediante la conexión de aplicaciones, datos y servicios con flujos de nube");
        $(".pautli2").text("Automatización de procesos robóticos que permite conectar sistemas antiguos con los nuevos");
        $(".pautli3").text("La automatización de procesos empresariales permite guiar a los usuarios por los procesos que tienen varios pasos para garantizar la coherencia");
        $(".pautli4").text("Process Advisor permite detectar cuellos de botella y descubrir nuevas oportunidades de automatización en el flujo");
        $(".papptitle1").text("POWER APPS");
        $(".pappdesc1").text("Crecimiento & Innovación");
        $(".pappdesc2").text("Desarrolle y crezca su negocio mediante la innovación digital y el desarrollo de aplicaciones empresariales");
        $(".pappli1").text("AI Builder permite agregar inteligencia a las aplicaciones mediante la creación de modelos de IA personalizados");
        $(".pappli2").text("Automatización de procesos en las aplicaciones mediante la integración con Power Automate");
        $(".pappli3").text("Integración a Microsoft Azure para crear una funcionalidad de gran riqueza en una plataforma de bajo código");
        $(".pappli4").text("Desarrollo de customizaciones y aplicaciones de alta productividad para su empresa");
        



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
          //enlaces header
          $(".enlaces-header").children().eq(0).text("Home");
          $(".enlaces-header").children().eq(1).text("ERP");
          $(".enlaces-header").children().eq(2).text("CRM");
          $(".enlaces-header").children().eq(3).text("BI & Productivity");
          $(".enlaces-header").children().eq(4).text("Contact");
          //$(".enlaces-header").children().eq(5).text("Contacto");
          $(".navhamD365").children().eq(0).text("Home");
          $(".navhamD365").children().eq(1).text("ERP");
          $(".navhamD365").children().eq(2).text("CRM");
          $(".navhamD365").children().eq(3).text("BI & Poductivity");
          $(".navhamD365").children().eq(4).text("Contact");
          //$(".enlaces-header").children().eq(5).text("Contacto");
          

        $(".lang-selected").text("EN");      
        $(".lang-selected").removeClass("change-mx");
        $(".lang-selected").removeClass("change-fr");
        $(".lang-selected").addClass("change-en");
        
        //Slogan
        $(".sloganh3").text("Consulting & Solutions for Business Management");
        
       //Dyn365
       $(".cd365-headerh1").text("Dynamics 365 ERP - CRM  &  Productivity and Business Intelligence");
       $(".cd365-headerh2").text("Management and total integration for your business");
       $(".cd365-headerp1").text("Grow up and evolve your business through effective operations and financials management, supported by the implementation of technologic business solutions that deliver reliable and on-time information for business results analysis as well as support for successfull strategic decission making");
       $(".carderp").text("Dynamics 365 ERP");   
       $(".carderptitulo").text("Dynamics 365 ERP");
       $(".carderpdesc1").text("Dynamics 365 BUSINESS CENTRAL & Dynamics 365 FINANCE & OPERATIONS, enables you to manage and integrate all areas and processes of your organization, in an agile and efficient way. Dynamics 365 ERP brings alternatives which are easily to adapt to both, the size of your organization and the complexity of its operation and its business model");
       $(".carderpleer1").text("Read more...");
       $(".cardcrm").text("Dynamics 365 CRM");   
       $(".cardcrmtitulo").text("DYNAMICS 365 CRM");
       $(".cardcrmdesc1").text("Dynamics 365 CRM is composed by three subsystems that empower your sales professionals and your sales teams, as well as your cursomer service department, to  effectivelly manage the customer relationships and all their interactions: marketing, sales, and service, in a total integrated solution. By doing this, it allows you to have a more precise customer profile and keep focused on them, to create more and better relationships, increasing your efficiency and productivity, and have a better interaction with your customers");
       $(".cardcrmleer1").text("Read more...");
       $(".cardppt").text("Business Intelligence & Productivity");   
       $(".cardppttitulo").text("POWER PLATFORM");
       $(".cardpptdesc1").text("PLATFORM is a set of business tools, fully integrated to Dynamics 365, that support the decission making process, to be more productive, and to grow-up your business. Power BI gather transactional data to create KPI's that are populated in customizable dashboards. By using Power Automate, the business productivity grows by the automation of repetitive activities, tasks and processess, then you and your resources can be focused on the core business. Power Apps supports your organization by creating customizable applications to fit specific business requierments");
       $(".cardpptleer1").text("Read more...");



        /****BA****/
        $(".baerptitle1").text("Dynamics 365 ERP");
        $(".baerpdesc1").text("Dynamics ERP manages and integrates all the business core processes and activities of the company, including accounting and finance, supply chain, operations -manufacturing, projects, services-, human resources and reporting");
        $(".bctitle").text("Dynamics 365 Business Central");
        $(".bcgralbtn").text("Insights");
        $(".bcfunbtn").text("Funtionality");
        $(".bcgeneralidadtitle").text("BUSINESS CENTRAL - Insights");
        $(".bcgenli01").text("An ERP solution for rapid and agile implementation, easy to customize and to expand. Dynamics BC can be used anywhere, on any device, with real-time data visualization");
        $(".bcgenli02").text("Integrated to Microsoft 365 and with the Business Intelligence resources. Security and access permissions based on tailored user roles");
        $(".bcgenli03").text("Multi-company and multi-currency solution, unified in an environment that can be deployed even on-premises or in the cloud");
        $(".bcgenli04").text("Ideal for small and medium-sized companies, since it allows you to manage and, eventually, align your financial and operational processes and activities to the best practices");
        $(".bcfunciontitle").text("BUSINESS CENTRAL - Funtionality");
        $(".bcfunli01").text("General Ledger, Cost Accounting & Financial Management");
        $(".bcfunli02").text("Mexican Localization: Electronic Accounting & Electronic Invoicing and capacity to be integrated with ISV's tax modules");
        $(".bcfunli03").text("Budgeting, Fixed Assets, Cash and Bank Accounting Management, Accounts Receivables & Accounts Payables Management");
        $(".bcfunli04").text("SCM: Inventory & Advanced Warehouse Management. Manufacturing, Purchasing and Sales Management");
        $(".bcfunli05").text("Projects, Service and Resources Management");
        $(".fotitle").text("Dynamics 365 Finance & Operations");
        $(".fogralbtn").text("Insights");
        $(".fofunbtn").text("Functionality");
        $(".fogeneralidatitle").text("F&O - Insights");
        $(".fogenli01").text("Gives, to medium and large businesses, the ability to automate and manage their global operations");
        $(".fogenli02").text("Dynamics 365 F&O is a very robust ERP system, with the capacity to record and to process high volumes of data and transactions simultaneously, from several and different sources");
        $(".fogenli03").text("Robust functionality, with superior capacity to meet different business models and its specific and complex business requirements,  for all the  areas and departments of the company");
        $(".fogenli04").text("Integration and collaboration with Microsoft 365, Business Intelligence, Automate and other Microsoft business tools and applications. Security and user access based on business roles");
        $(".fofunciontitle").text("F&O - Functionality");
        $(".fofunli01").text("Finance: Cost accounting, General Ledger, Budget Planning and Budget Control, Treasury and Bank Management, Accounts Receivable and Accounts Payable Management, Analytical and Financials Reporting");
        $(".fofunli02").text("SCM: Product Confiurator and Items Management, Inventory Mnagement. Warehousing, Transport and Cost Management. Master Planning & Manufacturing. Service Management");
        $(".fofunli03").text("Commerce: Sales Management. Back Office, Store Management and Call Center");
        $(".fofunli04").text("Project Operations and Service Management: visibility, collaboration and agility for business, focused on the project, contracts or service orders, and resources management integration");
        $(".bacrmtitle").text("Dynamics 365 CRM");
        $(".bacrmdesc1").text("Dynamics 365 CRM allows you to optimize and automate marketing and sales processes and activities, as well as field service and customer service, through a process of continuous customer relationships improvement");        
        $(".slstitle").text("Dynamics 365 Sales");
        $(".slsgralbtn").text("Insights");        
        $(".slsfunbtn").text("Functionality");
        $(".slsfuciontitle").text("Dyn365 SALES - Functionality");        
        $(".slsfunli01").text("MS Teams integration for a better communication with your customers. Dynamics 365 Sales also integrates AI to design sales cycles through the best interaction chanels");
        $(".slsfunli02").text("Predict revenue fluctuations and visualize areas to focus on at the top of the sales funnel");        
        $(".slsfunli03").text("Provides immediate information related to the customer's emootions, the market, and the priorities to execute a guided sale");
        $(".slsgeneralidatitle").text("Dyn365 SALES - Insights");
        $(".slsgenli01").text("Prioritization of clients and sales activities");
        $(".slsgenli02").text("Planning and anticipation. Visualization of data in real time");        
        $(".slsgenli03").text("Design of specific roles for the user");
        $(".slsgenli04").text("Customizable sales cycles and processes");        
        $(".mkttitle").text("Dynamics365 Marketing");
        $(".mktgralbtn").text("Insights");        
        $(".mktfunbtn").text("Functionality");
        $(".mktfuciontitle").text("Dyn365 MARKETING Functionality");
        $(".mktfunli01").text("Smooth customer interactions. Marketing B2C and B2B. Multichannel content");
        $(".mktfunli02").text("AI assistance that allows you to design real-time experiences focused on the customer, through the suggestion of the right channel");
        $(".mktfunli03").text("Collaboration through MS Teams integration. Definition of event triggers in all applications");
        $(".mktgeneralidatitle").text("Dyn365 MARKETING  Insights");
        $(".mktgenli01").text("Smooth and comfortable customer interactions. Marketing B2C and B2B. Multichannel content");
        $(".mktgenli02").text("AI assistance that allows you to design real-time experiences directed to the customer, through the right channel");
        $(".mktgenli03").text("Collaboration through MS Teams integration. Definition of event triggers in all applications");
        $(".srvtitle").text("Dynamics 365 Service");
        $(".srvfunbtn").text("Functionality");
        $(".srvgralbtn").text("Insights");
        $(".srvgeneralidatitle").text("Dyn365 SERVICE  Generalidades");
        $(".srvgenli01").text("Customer service: AI assistance and collaboration tools to maximize productivity and quality of service");
        $(".srvgenli02").text("Lower costs in a single and intuitive platform that provides information in a timely manner and easily adapts to future needs");
        $(".srvgenli03").text("Give your collaborators the right tools and the necessary information to dispatch each service order, at any time");
        $(".srvfuciontitle").text("Dyn365 SERVICE  Functionality");
        $(".srvfunli01").text(" Case management integration. Customer service timeline. Integrated transcription and translation. Visibility and issues tracking");
        $(".srvfunli02").text("Intelligent route planning. IoT integration. Remote collaboration with experts using mixed reality");
        
        /****POWER PLATFORM****/
        $(".pptitleh1").text("Productivity & Business Intelligence");
        $(".ppdesc1").text("Process Automation   |   Business Intelligence   |    Innovation and Business Apps Develpment");
        $(".ppbititle1").text("POWER BI");
        $(".ppbidesc1").text("Analysis & Business Intelligence");
        $(".ppbidesc2").text("Data visualization for strategic business decision making");
        $(".ppbili1").text("Data centralization from different sources to create a single and accessible source of information");
        $(".ppbili2").text("Transform all the data of the company into usefull information that is easy to visualize, to analyze, and to interpret through KPIs displayed in dashboards and drag-and-drop canvases");
        $(".ppbili3").text("Microsoft 365 integration");
        $(".ppbili4").text("AI application for reporting: describe the information you need then PBI Copilot will analyze and extract the correct data in a report");
        $(".pauttitle1").text("POWER AUTOMATE");
        $(".pautdesc1").text("Productivity & Automation");
        $(".pautdesc2").text("Increase the productivity of your organization through the automation of repetitive activities, tasks and processes");
        $(".pautli1").text("Digital process automation by connecting applications, data and services with cloud flows");
        $(".pautli2").text("Automation of robotic processes that allows to connect old systems with the new ones");
        $(".pautli3").text("Business process automation allows you to guide users through processes that have multiple steps to ensure consistency");
        $(".pautli4").text("Process Advisor allows you to detect bottlenecks and discover new opportunities for automation in the business process flow");
        $(".papptitle1").text("POWER APPS");
        $(".pappdesc1").text("Growth & Innovation");
        $(".pappdesc2").text("Develop and grow your business through digital innovation and business applications development");
        $(".pappli1").text("AI Builder allows you to add intelligence to your applications by creating custom AI models");
        $(".pappli2").text("Process automation in applications through integration with Power Automate");
        $(".pappli3").text("Microsoft Azure integration to create rich and robust functionality in a low-code platform");
        $(".pappli4").text("Development of customizations and high productivity applications for your company");
        
        
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");
        $(".").text("");



        //CONTACTO
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