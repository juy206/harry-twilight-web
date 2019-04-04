function flipD() {
        var x = parseInt((Math.random() * 4) + 1);
        switch(x){
            case 1: picsrc = "img/그리핀.jpg"; break;
            case 2: picsrc = "img/후플.jpg"; break;
            case 3: picsrc = "img/래번.jpg"; break;
            case 4: picsrc = "img/슬리.jpg"; break;
        }
        document.dor.button.value = 'WAIT';
        ID = window.setTimeout("changeD();", 1000);
    }

    function changeD() {
        document['pic'].src = picsrc;
        
    }
    
    function first(){
        document['pic'].src="img/게임메인.jpg";
    }

function twtw() {
        var y = parseInt((Math.random() * 14) + 1);
        switch(y){
            case 1: picsrc = "img/벨라겜.jpg"; break;
            case 2: picsrc = "img/에드겜.jpg"; break;
            case 3: picsrc = "img/르네겜.jpg"; break;
            case 4: picsrc = "img/닥터겜.jpg"; break;
            case 5: picsrc = "img/에스겜.jpg"; break;
            case 6: picsrc = "img/에밋겜.jpg"; break;
            case 7: picsrc = "img/앨리겜.jpg"; break;
            case 8: picsrc = "img/로잘겜.jpg"; break;
            case 9: picsrc = "img/찰리겜.jpg"; break;
            case 10: picsrc = "img/알렉겜.jpg"; break;
            case 11: picsrc = "img/제인겜.jpg"; break;
            case 12: picsrc = "img/제콥겜.jpg"; break;
            case 13: picsrc = "img/제퍼겜.jpg"; break;
            case 14: picsrc = "img/젬스겜.jpg"; break;
        }
        document.inmul.button.value = 'WAIT';
        ID = window.setTimeout("change();", 1000);
    }

    function change() {
        document['pic'].src = picsrc;
        
    }
    
    function cjt(){
        document['pic'].src="img/트와겜메.jpg";
    }

