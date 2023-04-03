// import logo from './logo.svg';
import './App.css';
import Card from "./Card";

function App() {
  var priceCard=[
  {
    plan:"free",
    price:"0",
    feature : [
     { 
      title : "Single User", 
    },
    {
      title : "5GB Storage",
    },
    {
      title : "Unlimited Public Projects",
    },
    {
      title : "Community Access",
    },
    {
      title : "Unlimited Private Projects",
      xmark : true,
    },
    {
      title : "Dedicated Phone Support",
      xmark : true,
    },
    {
      title : "Free Subdomain",
      xmark : true,
    },
    {
      title : "Monthly Status Reports",
      xmark : true,
    }
    ]
  },
  {
    plan:"plus",
    price:"9",
    feature : [
      { 
       title : "5 User" ,
       bold:true,
     },
     {
       title : "50GB Storage",
     },
     {
       title : "Unlimited Public Projects",
     },
     {
       title : "Community Access",
     },
     {
       title : "Unlimited Private Projects",
     },
     {
       title : "Dedicated Phone Support",
     },
     {
       title : "Free Subdomain",
     },
     {
       title : "Monthly Status Reports",
       xmark : true,
     }
     ]
  },
  {
    plan:"pro",
    price:"49",
    feature : [
      { 
       title : "Unlimited Users", 
       bold : true,
     },
     {
       title : "150GB Storage",
     },
     {
       title : "Unlimited Public Projects",
     },
     {
       title : "Community Access",
     },
     {
       title : "Unlimited Private Projects",
     },
     {
       title : "Dedicated Phone Support",
     },
     {
       title : "Ultimte free subdomain",
     },
     {
       title : "Monthly Status Reports",
     }
     ]
  
  },
  
  
]
  return (
    <div className="App">
     <section className="pricing py-5">
  <div className="container">
    <div className="row">
     
      {
   priceCard.map((card) => {
   return <Card card={card}> </Card>
   })
   }
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
