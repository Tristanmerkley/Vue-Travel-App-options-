import{_ as l,o as n,c as a,a as e,t as i,s as k,r,b as _,g as $,F as v,h as b,i as B,w as C}from"./index-fca40ca4.js";const w={props:{experience:{type:Object,required:!0}}},y={class:"card"},E=["src","alt"],N={class:"card__text"};function D(s,o,c,p,m,t){return n(),a("div",y,[e("img",{src:`/images/${c.experience.image}`,alt:c.experience.name},null,8,E),e("span",N,i(c.experience.name),1)])}const G=l(w,[["render",D]]),S={},V={class:"go-back"};function q(s,o){return n(),a("span",V,[e("button",{onClick:o[0]||(o[0]=c=>s.$router.back())},"go back")])}const u=l(S,[["render",q]]),F={components:{ExperienceCard:G,GoBack:u,GoBack:u},props:{id:{type:Number,required:!0}},computed:{destination(){return k.destinations.find(s=>s.id===this.id)}}},j={key:0,class:"destination"},L={class:"destination-details"},O=["src","alt"],T={class:"experiences"},z={class:"cards"};function A(s,o,c,p,m,t){const x=r("GoBack"),h=r("ExperienceCard"),f=r("router-link"),g=r("router-view");return n(),a("div",null,[t.destination?(n(),a("section",j,[e("h1",null,i(t.destination.name),1),_(x),e("div",L,[e("img",{src:`/images/${t.destination.image}`,alt:t.destination.name},null,8,O),e("p",null,i(t.destination.description),1)])])):$("",!0),e("section",T,[e("h2",null,"Top Experiences in "+i(t.destination.name),1),e("div",z,[(n(!0),a(v,null,b(t.destination.experiences,d=>(n(),B(f,{key:d.slug,to:{name:"experience.show",params:{experienceSlug:d.slug}}},{default:C(()=>[_(h,{experience:d},null,8,["experience"])]),_:2},1032,["to"]))),128))]),_(g)])])}const I=l(F,[["render",A]]);export{I as default};
