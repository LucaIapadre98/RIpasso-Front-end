export const programmations = [
    {
        id: 1,
        title: "Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "JavaScript è il linguaggio di programmazione del web. È nato per rendere interattive le pagine HTML, ma oggi è ovunque: browser, server (Node.js), desktop, IoT, AI, backend. JavaScript interagisce con HTML e CSS tramite il DOM (Document Object Model). Permette di creare contenuti dinamici, gestire eventi, validare form, animare elementi e molto altro. Con l'avvento di framework e librerie come React, Angular e Vue.js, JavaScript è diventato ancora più potente e versatile.",
        example: [
            {
                code: "console.log('Hello, World!');"
            }
        ],
        image: "../images/javascript.jpg",
        utility: "JavaScript è essenziale per lo sviluppo web moderno, consentendo di creare esperienze utente interattive e dinamiche.",
        notUtility: "Non è usato per lo sviluppo di sistemi operativi o applicazioni desktop native."
    },
    {
        id: 2,
        title: "Cicli in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "I cicli in JavaScript sono strutture di controllo che permettono di eseguire ripetutamente un blocco di codice finché una condizione specifica è vera. I principali tipi di cicli in JavaScript sono: for, while e do...while. Il ciclo for è utile quando si conosce il numero di iterazioni in anticipo, mentre il ciclo while è più adatto quando il numero di iterazioni dipende da una condizione che può variare durante l'esecuzione. Il ciclo do...while garantisce che il blocco di codice venga eseguito almeno una volta prima di verificare la condizione.",
        example: [
            {
                code: "for (let i = 0; i < 5; i++) { console.log(i); }"
            },
            {
                code: "array.forEach(function(item) { console.log(item); });"
            },
            {
                code: "do { console.log('Hello'); } while (condition);"
            },
            {
                code: "while (condition) { console.log('Hello'); }"
            }
        ],
        image: "../images/js-cicli.jpg",
        utility: "I cicli sono fondamentali per automatizzare compiti ripetitivi, iterare su array e collezioni, e gestire flussi di dati in modo efficiente.",
        notUtility: "Non sono utilizzati per operazioni che richiedono esecuzioni singole o non ripetitive."
    },
    {
        id: 3,
        title: "Funzioni in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Le funzioni in JavaScript sono blocchi di codice progettati per eseguire un compito specifico. Possono essere dichiarate utilizzando la parola chiave 'function' o come espressioni di funzione. Le funzioni possono accettare parametri, che sono valori passati alla funzione al momento della chiamata, e possono restituire un valore utilizzando la parola chiave 'return'. Le funzioni aiutano a organizzare il codice, migliorare la riusabilità e facilitare la manutenzione.",
        example: [
            {
                code: "function greet(name) { return 'Hello, ' + name; }"
            },
        ],
        image: "../images/funzioni-javascript.jpg",
        utility: "Le funzioni sono fondamentali per strutturare il codice, promuovere la modularità e facilitare la risoluzione di problemi complessi suddividendoli in compiti più piccoli e gestibili.",
        notUtility: "Non sono adatte per operazioni che richiedono esecuzioni singole o non ripetitive."
    },
    {
        id: 4,
        title: "Array in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Gli array in JavaScript sono strutture di dati che consentono di memorizzare più valori in un'unica variabile. Gli array sono oggetti speciali che possono contenere elementi di diversi tipi di dati, inclusi numeri, stringhe, oggetti e persino altri array. Gli array in JavaScript sono dinamici, il che significa che possono crescere e ridursi in base alle esigenze. È possibile accedere agli elementi di un array utilizzando gli indici, che partono da 0. JavaScript offre numerosi metodi integrati per manipolare gli array, come push, pop, shift, unshift, splice e molti altri.",
        example: [
            {
                code: "const fruits = ['Apple', 'Banana', 'Cherry'];"
            },
            {
                code: "const numbers = [1, 2, 3, 4, 5];"
            },
            {
                code: "const booleanArray = [true, false, true];"
            }
        ],
        image: "../images/array-js.jpg",
        utility: "Gli array sono essenziali per gestire collezioni di dati, facilitare l'iterazione e l'elaborazione di insiemi di valori in modo efficiente.",
        notUtility: "Non sono adatti per memorizzare singoli valori o dati non correlati."
    },
    {
        id: 5,
        title: "Oggetti in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Gli oggetti in JavaScript sono collezioni di proprietà, dove ogni proprietà è una coppia chiave-valore. Le chiavi sono stringhe (o simboli) che identificano le proprietà, mentre i valori possono essere di qualsiasi tipo di dato, inclusi numeri, stringhe, array, funzioni e persino altri oggetti. Gli oggetti sono fondamentali in JavaScript e vengono utilizzati per rappresentare entità complesse e strutturare i dati in modo organizzato. È possibile creare oggetti utilizzando la notazione letterale degli oggetti o il costruttore Object. Le proprietà degli oggetti possono essere accessibili e modificabili tramite la notazione a punto o la notazione con parentesi quadre.",
        example: [
            {
                code: "const person = { name: 'John', age: 30, phone: '123-456-7890', job: 'Developer' };"
            }
        ],
        image: "../images/oggetto-js.jpg",
        utility: "Gli oggetti sono essenziali per modellare dati complessi, organizzare informazioni correlate e implementare concetti di programmazione orientata agli oggetti in JavaScript.",
        notUtility: "Non sono adatti per memorizzare dati semplici o non correlati."
    },
    {
        id: 6,
        title: "DOM in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Il DOM (Document Object Model) in JavaScript è una rappresentazione strutturata di un documento HTML o XML, che consente ai programmatori di accedere e manipolare il contenuto, la struttura e lo stile delle pagine web in modo dinamico. Il DOM rappresenta la pagina come un albero di nodi, dove ogni nodo corrisponde a un elemento, attributo o testo nel documento. JavaScript utilizza il DOM per interagire con gli elementi della pagina, permettendo di modificare il contenuto, aggiungere o rimuovere elementi, gestire eventi e aggiornare lo stile in risposta alle azioni dell'utente. Il DOM è una parte fondamentale della programmazione web e consente di creare esperienze utente interattive e dinamiche.",
        example: [
            {
                code: "document.getElementById('myElement').innerText = 'Hello, World!';"
            }
        ],
        image: "../images/dom-js.jpg",
        utility: "Il DOM è cruciale per creare pagine web interattive, consentendo agli sviluppatori di aggiornare dinamicamente il contenuto e l'aspetto delle pagine in risposta alle azioni degli utenti.",
        notUtility: "Non è utilizzato per la programmazione lato server o per applicazioni non basate su browser."
    },
    {
        id: 7,
        title: "CSS",
        strument: "CSS",
        category: "Frontend",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere l'aspetto e la formattazione di un documento scritto in HTML o XML. CSS consente di separare il contenuto di una pagina web dalla sua presentazione, permettendo ai designer di controllare il layout, i colori, i font, gli spazi e altri aspetti visivi degli elementi della pagina. Con CSS, è possibile creare design reattivi che si adattano a diverse dimensioni di schermo e dispositivi, migliorando l'esperienza utente. CSS supporta anche selettori avanzati, pseudo-classi e pseudo-elementi, che consentono di applicare stili specifici a elementi particolari in base al loro stato o posizione nel documento.",
        example: [
            {
                code: "body { background-color: #f0f0f0; font-family: Arial, sans-serif; }"
            }
        ],
        image: "../images/CSS.jpg",
        utility: "CSS è essenziale per creare interfacce utente attraenti e funzionali, migliorando l'usabilità e l'estetica delle pagine web.",
        notUtility: "Non è utilizzato per la logica di programmazione o la gestione dei dati."
    },
    {
        id: 8,
        title: "Bootstrap",
        strument: "Bootstrap",
        category: "Frontend",
        description: "Bootstrap è un framework front-end open source che facilita lo sviluppo di siti web e applicazioni web responsive e mobili. Creato da Twitter, Bootstrap offre una raccolta di strumenti predefiniti, tra cui griglie, componenti UI (come pulsanti, modali, navbar), stili CSS e plugin JavaScript. Utilizzando Bootstrap, gli sviluppatori possono creare rapidamente interfacce utente coerenti e attraenti senza dover scrivere tutto il codice da zero. Bootstrap supporta il design reattivo, consentendo ai siti web di adattarsi automaticamente a diverse dimensioni di schermo e dispositivi, migliorando l'esperienza utente su desktop, tablet e smartphone.",
        example: [
            {
                code: "<button class='btn btn-primary'>Click Me</button>"
            }
        ],
        image: "../images/bootstrap.jpg",
        utility: "Bootstrap accelera lo sviluppo front-end, offrendo componenti predefiniti e un design reattivo che migliora l'aspetto e la funzionalità delle applicazioni web.",
        notUtility: "Non è adatto per la logica di programmazione lato server o per applicazioni non basate su web."
    },
    {
        id: 9,
        title: "JSX",
        strument: "Javascript",
        category: "Frontend",
        description: "JSX (JavaScript XML) è una sintassi di estensione per JavaScript utilizzata principalmente con la libreria React. JSX consente agli sviluppatori di scrivere codice che assomiglia a HTML all'interno di file JavaScript, rendendo più intuitivo e leggibile il processo di creazione di componenti UI. Con JSX, è possibile definire la struttura e l'aspetto degli elementi dell'interfaccia utente in modo dichiarativo, combinando markup e logica in un unico file. Durante la compilazione, il codice JSX viene trasformato in chiamate JavaScript standard che creano gli elementi React. JSX supporta anche l'inserimento di espressioni JavaScript all'interno del markup, consentendo una maggiore flessibilità nella definizione dei componenti.",
        example: [
            {
                code: "const element = <h1>Hello, World!</h1>;"
            }
        ],
        image: "../images/jsx.jpg",
        utility: "JSX semplifica la creazione di componenti React, migliorando la leggibilità del codice e facilitando l'integrazione tra markup e logica di programmazione.",
        notUtility: "Non è utilizzato al di fuori dell'ecosistema React o per la programmazione non basata su componenti."
    },
    {
        id: 10,
        title: "API",
        strument: "Javascript",
        category: "Frontend",
        description: "API (Application Programming Interface) è un insieme di regole e protocolli che consente a diverse applicazioni software di comunicare tra loro. Le API definiscono come le richieste e le risposte devono essere formattate, quali dati possono essere scambiati e quali operazioni possono essere eseguite. Le API sono utilizzate per integrare funzionalità di terze parti, accedere a servizi esterni, condividere dati tra applicazioni e automatizzare processi. Esistono diversi tipi di API, tra cui RESTful, SOAP e GraphQL, ognuno con le proprie caratteristiche e casi d'uso. Le API sono fondamentali nello sviluppo moderno, poiché facilitano l'interoperabilità e l'espansione delle applicazioni.",
        example: [
            {
                code: "fetch('https://api.example.com/data') .then(response => response.json()) .then(data => console.log(data));"
            }
        ],
        image: "../images/api.jpg",
        utility: "Le API sono essenziali per integrare servizi esterni, condividere dati e funzionalità tra applicazioni, e facilitare lo sviluppo di soluzioni software complesse.",
        notUtility: "Non sono utilizzate per la logica di programmazione interna o per operazioni che non richiedono comunicazione tra applicazioni."
    },
    {
        id: 11,
        title: "Axios",
        strument: "Javascript",
        category: "Frontend",
        description: "Axios è una libreria JavaScript basata su promise che facilita le richieste HTTP da browser e Node.js. Fornisce un'interfaccia semplice per inviare richieste GET, POST, PUT, DELETE e altre, gestendo automaticamente la serializzazione dei dati, le intestazioni e la gestione degli errori. Axios supporta anche l'intercettazione delle richieste e delle risposte, la cancellazione delle richieste e la configurazione globale, rendendolo uno strumento potente per comunicare con API RESTful e servizi web. Grazie alla sua semplicità e flessibilità, Axios è ampiamente utilizzato nello sviluppo di applicazioni web moderne.",
        example: [
            {
                code: "axios.get('https://api.example.com/data') .then(response => { console.log(response.data); }) .catch(error => { console.error('Error fetching data:', error); });"
            }
        ],
        image: "../images/axios-api.jpg",
        utility: "Axios semplifica la gestione delle richieste HTTP, migliorando l'interazione con API e servizi web nelle applicazioni JavaScript.",
        notUtility: "Non è adatto per operazioni che non richiedono comunicazione con server esterni o API."
    },
     {
        id: 12,
        title:" React",
        strument: "React",
        category: "Frontend",
        description: "React è una libreria JavaScript open source sviluppata da Facebook per la creazione di interfacce utente (UI) dinamiche e reattive. React si basa su un approccio dichiarativo, consentendo agli sviluppatori di descrivere come dovrebbe apparire l'interfaccia utente in base allo stato dell'applicazione. Utilizza un sistema di componenti riutilizzabili, che permette di suddividere l'interfaccia in parti più piccole e gestibili. React utilizza un DOM virtuale per ottimizzare le prestazioni, aggiornando solo le parti dell'interfaccia che cambiano invece di ricaricare l'intera pagina. Grazie alla sua flessibilità e facilità d'uso, React è diventato uno degli strumenti più popolari per lo sviluppo web moderno.",
        example: [
            {
                code: "import React from 'react'; function HelloWorld() { return <h1>Hello, World!</h1>; } export default HelloWorld;"
            }
        ],
        image: "../images/react.jpg",
        utility: "React è fondamentale per costruire interfacce utente moderne, migliorando l'esperienza utente attraverso componenti riutilizzabili e aggiornamenti efficienti del DOM.",
        notUtility: "Non è adatto per applicazioni non basate su interfacce utente o per la programmazione lato server."
    },
    {
        id: 13,
        title:"Promises in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Le Promises in JavaScript sono oggetti che rappresentano il completamento (o il fallimento) di un'operazione asincrona e il suo valore risultante. Una Promise può essere in uno dei tre stati: pending (in attesa), fulfilled (completata con successo) o rejected (rifiutata). Le Promises consentono di gestire operazioni asincrone in modo più leggibile e strutturato rispetto ai callback tradizionali, evitando il cosiddetto 'callback hell'. Le Promises possono essere create utilizzando il costruttore Promise e offrono metodi come .then() per gestire i risultati positivi e .catch() per gestire gli errori.",
        example: [
            {
                code: "const myPromise = new Promise((resolve, reject) => { const success = true; if (success) { resolve('Operation successful!'); } else { reject('Operation failed.'); } }); myPromise .then(result => { console.log(result); }) .catch(error => { console.error(error); });"
            }
        ],
        image: "../images/promise.jpg",
        utility: "Le Promises sono essenziali per gestire operazioni asincrone in JavaScript, migliorando la leggibilità del codice e facilitando la gestione degli errori.",
        notUtility: "Non sono adatte per operazioni sincrone o per gestire flussi di controllo che non richiedono asincronia."
    },
    {
        id: 14,
        title:"Async/Await in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Async/Await è una sintassi introdotta in JavaScript ES2017 che semplifica la gestione delle operazioni asincrone. La parola chiave 'async' viene utilizzata per dichiarare una funzione asincrona, che restituisce automaticamente una Promise. All'interno di una funzione asincrona, la parola chiave 'await' può essere utilizzata per sospendere l'esecuzione della funzione fino a quando una Promise non viene risolta o rifiutata. Questo consente di scrivere codice asincrono in modo più lineare e leggibile, simile al codice sincrono, evitando l'annidamento di callback e migliorando la gestione degli errori con i blocchi try/catch.",
        example: [
            {
                code: "async function fetchData() { try { const response = await fetch('https://api.example.com/data'); const data = await response.json(); console.log(data); } catch (error) { console.error('Error fetching data:', error); } } fetchData();"
            }
        ],
        image: "../images/async-await.jpg",
        utility: "Async/Await migliora la leggibilità del codice asincrono in JavaScript, facilitando la gestione delle operazioni asincrone e degli errori.",
        notUtility: "Non è adatto per operazioni sincrone"
    },
    {
        id: 15,
        title:" Hook in React",
        strument: "React",
        category: "Frontend",
        description: "Gli Hook in React sono funzioni speciali introdotte in React 16.8 che consentono di utilizzare lo stato e altre funzionalità di React senza scrivere una classe. I due Hooks più comuni sono useState, che permette di aggiungere lo stato locale a un componente funzionale, e useEffect, che consente di eseguire effetti collaterali (come il fetching di dati o la manipolazione del DOM) in risposta a cambiamenti di stato o props. I Hooks offrono un modo più semplice e conciso per gestire lo stato e il ciclo di vita dei componenti, promuovendo la riusabilità del codice e migliorando la leggibilità.",
        example: [
            {
                code: "import React, { useState, useEffect } from 'react'; function Counter() { const [count, setCount] = useState(0); useEffect(() => { document.title = `Count: ${count}`; }, [count]); return ( <div> <p>{count}</p> <button onClick={() => setCount(count + 1)}>Increment</button> </div> ); }"
            }
        ],
        image: "../images/hook-react.jpg",
        utility: "Gli Hook sono fondamentali per gestire lo stato e gli effetti collaterali nei componenti funzionali di React, migliorando la riusabilità e la leggibilità del codice.",
        notUtility: "Non sono utilizzati nei componenti basati su classi o in librerie non basate su React."
    },
    {
        id: 16,
        title:"Eventi in Javascript",
        strument: "Javascript",
        category: "Frontend",
        description: "Gli eventi in JavaScript sono azioni o occorrenze che si verificano nel sistema, come il clic di un pulsante, il caricamento di una pagina o la pressione di un tasto. JavaScript utilizza un modello di gestione degli eventi basato su listener, che sono funzioni che vengono eseguite in risposta a specifici eventi. Gli sviluppatori possono aggiungere listener agli elementi HTML utilizzando metodi come addEventListener, consentendo di creare interazioni dinamiche e reattive nelle pagine web. La gestione degli eventi è fondamentale per migliorare l'esperienza utente e rendere le applicazioni web più interattive.",
        example: [
            {
                code: "document.getElementById('myButton').addEventListener('click', function() { alert('Button clicked!'); });"
            }
        ],
        image: "../images/eventi-js.jpg",   
        utility: "La gestione degli eventi è essenziale per creare interazioni utente dinamiche e reattive nelle applicazioni web, migliorando l'esperienza complessiva.",
        notUtility: "Non è utilizzata per operazioni che non richiedono interazione con l'utente o eventi di sistema."
    },
    {
        id: 17,
        title: "UseState in React",
        strument: "React",
        category: "Frontend",
        description: "useState è un Hook di React che consente di aggiungere lo stato locale a un componente funzionale. Prima dell'introduzione degliHooks, lo stato poteva essere gestito solo nei componenti basati su classi. Con useState, è possibile dichiarare una variabile di stato e una funzione per aggiornarla all'interno di un componente funzionale. L'Hook accetta un valore iniziale come argomento e restituisce un array contenente la variabile di stato corrente e la funzione di aggiornamento. Utilizzando useState, gli sviluppatori possono creare componenti più semplici e riutilizzabili senza dover ricorrere alle classi.",
        example: [
            {
                code: "import React, { useState } from 'react'; function Counter() { const [count, setCount] = useState(0); return ( <div> <p>{count}</p> <button onClick={() => setCount(count + 1)}>Increment</button> </div> ); }"
            }
        ],
        image: "../images/usestate.jpg",
        utility: "useState è fondamentale per gestire lo stato nei componenti funzionali di React, permettendo di creare interfacce utente dinamiche e reattive in modo semplice e conciso.",
        notUtility: "Non è utilizzato per gestire lo stato nei componenti basati su classi o in librerie non basate su React."
    },
    {
        id: 18,
        title: "UseEffect in React",
        strument: "React",
        category: "Frontend",
        description: "useEffect è un Hook di React che consente di eseguire effetti collaterali nei componenti funzionali. Gli effetti collaterali includono operazioni come il fetching di dati, la manipolazione del DOM, la sottoscrizione a eventi e la gestione dei timer. useEffect accetta una funzione come primo argomento, che viene eseguita dopo ogni rendering del componente, e un array di dipendenze opzionale come secondo argomento, che determina quando l'effetto deve essere rieseguito. Se l'array delle dipendenze è vuoto, l'effetto verrà eseguito solo una volta al montaggio del componente. useEffect aiuta a mantenere il codice pulito e organizzato, separando la logica degli effetti collaterali dalla logica di rendering.",
        example: [
            {
                code: "import React, { useState, useEffect } from 'react'; function DataFetcher() { const [data, setData] = useState(null); useEffect(() => { fetch('https://api.example.com/data') .then(response => response.json()) .then(data => setData(data)); }, []); return ( <div> {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} </div> ); }"
            }
        ],
        image: "../images/useEffect.jpg",
        utility: "useEffect è essenziale per gestire operazioni asincrone e effetti collaterali nei componenti funzionali di React, migliorando la separazione delle preoccupazioni e la manutenzione del codice.",
        notUtility: "Non è utilizzato per operazioni sincrone o per gestire flussi di controllo che non richiedono effetti collaterali."
    },  
    {
        id: 19,
        title: "UseContext in React",
        strument: "React",
        category: "Frontend",
        description: "useContext è un Hook di React che consente di accedere al contesto di un componente funzionale. Il contesto in React è un meccanismo che permette di condividere dati tra componenti senza dover passare esplicitamente le props attraverso ogni livello dell'albero dei componenti. Utilizzando useContext, è possibile consumare il valore di un contesto creato con React.createContext() direttamente all'interno di un componente funzionale. Questo semplifica la gestione dello stato globale e migliora la leggibilità del codice, evitando il cosiddetto 'prop drilling'.",
        example: [
            {
                code: "import React, { useContext } from 'react'; const ThemeContext = React.createContext('light'); function ThemedButton() { const theme = useContext(ThemeContext); return <button className={theme}>I am styled by theme context!</button>; }"
            }
        ],
        image: "../images/usecontext.jpg",
        utility: "useContext è fondamentale per accedere ai dati condivisi tra componenti in React, migliorando la gestione dello stato globale e riducendo la complessità del codice.",
        notUtility: "Non è utilizzato per gestire lo stato locale o per operazioni che non richiedono condivisione di dati tra componenti."
    },
    {
        id: 20,
        title:" UseMemo in React",
        strument: "React",
        category: "Frontend",
        description: "useMemo è un Hook di React che consente di memorizzare in cache il risultato di una funzione di calcolo costoso, evitando di rieseguirla inutilmente ad ogni rendering del componente. useMemo accetta due argomenti: una funzione che restituisce il valore da memorizzare in cache e un array di dipendenze che determina quando la funzione deve essere rieseguita. Se le dipendenze non cambiano tra i rendering, React restituirà il valore memorizzato in cache, migliorando le prestazioni del componente. useMemo è particolarmente utile per ottimizzare componenti che eseguono calcoli complessi o che dipendono da dati che cambiano raramente.",
        example: [
            {
                code: "import React, { useMemo } from 'react'; function ExpensiveComponent({ num }) { const computedValue = useMemo(() => { // Calcolo costoso return num * 2; }, [num]); return <div>{computedValue}</div>; }"
            }
        ],
        image: "../images/usememo.jpg",
        utility: "useMemo è essenziale per ottimizzare le prestazioni dei componenti React, riducendo i calcoli inutili e migliorando l'efficienza complessiva dell'applicazione.",
        notUtility: "Non è utilizzato per memorizzare valori che cambiano frequentemente o per operazioni che non richiedono ottimizzazione delle prestazioni."
    },
    {
        id: 21,
        title:" UseCallback in React",
        strument: "React",
        category: "Frontend",
        description: "useCallback è un Hook di React che consente di memorizzare in cache una funzione, evitando di ricrearla ad ogni rendering del componente. Questo è particolarmente utile quando si passano funzioni come props a componenti figli, poiché previene il rendering inutile di quei componenti se la funzione non cambia. useCallback accetta due argomenti: la funzione da memorizzare in cache e un array di dipendenze che determina quando la funzione deve essere ricreata. Se le dipendenze non cambiano, React restituirà la versione memorizzata in cache della funzione.",
        example: [
            {
                code: "import React, { useState, useCallback } from 'react'; function Parent() { const [count, setCount] = useState(0); const increment = useCallback(() => { setCount(c => c + 1); }, []);"
            }
        ],
        image: "../images/usecallback.jpg",
        utility: "useCallback è fondamentale per ottimizzare le prestazioni dei componenti React, riducendo i rendering inutili e migliorando l'efficienza complessiva dell'applicazione.",
        notUtility: "Non è utilizzato per funzioni che cambiano frequentemente o per operazioni che non richiedono ottimizzazione delle prestazioni."
    },
    {
        id: 22,
        title:" Context in React",
        strument: "React",
        category: "Frontend",
        description: "Il Context in React è un meccanismo che consente di condividere dati tra componenti senza dover passare esplicitamente le props attraverso ogni livello dell'albero dei componenti. Il Context è utile per gestire lo stato globale dell'applicazione, come il tema, la lingua o l'autenticazione, che devono essere accessibili da molti componenti a diversi livelli. Per utilizzare il Context, è necessario creare un oggetto Context con React.createContext(), fornire un valore tramite un Provider e consumare il valore nei componenti figli utilizzando il Consumer o l'Hook useContext.",
        example: [
            {
                code: "import React, { createContext, useContext } from 'react'; const ThemeContext = createContext('light'); function ThemedButton() { const theme = useContext(ThemeContext); return <button className={theme}>I am styled by theme context!</button>; }"
            }
        ],
        image: "../images/context-react.jpg",
        utility: "Il Context è essenziale per gestire lo stato globale in React, migliorando la condivisione dei dati tra componenti e riducendo la complessità del codice.",
        notUtility: "Non è utilizzato per gestire lo stato locale o per operazioni che non richiedono condivisione di dati tra componenti."
    },
    {
        id: 23,
        title: "useRef in React",
        strument: "React",
        category: "Frontend",
        description: "useRef è un Hook di React che consente di creare un riferimento mutabile che persiste per l'intera durata del componente. A differenza dello stato, l'aggiornamento di un riferimento creato con useRef non causa il rerender del componente. useRef è comunemente utilizzato per accedere direttamente agli elementi del DOM, memorizzare valori che non richiedono un aggiornamento della UI o mantenere valori tra i rendering senza causare effetti collaterali. L'Hook restituisce un oggetto con una proprietà current che può essere letta o modificata.",
        example: [
            {
                code: "import React, { useRef } from 'react'; function TextInput() { const inputRef = useRef(null); const focusInput = () => { inputRef.current.focus(); }; return ( <div> <input ref={inputRef} type='text' /> <button onClick={focusInput}>Focus the input</button> </div> ); }"
            }
        ],
        image: "../images/useref.jpg",
        utility: "useRef è fondamentale per accedere direttamente agli elementi del DOM e mantenere valori persistenti senza causare rerender nei componenti React.",
        notUtility: "Non è utilizzato per gestire lo stato che richiede aggiornamenti della UI o per operazioni che necessitano di effetti collaterali."
    },
    {
        id: 24,
        title:" UseNavigate in React Router",
        strument: "React",
        category: "Frontend",
        description: "useNavigate è un Hook fornito da React Router che consente di programmare la navigazione tra le diverse rotte di un'applicazione React. Utilizzando useNavigate, gli sviluppatori possono spostarsi tra le pagine senza dover utilizzare componenti di navigazione come Link o NavLink. L'Hook restituisce una funzione che può essere chiamata con un percorso di destinazione e opzioni aggiuntive, come la sostituzione della cronologia o l'aggiunta di stati personalizzati. useNavigate è particolarmente utile per gestire la navigazione in risposta a eventi, come il completamento di un modulo o l'autenticazione dell'utente.",
        example: [
            {
                code: "import { useNavigate } from 'react-router-dom'; function Login() { const navigate = useNavigate(); const handleLogin = () => { // Logica di autenticazione navigate('/dashboard'); }; return <button onClick={handleLogin}>Login</button>; }"
            }
        ],
        image: "../images/usenavigate.jpg",
        utility: "useNavigate è essenziale per gestire la navigazione programmata nelle applicazioni React, migliorando l'esperienza utente e facilitando il flusso di navigazione.",
        notUtility: "Non è utilizzato per la navigazione basata su link o per operazioni che non richiedono cambiamenti di rotta."
    },
    {
        id: 25,
        title:" Routing in React",
        strument: "React",
        category: "Frontend",
        description: "Il routing in React è il processo di gestione della navigazione tra diverse viste o pagine all'interno di un'applicazione React. Utilizzando librerie come React Router, gli sviluppatori possono definire percorsi (routes) che mappano URL specifici a componenti React, consentendo agli utenti di navigare tra diverse sezioni dell'applicazione senza ricaricare l'intera pagina. Il routing in React supporta funzionalità avanzate come parametri di percorso, query string, protezione delle rotte e navigazione programmata, migliorando l'esperienza utente e facilitando la creazione di applicazioni web complesse e dinamiche.",
        example: [
            {
                code: "import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; function App() { return ( <Router> <Switch> <Route path='/' exact component={Home} /> <Route path='/about' component={About} /> </Switch> </Router> ); }"
            }
        ],
        image: "../images/routing-react.jpg",
        utility: "Il routing è fondamentale per creare applicazioni React multi-pagina, migliorando la navigazione e l'esperienza utente senza ricaricare l'intera pagina.",
        notUtility: "Non è utilizzato per la navigazione all'interno di una singola pagina o per operazioni che non richiedono cambiamenti di rotta."
    },
    {
        id: 26,
        title:" UseParams in React Router",
        strument: "React",
        category: "Frontend",
        description: "useParams è un Hook fornito da React Router che consente di accedere ai parametri dinamici presenti nell'URL di una rotta. Quando si definisce una rotta con parametri (ad esempio, /user/:id), useParams permette di estrarre questi valori all'interno del componente associato alla rotta. L'Hook restituisce un oggetto contenente i parametri come chiavi e i loro valori corrispondenti, facilitando l'accesso ai dati necessari per il rendering del componente o per effettuare chiamate API basate sui parametri dell'URL.",
        example: [
            {
                code: "import { useParams } from 'react-router-dom'; function UserProfile() { const { id } = useParams(); return <div>User ID: {id}</div>; }"
            }
        ],
        image: "../images/useparams.jpg",
        utility: "useParams è essenziale per accedere ai parametri dinamici nelle rotte di React Router, facilitando la gestione dei dati basati sull'URL e migliorando la flessibilità delle applicazioni React.",
        notUtility: "Non è utilizzato per accedere a dati statici o per operazioni che non richiedono parametri dinamici dall'URL."
    },
    {
        id: 27,
        title:" Props in React",
        strument: "React",
        category: "Frontend",
        description: "Le props (proprietà) in React sono un meccanismo che consente di passare dati dai componenti genitori ai componenti figli. Le props sono oggetti immutabili che contengono valori o funzioni che i componenti figli possono utilizzare per personalizzare il loro comportamento o aspetto. Utilizzando le props, gli sviluppatori possono creare componenti riutilizzabili e modulari, facilitando la gestione dello stato e la comunicazione tra i componenti. Le props vengono passate ai componenti come attributi HTML e possono essere accessibili all'interno del componente tramite l'oggetto props.",
        example: [
            {
                code: "function Greeting(props) { return <h1>Hello, {props.name}!</h1>; }"
            }
        ],
        image: "../images/props.jpg",
        utility: "Le props sono fondamentali in React per passare dati e funzioni tra componenti, permettendo la creazione di componenti riutilizzabili e modulari.",
        notUtility: "Non sono utilizzate per gestire lo stato locale o per operazioni che richiedono mutabilità dei dati."
    },
    {
        id: 28,
        title:" React memo",
        strument: "React",
        category: "Frontend",
        description: "React.memo è una funzione di ordine superiore in React che consente di ottimizzare le prestazioni dei componenti funzionali memorizzando in cache il loro output. Quando un componente è avvolto in React.memo, React confronta le props attuali con quelle precedenti e, se non sono cambiate, evita di rieseguire il rendering del componente. Questo è particolarmente utile per componenti che ricevono props complesse o che eseguono calcoli costosi, poiché riduce il numero di rendering inutili e migliora l'efficienza dell'applicazione. React.memo può essere utilizzato insieme a useCallback e useMemo per ottimizzare ulteriormente le prestazioni.",
        example: [
            {
                code: "import React from 'react'; const MyComponent = React.memo(function MyComponent(props) { return <div>{props.value}</div>; });"
            }
        ],
        image: "../images/react-memo.jpg",
        utility: "React.memo è essenziale per ottimizzare le prestazioni dei componenti funzionali in React, riducendo i rendering inutili e migliorando l'efficienza complessiva dell'applicazione.",
        notUtility: "Non è utilizzato per componenti che cambiano frequentemente o per operazioni che non richiedono ottimizzazione delle prestazioni."
    },
    {
        id: 29,
        title:" Higher Order Component (HOC) in React",
        strument: "React",
        category: "Frontend",
        description: "Un Higher Order Component (HOC) in React è una funzione che prende un componente e ne restituisce un nuovo componente con funzionalità aggiuntive. Gli HOC sono utilizzati per riutilizzare la logica tra componenti, consentendo di condividere comportamenti comuni senza duplicare il codice. Un HOC può avvolgere un componente esistente, aggiungendo funzionalità come la gestione dello stato, l'accesso ai dati o la manipolazione delle props. Gli HOC sono una tecnica avanzata in React che promuove la composizione e la modularità del codice nelle applicazioni React.",
        example: [
            {
                code: "function withLogging(WrappedComponent) { return function(props) { console.log('Rendering', WrappedComponent.name); return <WrappedComponent {...props} />; }; }" 
            }
        ],
        image: "../images/HOC.jpg",
        utility: "Gli Higher Order Components sono fondamentali per riutilizzare la logica tra componenti in React, migliorando la modularità e la manutenzione del codice.",
        notUtility: "Non sono utilizzati per componenti che non richiedono funzionalità condivise o per operazioni che non beneficiano della composizione."
        
    },
    {
        id: 30,
        title:" Database MySQL",
        strument: "Database",
        category: "Backend",
        description: "MySQL è un DBMS (Database Management System) relazionale basato su SQL (Structured Query Language). È uno dei database più usati al mondo grazie alla sua velocità, stabilità, facilità d’uso e al fatto che è disponibile anche in versione open-source. Viene utilizzato per applicazioni web, sistemi gestionali, applicazioni enterprise, e in generale per qualsiasi sistema che deve salvare, organizzare e interrogare dati strutturati. In un database relazionale (come MySQL), i dati vengono distribuiti su più tabelle per evitare duplicazioni e mantenere ordine e coerenza. Le relazioni servono a collegare tra loro queste tabelle tramite chiavi: primarie (primary key o PK) identifica univocamente un record e chiavi esterne (foreign key o FK) campo in una tabella che punta alla PK di un'altra. Con le chiavi esterne si possono creare relazioni tra tabelle diverse, ad esempio per rappresentare associazioni uno-a-uno, uno-a-molti o molti-a-molti.",
        example: [
            {
                code: "CREATE TABLE Users ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) );"
            }
        ],
        image: "../images/MySQL.jpg",
        utility: "MySQL è essenziale per la gestione efficiente dei dati in applicazioni di varie dimensioni, offrendo velocità, affidabilità e supporto per transazioni.",
        notUtility: "Non è adatto per applicazioni che richiedono database non relazionali o per scenari in cui la scalabilità orizzontale è una priorità assoluta."
    }
]