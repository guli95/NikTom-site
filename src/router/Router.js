import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
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

import Polonek from "../pages/sowing-aggregates/Polonek";
import PolonS from "../pages/sowing-aggregates/PolonS";
import Polon from "../pages/sowing-aggregates/Polon";
import AgregatsHydro from "../pages/aggregats-with-hydro/AgregatsHydro";
import DiscEuroMasz from "../pages/aggregats-with-hydro/DiscEuroMasz";

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

import HeavyHydraulicBTCH from "../pages/disc-harrows/HeavyHydraulicBTCH";
import BTCSEuroMasz from "../pages/disc-harrows/BTCSEuroMasz";

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
import PremiumLangren from "../pages/spreaders/PremiumLangren";
import FieldLangren from "../pages/spreaders/FieldLangren";
import FunnelStrumyk from "../pages/spreaders/FunnelStrumyk";
import OrchardStrumyk from "../pages/spreaders/OrchardStrumyk";
import OrchardLangren from "../pages/spreaders/OrchardLangren";
import PaintedOrchardLangren from "../pages/spreaders/PaintedOrchardLangren";
import StainlessOrchardLangren from "../pages/spreaders/StainlessOrchardLangren";
import SandyCalciumLangren from "../pages/spreaders/SandyCalciumLangren";
import MountedSprayers from "../pages/mounted-sprayers/MountedSprayers";
import Bruno1000Tolmet from "../pages/trailed-sprayers/Bruno1000Tolmet";
import Promar1 from "../pages/trailed-sprayers/Promar1";
import Promar2 from "../pages/trailed-sprayers/Promar2";
import Bruno1200Tolmet from "../pages/trailed-sprayers/Bruno1200Tolmet";
import Promar15001 from "../pages/trailed-sprayers/Promar15001";
import Promar15002 from "../pages/trailed-sprayers/Promar15002";
import Bruno1500Tolmet from "../pages/trailed-sprayers/Bruno1500Tolmet";
import Promar17001 from "../pages/trailed-sprayers/Promar17001";
import Promar2000 from "../pages/trailed-sprayers/Promar2000";
import Bruno2000Tolmet from "../pages/trailed-sprayers/Bruno2000Tolmet";
import Promar2500 from "../pages/trailed-sprayers/Promar2500";
import Bruno2500Tolmet from "../pages/trailed-sprayers/Bruno2500Tolmet";
import TrailedSprayers from "../pages/trailed-sprayers/TrailedSprayers";
import BrunoX1000 from "../pages/trailed-sprayers/BrunoX1000";
import Promar1215HX from "../pages/trailed-sprayers/Promar1215HX";
import Promar12001518 from "../pages/trailed-sprayers/Promar12001518";
import BrunoX1200 from "../pages/trailed-sprayers/BrunoX1200";
import Promar1515HX from "../pages/trailed-sprayers/Promar1515HX";
import Promar15001518 from "../pages/trailed-sprayers/Promar15001518";
import BrunoX1500 from "../pages/trailed-sprayers/BrunoX1500";
import Borys1500 from "../pages/trailed-sprayers/Borys1500";
import Promar17001518 from "../pages/trailed-sprayers/Promar17001518";
import Promar2015HX from "../pages/trailed-sprayers/Promar2015HX";
import Promar2000151821 from "../pages/trailed-sprayers/Promar2000151821";
import BrunoX2000 from "../pages/trailed-sprayers/BrunoX2000";
import Borys2000 from "../pages/trailed-sprayers/Borys2000";
import Promar2018HU from "../pages/trailed-sprayers/Promar2018HU";
import Promar2021HU from "../pages/trailed-sprayers/Promar2021HU";
import Promar2515HX from "../pages/trailed-sprayers/Promar2515HX";
import Promar2518HU from "../pages/trailed-sprayers/Promar2518HU";
import Promar2521HU from "../pages/trailed-sprayers/Promar2521HU";
import Promar2500151821 from "../pages/trailed-sprayers/Promar2500151821";
import BrunoX2500 from "../pages/trailed-sprayers/BrunoX2500";
import Borys2500 from "../pages/trailed-sprayers/Borys2500";
import Promar3000151821 from "../pages/trailed-sprayers/Promar3000151821";
import Borys3000 from "../pages/trailed-sprayers/Borys3000";
import Promar1000Duo from "../pages/trailed-sprayers/Promar1000Duo";
import Promar1500Duo from "../pages/trailed-sprayers/Promar1500Duo";
import Promar1000Oktopus from "../pages/trailed-sprayers/Promar1000Oktopus";
import Promar1500Oktopus from "../pages/trailed-sprayers/Promar1500Oktopus";
import FuelTanks from "../pages/fuel-tanks/FuelTanks";
import FuelStation1600 from "../pages/fuel-tanks/FuelStation1600";
import FuelStation2500 from "../pages/fuel-tanks/FuelStation2500";
import FuelStation5000 from "../pages/fuel-tanks/FuelStation5000";
import ATMP from "../pages/field-drags/ATMP";
import FieldDrags from "../pages/field-drags/FieldDrags";
import Equipment from "../pages/equipment/Equipment";
import BaleGrapple from "../pages/equipment/BaleGrapple";
import TreeGrapple from "../pages/equipment/TreeGrapple";
import BucketStandard from "../pages/equipment/BucketStandard";
import BucketCapacitive from "../pages/equipment/BucketCapacitive";
import BucketUniversal from "../pages/equipment/BucketUniversal";
import BucketVolume from "../pages/equipment/BucketVolume";
import ManureForks from "../pages/equipment/ManureForks";
import ForkForgedCrocodile from "../pages/equipment/ForkForgedCrocodile";
import ForkForgedCrocodileXL from "../pages/equipment/ForkForgedCrocodileXL";
import ForkBurnedCrocodile from "../pages/equipment/ForkBurnedCrocodile";
import ForkBurnedCrocodileXL from "../pages/equipment/ForkBurnedCrocodileXL";
import ForkCrocodileMax from "../pages/equipment/ForkCrocodileMax";
import ForkCrocodileMaxXL from "../pages/equipment/ForkCrocodileMaxXL";
import PalletForks from "../pages/equipment/PalletForks";
import Clow from "../pages/equipment/Clow";
import BaleFork from "../pages/equipment/BaleFork";
import HydraulicFork from "../pages/equipment/HydraulicFork";
import Mixer from "../pages/equipment/Mixer";
import AdapterEuro from "../pages/equipment/AdapterEuro";
import DeltaTolmetTyre from "../pages/plowing-aggregats/DeltaTolmetTyre";

const RoutesApp = () => {
  return (
    <HashRouter>
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
            path="/agregaty-podrywkowo-orkowe/delta-kret-tolmet-wal oponowy"
            element={<DeltaTolmetTyre />}
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
          <Route path="/siewniki-zbozowe" element={<GrainSeeders />}></Route>
          <Route
            path="/siewniki-zbozowe/sr-euro-masz"
            element={<SREuroMasz />}
          ></Route>
          <Route
            path="/siewniki-zbozowe/srt-euro-masz"
            element={<SRTEuroMasz />}
          ></Route>
          <Route
            path="/siewniki-zbozowe/nadbudowany-euro-masz"
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
          <Route
            path="/rozsiewacze/dwutarczowy-premium-langren"
            element={<PremiumLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/polowy-lejek-langren"
            element={<FieldLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/lejek-strumyk"
            element={<FunnelStrumyk />}
          ></Route>
          <Route
            path="/rozsiewacze/sadowniczy-lejek-strumyk"
            element={<OrchardStrumyk />}
          ></Route>
          <Route
            path="/rozsiewacze/sadowniczy-lejek-langren"
            element={<OrchardLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/sadowniczy-langren-malowany"
            element={<PaintedOrchardLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/sadowniczy-nierdzewny-langren"
            element={<StainlessOrchardLangren />}
          ></Route>
          <Route
            path="/rozsiewacze/wapnia-soli-i-piasku-langren"
            element={<SandyCalciumLangren />}
          ></Route>
          {
            //opryskiwacze ciagane 1
            //   <Route
            //   path="/opryskiwacze-zawieszane"
            //   element={<MountedSprayers />}
            // ></Route>
          }

          <Route
            path="/opryskiwacze-ciagane/bruno-1000-tolmet"
            element={<Bruno1000Tolmet />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-1200-12-15"
            element={<Promar1 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-1200-18"
            element={<Promar2 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-1200-tolmet"
            element={<Bruno1200Tolmet />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-1500-15"
            element={<Promar15001 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-1500-18"
            element={<Promar15002 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-1500-tolmet"
            element={<Bruno1500Tolmet />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-1700-15-18"
            element={<Promar17001 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-2000-15-18"
            element={<Promar2000 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-2000-tolmet"
            element={<Bruno2000Tolmet />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/promar-2500-15-18"
            element={<Promar2500 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-2500-tolmet"
            element={<Bruno2500Tolmet />}
          ></Route>
          {
            //Opryskiwacze ciągane
          }

          <Route
            path="/opryskiwacze-ciagane"
            element={<TrailedSprayers />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-x-1000-tolmet"
            element={<BrunoX1000 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1215-hx-promar"
            element={<Promar1215HX />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1200-15-18-promar"
            element={<Promar12001518 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-x-1200-tolmet"
            element={<BrunoX1200 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1515-hx-promar"
            element={<Promar1515HX />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1500-15-18-promar"
            element={<Promar15001518 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-x-1500-tolmet"
            element={<BrunoX1500 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/borys-1500-tolmet"
            element={<Borys1500 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1700-15-18-promar"
            element={<Promar17001518 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2015-hx-promar"
            element={<Promar2015HX />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2000-15-18-21-promar"
            element={<Promar2000151821 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-x-2000-tolmet"
            element={<BrunoX2000 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/borys-2000-tolmet"
            element={<Borys2000 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2018-hu-promar"
            element={<Promar2018HU />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2021-hu-promar"
            element={<Promar2021HU />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2515-hx-promar"
            element={<Promar2515HX />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2518-hu-promar"
            element={<Promar2518HU />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2521-hu-promar"
            element={<Promar2521HU />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/2500-15-18-21-promar"
            element={<Promar2500151821 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/bruno-x-2500-tolmet"
            element={<BrunoX2500 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/borys-2500-tolmet"
            element={<Borys2500 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/3000-15-18-21-promar"
            element={<Promar3000151821 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/borys-3000-tolmet"
            element={<Borys3000 />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1000-duo-promar"
            element={<Promar1000Duo />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1500-duo-promar"
            element={<Promar1500Duo />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1000-oktopus-promar"
            element={<Promar1000Oktopus />}
          ></Route>
          <Route
            path="/opryskiwacze-ciagane/1500-oktopus-promar"
            element={<Promar1500Oktopus />}
          ></Route>
          {
            //zbiorniki paliwa
          }
          <Route path="/zbiorniki-paliwa" element={<FuelTanks />}></Route>
          <Route
            path="/zbiorniki-paliwa/dwuplaszczowy-1600-1300"
            element={<FuelStation1600 />}
          ></Route>
          <Route
            path="/zbiorniki-paliwa/dwuplaszczowy-2500"
            element={<FuelStation2500 />}
          ></Route>
          <Route
            path="/zbiorniki-paliwa/dwuplaszczowy-5000"
            element={<FuelStation5000 />}
          ></Route>
          {
            //włóki polowe
          }
          <Route path="/wloki-polowe" element={<FieldDrags />}></Route>
          <Route path="/wloki-polowe/atmp" element={<ATMP />}></Route>
          {
            //osprzęt
          }
          <Route path="/osprzet" element={<Equipment />}></Route>
          <Route
            path="/osprzet/chwytak-do-bel"
            element={<BaleGrapple />}
          ></Route>
          <Route
            path="/osprzet/chwytak-do-drzewa"
            element={<TreeGrapple />}
          ></Route>
          <Route
            path="/osprzet/lycha-do-wozka-widlowego-standard"
            element={<BucketStandard />}
          ></Route>
          <Route
            path="/osprzet/lycha-do-wozka-widlowego-pojemnosciowa"
            element={<BucketCapacitive />}
          ></Route>
          <Route
            path="/osprzet/lycha-uniwersalna"
            element={<BucketUniversal />}
          ></Route>
          <Route
            path="/osprzet/lycha-pojemnosciowa"
            element={<BucketVolume />}
          ></Route>
          <Route
            path="/osprzet/widly-do-obornika"
            element={<ManureForks />}
          ></Route>
          <Route
            path="/osprzet/szuflo-krokodyl-kuty"
            element={<ForkForgedCrocodile />}
          ></Route>
          <Route
            path="/osprzet/szuflo-krokodyl-xl-kuty"
            element={<ForkForgedCrocodileXL />}
          ></Route>
          <Route
            path="/osprzet//osprzet/szuflo-krokodyl-zab-palony"
            element={<ForkBurnedCrocodile />}
          ></Route>
          <Route
            path="/osprzet/szuflo-krokodyl-xl-zab-palony"
            element={<ForkBurnedCrocodileXL />}
          ></Route>
          <Route
            path="/osprzet/szuflo-krokodyl-max"
            element={<ForkCrocodileMax />}
          ></Route>
          <Route
            path="/osprzet/szuflo-krokodyl-max-xl"
            element={<ForkCrocodileMaxXL />}
          ></Route>
          <Route
            path="/osprzet/widly-do-palet"
            element={<PalletForks />}
          ></Route>
          <Route
            path="/osprzet/pazur-do-widel-do-palet"
            element={<Clow />}
          ></Route>
          <Route
            path="/osprzet//osprzet/widly-do-bel"
            element={<BaleFork />}
          ></Route>
          <Route
            path="/osprzet/widly-hydrauliczne"
            element={<HydraulicFork />}
          ></Route>
          <Route
            path="/osprzet/mieszalnik do betonu/paszy"
            element={<Mixer />}
          ></Route>
          <Route
            path="/osprzet/adapter-euroramka"
            element={<AdapterEuro />}
          ></Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
};

export default RoutesApp;
