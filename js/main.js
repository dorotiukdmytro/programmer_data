$(function(){
    $('button').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(programmer) {

            var dataDiv = document.createElement('div');
            $(dataDiv).attr('id', 'dane-programisty');

            $('body').append(dataDiv);

            $('#dane-programisty').append('<p> Imię: ' + programmer.imie + '</p>');
            $('#dane-programisty').append('<p> Nazwisko: ' + programmer.nazwisko + '</p>');
            $('#dane-programisty').append('<p> Zawód: ' + programmer.zawod + '</p>');
            $('#dane-programisty').append('<p> Firma: ' + programmer.firma + '</p>');
        });
    });
});