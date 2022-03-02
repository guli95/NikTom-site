import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Contact from "../pages/Contact";
import Offer from "../pages/Offer";
import EuroMaszAu from "../pages/tillings-sets/EuromaszAu";
import EuromaszAuc from "../pages/tillings-sets/EuromaszAuc";
import TillingsSets from "../pages/tillings-sets/TillingsSets";
import Bat from "../pages/tillings-sets/Bat";
import NeonTolmet from "../pages/tillings-sets/NeonTolmet";
import Sowing from "../pages/sowing-aggregates/Sowing";
import EuroMaszAs from "../pages/sowing-aggregates/EuromaszAs";
import ArmaszWHO from "../pages/sowing-aggregates/ArmaszWOH";
import Armasz1 from "../pages/sowing-aggregates/Armasz1";
import Armasz2 from "../pages/sowing-aggregates/Armasz2";
import Polonek from "../pages/sowing-aggregates/Polonek";
import PolonS from "../pages/sowing-aggregates/PolonS";
import Polon from "../pages/sowing-aggregates/Polon";
import AgregatsHydro from "../pages/aggregats-with-hydro/AgregatsHydro";
import DiscEuroMasz from "../pages/aggregats-with-hydro/DiscEuroMasz";
import DiscLightArmasz from "../pages/aggregats-with-hydro/DiscLightArmasz";
import DiscHeavyArmasz from "../pages/aggregats-with-hydro/DiscHeavyArmasz";
import DiscHeavyArmaszWOH from "../pages/aggregats-with-hydro/DiscHeavyArmaszWOH";
import Tytan from "../pages/aggregats-with-hydro/Tytan";
import TytanV2 from "../pages/aggregats-with-hydro/TytanV2";
import Tiger from "../pages/aggregats-with-hydro/Tiger";
import DiscHarrows from "../pages/disc-harrows/DiscHarrows";
import Alfa from "../pages/disc-harrows/Alfa";
import VSelmar from "../pages/disc-harrows/VSelmar";
import TigerJr from "../pages/disc-harrows/TigerJr";
import TigerII from "../pages/disc-harrows/TigerII";
import MegaSpacing from "../pages/disc-harrows/MegaSpacing";
import HydraulicTiger from "../pages/disc-harrows/HydraulicTiger";
import HeavyRotos from "../pages/disc-harrows/HeavyRotos";
import EuroMaszBt from "../pages/disc-harrows/EuroMaszBt";
import WiderEuroMasz from "../pages/disc-harrows/WiderEuroMasz";
import HalfSuspended from "../pages/disc-harrows/HalfSuspended";
import HeavyHydraulicBTP from "../pages/disc-harrows/HeavyHydraulicBTCH";
import HeavyHydraulicBTCH from "../pages/disc-harrows/HeavyHydraulicBTCH";
import BTCSEuroMasz from "../pages/disc-harrows/BTCSEuroMasz";
import HydrauliclyFoldedArmasz from "../pages/disc-harrows/HydrauliclyFoldedArmasz.js";
import HydrauliclyFoldedStrolerArmasz from "../pages/disc-harrows/HydrauliclyFoldedStrolerArmasz";
import CompactSimplyTolmet from "../pages/disc-harrows/CompactSimplyTolmet";
import CompactAstatTolmet from "../pages/disc-harrows/CompactAstatTolmet";
import AstatModelI from "../pages/disc-harrows/AstatModelI";
import AstatModelII from "../pages/disc-harrows/AstatModelII";
import TenesModelI from "../pages/disc-harrows/TanesModelI";
import Megatron from "../pages/disc-harrows/Megatron";
import MegatronXL from "../pages/disc-harrows/MegatronXL";
import CompactTenes from "../pages/disc-harrows/CompactTenes";
import ActiveWir from "../pages/disc-harrows/ActiveWir";
import SkimmingAgregates from "../pages/skimming-aggregates/SkimmingAgregates";
import BreakableEuromasz from "../pages/skimming-aggregates/BreakableEuromasz";
import SnailEuromasz from "../pages/skimming-aggregates/SnailEuromasz";
import SpringProtector from "../pages/skimming-aggregates/SpringProtector";
import PinProtectorArmasz from "../pages/skimming-aggregates/PinProtectorArmasz";
import SnailProtectorArmasz from "../pages/skimming-aggregates/SnailProtectorArmasz.js";
import Krypton from "../pages/skimming-aggregates/Krypton";
import Arsen from "../pages/skimming-aggregates/Arsen";
import Cultivator from "../pages/skimming-aggregates/Cultivator";
import PlowingAggregates from "../pages/plowing-aggregats/PlowingAggregates";
import PlowingEuroMasz from "../pages/plowing-aggregats/PlowingEuroMasz";
import TopFoldingEuroMasz from "../pages/plowing-aggregats/TopFoldingEuroMasz";
import PlowlessArmasz from "../pages/plowing-aggregats/PlowlessArmasz";
import DeltaTolmet from "../pages/plowing-aggregats/DeltaTolmet";
import FoldedDeltaTolmet from "../pages/plowing-aggregats/FoldedDeltaTolmet";
import SingleBeamPlows from "../pages/single-beam-plows/SinglebeamPlows";
import PZEuroMasz from "../pages/single-beam-plows/PZEuroMasz";
import PJMEuroMasz from "../pages/single-beam-plows/PJMEuroMasz";
import PJ16EuroMasz from "../pages/single-beam-plows/PJ16EuroMasz";
import PJ18EuroMasz from "../pages/single-beam-plows/PJ18EuroMasz";
import PJLEuroMasz from "../pages/single-beam-plows/PJLEuroMasz";
import RotaryPlows from "../pages/rotary-plows/RotaryPlows";
import Atlas from "../pages/rotary-plows/Atlas";
import POM16EuroMasz from "../pages/rotary-plows/POM16EuroMasz";
import PO18EuroMasz from "../pages/rotary-plows/PO18EuroMasz";
import VogelNoot from "../pages/rotary-plows/VogelNoot";
import POR184 from "../pages/rotary-plows/POR184";
import RipperEuroMasz from "../pages/rotary-plows/RipperEuroMasz";
import ChiselTolmet from "../pages/rotary-plows/ChiselTolmet";
import BreakableEuroMasz from "../pages/subsoilers/BreakabelEuroMasz";
import Subsoilers from "../pages/subsoilers/Subsoilers";
import BreakableStrumyk from "../pages/subsoilers/BreakableStrumyk";
import ShaftlessArmasz from "../pages/subsoilers/ShaftlessArmasz";
import ShaftfullArmasz from "../pages/subsoilers/ShaftfullArmasz";
import BreakableTolmet from "../pages/subsoilers/BrakableTolmet";
import MichaelGK from "../pages/subsoilers/MichaelGK";
import MichaelGS from "../pages/subsoilers/MichaelGS";
import MichaelBreakable from "../pages/subsoilers/MichaelBreakable";
import MichaelSpring from "../pages/subsoilers/MichaelSpring";
import MichaelBreakableTolmet from "../pages/subsoilers/MichaelBreakableTolmet";
import PostRollers from "../pages/post-rollers/PostRollers";
import SuspendedEuroMasz from "../pages/post-rollers/SuspendedEuroMasz";
import TrailedEuroMasz from "../pages/post-rollers/TrailedEuroMasz";
import HydraulicEuroMasz from "../pages/post-rollers/HydraulicEuroMasz";
import GrainSeeders from "../pages/grain-seeders/GrainSeeders";
import SREuroMasz from "../pages/grain-seeders/SREuroMasz";
import SRTEuroMasz from "../pages/grain-seeders/SRTEuroMasz";
import BuiltUpEuroMasz from "../pages/grain-seeders/BuiltUPEuroMasz";
import Rakes from "../pages/rakes/Rakes";
import EuroMaszRake from "../pages/rakes/EuroMaszRake";
import PromarRake from "../pages/rakes/PromarRake";
import ArmaszRake from "../pages/rakes/ArmaszRake";
import TytanStrumyk from "../pages/spreaders/TytanStrumyk";
import Spreaders from "../pages/spreaders/Spreaders";
import PaintedPromar from "../pages/spreaders/PaintedPromar";
import PaintedLangren from "../pages/spreaders/PaintedLangren";
import GalvanizedPromar from "../pages/spreaders/GalvanizedPromar";
import StainlessLangren from "../pages/spreaders/StainlressLangren";

const RoutesApp = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/kontakt" element={<Contact />}></Route>
          <Route path="/" element={<Offer />}></Route>
          {
            //agregaty-uprawowe
          }
          <Route path="/agregaty-uprawowe" element={<TillingsSets />}></Route>
          <Route
            path="/agregaty-uprawowe/euro-maszau"
            element={<EuroMaszAu />}
          ></Route>
          <Route
            path="/agregaty-uprawowe/euro-maszauc"
            element={<EuromaszAuc />}
          ></Route>
          <Route path="/agregaty-uprawowe/nietoperek" element={<Bat />}></Route>
          <Route
            path="/agregaty-uprawowe/neon"
            element={<NeonTolmet />}
          ></Route>
          {
            //agregaty uprawowo-siewne
          }
          <Route path="/agregaty-uprawowo-siewne/" element={<Sowing />}></Route>
          <Route
            path="/agregaty-uprawowo-siewne/euro-masz-as"
            element={<EuroMaszAs />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/armasz-bez-hydropaku"
            element={<ArmaszWHO />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/armasz-hydropak-1"
            element={<Armasz1 />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/armasz-hydropak-2"
            element={<Armasz2 />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/polonek"
            element={<Polonek />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/polons"
            element={<PolonS />}
          ></Route>
          <Route
            path="/agregaty-uprawowo-siewne/polon"
            element={<Polon />}
          ></Route>

          {
            //"agregaty-uprawowe-hydropakiem"
          }
          <Route
            path="/agregaty-uprawowe-hydropak"
            element={<AgregatsHydro />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-euro"
            element={<DiscEuroMasz />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-lekki-armasz"
            element={<DiscLightArmasz />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-ciezki-armasz"
            element={<DiscHeavyArmasz />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-bez-hydropaku-armasz"
            element={<DiscHeavyArmaszWOH />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-tytan"
            element={<Tytan />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-tytan-z-walem"
            element={<TytanV2 />}
          ></Route>
          <Route
            path="/agregaty-uprawowe-hydropak/talerz-tiger"
            element={<Tiger />}
          ></Route>

          {
            //brony talerzowe
          }
          <Route path="/brony-talerzowe" element={<DiscHarrows />}></Route>
          <Route path="/brony-talerzowe/alfa" element={<Alfa />}></Route>
          <Route
            path="/brony-talerzowe/zawieszana"
            element={<VSelmar />}
          ></Route>
          <Route path="/brony-talerzowe/tiger-jr" element={<TigerJr />}></Route>
          <Route path="/brony-talerzowe/tiger-ii" element={<TigerII />}></Route>
          <Route
            path="/brony-talerzowe/mega-rozstaw"
            element={<MegaSpacing />}
          ></Route>
          <Route
            path="/brony-talerzowe/hydrauliczna-tiger"
            element={<HydraulicTiger />}
          ></Route>
          <Route
            path="/brony-talerzowe/hydrauliczna-ciezka-rotos"
            element={<HeavyRotos />}
          ></Route>
          <Route
            path="/brony-talerzowe/euro-masz-bt"
            element={<EuroMaszBt />}
          ></Route>
          <Route
            path="/brony-talerzowe/poszerzona-euro-masz"
            element={<WiderEuroMasz />}
          ></Route>
          <Route
            path="/brony-talerzowe/pol-zawieszana-euro-masz"
            element={<HalfSuspended />}
          ></Route>
          <Route
            path="/brony-talerzowe/hydraulicznie-rozkladana-euro-masz"
            element={<HeavyHydraulicBTCH />}
          ></Route>
          <Route
            path="/brony-talerzowe/zab-sprezynowe-euro-masz"
            element={<BTCSEuroMasz />}
          ></Route>
          <Route
            path="/brony-talerzowe/hydraulicznie-skladana-zawieszana-armasz"
            element={<HydrauliclyFoldedArmasz />}
          ></Route>
          <Route
            path="/brony-talerzowe/hydraulicznie-skladana-z-wozkiem-armasz"
            element={<HydrauliclyFoldedStrolerArmasz />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-simply-tolmet"
            element={<CompactSimplyTolmet />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-astat-tolmet"
            element={<CompactAstatTolmet />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-astat-model-i-tolmet"
            element={<AstatModelI />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-astat-model-ii-tolmet"
            element={<AstatModelII />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-tenes-model-i-tolmet"
            element={<TenesModelI />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-megatron-tolmet"
            element={<Megatron />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-megatron-xl-tolmet"
            element={<MegatronXL />}
          ></Route>
          <Route
            path="/brony-talerzowe/kompaktowa-tenes-tolmet"
            element={<CompactTenes />}
          ></Route>
          <Route
            path="/brony-talerzowe/aktywna-wir-tolmet"
            element={<ActiveWir />}
          ></Route>
          {
            //agregaty podrywkowe
          }
          <Route
            path="/agregaty-podrywkowe"
            element={<SkimmingAgregates />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-zrywalne-euro-masz"
            element={<BreakableEuromasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-slimakowe-euro-masz"
            element={<SnailEuromasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-sprezynowe"
            element={<SpringProtector />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-kolkowe-armasz"
            element={<PinProtectorArmasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-slimakowe-armasz"
            element={<SnailProtectorArmasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/zab-sprezynowe-armasz"
            element={<SpringProtector />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/krypton-tolmet"
            element={<Krypton />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/arsen-tolmet"
            element={<Arsen />}
          ></Route>
          <Route
            path="/agregaty-podrywkowe/kultywator-tolmet"
            element={<Cultivator />}
          ></Route>
          {
            //agregaty podrywkowo-orkowe
          }
          <Route
            path="/agregaty-podrywkowo-orkowe"
            element={<PlowingAggregates />}
          ></Route>
          <Route
            path="/agregaty-podrywkowo-orkowe/bezorkowy-euro-masz"
            element={<PlowingEuroMasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowo-orkowe/wal-skladany-na-gore-euro-masz"
            element={<TopFoldingEuroMasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowo-orkowe/bezorkowy-armasz"
            element={<PlowlessArmasz />}
          ></Route>
          <Route
            path="/agregaty-podrywkowo-orkowe/delta-kret-tolmet"
            element={<DeltaTolmet />}
          ></Route>
          <Route
            path="/agregaty-podrywkowo-orkowe/delta-skladany-tolmet"
            element={<FoldedDeltaTolmet />}
          ></Route>
          {
            //pługi jednobelkowe zagonoe
          }
          <Route
            path="/plugi-jednobelkowe-zagonowe"
            element={<SingleBeamPlows />}
          ></Route>
          <Route
            path="/plugi-jednobelkowe-zagonowe/pz-euro-masz"
            element={<PZEuroMasz />}
          ></Route>
          <Route
            path="/plugi-jednobelkowe-zagonowe/pjm-euro-masz"
            element={<PJMEuroMasz />}
          ></Route>
          <Route
            path="/plugi-jednobelkowe-zagonowe/16-pj-euro-masz"
            element={<PJ16EuroMasz />}
          ></Route>
          <Route
            path="/plugi-jednobelkowe-zagonowe/18-pj-euro-masz"
            element={<PJ18EuroMasz />}
          ></Route>
          <Route
            path="/plugi-jednobelkowe-zagonowe/pjl-euro-masz"
            element={<PJLEuroMasz />}
          ></Route>
          {
            //pługi obrotowe
          }
          <Route path="/plugi-obrotowe" element={<RotaryPlows />}></Route>
          <Route path="/plugi-obrotowe/atlas" element={<Atlas />}></Route>
          <Route
            path="/plugi-obrotowe/pom-16-euro-masz"
            element={<POM16EuroMasz />}
          ></Route>
          <Route
            path="/plugi-obrotowe/po-18-euro-masz"
            element={<PO18EuroMasz />}
          ></Route>
          <Route
            path="/plugi-obrotowe/vogel-noot-euro-masz"
            element={<VogelNoot />}
          ></Route>
          <Route path="/plugi-obrotowe/por-184" element={<POR184 />}></Route>
          <Route
            path="/plugi-obrotowe/ripper-euro-masz"
            element={<RipperEuroMasz />}
          ></Route>
          <Route
            path="/plugi-obrotowe/dlutowy-tolmet"
            element={<ChiselTolmet />}
          ></Route>
          {
            //głebosze
          }
          <Route path="/glebosze" element={<Subsoilers />}></Route>
          <Route
            path="/glebosze/zab-zrywalne-euro-masz"
            element={<BreakableEuroMasz />}
          ></Route>
          <Route
            path="/glebosze/zab-zrywalne-strumyk"
            element={<BreakableStrumyk />}
          ></Route>
          <Route
            path="/glebosze/kret-bez-wal-armasz"
            element={<ShaftlessArmasz />}
          ></Route>
          <Route
            path="/glebosze/kret-z-walem-armasz"
            element={<ShaftfullArmasz />}
          ></Route>
          <Route
            path="/glebosze/zab-zrywalne-tolmet"
            element={<BreakableTolmet />}
          ></Route>
          <Route path="/glebosze/michael-gk" element={<MichaelGK />}></Route>
          <Route path="/glebosze/michael-gs" element={<MichaelGS />}></Route>
          <Route
            path="/glebosze/michael-zrywalne-armasz"
            element={<MichaelBreakable />}
          ></Route>
          <Route
            path="/glebosze/michael-sprezynowe-armasz"
            element={<MichaelSpring />}
          ></Route>
          <Route
            path="/glebosze/michael-zrywalne-tolmet"
            element={<MichaelBreakableTolmet />}
          ></Route>
          {
            //wały posiewne
          }
          <Route path="/waly-posiewne" element={<PostRollers />}></Route>
          <Route
            path="/waly-posiewne/zawieszany-euro-masz"
            element={<SuspendedEuroMasz />}
          ></Route>
          <Route
            path="/waly-posiewne/ciagany-euro-masz"
            element={<TrailedEuroMasz />}
          ></Route>
          <Route
            path="/waly-posiewne/ciagany-hydrauliczny-euro-masz"
            element={<HydraulicEuroMasz />}
          ></Route>
          {
            //siewniki zbożowe
          }
          <Route path="/siewniki-zbolowe" element={<GrainSeeders />}></Route>
          <Route
            path="/siewniki-zbolowe/sr-euro-masz"
            element={<SREuroMasz />}
          ></Route>
          <Route
            path="/siewniki-zbolowe/srt-euro-masz"
            element={<SRTEuroMasz />}
          ></Route>
          <Route
            path="/siewniki-zbolowe/nadbudowany-euro-masz"
            element={<BuiltUpEuroMasz />}
          ></Route>
          {
            // zgrabiarki karuzelowe
          }
          <Route path="/zgrabiarki-karuzelowe" element={<Rakes />}></Route>
          <Route
            path="/zgrabiarki-karuzelowe/euro-masz"
            element={<EuroMaszRake />}
          ></Route>
          <Route
            path="/zgrabiarki-karuzelowe/promar"
            element={<PromarRake />}
          ></Route>
          <Route
            path="/zgrabiarki-karuzelowe/armasz"
            element={<ArmaszRake />}
          ></Route>
          {
            //rozsiewacze
          }
          <Route path="/rozsiewacze" element={<Spreaders />}></Route>
          <Route
            path="/rozsiewacze/dwutarczowy-tytan-strumyk"
            element={<TytanStrumyk />}
          ></Route>
          <Route
            path="/rozsiewacze/dwutarczowy-malowany-promar"
            element={<PaintedPromar />}
          ></Route>
          <Route
            path="/rozsiewacze/dwutarczowy-malowany-langren"
            element={<PaintedLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/dwutarczowy-ocynk-promar"
            element={<GalvanizedPromar />}
          ></Route>
          <Route
            path="/rozsiewacze/dwutarczowy-nierdzewny-langren"
            element={<StainlessLangren />}
          ></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default RoutesApp;
