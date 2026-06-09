import ForDecisionMakers from "./components/sections/decisionMaking";
import Facilitator from "./components/sections/facilitators";
import AfricaTicker from "./components/sections/flag";
import Footer from "./components/sections/footer";
import Hero from "./components/sections/heroSection";
import Navbar from "./components/sections/navbar";
import Registration from "./components/sections/registration";
import StrategicTransformation from "./components/sections/strategicTransformation";
import SummitSchedule from "./components/sections/summitSchedule";
import Testimonials from "./components/sections/testimonials";
import WhyAttend from "./components/sections/whyAttend";
import WhatsAppButton from "./components/ui/whatsappButton";

export default function Home() {
  return (
    <main className="relative bg-[#091510] min-h-screen">
      <Navbar />
      <Hero />
      <WhyAttend />
      <ForDecisionMakers />
      <Facilitator />
      <Testimonials />
      <StrategicTransformation />
      <SummitSchedule/>
      <AfricaTicker />
      <Registration />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
