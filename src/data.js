const data = [
  {
    name: "agregat uprawowo-przedsiewny Euro-Masz(AU)",
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe/euro-maszau",
    id: 1,
  },
  {
    name: "agregat uprawowy ciężki Euro-Masz(AUC)",
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe/euro-maszauc",
    id: 2,
  },
  {
    name: `agregat uprawowy "nietoperek" strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe/nietoperek",
    id: 3,
  },
  {
    name: `agregat uprawowy "neon" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe/neon",
    id: 4,
  },
  {
    name: `agregat uprawowo-siewny (AS) z hydropakiem Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/euro-masz-as",
    id: 5,
  },
  {
    name: `agregat uprawowo-siewny bez hydropaku Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/armasz-bez-hydropaku",
    id: 6,
  },
  {
    name: `agregat uprawowo-siewny z hydropakiem 1 wał armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/armasz-hydropak-1",
    id: 7,
  },
  {
    name: `agregat uprawowo-siewny z hydropakiem 2 wały armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/armasz-hydropak-2",
    id: 8,
  },
  {
    name: `agregat uprawowo-siewny "polonek" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/polonek",
    id: 9,
  },
  {
    name: `agregat uprawowo-siewny "polon s" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/polons",
    id: 10,
  },
  {
    name: `agregat uprawowo-siewny "polon" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowo-siewne/polon",
    id: 11,
  },
  {
    name: `agregat talerzowy z hydropakiem Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-euro",
    id: 12,
  },
  {
    name: `agregat talerzowy z hydropakiem lekki Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-lekki-armasz",
    id: 13,
  },
  {
    name: `agregat talerzowy ciężki z hydropakiem Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-ciezki-armasz",
    id: 14,
  },
  {
    name: `agregat talerzowy ciężki bez hydropaku Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-bez-hydropaku-armasz",
    id: 15,
  },
  {
    name: `agregat talerzowy z hydropakiem "tytan" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-tytan",
    id: 16,
  },

  {
    name: `agregat talerzowy z hydropakiem "tytan" z wałem oponowym`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-tytan-z-walem",
    id: 17,
  },
  {
    name: `agregat talerzowy z pakiem "tiger" Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-uprawowe-hydropak/talerz-tiger",
    id: 18,
  },
  {
    name: `brona talerzowa "alfa V/X Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/alfa",
    id: 19,
  },
  {
    name: `brona talerzowa zawieszana w układzie "V" Selmar`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/zawieszana",
    id: 20,
  },
  {
    name: `brona talerzowa "tiger junior" Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/tiger-jr",
    id: 21,
  },
  {
    name: `brona talerzowa "tiger II" Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/tiger-ii",
    id: 22,
  },
  {
    name: `brona talerzowa "mega" rozstaw 1200cm Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/mega-rozstaw",
    id: 23,
  },
  {
    name: `brona talerzowa hydrauliczna "tiger" Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/hydrauliczna-tiger",
    id: 24,
  },
  {
    name: `brona talerzowa hydrauliczna ciężka "rotos"`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/hydrauliczna-ciezka-rotos",
    id: 25,
  },
  {
    name: `brona talerzowa Euro-masz(bt)`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/euro-masz-bt",
    id: 26,
  },
  {
    name: `brona talerzowa ciężka poszerzona Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/poszerzona-euro-masz",
    id: 27,
  },
  {
    name: `brona talerzowa pół zawieszana(btp) Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/pol-zawieszana-euro-masz",
    id: 28,
  },
  {
    name: `brona talerzowa ciężka hydraulicznie rozkładana(BTCH)Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/hydraulicznie-rozkladana-euro-masz",
    id: 29,
  },
  {
    name: `brona talerzowa ciężka zab. sprężynowe(BTCS)Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/zab-sprezynowe-euro-masz",
    id: 30,
  },
  {
    name: `brona talerzowa hydraulicznie składana zawieszana Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/hydraulicznie-skladana-zawieszana-armasz",
    id: 31,
  },
  {
    name: `brona talerzowa hydraulicznie składana z wózkiem transportowym Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/hydraulicznie-skladana-z-wozkiem-armasz",
    id: 32,
  },
  {
    name: `brona talerzowa kompaktowa "simply" tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-simply-tolmet",
    id: 33,
  },
  {
    name: `brona talerzowa kompaktowa "astat" tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-astat-tolmet",
    id: 34,
  },
  {
    name: `brona talerzowa kompaktowa "astat" z urządzeniem trakcyjnym model I tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-astat-model-I-tolmet",
    id: 35,
  },
  {
    name: `brona talerzowa kompaktowa "astat" z urządzeniem trakcyjnym model II tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-astat-model-II-tolmet",
    id: 36,
  },
  {
    name: `brona talerzowa kompaktowa "tenes" z urządzeniem trakcyjnym model I tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-tenes-model-I-tolmet",
    id: 37,
  },
  {
    name: `brona kompaktowa hydraulicznie składana "megatron" tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-megatron-tolmet",
    id: 38,
  },
  {
    name: `brona kompaktowa hydraulicznie składana "megatron" XL tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-megatron-xl-tolmet",
    id: 40,
  },
  {
    name: `brona kompaktowa "tenes" tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/kompaktowa-tenes-tolmet",
    id: 41,
  },
  {
    name: `brona aktywna wir tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/brony-talerzowe/aktywna-wir-tolmet",
    id: 42,
  },
  {
    name: `Agregat podrywkowy "gruber" zab zrywalne Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-zrywalne-euro-masz",
    id: 43,
  },
  {
    name: `Agregat podrywkowy "gruber" zab ślimakowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-slimakowe-euro-masz",
    id: 44,
  },
  {
    name: `Agregat podrywkowy "gruber" zab sprężynowe`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-sprezynowe",
    id: 45,
  },
  {
    name: `Agregat ścierniskowy zab kołkowe Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-kolkowe-armasz",
    id: 46,
  },
  {
    name: `Agregat ścierniskowy zab ślimakowe Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-slimakowe-armasz",
    id: 47,
  },
  {
    name: `Agregat ścierniskowy zab sprężynowe Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/zab-sprezynowe-armasz",
    id: 48,
  },
  {
    name: `Agregat podrywkowy "krypton" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/krypton-tolmet",
    id: 49,
  },
  {
    name: `Agregat podrywkowy "arsen" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/arsen-tolmet",
    id: 50,
  },
  {
    name: `kultywator ścierniskowy Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowe/kultywator-tolmet",
    id: 51,
  },
  {
    name: `Agregat podrywkowo-orkowy/bezorkowy Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/bezorkowy-euro-masz",
    id: 52,
  },
  {
    name: `Agregat podrywkowo-orkowy/bezorkowy wał składany na górę agregatu Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/wal-skladany-na-gore-euro-masz",
    id: 53,
  },
  {
    name: `Agregat bezorkowy Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/bezorkowy-armasz",
    id: 54,
  },
  {
    name: `Agregat bezorkowy "DELTA" "KRET" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/delta-kret-tolmet",
    id: 55,
  },
  {
    name: `Agregat bezorkowy "DELTA" "KRET" Tolmet z wałem oponowym`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/delta-kret-tolmet-wal oponowy",
    id: 550,
  },
  {
    name: `Agregat bezorkowy hydraulicznie składany półzawieszany "DELTA" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/agregaty-podrywkowo-orkowe/delta-skladany-tolmet",
    id: 56,
  },
  {
    name: `pług zagonowy(PZ) zab kołkowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-jednobelkowe-zagonowe/pz-euro-masz",
    id: 57,
  },
  {
    name: `pług jednobelkowy(PJM) zab kołkowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-jednobelkowe-zagonowe/pjm-euro-masz",
    id: 58,
  },
  {
    name: `pług jednobelkowy (PJ) zab kołkowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-jednobelkowe-zagonowe/16-pj-euro-masz",
    id: 59,
  },
  {
    name: `pług jednobelkowy 18 (PJ) zab kołkowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-jednobelkowe-zagonowe/18-pj-euro-masz",
    id: 600,
  },
  {
    name: `pług jednobelkowy (PJR) zab resorowe Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-jednobelkowe-zagonowe/pjl-euro-masz",
    id: 61,
  },
  {
    name: `pług obrotowy "atlas" 16 typ lekki rama podwojna zab kolkowe Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/atlas",
    id: 62,
  },
  {
    name: `pług obrotowy (POM) 16  zab kolkowe Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/pom-16-euro-masz",
    id: 63,
  },
  {
    name: `pług obrotowy "PO" 18 zab zrywalne Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/po-18-euro-masz",
    id: 64,
  },
  {
    name: `pług obrotowy "PON" Vogeł 8 NOOT 18 zab zrywalne Euro-Masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/vogel-noot-euro-masz",
    id: 65,
  },
  {
    name: `pług obrotowy zab resorowe (POR) 184`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/por-184",
    id: 66,
  },
  {
    name: `pług dłutowy ripper (PD) Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/ripper-euro-masz",
    id: 67,
  },
  {
    name: `pług dłutowy tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/plugi-obrotowe/dlutowy-tolmet",
    id: 68,
  },
  {
    name: `Głebosz zab zrywalne Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/zab-zrywalne-euro-masz",
    id: 69,
  },
  {
    name: `Głebosz zab zrywalne Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/zab-zrywalne-strumyk",
    id: 70,
  },
  {
    name: `Głebosz "kret" bez wału zab zrywalne Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/kret-bez-wal-armasz",
    id: 71,
  },
  {
    name: `Głebosz "kret" z wałem zab zrywalne Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/kret-z-walem-armasz",
    id: 72,
  },
  {
    name: `Głebosz zab zrywalne Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/zab-zrywalne-tolmet",
    id: 73,
  },
  {
    name: `Głebosz zab zrywalne "Michael" Euro-Masz (GK)`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/michael-gk",
    id: 74,
  },
  {
    name: `Głebosz zab sprężynowe "Michael" Euro-Masz (GS)`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/michael-gs",
    id: 7401,
  },
  {
    name: `Głebosz zab zrywalne "Michael" Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/michael-zrywalne-armasz",
    id: 75,
  },
  {
    name: `Głebosz zab sprężynowe "Michael" Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/michael-sprezynowe-armasz",
    id: 76,
  },
  {
    name: `Głebosz belkowy zab zrywalne "Michael" Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/glebosze/michael-zrywalne-tolmet",
    id: 77,
  },
  {
    name: `Wał posiewny zawieszany Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/waly-posiewne/zawieszany-euro-masz",
    id: 78,
  },
  {
    name: `Wał posiewny ciągany Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/waly-posiewne/ciagany-euro-masz",
    id: 79,
  },
  {
    name: `Wał posiewny ciągany hydrauliczny Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/waly-posiewne/ciagany-hydrauliczny-euro-masz",
    id: 80,
  },
  {
    name: `siewnik zbołowy stopkowy (SR) Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/siewniki-zbolowe/sr-euro-masz",
    id: 81,
  },
  {
    name: `siewnik zbołowy dwutalerzowy (SRT) Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/siewniki-zbolowe/srt-euro-masz",
    id: 82,
  },
  {
    name: `siewnik zbołowy nadbudowany Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/siewniki-zbolowe/nadbudowany-euro-masz",
    id: 83,
  },
  {
    name: `zgrabiarka karuzelowa Euro-masz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zgrabiarki-karuzelowe/euro-masz",
    id: 84,
  },
  {
    name: `zgrabiarka karuzelowa promar`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zgrabiarki-karuzelowe/promar",
    id: 85,
  },
  {
    name: `zgrabiarka karuzelowa Armasz`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zgrabiarki-karuzelowe/armasz",
    id: 86,
  },
  {
    name: `rozsiewacz dwutarczowy "tytan" malowany Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-tytan-strumyk",
    id: 87,
  },
  {
    name: `rozsiewacz dwutarczowy malowany Promar`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-malowany-promar",
    id: 88,
  },
  {
    name: `rozsiewacz dwutarczowy malowany Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-malowany-langren",
    id: 89,
  },
  {
    name: `rozsiewacz dwutarczowy ocynk promar`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-ocynk-promar",
    id: 90,
  },
  {
    name: `rozsiewacz dwutarczowy nierdzewny Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-nierdzewny-langren",
    id: 91,
  },
  {
    name: `rozsiewacz dwutarczowy premium Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/dwutarczowy-premium-langren",
    id: 9101,
  },
  {
    name: `rozsiewacz polowy typu lejek Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/polowy-lejek-langren",
    id: 92,
  },
  {
    name: `rozsiewacz lejek Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/lejek-strumyk",
    id: 93,
  },
  {
    name: `rozsiewacz sadowniczy lejek Strumyk`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/sadowniczy-lejek-strumyk",
    id: 94,
  },
  {
    name: `rozsiewacz sadowniczy typu lejek Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/sadowniczy-lejek-langren",
    id: 95,
  },
  {
    name: `rozsiewacz sadowniczy Langren malowany`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/sadowniczy-langren-malowany",
    id: 96,
  },
  {
    name: `rozsiewacz sadowniczy nierdzewny Langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/sadowniczy-nierdzewny-langren",
    id: 97,
  },
  {
    name: `rozsiewacz wpana soli i piasku langren`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/rozsiewacze/wapnia-soli-i-piasku-langren",
    id: 98,
  },
  {
    name: `opryskiwacz zawieszany Bruno 1000 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/bruno-1000-tolmet",
    id: 99,
  },
  {
    name: `opryskiwacz zawieszany Promar 1200l/12/15m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-1200-12-15",
    id: 100,
  },
  {
    name: `opryskiwacz zawieszany Promar 1200l/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-1200-18",
    id: 101,
  },
  {
    name: `opryskiwacz zawieszany bruno 1200l tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/bruno-1200-tolmet",
    id: 102,
  },
  {
    name: `opryskiwacz zawieszany Promar 1500l/15m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-1500-15",
    id: 103,
  },
  {
    name: `opryskiwacz zawieszany Promar 1500l/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-1500-18",
    id: 104,
  },
  {
    name: `opryskiwacz zawieszany Bruno 1500l tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/bruno-1500-tolmet",
    id: 105,
  },
  {
    name: `opryskiwacz zawieszany Promar 1700l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-1700-15-18",
    id: 106,
  },
  {
    name: `opryskiwacz zawieszany Promar 2000l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-2000-15-18",
    id: 107,
  },
  {
    name: `opryskiwacz zawieszany Bruno 2000l tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/bruno-2000-tolmet",
    id: 108,
  },
  {
    name: `opryskiwacz zawieszany Promar 2500l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/promar-2500-15-18",
    id: 109,
  },
  {
    name: `opryskiwacz zawieszany Bruno 2500l tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-zawieszane/bruno-2500-tolmet",
    id: 110,
  },
  {
    name: `opryskiwacz ciągany Bruno X 1000 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/bruno-x-1000-tolmet",
    id: 111,
  },
  {
    name: `opryskiwacz ciągany Promar 1200l/15m 1215HX`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1215-hx-promar",
    id: 112,
  },
  {
    name: `opryskiwacz ciągany Promar 1200l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1200-15-18-promar",
    id: 113,
  },
  {
    name: `opryskiwacz ciągany Bruno X 1200 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/bruno-x-1200-tolmet",
    id: 114,
  },
  {
    name: `opryskiwacz ciągany Promar 1500l/15 1515HX`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1515-hx-promar",
    id: 115,
  },
  {
    name: `opryskiwacz ciągany Promar 1500l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1500-15-18-promar",
    id: 116,
  },
  {
    name: `opryskiwacz ciągany Bruno X 1500 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/bruno-x-1500-tolmet",
    id: 117,
  },
  {
    name: `opryskiwacz ciągany Borys 1500 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/borys-1500-tolmet",
    id: 118,
  },
  {
    name: `opryskiwacz ciągany Promar 1700l/15/18m`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1700-15-18-promar",
    id: 119,
  },
  {
    name: `opryskiwacz ciągany Promar 2000l/15 2015HX`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2015-hx-promar",
    id: 120,
  },
  {
    name: `opryskiwacz ciągany Promar 2000l/15/`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2000-15-18-21-promar",
    id: 121,
  },
  {
    name: `opryskiwacz ciągany Bruno X 2000 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/bruno-x-2000-tolmet",
    id: 122,
  },
  {
    name: `opryskiwacz ciągany Borys 2000 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/borys-2000-tolmet",
    id: 123,
  },
  {
    name: `opryskiwacz ciągany Promar 2000l/18 belka włoska bargam 2018HU`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2018-hu-promar",
    id: 124,
  },
  {
    name: `opryskiwacz ciągany Promar 2000l/21 belka włoska bargam 2021HU`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2021-hu-promar",
    id: 125,
  },
  {
    name: `opryskiwacz ciągany Promar 2500l/15 2515HX`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2515-hx-promar",
    id: 126,
  },
  {
    name: `opryskiwacz ciągany Promar 2500l/18 2518HU`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2518-hu-promar",
    id: 127,
  },
  {
    name: `opryskiwacz ciągany Promar 2500l/21 2521HU`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2521-hu-promar",
    id: 128,
  },
  {
    name: `opryskiwacz ciągany Promar 2500l/15/18/21`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/2500-15-18-21-promar",
    id: 129,
  },
  {
    name: `opryskiwacz ciągany Bruno X 2500 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/bruno-x-2500-tolmet",
    id: 130,
  },
  {
    name: `opryskiwacz ciągany Borys 2500 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/borys-2500-tolmet",
    id: 131,
  },
  {
    name: `opryskiwacz ciągany Promar 3000l/15/18/21`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/3000-15-18-21-promar",
    id: 132,
  },
  {
    name: `opryskiwacz ciągany Borys 3000 Tolmet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/borys-3000-tolmet",
    id: 133,
  },
  {
    name: `opryskiwacz sadowniczy Promar 1000 Duo`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1000-duo-promar",
    id: 134,
  },
  {
    name: `opryskiwacz sadowniczy Promar 1500 Duo`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1500-duo-promar",
    id: 135,
  },
  {
    name: `opryskiwacz sadowniczy Promar 1000 Oktopus`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1000-oktopus-promar",
    id: 136,
  },
  {
    name: `opryskiwacz sadowniczy Promar 1500 Oktopus`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/opryskiwacze-ciagane/1500-oktopus-promar",
    id: 137,
  },
  {
    name: `zbiornik paliwa dwupłaszczowy ON JFC FuelStation 1600/1300l`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zbiorniki-paliwa/dwuplaszczowy-1600-1300",
    id: 138,
  },
  {
    name: `zbiornik paliwa dwupłaszczowy ON JFC FuelStation 2500l`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zbiorniki-paliwa/dwuplaszczowy-2500",
    id: 139,
  },
  {
    name: `zbiornik paliwa dwupłaszczowy ON JFC FuelStation 5000l`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/zbiorniki-paliwa/dwuplaszczowy-5000",
    id: 140,
  },
  {
    name: `włóka łąkowo-polowa ATMP`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/wloki-polowe/atmp",
    id: 141,
  },
  {
    name: `chwytaki do bel ATMP`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/chwytak-do-bel",
    id: 142,
  },
  {
    name: `chwytaki do drzewa ATMP`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/chwytak-do-drzewa",
    id: 143,
  },
  {
    name: `Łycha do wózka widłowego standard`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/lycha-do-wozka-widlowego-standard",
    id: 144,
  },
  {
    name: `Łycha do wózka widłowego pojemnościowa`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/lycha-do-wozka-widlowego-pojemnosciowa",
    id: 145,
  },
  {
    name: `Łycha uniwersalna`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/lycha-uniwersalna",
    id: 146,
  },
  {
    name: `Łycha pojemnościowa`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/lycha-pojemnosciowa",
    id: 147,
  },
  {
    name: `Widły do obornika`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/widly-do-obornika",
    id: 148,
  },
  {
    name: `Widło-krokodyl zęby kute 680/880mm`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/widlo-krokodyl-680-880",
    id: 149,
  },
  {
    name: `szuflo-krokodyl ząb kuty 680mm`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-kuty",
    id: 150,
  },
  {
    name: `szuflo-krokodyl XL ząb kuty 680mm`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-xl-kuty",
    id: 151,
  },
  {
    name: `szuflo-krokodyl ząb palony`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-zab-palony",
    id: 152,
  },
  {
    name: `szuflo-krokodyl xl ząb palony`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-xl-zab-palony",
    id: 153,
  },
  {
    name: `szuflo-krokodyl max`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-max",
    id: 154,
  },
  {
    name: `szuflo-krokodyl max xl`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/szuflo-krokodyl-max-xl",
    id: 155,
  },
  {
    name: `widły do palet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/widly-do-palet",
    id: 156,
  },
  {
    name: `pazur do wideł do palet`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/pazur-do-widel-do-palet",
    id: 157,
  },
  {
    name: `widły do bel`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/widly-do-bel",
    id: 157,
  },
  {
    name: `widły hydrauliczne`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/widly-hydrauliczne",
    id: 158,
  },
  {
    name: `mieszalnik do betonu/paszy`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/mieszalnik do betonu/paszy",
    id: 159,
  },
  {
    name: `adapter euroramka do wózka widłówego`,
    imgUrl: "images/dji-5331597_1280.jpg",
    searcherImg: "images/logo.jpg",
    route: "/osprzet/adapter-euroramka",
    id: 160,
  },
];
export default data;
