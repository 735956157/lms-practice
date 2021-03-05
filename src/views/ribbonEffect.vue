<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-04 10:38:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-05 13:40:14
-->
<template>
  <div class="ribbonEffect">
    <div class="ribbon1"></div>
    <div class="ribbon2"></div>
    <div class="ribbon3"></div>
    <div class="ribbon4"></div>
    <div class="ribbon5"></div>
    <div class="ribbon6"></div>
    <div class="ribbon7"></div>
    <div class="ribbon8"></div>
    <div class="ribbon9"></div>
    <div class="ribbon10"></div>
    <div class="ribbon11"></div>
    <div class="ribbon12"></div>
    <div class="ribbon13"></div>
    <div class="ribbon14"></div>
    <div class="ribbon15"></div>
    <div class="ribbon16"></div>
    <div class="ribbon17"></div>
    <div class="ribbon18"></div>
    <div class="ribbon19"></div>
    <div class="ribbon20"></div>
    <div class="ribbon21"></div>
    <div class="ribbon22"></div>
    <div class="ribbon23"></div>
    <div class="ribbon24"></div>
    <div class="ribbon25"></div>
    <div class="ribbon26"></div>
    <div class="ribbon27"></div>
    <div class="ribbon28"></div>
    <div class="ribbon29"></div>
    <div class="ribbon30"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
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
    rdiv() {
      for (let i = 1; i < 31; i++) {
        this.n = i;
        const str = `<div class="ribbon${this.n}"></div>`;
        console.log(str);
      }
    },
    randomE() {
      for (let i = 1; i < 31; i++) {
        this.n = i;
        this.left = this.R(5, 95);
        this.red = this.R(0, 255);
        this.green = this.R(0, 255);
        this.blue = this.R(0, 255);
        this.rota = this.R(0, 360);
        this.delay = this.R(0.1, 1);
        this.duration = this.R(1, 3);
        this.top = this.R(30, 80);
        const str = `.ribbon${this.n} {
                                        width: 10px;
                                        height: 25px;
                                        background-color: rgb(${this.red},${this.green},${this.blue});
                                        position: absolute;
                                        border-radius: 5px;
                                        left: ${this.left}vw;
                                        transform: rotateZ(${this.rota}deg);
                                        animation: example${this.n} ${this.duration}s ease-in ${this.delay}s infinite ;
                                    }
                                        @keyframes example${this.n} {
                                            0%   {top:-2vh}
                                            100% {top: ${this.top}vh;}
                                            }`;
        console.log(str);
      }
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
  position: absolute;
}
.ribbon1 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    199.71691947845355,
    246.26609861613557,
    9.748824147390721
  );
  position: absolute;
  border-radius: 5px;
  left: 9.776509346771933vw;
  transform: rotateZ(212.9812751286285deg);
  animation: example1 1.7052547680803487s ease-in 0.2410873820774753s infinite;
}
@keyframes example1 {
  0% {
    top: -2vh;
  }
  100% {
    top: 74.74098439011294vh;
  }
}
.ribbon2 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    8.748707731637813,
    215.29115377350703,
    107.68928387442996
  );
  position: absolute;
  border-radius: 5px;
  left: 9.33787976886823vw;
  transform: rotateZ(131.47080994001033deg);
  animation: example2 1.5126373581094938s ease-in 0.9686028954555479s infinite;
}
@keyframes example2 {
  0% {
    top: -2vh;
  }
  100% {
    top: 67.40214132560777vh;
  }
}
.ribbon3 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    220.36278291328063,
    190.93989775753334,
    72.70302382675553
  );
  position: absolute;
  border-radius: 5px;
  left: 81.67906796929482vw;
  transform: rotateZ(181.18105032435898deg);
  animation: example3 1.9769735562759942s ease-in 0.9069802594679625s infinite;
}
@keyframes example3 {
  0% {
    top: -2vh;
  }
  100% {
    top: 57.401388175733416vh;
  }
}
.ribbon4 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    25.516383416234994,
    100.03097496083221,
    49.00971847276659
  );
  position: absolute;
  border-radius: 5px;
  left: 34.540054571263305vw;
  transform: rotateZ(242.54203204735697deg);
  animation: example4 2.5589257341840645s ease-in 0.1940215680566284s infinite;
}
@keyframes example4 {
  0% {
    top: -2vh;
  }
  100% {
    top: 49.86920667241357vh;
  }
}
.ribbon5 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    176.06436453192558,
    73.44138311591439,
    132.83140225972642
  );
  position: absolute;
  border-radius: 5px;
  left: 40.136441960066634vw;
  transform: rotateZ(252.5686668474425deg);
  animation: example5 1.8920321839105743s ease-in 0.9210709434783015s infinite;
}
@keyframes example5 {
  0% {
    top: -2vh;
  }
  100% {
    top: 43.341187683938074vh;
  }
}
.ribbon6 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    85.27665738207706,
    13.881626454817788,
    108.37617964028647
  );
  position: absolute;
  border-radius: 5px;
  left: 65.42032664463288vw;
  transform: rotateZ(317.66480697350005deg);
  animation: example6 2.6292692365352757s ease-in 0.35573068793271334s infinite;
}
@keyframes example6 {
  0% {
    top: -2vh;
  }
  100% {
    top: 69.84704213674134vh;
  }
}
.ribbon7 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    252.12730272967482,
    96.63209440081908,
    93.37593887801624
  );
  position: absolute;
  border-radius: 5px;
  left: 49.33111484777301vw;
  transform: rotateZ(3.7302121305657288deg);
  animation: example7 2.395604335502903s ease-in 0.46844102100405594s infinite;
}
@keyframes example7 {
  0% {
    top: -2vh;
  }
  100% {
    top: 73.30222028905723vh;
  }
}
.ribbon8 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    157.09381958732112,
    28.844066707927347,
    202.15700452408754
  );
  position: absolute;
  border-radius: 5px;
  left: 40.467236543051726vw;
  transform: rotateZ(106.46621486771829deg);
  animation: example8 2.6102580131212965s ease-in 0.6510021335383003s infinite;
}
@keyframes example8 {
  0% {
    top: -2vh;
  }
  100% {
    top: 42.455703045069185vh;
  }
}
.ribbon9 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    60.66350436430115,
    71.88355107024249,
    124.4159648584223
  );
  position: absolute;
  border-radius: 5px;
  left: 12.1094728490813vw;
  transform: rotateZ(276.59106469675055deg);
  animation: example9 1.8914028359358457s ease-in 0.8182771692179168s infinite;
}
@keyframes example9 {
  0% {
    top: -2vh;
  }
  100% {
    top: 77.86729391807033vh;
  }
}
.ribbon10 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    215.04015076711454,
    195.35577240091496,
    52.51042057720666
  );
  position: absolute;
  border-radius: 5px;
  left: 60.98510605182449vw;
  transform: rotateZ(139.81933209938614deg);
  animation: example10 2.798110651512143s ease-in 0.2966602490043919s infinite;
}
@keyframes example10 {
  0% {
    top: -2vh;
  }
  100% {
    top: 74.42635892617554vh;
  }
}
.ribbon11 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    58.56562773352579,
    86.06018323477493,
    130.05233612072578
  );
  position: absolute;
  border-radius: 5px;
  left: 55.67322165438075vw;
  transform: rotateZ(107.36241516265729deg);
  animation: example11 1.3236820065485078s ease-in 0.8635208468799159s infinite;
}
@keyframes example11 {
  0% {
    top: -2vh;
  }
  100% {
    top: 79.53772457973974vh;
  }
}
.ribbon12 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    57.21135562322363,
    6.21085833596867,
    33.370846594215536
  );
  position: absolute;
  border-radius: 5px;
  left: 71.17618404533823vw;
  transform: rotateZ(7.613745807417418deg);
  animation: example12 2.3963911168208405s ease-in 0.49062096679859013s infinite;
}
@keyframes example12 {
  0% {
    top: -2vh;
  }
  100% {
    top: 34.47137233023166vh;
  }
}
.ribbon13 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    161.55844606649748,
    237.50404455094045,
    46.90484689431171
  );
  position: absolute;
  border-radius: 5px;
  left: 7.885838820821918vw;
  transform: rotateZ(151.86344144214812deg);
  animation: example13 2.7696658913140837s ease-in 0.2809891844201954s infinite;
}
@keyframes example13 {
  0% {
    top: -2vh;
  }
  100% {
    top: 61.7712691456136vh;
  }
}
.ribbon14 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    158.1729970519102,
    78.49362337695625,
    94.25259137643606
  );
  position: absolute;
  border-radius: 5px;
  left: 45.301480027781054vw;
  transform: rotateZ(295.5180112679326deg);
  animation: example14 1.2938673608456028s ease-in 0.984899535006557s infinite;
}
@keyframes example14 {
  0% {
    top: -2vh;
  }
  100% {
    top: 66.75578464990294vh;
  }
}
.ribbon15 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    119.8793124411179,
    193.76073710981154,
    67.02138049672001
  );
  position: absolute;
  border-radius: 5px;
  left: 77.07574483997212vw;
  transform: rotateZ(141.6169837352803deg);
  animation: example15 1.8286648918672581s ease-in 0.5179112655219607s infinite;
}
@keyframes example15 {
  0% {
    top: -2vh;
  }
  100% {
    top: 32.14058808590707vh;
  }
}
.ribbon16 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    245.22903590812606,
    180.352451954894,
    242.25070182830459
  );
  position: absolute;
  border-radius: 5px;
  left: 53.224915527030504vw;
  transform: rotateZ(85.47987614979834deg);
  animation: example16 1.4056078056783292s ease-in 0.48684466711920904s infinite;
}
@keyframes example16 {
  0% {
    top: -2vh;
  }
  100% {
    top: 46.11394538393476vh;
  }
}
.ribbon17 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    73.90073408480812,
    214.31218246158213,
    180.3905522704614
  );
  position: absolute;
  border-radius: 5px;
  left: 71.26328560343056vw;
  transform: rotateZ(210.87879043358015deg);
  animation: example17 1.9550222837799978s ease-in 0.23789805502134762s infinite;
}
@keyframes example17 {
  0% {
    top: -2vh;
  }
  100% {
    top: 52.9660758880937vh;
  }
}
.ribbon18 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    17.095859752699738,
    232.27856911085718,
    245.27528990424452
  );
  position: absolute;
  border-radius: 5px;
  left: 61.03107343918356vw;
  transform: rotateZ(352.69232786829707deg);
  animation: example18 1.623859475983163s ease-in 0.9955832543221503s infinite;
}
@keyframes example18 {
  0% {
    top: -2vh;
  }
  100% {
    top: 53.88929005725879vh;
  }
}
.ribbon19 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    95.69814918960404,
    112.07727558806097,
    172.56052779244968
  );
  position: absolute;
  border-radius: 5px;
  left: 27.665132458935823vw;
  transform: rotateZ(259.8491648017491deg);
  animation: example19 1.0140796375531886s ease-in 0.9953892740152115s infinite;
}
@keyframes example19 {
  0% {
    top: -2vh;
  }
  100% {
    top: 64.72365920221011vh;
  }
}
.ribbon20 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    4.8788192314831935,
    169.64931589080254,
    87.01064872241024
  );
  position: absolute;
  border-radius: 5px;
  left: 62.3737820096172vw;
  transform: rotateZ(302.3587774167539deg);
  animation: example20 2.5073663132692507s ease-in 0.6390803561314398s infinite;
}
@keyframes example20 {
  0% {
    top: -2vh;
  }
  100% {
    top: 67.54455208814241vh;
  }
}
.ribbon21 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    111.98047444136478,
    66.24796780241279,
    50.03583679398521
  );
  position: absolute;
  border-radius: 5px;
  left: 35.21586060068382vw;
  transform: rotateZ(350.9005967369449deg);
  animation: example21 2.988603872398717s ease-in 0.24816156543574885s infinite;
}
@keyframes example21 {
  0% {
    top: -2vh;
  }
  100% {
    top: 30.505577545172407vh;
  }
}
.ribbon22 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    168.02897518507422,
    65.73567483666126,
    113.18539587698584
  );
  position: absolute;
  border-radius: 5px;
  left: 19.366714334170524vw;
  transform: rotateZ(86.90031279315274deg);
  animation: example22 2.28951097325866s ease-in 0.6088312359230954s infinite;
}
@keyframes example22 {
  0% {
    top: -2vh;
  }
  100% {
    top: 38.62848818295184vh;
  }
}
.ribbon23 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    134.59835176207926,
    0.5350376481817465,
    242.82607507443856
  );
  position: absolute;
  border-radius: 5px;
  left: 36.77227668176299vw;
  transform: rotateZ(191.84641518073363deg);
  animation: example23 2.7491208208287654s ease-in 0.22307963510792783s infinite;
}
@keyframes example23 {
  0% {
    top: -2vh;
  }
  100% {
    top: 42.086169445021824vh;
  }
}
.ribbon24 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    50.42446090496765,
    250.73409511718836,
    125.11584699111425
  );
  position: absolute;
  border-radius: 5px;
  left: 44.36926602271819vw;
  transform: rotateZ(241.3400249791462deg);
  animation: example24 2.31916030339424s ease-in 0.7947317324761741s infinite;
}
@keyframes example24 {
  0% {
    top: -2vh;
  }
  100% {
    top: 63.584184446441526vh;
  }
}
.ribbon25 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    194.7381412443185,
    201.84738106895102,
    236.77210124403234
  );
  position: absolute;
  border-radius: 5px;
  left: 77.16158063043875vw;
  transform: rotateZ(333.43170215212393deg);
  animation: example25 1.3990145515140804s ease-in 0.5862803683981811s infinite;
}
@keyframes example25 {
  0% {
    top: -2vh;
  }
  100% {
    top: 78.70259314994654vh;
  }
}
.ribbon26 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    115.54811898076059,
    240.63318050797503,
    62.47642176594758
  );
  position: absolute;
  border-radius: 5px;
  left: 39.249724169255515vw;
  transform: rotateZ(49.39306881014111deg);
  animation: example26 2.892728882603991s ease-in 0.5637019701461778s infinite;
}
@keyframes example26 {
  0% {
    top: -2vh;
  }
  100% {
    top: 70.93491212036119vh;
  }
}
.ribbon27 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    95.34858602933704,
    242.03211118059735,
    112.7648424627747
  );
  position: absolute;
  border-radius: 5px;
  left: 48.83404774295986vw;
  transform: rotateZ(140.41127623659267deg);
  animation: example27 2.083979944028903s ease-in 0.561004199097786s infinite;
}
@keyframes example27 {
  0% {
    top: -2vh;
  }
  100% {
    top: 47.366828430897286vh;
  }
}
.ribbon28 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    145.3581864640048,
    176.7177619943986,
    236.52432145600883
  );
  position: absolute;
  border-radius: 5px;
  left: 12.276573172257681vw;
  transform: rotateZ(247.32670582493287deg);
  animation: example28 1.3035961939854785s ease-in 0.2763703103413688s infinite;
}
@keyframes example28 {
  0% {
    top: -2vh;
  }
  100% {
    top: 39.843308631662374vh;
  }
}
.ribbon29 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    52.918284887559196,
    132.3748269280258,
    13.287939767886366
  );
  position: absolute;
  border-radius: 5px;
  left: 44.79162641936814vw;
  transform: rotateZ(269.15367568919027deg);
  animation: example29 2.143166159651981s ease-in 0.3542310333555764s infinite;
}
@keyframes example29 {
  0% {
    top: -2vh;
  }
  100% {
    top: 52.74390865216178vh;
  }
}
.ribbon30 {
  width: 10px;
  height: 25px;
  background-color: rgb(
    101.80083442899655,
    189.00759031548873,
    15.745377115067372
  );
  position: absolute;
  border-radius: 5px;
  left: 31.43819819040159vw;
  transform: rotateZ(9.522945179807492deg);
  animation: example30 1.8084614011924298s ease-in 0.5577279316740742s infinite;
}
@keyframes example30 {
  0% {
    top: -2vh;
  }
  100% {
    top: 59.679676581587884vh;
  }
}
</style>