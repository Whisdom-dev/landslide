import PricingComparison from './components/PricingComparison';


const App = () => (
    <Router>
      <Routes>
        <Route path="/pricing-comparison" element={<PricingComparison />} />
      </Routes>
    </Router>
  );//#endregion

  
   <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-sm text-gray-600">
   {[
     { label: "Home", icon: "🏠" },
     { label: "Study", icon: "📚" },
     { label: "Progress", icon: "📊" },
     { label: "AI Tutor", icon: "🤖" },
     { label: "Settings", icon: "⚙️" },
   ].map((nav, idx) => (
     <div key={idx} className="flex flex-col items-center text-purple-600">
       <span className="text-xl">{nav.icon}</span>
       <span className="text-xs">{nav.label}</span>
     </div>
   ))}
 </nav>