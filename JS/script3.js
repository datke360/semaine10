 var compte = 70;
            function decompte()
            {
                    if(compte <= 1) {
                    pluriel = "";
                    } else {
                    pluriel = "s";
                    }
             
                document.getElementById("compt").innerHTML = compte + " seconde" + pluriel;
             
                    if(compte == 0 || compte <= 0) {
                    compte = 0;
             
                    clearInterval(timer);
                    }
             
                compte--;
            }
            var timer = setInterval('decompte()',1000);
