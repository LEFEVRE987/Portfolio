var table1 = [[6,2,4,16,20],[7,10,14,18,26]];
var table2 = [42,3,17,21,19];
var i = 0;
var f = 0;
var k = 0;

function ma_fonction(){

    //lire le tableau 2
    for(i;i<=table2.length;i++){

        if(table2[i] == 17){
            table2[i] = table2[i]++;
        }else if(table2[i] == 19){

            //lire le tableau dans le tableau -- table1
            for(f;f<=table1.length;f++){
                k=0;

                for(k;k<=table1[f][k];k++){

                    // console.log(k+"tour "+table1[f][k]);

                    if (table1[f][k] == 14) {

                        table1[f][k] =  table1[f][k]++;

                    }else{

                        table1[f][k] = --table1[f][k];

                    }
                    console.log(k+"tour "+table1[f][k]);
                }
            }
        }

    }

}
;