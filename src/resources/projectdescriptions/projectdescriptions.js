const projects =[
    {
        "id":0,
        "title":"Grande Travel",
        "subtitle":"e-commerce platform for travel services",
        "type":"project",
        "img":"https://dpasc-site-pictures.s3-ap-southeast-2.amazonaws.com/gt_thumb.PNG",
        "content":'&lt;p&gt;&lt;strong&gt;Our Opportunity:&lt;/strong&gt;&lt;/p&gt;'

    },
    {
        "id":1,
        "title":"PLKN",
        "subtitle":"Assists vendors communicate with retail outlets",
        "type":"project",
        "img":"https://dpasc-site-pictures.s3-ap-southeast-2.amazonaws.com/plkn_thumb.svg",
        "content":'<h1>PLKN</h1><hr/><img style="height:300px" src="https://dpasc-site-pictures.s3-ap-southeast-2.amazonaws.com/logo.svg" alt="n/a"/><hr/><h2>Link</h2><p>Coming soon..</p><br/><h2>Problem</h2><p>Product vendors must carry out a regular tender process to have their products sold by large retailers.Every product category has different dates for documentation that is required for submission throughout the tender process.The issue is,these dates are subject to change randomly without any notification to the vendors.Vendors may have their products across various categories,as you can imagine this could get a little tricky to manage.</p><hr/><h2>Project Mission</h2><p>Provide a platform for vendors that allows them to view and sign up for notifications that detail any changes in the dates within a product category.</p><hr/><h2>Methodology</h2><p><ul><li>Develop a web scraper that checks retailers sites for changes to information relating to the tender process</li><li>Provide an easy platform for vendors to interface with to review and subscribe to changes</li><li>Provide an API for developers to work with the information that has been collected</li></ul></p><hr/><h2>Architecture</h2><h3>User Interface</h3><p>This platform uses a React SPA for users to interface with.</p><h3>Server Side</h3><p>The web scrapers are written in Python using Pandas SqlAlchemy,pg8000 and Numpy;The scrapers are set up on a server that executes them daily automated via a cron job.The scrapers collect the data,cleans the data and compares the data for any discrepancies against what is in the database.The server side core runs on.NET Core 3.1,Entity Framework Core is used as the ORM on the server to map the server data to models.I used the repository pattern in the architecture as it has the advantage of allowing me to change the type of database.The platform uses a REST API to interact with the REACT SPA.Developers can also interact with the API to access the data collected by the platform.</p><h3>Database</h3><p>This platform uses a PostgreSQL relational database,this was chosen for the open source nature of PostgreSQL.The schema is very basic and is designed in a way that each retailer has it’s own table.After starting this project I began to learn about NoSQL databases.I think it would be more appropriate to use a document database and may make changes to the platform in future.</p><hr/><h2>Deployment</h2><p>The program is set up to run on a single server,this seemed like a simple solution for a basic project.I recently began playing around with AWS services and put together a network diagram of how the platform could potentially operate using cloud services.This would mean slight changes to the architecture of the program.</p><hr/><h2>Project Status</h2><p>The project its at a proof of concept level.The next step would be to add more retailers,add a function so that vendors can subscribe to notifications and migrate to a NoSQL database.I have also considered changing the architecture to be optimized for a Virtual Cloud Network.</p><hr/><h2>Source code</h2><p>The source code is currently in a private repository however,feel free to email me if you would like a access.(Will be made public soon)</p><hr/><h2>How to run program</h2><p>Ensure you have the .NET Core run time, PostgreSQL and Python3 installed on your machine.</p><p><b>1.Edit the connection string:</b><br/>ServerSide/Domain/Data/EntityFrameworkModels/Contexts/ContextWoolworths.cs HOST=localhost;DB=woolworths_db;UID=username;PWD=password;Port=5432;</p><p><b>2.Set up database:</b><br/>Run Entity Framework ‘dotnet ef database update’ in ServerSide/API/</p><p><b>3.Configure scrapers:</b><br/>Open:DataCollection/DataCleaner/WoolworthsDataCleaner.py DataCollection/DataMananger/WoolworthsDataManager.py DataCollection/Scraper/ScraperWow.py And edit the file path variables to somewhere the script can access the data</p><p></p><p><b>4.Get data:</b><br/> The data collection tools are set up using cron jobs however,to test the data collection tools run the/DataCollection/ShellScripts/PipPackages.sh script to install the dependencies Run the DataCollection/ShellScripts/WoolworthsDataCollection.sh this will run the data collecton scripts and populate the database</p><p><b>5.Execute program:</b><br/>Move to ServerSide/API/and run ‘dotnet run’</p>'
        
    },
    {
        "id":2,
        "title":"Barren Wuffet",
        "subtitle":"Mobile application for traders",
        "type":"project",
        "img":"../../../../resources/projectdescriptions/plkn/logo.svg",
        "content":'&#x3C;div&#x3E;Foo &#xA9; bar &#x1D306; baz &#x2603; qux &#x3C;/div&#x3E;',
    },
    {
        "id":3,
        "title":"Groovy Notes",
        "subtitle":"My first react app :)",
        "type":"project",
        "img":"../../../../resources/projectdescriptions/plkn/logo.svg",
        "content":'<h1>GroovyNotes</h1><hr/><br/><h2>Problem</h2><p>I wanted to learn React! </p><hr/><h2>Project Mission</h2><p>Create a simple not taking app to experiment with ReactJS,objectives:<ul><li>Create a React app with some CRUD functionality</li><li>Try a few NPM packages</li><li>Use local and session storage</li></ul></p><hr/><h2>NPM Packages Used</h2><ul><li>ReactToast </li><li>Quill</li><li>React-Router-Dom</li><li>uuid</li><li>React-Icons</li></ul><hr/><h2>Source code</h2><p><a href="https://github.com/dpasc/groovynotes">GroovyNotes - GitHub</a></p><hr/><h2>How to run program</h2><p>1. Install dependencies:<br/>Move to projects root directory and run command “npm I” </p><p>2. Start Node server:<br/>Run command “npm start” </p>',
    },
];


export default projects;
