// V1: Rápido mas não tem coloca os índices
(function (n, m) {
    m = (t,f)=>{f(t, '8000')};
    if(document.location.href.indexOf('mode=combined')===-1)return m('Vá para a visualização combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').val(n);
    c.find('input[type="button"]').click();
    m('joaovperin é top! :D', UI.SuccessMessage);
})
// NomeDaAldeia
('Nome da aldeia');

// V2: Rápido também e coloca os índices :D
(function (n, s, i0, m, x) {
    m = (t,f)=>{f(t, '8000')};
    x = i0===-1?()=>{return '';} : (i)=>{return '['+(i>99?'':i>9?'0':'00')+i+']'+s;};
    if(document.location.href.indexOf('mode=combined')===-1)return m('Vá para a visualização combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').each((i,e)=>{$(e).val(x(i+i0)+n)});
    c.find('input[type="button"]').click();
    m('joaovperin é top! :D', UI.SuccessMessage);
})
// NomeDaAldeia, Sufixo, NumeracaoInicial
('Heh', ' - ', 0);


// V3: Rápido também e é configurável.
(function (n, s, i0, m, x) {
    m = (t,f)=>{f(t, '8000')};
    x = i0===-1?()=>{return '';} : (i)=>{return '['+(i>99?'':i>9?'0':'00')+i+']'+s;};
    if(document.location.href.indexOf('mode=combined')===-1)return m('Vá para a visualização combinado!', UI.ErrorMessage);
    $('a.rename-icon').click();
    var c = $('span.quickedit-edit');
    c.find('input[type="text"]').each((i,e)=>{$(e).val(x(i+i0)+n)});
    c.find('input[type="button"]').click();
    m('joaovperin é top! :D', UI.SuccessMessage);
})
// NomeDaAldeia, Sufixo, NumeracaoInicial (-1 = Sem numeração)
('Batata', ' - ', 0);