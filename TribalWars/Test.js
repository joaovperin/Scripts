var msg = '';
$('table#plunder_list').find('tr').each(function(idx, htElm){
   if(idx<=1) return;
   var elm = $('#'+htElm.id);
   var tds = elm.find('td');
   var v = tds.eq(3).html();
   var r = tds.eq(5).html();

   msg = msg + 'Aldeia: ' + v + ' Rec: ' + r + ' Muralha: ' + tds.eq(6).html() + '<br/>';

});
Dialog.show('Msg', msg, function(){
   UI.InfoMessage('Não esqueça de farmar ;)');
});