function randomQuote() {
    var allCitat = [
        'сегодня был непростой день, но ты продолжаешь справляться. я сильно-сильно тобой горжусь!',
        'ты чудесный котик и заслуживаешь только лучшего!',
        'ты найдешь свое место в мире. рано или поздно на этой огромной планете ты обязательно найдешь свой дом.',
        'ты еще все успеешь. для каждого успех заключается в разных вещах. ты все еще можешь начать то, о чем всегда мечтала. до тех пор, пока ты здесь, у тебя есть шанс. только ты можешь решать, как ты проживешь эту жизнь. у тебя все еще есть время.',
        'ты всегда так старался и продолжаешь стараться дальше. я знаю, что иногда бывает непросто. давай продержимся еще немного? впереди еще столько чудесного и невероятного, столько людей, событий, новых воспоминаний. все оно однажды будет стоить того.',
        'ты был с собой с самого начала, и ты знаешь, через что тебе пришлось пройти, чтобы стать тем, кем ты в итоге являешься. никто не знает твою историю лучше, чем знаешь её ты, и именно поэтому их слова никогда не будут чем-то важным.',
        'все у тебя еще будет. и новые улыбки, и новые воспоминания. будет еще лучше, чем было однажды, зайчонок. все будет хорошо.',
        'хочу чмокнуть тебя в носик за то что ты стараешься ну и просто за то что ты молодец',
        'ты - это любовь, улыбки, смелость, тысячи пережитых тобой рассветов, сила, храбрость, память, шрамы, твои любимые книги, рассказы из детства, смех сквозь слезы, мягкость, воспоминания о теплом и беспечном.',
        'есть что-то чудесное в том чтобы просто позволять неудачам случаться и жить дальше.',
        'ты такое неописуемо драгоценное создание.',
        'однажды ты будешь скучать по тому, где ты находишься сегодня. значит, постарайся наслаждаться этими мгновениями сейчас.',
        'ты умничка! я знаю, что ты стараешься, а значит — у тебя все получится!',
        'тебе не будет так грустно всегда, зайка. скоро обязательно станет лучше.',
        'ты еще будешь самым счастливым, солнце. всему свое время.',
        'последнее время многие вещи даются тебе не просто, правда? я понимаю. понимаю, как это тяжело. но ты переживешь это, солнце. обязательно все переживешь.',
        'спасибо, что ты стараешься. переживая все эти эмоции, переживая все проблемы, спасибо, что ты продолжаешь пытаться.',
        'я думаю ты заслуживаешь вкусно покушать заварить себе чай и отлеживаться в кроватке весь оставшийся день',
        'я бы хотела, чтобы у тебя всегда был кто-то, на кого ты сможешь положиться',
        'самый смелый поступок, который ты можешь совершить, это признать, что порой ты совершенно не справляешься, и при этом продолжать пытаться.',
        'в этом мире нет никого важнее тебя и твоего благополучия. и если ты не защитишь своё собственное счастье, никто не сделает этого за тебя.',
        'ты это переживешь. что бы это ни было, ты это переживешь. это может быть болезненным, эта травма не сделает тебя сильнее, но если ты не можешь избежать какого-либо события, ты всегда можешь смириться и просто его пережить. а значит, тебе не за что волноваться.',
        'впереди ещё столько чудесного и невероятного. оно стоит того, чтобы дождаться',
        'то, где ты сейчас находишься — необходимый этап',
        'и если тебе грустно, я могу грустно посидеть рядом вместе с тобой',
        'ты будешь в порядке, потому что это «в порядке» — полностью, исключительно твоя заслуга.'
    ]

    var randomOrder = Math.floor(Math.random() * allCitat.length);
    var quote = allCitat[randomOrder];

    document.getElementById('text').innerHTML = quote;
}