
//JSON 
let arr = [{"name":"Afghanistan","topLevelDomain":[".af"],"alpha2Code":"AF","alpha3Code":"AFG","callingCodes":["93"],"capital":"Kabul","altSpellings":["AF","Afġānistān"],"region":"Asia","subregion":"Southern Asia","population":27657145,"latlng":[33.0,65.0],"demonym":"Afghan","area":652230.0,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages":[{"iso639_1":"ps","iso639_2":"pus","name":"Pashto","nativeName":"پښتو"},{"iso639_1":"uz","iso639_2":"uzb","name":"Uzbek","nativeName":"Oʻzbek"},{"iso639_1":"tk","iso639_2":"tuk","name":"Turkmen","nativeName":"Türkmen"}],"translations":{"de":"Afghanistan","es":"Afganistán","fr":"Afghanistan","ja":"アフガニスタン","it":"Afghanistan","br":"Afeganistão","pt":"Afeganistão","nl":"Afghanistan","hr":"Afganistan","fa":"افغانستان"},"flag":"svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"AFG"}]
 
 
 //normal for loop
 for(var i=0; i<arr.length; i++){
   console.log(arr[i]);
 }
 
//for in loop 
 for( i in arr){
   console.log(arr[i]);
 }
 
 //for each loop
 arr.forEach(i => console.log(i));
 
 //for of loop
 for(let item of arr){
   console.log(item);
 }
 
 
 //my resume data
 let myResume ={"name": "Anil Kumar MR", "Age": 22, "skills": "html, javascript, css, python, bootstrap, nodejs, reactjs, aws, typescript, scss, figma, c++, git, github", "experience": "2 years", "location": "Bangalore", "college":"GCU", "designation": "fullstack developer", "hobbies":"anime, badminton, motorcycling, reading", "interests": "fitness, fashion, crypto currency, food"};
 console.log(myResume)
