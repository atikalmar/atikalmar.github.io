let nevek = ['Éva', 'Attila', 'Anna', 'Péter']

nevek.forEach( (nev) => {$('ul').append( `<li>${nev}</li>`)}); 

$('li').eq(10).css('font-weight','bold')


$('body').append(
    '<h1>Beillesztve JavaScripttel</h1>'
  ) 

  $('body').append(
    '<p>Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. </p>'
  );