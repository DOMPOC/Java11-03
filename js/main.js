(function (){
    var studentai = {
        'Jonas':{
            'akodas':1,
            'adresas':'Pievy g. 1,kaunas',
            'ivertinimai':{
                'php': 10,
                'js': 8,
                'Java': 9,
            }
        },
        'Petras':{
            'akodas': 869,
            'adresas':'Tilto g. 1, Kaunas',
            'ivertinimai': {
                'php': 7,
                'js': 6,
                'Java': 8,
            }
        },
        'Andrius':{
            'akodas': 567,
            'adresas': 'Rutu g. 2, Kaunas',
            'ivertinimai': {
                'php': 5,
                'js': 5,
                'Java': 10,
            }
        }
    }
    for(var item in studentai){
        console.log(item);
        console.log('Duomenys:');
        /*console.log(studentai[item]) ne duomenys o objektas*/
        for (var subitem in studentai[item]){
            if (subitem === 'ivertinimai'){
                console.log("Ivertinimai:");
            for (let subject in studentai[item][subitem]){
                console.log(subject+ ':' +studentai[item][subitem][subject])
            }
            }else {
                console.log(subitem + ':' + studentai[item][subitem]);
            }

        }

    }
})();