// V1: R�pido mas n�o tem coloca os �ndices
(function (n, m) {
    m = (t,f)=>{f(t, '8000')};
    if(document.location.href.indexOf('mode=combined')===-1)return m('V� para a visualiza��o combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').val(n);
    c.find('input[type="button"]').click();
    m('joaovperin � top! :D', UI.SuccessMessage);
})
// NomeDaAldeia
('Nome da aldeia');

// V2: R�pido tamb�m e coloca os �ndices :D
(function (n, s, i0, m, x) {
    m = (t,f)=>{f(t, '8000')};
    x = i0===-1?()=>{return '';} : (i)=>{return '['+(i>99?'':i>9?'0':'00')+i+']'+s;};
    if(document.location.href.indexOf('mode=combined')===-1)return m('V� para a visualiza��o combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').each((i,e)=>{$(e).val(x(i+i0)+n)});
    c.find('input[type="button"]').click();
    m('joaovperin � top! :D', UI.SuccessMessage);
})
// NomeDaAldeia, Sufixo, NumeracaoInicial
('Heh', ' - ', 0);


// V3: R�pido tamb�m e � configur�vel.
(function (n, s, i0, m, x) {
    m = (t,f)=>{f(t, '8000')};
    x = i0===-1?()=>{return '';} : (i)=>{return '['+(i>99?'':i>9?'0':'00')+i+']'+s;};
    if(document.location.href.indexOf('mode=combined')===-1)return m('V� para a visualiza��o combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').each((i,e)=>{$(e).val(x(i+i0)+n)});
    c.find('input[type="button"]').click();
    m('joaovperin � top! :D', UI.SuccessMessage);
})
// NomeDaAldeia, Sufixo, NumeracaoInicial (-1 = Sem numera��o)
('Batata', ' - ', 0);