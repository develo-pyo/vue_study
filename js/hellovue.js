//https://www.youtube.com/watch?v=yihfmJIgnGc&t=254s
var app = new Vue({
    el: '#app',
    data : {
        message: 'Hello vue!'
    }
})


var datas = {
    str : 'Vue.js'  
};
var vueConfigOptions = {
    el : '#app-2',  //dom 요소
    data : {    //data 값 설정, N 개 설정 가능
        message: '이 페이지는 ' + new Date() + '에 로드 되었음'
    }  
};

var app2 = new Vue(vueConfigOptions);   //모든 Vue 문법은 Vue 인스턴스에서 시작한다 (vue 문법은 Vue 인스턴스 내에서만 사용이 가능)
