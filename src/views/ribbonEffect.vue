<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-04 10:38:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-05 17:47:21
-->
<template>
  <div class="ribbonEffect">
    <div
      v-for="(item, index) in arr"
      :key="index"
      :class="'ribbon' + index + ' ' + 'ribbonBase'"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: Array(30),
      left: 0,
      top: 0,
      red: 0,
      green: 0,
      blue: 0,
      delay: 0,
    };
  },
  mounted() {
    this.randomE();
  },
  methods: {
    randomE() {
      let str1 = "";
      for (let i = 1; i < 31; i++) {
        this.translateX = this.R(5, 95);
        this.red = this.R(0, 255);
        this.green = this.R(0, 255);
        this.blue = this.R(0, 255);
        this.rota = this.R(0, 360);
        this.delay = this.R(0.1, 1);
        this.duration = this.R(2, 3);
        this.translateY = this.R(60, 80);
        const str = `.ribbon${i} {
                                  background-color: rgb(${this.red},${this.green},${this.blue});
                                  transform:  translate(${this.translateX}vw,${this.translateY}vh) rotateZ(${this.rota}deg);
                                  animation-duration: ${this.duration}s;
                                  animation-delay: ${this.delay}s;
                              }`;
        str1 += str;
      }
      console.log(str1);
    },
    R(Min, Max) {
      const Range = Max - Min;
      const Rand = Math.random();
      const num = Min + Rand * Range;
      return num;
    },
  },
};
</script>
<style lang="scss" scoped>
.ribbonEffect {
  width: 100%;
  height: 100%;
  position: relative;
}
.ribbonBase {
  width: 10px;
  height: 25px;
  position: absolute;
  border-radius: 5px;
  animation-name: example;
  animation-timing-function: ease-out;
  animation-direction: reverse;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(50vw,-5vh);
  }
}
.ribbon1 {
                                  background-color: rgb(150.16085853097127,47.53977392810293,188.3772330394969);
                                  transform:  translate(94.00891685605508vw,69.27615146026064vh) rotateZ(51.155464293589446deg);
                                  animation-duration: 2.0583234690159413s;
                                  animation-delay: 0.6152468850612065s;
                              }.ribbon2 {
                                  background-color: rgb(131.2887748106788,58.84811834005026,71.58627379179751);
                                  transform:  translate(51.87020766143865vw,70.3755143494212vh) rotateZ(86.29225399787315deg);
                                  animation-duration: 2.832782221806475s;
                                  animation-delay: 0.5069435754448954s;
                              }.ribbon3 {
                                  background-color: rgb(206.88849606010731,103.79049537030878,10.488156956425405);
                                  transform:  translate(59.67351331533308vw,62.43113910878048vh) rotateZ(175.93025738656712deg);
                                  animation-duration: 2.6170987804037784s;
                                  animation-delay: 0.2300648561909473s;
                              }.ribbon4 {
                                  background-color: rgb(13.105871145881007,81.01636832308257,158.07303059554516);
                                  transform:  translate(28.529075087659358vw,61.112711249245756vh) rotateZ(197.9806392753324deg);
                                  animation-duration: 2.900307468294616s;
                                  animation-delay: 0.11722526306138242s;
                              }.ribbon5 {
                                  background-color: rgb(106.13601473885089,161.2849658667859,43.04609280106906);
                                  transform:  translate(92.63041925255202vw,77.10740849388077vh) rotateZ(13.864081413068945deg);
                                  animation-duration: 2.2044584616689114s;
                                  animation-delay: 0.8828581675089485s;
                              }.ribbon6 {
                                  background-color: rgb(191.24784812174002,222.61546829607087,121.95923171535101);
                                  transform:  translate(33.46031629102522vw,65.37856114063676vh) rotateZ(63.7729110379492deg);
                                  animation-duration: 2.7516271348419306s;
                                  animation-delay: 0.5790608627186934s;
                              }.ribbon7 {
                                  background-color: rgb(154.1374589752147,44.273257816333626,123.67517973292586);
                                  transform:  translate(86.13951976535823vw,78.32996033085443vh) rotateZ(78.15787148278845deg);
                                  animation-duration: 2.911026989562573s;
                                  animation-delay: 0.621488259694336s;
                              }.ribbon8 {
                                  background-color: rgb(87.30166627670137,128.31811199736953,102.51274429785063);
                                  transform:  translate(79.05976933192856vw,60.99971183198568vh) rotateZ(96.16975168151396deg);
                                  animation-duration: 2.5549800865730194s;
                                  animation-delay: 0.9399599097461278s;
                              }.ribbon9 {
                                  background-color: rgb(126.3449008125042,16.000404929583066,242.89180117937806);
                                  transform:  translate(23.59283376508789vw,63.63520444250222vh) rotateZ(122.25576099733614deg);
                                  animation-duration: 2.4967212941099017s;
                                  animation-delay: 0.16130518124051973s;
                              }.ribbon10 {
                                  background-color: rgb(80.58183088168427,252.5775094128921,148.21956545122416);
                                  transform:  translate(18.328942165231776vw,64.97194123859636vh) rotateZ(301.1008678621849deg);
                                  animation-duration: 2.168600635993541s;
                                  animation-delay: 0.41599738545624476s;
                              }.ribbon11 {
                                  background-color: rgb(184.55446311833313,39.06249227696015,203.8543286939503);
                                  transform:  translate(74.21562472266459vw,69.25218068299938vh) rotateZ(278.0221730337033deg);
                                  animation-duration: 2.9123051667574416s;
                                  animation-delay: 0.3518069954729197s;
                              }.ribbon12 {
                                  background-color: rgb(47.407335556535024,150.08283814317764,147.2439584449003);
                                  transform:  translate(80.99617901332707vw,60.713783001996276vh) rotateZ(100.49581681433347deg);
                                  animation-duration: 2.0580869932098604s;
                                  animation-delay: 0.37328658559650074s;
                              }.ribbon13 {
                                  background-color: rgb(6.968157942141877,50.55963842357275,65.08438074066785);
                                  transform:  translate(8.744772040277356vw,63.634979949043796vh) rotateZ(8.575921691802542deg);
                                  animation-duration: 2.933876894676276s;
                                  animation-delay: 0.8647054741701107s;
                              }.ribbon14 {
                                  background-color: rgb(169.36352538443282,252.59036220118114,112.52123883297858);
                                  transform:  translate(10.622508832215322vw,69.20433619165752vh) rotateZ(300.4279809968238deg);
                                  animation-duration: 2.031865571361272s;
                                  animation-delay: 0.1734668522706805s;
                              }.ribbon15 {
                                  background-color: rgb(173.79414181121658,212.04594810813836,82.30529070707934);
                                  transform:  translate(52.81804638859786vw,65.67736871879822vh) rotateZ(211.98940085203833deg);
                                  animation-duration: 2.3431865974740083s;
                                  animation-delay: 0.181489997206563s;
                              }.ribbon16 {
                                  background-color: rgb(125.47166903491775,212.2908878872995,253.689931742828);
                                  transform:  translate(23.622450268894983vw,64.78696510117491vh) rotateZ(187.83023415480568deg);
                                  animation-duration: 2.6701772119797953s;
                                  animation-delay: 0.7762836764798088s;
                              }.ribbon17 {
                                  background-color: rgb(30.279308553383604,104.93720606692035,110.49056538487092);
                                  transform:  translate(46.633043170518064vw,65.09545964345884vh) rotateZ(333.6748660080324deg);
                                  animation-duration: 2.622214794778267s;
                                  animation-delay: 0.5055454906305493s;
                              }.ribbon18 {
                                  background-color: rgb(108.71556519149685,110.22852483313187,65.644130249179);
                                  transform:  translate(84.33955221788482vw,62.27524845494973vh) rotateZ(273.77830678373255deg);
                                  animation-duration: 2.8113672142703026s;
                                  animation-delay: 0.5928604190811281s;
                              }.ribbon19 {
                                  background-color: rgb(153.04253150649677,182.7697777855668,121.96431509622452);
                                  transform:  translate(46.01466278608332vw,73.58071237494315vh) rotateZ(304.6533716278162deg);
                                  animation-duration: 2.9047055145972926s;
                                  animation-delay: 0.8519704364588653s;
                              }.ribbon20 {
                                  background-color: rgb(199.25258767255374,149.54338095007162,14.474952854736557);
                                  transform:  translate(28.116736896421163vw,61.762574316638165vh) rotateZ(200.3051843798323deg);
                                  animation-duration: 2.452134590982534s;
                                  animation-delay: 0.2304586390499753s;
                              }.ribbon21 {
                                  background-color: rgb(101.57076227324279,74.76848466963492,45.79763567952598);
                                  transform:  translate(68.53351517463113vw,75.41302351455523vh) rotateZ(314.5352149816201deg);
                                  animation-duration: 2.6400441549736646s;
                                  animation-delay: 0.9745023892438498s;
                              }.ribbon22 {
                                  background-color: rgb(194.7522640087959,243.30933607129248,0.5754476921851803);
                                  transform:  translate(25.677635959628407vw,65.08824877421856vh) rotateZ(337.01205714067083deg);
                                  animation-duration: 2.392534685081987s;
                                  animation-delay: 0.1655738939597981s;
                              }.ribbon23 {
                                  background-color: rgb(7.060626511139489,7.460722923021976,186.03059183746953);
                                  transform:  translate(66.79329499306508vw,60.3787470007703vh) rotateZ(299.3911919767806deg);
                                  animation-duration: 2.863732197185289s;
                                  animation-delay: 0.8604713489206269s;
                              }.ribbon24 {
                                  background-color: rgb(164.08543728498555,78.24979805591026,49.56587363545843);
                                  transform:  translate(30.552263393719088vw,64.28116982183924vh) rotateZ(315.97879707685973deg);
                                  animation-duration: 2.6507075829529723s;
                                  animation-delay: 0.13604737169554929s;
                              }.ribbon25 {
                                  background-color: rgb(110.87867207233357,235.86227158663903,172.2746750392677);
                                  transform:  translate(21.03397449420507vw,61.52156968961468vh) rotateZ(307.0594426504397deg);
                                  animation-duration: 2.537168664975394s;
                                  animation-delay: 0.15483995986636695s;
                              }.ribbon26 {
                                  background-color: rgb(244.42114036271073,4.081363200471055,154.87170703383748);
                                  transform:  translate(40.12427777828192vw,64.99222363421144vh) rotateZ(66.27732847575402deg);
                                  animation-duration: 2.373021518729734s;
                                  animation-delay: 0.3093474394912454s;
                              }.ribbon27 {
                                  background-color: rgb(213.83064592992068,148.92422048306776,193.05728977457477);
                                  transform:  translate(64.79685440196359vw,73.56260570679784vh) rotateZ(356.87128525615276deg);
                                  animation-duration: 2.1104200420173793s;
                                  animation-delay: 0.6173313517458006s;
                              }.ribbon28 {
                                  background-color: rgb(113.3225093969421,16.273085969590777,35.23904343686882);
                                  transform:  translate(93.35598065996936vw,65.79079119210924vh) rotateZ(252.03505755461552deg);
                                  animation-duration: 2.184304254400934s;
                                  animation-delay: 0.7486630849408089s;
                              }.ribbon29 {
                                  background-color: rgb(212.77907295159793,166.42708312245938,178.00645667164676);
                                  transform:  translate(66.6261745911588vw,76.0686765301113vh) rotateZ(73.41378298078737deg);
                                  animation-duration: 2.3688948849208344s;
                                  animation-delay: 0.9979377542251898s;
                              }.ribbon30 {
                                  background-color: rgb(76.09464227006015,45.65471501609643,241.3001110531575);
                                  transform:  translate(9.827081646010061vw,64.68409128268804vh) rotateZ(85.39453502629995deg);
                                  animation-duration: 2.6494632067897204s;
                                  animation-delay: 0.8680016367013745s;
                              }
</style>