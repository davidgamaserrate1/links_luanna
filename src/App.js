import BorderDivider from "./components/borderDivider";
import Footer from "./components/footer";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

 
 
function App() {
  return (
    <div style={{height:'100%', width:'100%'}}>
      <Section1 />
      <BorderDivider />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
