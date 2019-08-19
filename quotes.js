const quotes = [
  "La cultura è il petrolio d'Italia, e deve essere sfrutta",
  'Sono un nullatenente ad alto reddito',
  "Qui a Venezia non c'è nessuna Tangentopoli, non è come a Milanpo",
  'Scomparso il comunismo, la gente non ha più motivo di sopportare una tassa impropria sulla democrazia.',
  "Lungo l'intero arco della storia dell'Italia repubblicana, De Martino è stato non solo una delle figure più eminenti del movimento socialista, ma altresì uno dei protagonisti principali della vita democratica del Paese.",
  'Il rispetto senza condizioni dell\' "altro" è un obiettivo, credo, rappresenti un punto fermo non solo per la salvaguardia, legittima e indiscutibile, dei valori e delle regole su cui la Massoneria fonda la propria esistenza, ma, più in generale, per la difesa di un mondo in cui la libertà, la scelta di un\'idea e di un cammino di vita, siano fruibili senza limiti e condizionamenti di alcun genere.',
  'Non possiamo permettere alla magistratura di occupare il posto della politica.',
  "In tutti questi anni sono stato molto reticente a parlare di Mani pulite. Avrei potuto fare come Cirino Pomicino, riempire libri per raccontare fatti, carenze, omissioni, strumentalizzazioni che modificano un po' il quadro che ne fanno Travaglio, Gomez e Barbacetto.",
  "L'Italia, da Yalta, uscì con uno statuto particolare, la divisione di fatto, anche se non geografica, come quella della Germania.",
  "Il finanziamento della politica: per 50 anni è avvenuto fuori dalle leggi. Dalla Cia arrivavano soldi alla Dc e dall'Urss quelli per il Pci.",
  'Sono passato dal pregiudizio negativo al pregiudizio positivo. Passava uno in motoretta e gridava: "Ladro! Ladro!". Oggi la gente mi ferma per strada e mi dice: "Perché non tornate?".',
  "Certi comportamenti la gente li accettava perché voleva evitare che i Cosacchi arrivassero a San Pietro. Ma quando fu chiaro che i Cosacchi non c'erano più, noi avremmo dovuto adeguarci. Io pensai che in un paio di anni avremmo potuto correggere tante cose. Invece non ci fu il tempo perché tutto precipitò molto più rapidamente. L'ombra di Yalta si proiettò oltre Yalta e i postcomunisti ne approfittarono. Visto che non erano capaci di mandarci via col dissenso che i nostri comportamenti avrebbero dovuto o potuto creare, ci fecero fuori un po' prima e con altri sistemi.",
  "C'era qualcuno più arrogante degli altri ma tutto poi è stato molto forzato. Si potrebbero fare degli studi sociologici sul modo in cui sono state montate e usate certe cose, non solo sui socialisti.",
  "Il povero De Lorenzo. Ne hanno fatto un mostro. Lui ci aveva messo del suo, qualche intervista improvvida, qualche battuta. E poi, a Napoli, aveva un po' più finanziamenti illeciti. Essendo il ministro della Sanità, si prestava a una storia che colpisse la gente. È dimostrato che tutti i partiti di maggioranza e di opposizione stavano in quel meccanismo. Però solo il povero De Lorenzo c'è andato di mezzo.",
  "Errori ne ho fatti, ma sono quelli che poi paghi politicamente. Ho perso voti e ne ho anche guadagnati. È l'elettore che conta.",
  'Io mi sono sempre battuto contro il maggioritario. Oggi i postcomunisti possono eleggere non solo Di Pietro nel Mugello, ma anche Giorgianni a Fano. E Berlusconi può fare eleggere tranquillamente nel Nord Est uno del Sud e in Sicilia uno nel Nord. Lino Jannuzzi preso e portato in Lombardia, Gabriella Carlucci presa e portata a Trani.',
  'L\'Italia moderna nasce nel 1494 con l’arrivo di Carlo VIII. "Francia o Spagna purché se magna". Voltare gabbana è sempre stata considerata una caratteristica italiana.',
  'Craxi pensava che avrebbe dominato meglio i suoi uomini se avessero avuto certe caratteristiche psicologiche.',
  "Claudio Martelli non è un voltagabbana. In politica mors tua vita mea. Qualcuno lo aveva preso per il sedere raccontandogli che sarebbe diventato il Clinton italiano. E poi gli è arrivato l'avviso di garanzia ed è saltato.",
  'Giuliano Amato? Ha dimenticato che era il vero braccio destro di Craxi e se ne è andato con i postcomunisti dopo quello che avevano fatto al Psi.',
  'Gli uomini si dividono in due grandi categorie, i laser e i dispersivi. Alla prima apparteneva Bettino: sceglieva un obbiettivo e si concentrava su quello senza curare i dettagli. In politica è un sistema efficacissimo. Alla seconda appartengo io. Sono un curioso, vado in tutte le direzioni e mi disperdo. Ma nel momento della disgrazia è più facile reggere essendo fatti come me che come era fatto Bettino. Infatti Bettino si è spezzato. Io no.',
  "La Seconda Repubblica è l’aspetto deteriore della prima. Di nuovo c'è molto poco: Bossi, la Lega, Berlusconi.",
  'Forza Italia nasce vecchia, è un coacervo di residui della Prima Repubblica.',
  'È difficile pensare a un partito di socialisti senza prima sconfiggere chi li ha annientati. A questo punto è inevitabile allearsi con Berlusconi.',
  'Il più adulatore di tutti secondo me è Maurizio Costanzo. È un adulatore professionista.',
  'Io voglio molto bene a Sergio Cofferati. È il sindacalista italiano con cui mi sentivo più consonante, da ministro. È contraddittorio con se stesso, non è stato coerente con quello che pensava e che credo pensi ancora.',
  "Paolo Flores d'Arcais lo conosco troppo bene, lo ricordo trotzkista, socialista, martelliano, adulatore di Craxi, negatore di Craxi.",
  "Rocco Buttiglione ha l'insopportabile pretesa di apparire filosofo quando è al massimo professore di filosofia. E la cosa vale anche per Cacciari."
];

module.exports = function() {
  return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
};
