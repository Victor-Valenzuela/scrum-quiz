export interface Answer {
    letter: string;
    text: { de: string; es: string; en: string };
    correct: boolean;
    explanation: { de: string; es: string; en: string };
}

export interface Question {
    id: number;
    question: { de: string; es: string; en: string };
    answers: Answer[];
    multiSelect?: boolean;
    shuffleAnswers?: boolean;
}

export const questions: Question[] = [
    {
        id: 1,
        question: {
            de: "Was ist die primaere Zustaendigkeit eines Scrum Masters, damit das Scrum Team kontinuierlich maximale Produktivitaet liefert?",
            es: "Cual es la responsabilidad principal de un Scrum Master para que el Scrum Team entregue continuamente la maxima productividad?",
            en: "What is the primary responsibility of a Scrum Master to ensure the Scrum Team continuously delivers maximum productivity?"
        },
        answers: [
            { letter: "A", text: { de: "Den Interessensgruppen dabei zu helfen, das Scrum Framework und seine Praktiken zu verstehen", es: "Ayudar a los interesados a comprender el framework Scrum y sus practicas", en: "Helping stakeholders understand the Scrum framework and its practices" }, correct: true, explanation: { de: "Richtig. Das ist die Zustaendigkeit des Scrum Masters.", es: "Correcto. Esta es la responsabilidad del Scrum Master.", en: "Correct. This is the Scrum Master's responsibility." } },
            { letter: "B", text: { de: "Dafuer zu sorgen, dass Features mit hoher Prioritaet stets oben auf dem Product Backlog stehen", es: "Asegurar que las funcionalidades de alta prioridad esten siempre en la parte superior del Product Backlog", en: "Ensuring high-priority features are always at the top of the Product Backlog" }, correct: false, explanation: { de: "Falsch. Das ist die Zustaendigkeit des Product Owners.", es: "Incorrecto. Esa es la responsabilidad del Product Owner.", en: "Incorrect. That is the Product Owner's responsibility." } },
            { letter: "C", text: { de: "Keine Veraenderungen an die Sprint-Backlog-Eintraege zuzulassen, nachdem der Sprint begonnen hat", es: "No permitir cambios en los elementos del Sprint Backlog despues de que el Sprint haya comenzado", en: "Not allowing changes to Sprint Backlog Items after the Sprint has started" }, correct: false, explanation: { de: "Falsch. Das ist die Zustaendigkeit des gesamten Scrum Teams, nicht die des Scrum Masters allein.", es: "Incorrecto. Esa es responsabilidad de todo el Scrum Team, no solo del Scrum Master.", en: "Incorrect. That is the responsibility of the entire Scrum Team, not the Scrum Master alone." } }
        ]
    },
    {
        id: 2,
        question: { de: "Ein Entwickler arbeitet in einem Sprint an einer Aufgabe. Wer ist fuer diese Aufgabe verantwortlich (ergebnisverantwortlich)?", es: "Un desarrollador trabaja en una tarea durante un Sprint. Quien es responsable de esta tarea?", en: "A developer is working on a task during a Sprint. Who is accountable for this task?" },
        answers: [
            { letter: "A", text: { de: "Die Entwickler", es: "Los desarrolladores", en: "The Developers" }, correct: true, explanation: { de: "Richtig. Alle Entwickler sind gemeinsam verantwortlich, auch wenn ein Entwickler allein an einer Aufgabe arbeitet.", es: "Correcto. Todos los desarrolladores son responsables conjuntamente, incluso cuando uno solo trabaja en una tarea.", en: "Correct. All Developers are jointly responsible, even when one developer works on a task alone." } },
            { letter: "B", text: { de: "Der Product Owner", es: "El Product Owner", en: "The Product Owner" }, correct: false, explanation: { de: "Falsch. Der Product Owner ist nicht fuer einzelne Aufgaben verantwortlich.", es: "Incorrecto. El Product Owner no es responsable de tareas individuales.", en: "Incorrect. The Product Owner is not responsible for individual tasks." } },
            { letter: "C", text: { de: "Der Scrum Master", es: "El Scrum Master", en: "The Scrum Master" }, correct: false, explanation: { de: "Falsch. Der Scrum Master ist dafuer verantwortlich, dass das Team die Scrum-Prozesse befolgt.", es: "Incorrecto. El Scrum Master es responsable de que el equipo siga los procesos Scrum.", en: "Incorrect. The Scrum Master is responsible for ensuring the team follows Scrum processes." } },
            { letter: "D", text: { de: "Dieser Entwickler", es: "Este desarrollador", en: "This developer" }, correct: false, explanation: { de: "Falsch. Die Verantwortung verbleibt bei allen Entwicklern.", es: "Incorrecto. La responsabilidad permanece en todos los desarrolladores.", en: "Incorrect. The responsibility remains with all Developers." } }
        ]
    },
    {
        id: 3,
        question: { de: "Alle Scrum Events sind timeboxed (zeitbegrenzt). Welchen Vorteil bietet Timeboxing?", es: "Todos los eventos Scrum tienen timebox. Que ventaja ofrece el Timeboxing?", en: "All Scrum Events are timeboxed. What advantage does Timeboxing provide?" },
        answers: [
            { letter: "A", text: { de: "Es stellt das Commitment des Scrum Teams sicher.", es: "Asegura el compromiso del Scrum Team.", en: "It ensures the Scrum Team's commitment." }, correct: false, explanation: { de: "Falsch. Das Commitment beruht nicht auf Timeboxing.", es: "Incorrecto. El compromiso no se basa en el Timeboxing.", en: "Incorrect. Commitment is not based on Timeboxing." } },
            { letter: "B", text: { de: "Es erleichtert die osmotische Kommunikation.", es: "Facilita la comunicacion osmotica.", en: "It facilitates osmotic communication." }, correct: false, explanation: { de: "Falsch. Osmotische Kommunikation bedeutet zufaelliges Mithoeren wichtiger Informationen.", es: "Incorrecto. La comunicacion osmotica significa escuchar casualmente informacion importante.", en: "Incorrect. Osmotic communication means overhearing important information by chance." } },
            { letter: "C", text: { de: "Es begrenzt Zeitverschwendung auf ein Mindestmass.", es: "Limita el desperdicio de tiempo al minimo.", en: "It minimizes time waste." }, correct: true, explanation: { de: "Richtig. Timeboxing begrenzt den Zeitaufwand fuer Besprechungen.", es: "Correcto. El Timeboxing limita el tiempo dedicado a reuniones.", en: "Correct. Timeboxing limits the time spent on meetings." } }
        ]
    },
    {
        id: 4,
        question: { de: "Ein Team bereitet sich auf den Uebergang zu Scrum vor. Es hat einen Projektkoordinator, der eine reibungslose Arbeitsumgebung schafft. Wer ist nach dem Uebergang verantwortlich?", es: "Un equipo se prepara para la transicion a Scrum. Tiene un coordinador de proyecto que crea un entorno de trabajo fluido. Quien es responsable despues de la transicion?", en: "A team is preparing for the transition to Scrum. It has a project coordinator who creates a smooth work environment. Who is responsible after the transition?" },
        answers: [
            { letter: "A", text: { de: "Die Entwickler", es: "Los desarrolladores", en: "The Developers" }, correct: false, explanation: { de: "Falsch. Die Entwickler konzentrieren sich auf die Entwicklung der Backlog-Eintraege.", es: "Incorrecto. Los desarrolladores se concentran en desarrollar los elementos del Backlog.", en: "Incorrect. The Developers focus on developing Backlog items." } },
            { letter: "B", text: { de: "Der Product Owner", es: "El Product Owner", en: "The Product Owner" }, correct: false, explanation: { de: "Falsch. Der Product Owner ist fuer das Product Backlog verantwortlich.", es: "Incorrecto. El Product Owner es responsable del Product Backlog.", en: "Incorrect. The Product Owner is responsible for the Product Backlog." } },
            { letter: "C", text: { de: "Der Projektmanager", es: "El Project Manager", en: "The Project Manager" }, correct: false, explanation: { de: "Falsch. Die Rolle des Projektmanagers existiert bei Scrum nicht.", es: "Incorrecto. El rol de Project Manager no existe en Scrum.", en: "Incorrect. The Project Manager role does not exist in Scrum." } },
            { letter: "D", text: { de: "Der Scrum Master", es: "El Scrum Master", en: "The Scrum Master" }, correct: true, explanation: { de: "Richtig. Die Taetigkeit des Projektkoordinators entspricht den Taetigkeiten des Scrum Masters.", es: "Correcto. La actividad del coordinador corresponde a las del Scrum Master.", en: "Correct. The project coordinator's activities correspond to those of the Scrum Master." } }
        ]
    },
    {
        id: 5,
        question: { de: "Der PO will 2 Tage, die Entwickler schaetzen 5, der SM glaubt 3, ein Experte sagt 1 Tag. Wessen Schaetzung zaehlt?", es: "El PO quiere 2 dias, los desarrolladores estiman 5, el SM cree 3, un experto dice 1 dia. De quien es la estimacion que cuenta?", en: "The PO wants 2 days, Developers estimate 5, the SM believes 3, an expert says 1 day. Whose estimate counts?" },
        answers: [
            { letter: "A", text: { de: "Die der Entwickler", es: "La de los desarrolladores", en: "The Developers'" }, correct: true, explanation: { de: "Richtig. Die Zustaendigkeit fuer alle Schaetzungen liegt bei den Entwicklern.", es: "Correcto. La responsabilidad de todas las estimaciones recae en los desarrolladores.", en: "Correct. The responsibility for all estimates lies with the Developers." } },
            { letter: "B", text: { de: "Die des Product Owners", es: "La del Product Owner", en: "The Product Owner's" }, correct: false, explanation: { de: "Falsch. Der PO legt fest was geschaetzt wird, nicht die Schaetzung selbst.", es: "Incorrecto. El PO define que se estima, no la estimacion misma.", en: "Incorrect. The PO defines what is estimated, not the estimate itself." } },
            { letter: "C", text: { de: "Die des Scrum Masters", es: "La del Scrum Master", en: "The Scrum Master's" }, correct: false, explanation: { de: "Falsch. Der SM legt den Prozess fest, nicht die Schaetzung.", es: "Incorrecto. El SM define el proceso, no la estimacion.", en: "Incorrect. The SM defines the process, not the estimate." } },
            { letter: "D", text: { de: "Die des Fachexperten", es: "La del experto", en: "The expert's" }, correct: false, explanation: { de: "Falsch. Personen ausserhalb des Scrum Teams haben keinen Einfluss auf die Schaetzung.", es: "Incorrecto. Personas fuera del Scrum Team no influyen en la estimacion.", en: "Incorrect. People outside the Scrum Team have no influence on the estimate." } }
        ]
    },
    {
        id: 6,
        question: { de: "Das Team hat mitten im Sprint alle SBIs abgeschlossen. Wie sollte man vorgehen?", es: "El equipo completo todos los SBIs a mitad del Sprint. Como se debe proceder?", en: "The team completed all SBIs mid-Sprint. What should be done?" },
        answers: [
            { letter: "A", text: { de: "Den Sprint abbrechen und einen neuen starten", es: "Cancelar el Sprint e iniciar uno nuevo", en: "Cancel the Sprint and start a new one" }, correct: false, explanation: { de: "Falsch. Das Sprintziel ergibt noch Sinn, der Sprint sollte nicht abgebrochen werden.", es: "Incorrecto. El objetivo del Sprint aun tiene sentido, no se debe cancelar.", en: "Incorrect. The Sprint Goal still makes sense, the Sprint should not be cancelled." } },
            { letter: "B", text: { de: "Die Dauer des Sprints verlaengern", es: "Extender la duracion del Sprint", en: "Extend the Sprint duration" }, correct: false, explanation: { de: "Falsch. Die Dauer ist festgelegt und kann nicht veraendert werden.", es: "Incorrecto. La duracion esta fijada y no puede cambiarse.", en: "Incorrect. The duration is fixed and cannot be changed." } },
            { letter: "C", text: { de: "Den naechsten Eintrag aus dem Product Backlog zum Sprint Backlog hinzufuegen", es: "Agregar el siguiente elemento del Product Backlog al Sprint Backlog", en: "Add the next item from the Product Backlog to the Sprint Backlog" }, correct: true, explanation: { de: "Richtig. Sind alle SBIs fertig, kann der naechste Eintrag hinzugefuegt werden.", es: "Correcto. Si todos los SBIs estan listos, se puede agregar el siguiente elemento.", en: "Correct. If all SBIs are done, the next item can be added." } },
            { letter: "D", text: { de: "Die Dauer des aktuellen und naechsten Sprints verkuerzen", es: "Acortar la duracion del Sprint actual y del siguiente", en: "Shorten the current and next Sprint duration" }, correct: false, explanation: { de: "Falsch. Die Dauer ist festgelegt. Besser ist eine hoehere Arbeitsbelastung fuer naechste Sprints.", es: "Incorrecto. La duracion esta fijada. Es mejor elegir mayor carga para proximos Sprints.", en: "Incorrect. The duration is fixed. Better to choose a higher workload for next Sprints." } }
        ]
    },
    {
        id: 7,
        question: { de: "Ein verteiltes Team hat keine sich ueberschneidenden Arbeitsstunden. Wie steigert man die Effektivitaet am besten?", es: "Un equipo distribuido no tiene horas de trabajo superpuestas. Como mejorar la efectividad?", en: "A distributed team has no overlapping work hours. How to best improve effectiveness?" },
        answers: [
            { letter: "A", text: { de: "Sicherstellen, dass alle Mitglieder alle Informationen erhalten", es: "Asegurar que todos los miembros reciban toda la informacion", en: "Ensure all members receive all information" }, correct: true, explanation: { de: "Richtig. Am hilfreichsten ist sicherzustellen, dass alle Zugriff auf alle aktuellen Informationen haben.", es: "Correcto. Lo mas util es asegurar que todos tengan acceso a toda la informacion actualizada.", en: "Correct. Most helpful is ensuring everyone has access to all current information." } },
            { letter: "B", text: { de: "Das Daily Scrum gemeinsam abhalten trotz unterschiedlicher Zeitzonen", es: "Realizar el Daily Scrum en conjunto a pesar de las zonas horarias", en: "Hold the Daily Scrum together despite different time zones" }, correct: false, explanation: { de: "Falsch. Einige muessten ausserhalb der regulaeren Arbeitszeiten teilnehmen.", es: "Incorrecto. Algunos tendrian que participar fuera de su horario regular.", en: "Incorrect. Some would have to participate outside regular working hours." } },
            { letter: "C", text: { de: "Osmotische Kommunikation bei Streitigkeiten einsetzen", es: "Usar comunicacion osmotica en caso de conflictos", en: "Use osmotic communication for disputes" }, correct: false, explanation: { de: "Falsch. Osmotische Kommunikation funktioniert nur bei Teams am gleichen Ort.", es: "Incorrecto. La comunicacion osmotica solo funciona en equipos en el mismo lugar.", en: "Incorrect. Osmotic communication only works for co-located teams." } }
        ]
    },
    {
        id: 8,
        question: { de: "Wann findet die Verfeinerung des Product Backlogs statt?", es: "Cuando se realiza el refinamiento del Product Backlog?", en: "When does Product Backlog refinement take place?" },
        answers: [
            { letter: "A", text: { de: "Nur beim Start des Sprints", es: "Solo al inicio del Sprint", en: "Only at the start of the Sprint" }, correct: false, explanation: { de: "Falsch. Die Verfeinerung findet nicht nur zu Beginn statt.", es: "Incorrecto. El refinamiento no ocurre solo al inicio.", en: "Incorrect. Refinement does not only happen at the start." } },
            { letter: "B", text: { de: "Nur bei der Sprint Retrospective", es: "Solo en la Sprint Retrospective", en: "Only at the Sprint Retrospective" }, correct: false, explanation: { de: "Falsch. Die Verfeinerung findet nicht nur bei der Retrospective statt.", es: "Incorrecto. El refinamiento no ocurre solo en la Retrospective.", en: "Incorrect. Refinement does not only happen at the Retrospective." } },
            { letter: "C", text: { de: "Nur beim Sprint Review", es: "Solo en el Sprint Review", en: "Only at the Sprint Review" }, correct: false, explanation: { de: "Falsch. Die Verfeinerung findet nicht nur beim Review statt.", es: "Incorrecto. El refinamiento no ocurre solo en el Review.", en: "Incorrect. Refinement does not only happen at the Review." } },
            { letter: "D", text: { de: "Waehrend des gesamten Sprints", es: "Durante todo el Sprint", en: "Throughout the entire Sprint" }, correct: true, explanation: { de: "Richtig. Die Verfeinerung ist eine laufende Aktivitaet waehrend des gesamten Sprints.", es: "Correcto. El refinamiento es una actividad continua durante todo el Sprint.", en: "Correct. Refinement is an ongoing activity throughout the entire Sprint." } }
        ]
    },
    {
        id: 9,
        question: { de: "Ein Scrum Team nutzt ein Kanban Board. Das WIP-Limit wird erreicht. Was ist zu tun?", es: "Un Scrum Team usa un tablero Kanban. Se alcanza el limite WIP. Que se debe hacer?", en: "A Scrum Team uses a Kanban board. The WIP limit is reached. What should be done?" },
        answers: [
            { letter: "A", text: { de: "Entwicklern in den naechsten Spalten Aufgaben zuweisen", es: "Asignar tareas a desarrolladores en las siguientes columnas", en: "Assign tasks to developers in the next columns" }, correct: false, explanation: { de: "Falsch. Kanban erlaubt nur ein Pull-System.", es: "Incorrecto. Kanban solo permite un sistema Pull.", en: "Incorrect. Kanban only allows a Pull system." } },
            { letter: "B", text: { de: "Das WIP-Limit hochsetzen und weiterarbeiten", es: "Aumentar el limite WIP y continuar", en: "Increase the WIP limit and continue" }, correct: false, explanation: { de: "Falsch. Das WIP-Limit soll Engpaesse sichtbar machen, nicht ignoriert werden.", es: "Incorrecto. El limite WIP debe hacer visibles los cuellos de botella, no ignorarlos.", en: "Incorrect. The WIP limit should make bottlenecks visible, not be ignored." } },
            { letter: "C", text: { de: "Die Entwickler in der Spalte mit dem Engpass unterstuetzen", es: "Apoyar a los desarrolladores en la columna con el cuello de botella", en: "Support the developers in the bottleneck column" }, correct: true, explanation: { de: "Richtig. Das WIP-Limit signalisiert einen Engpass. Die Entwickler muessen sich gegenseitig unterstuetzen.", es: "Correcto. El limite WIP senala un cuello de botella. Los desarrolladores deben apoyarse mutuamente.", en: "Correct. The WIP limit signals a bottleneck. Developers must support each other." } },
            { letter: "D", text: { de: "Warten bis Arbeit in die naechste Spalte gezogen wird", es: "Esperar hasta que el trabajo se mueva a la siguiente columna", en: "Wait until work is pulled to the next column" }, correct: false, explanation: { de: "Falsch. Die Entwickler sollten den Engpass aktiv angehen.", es: "Incorrecto. Los desarrolladores deben abordar activamente el cuello de botella.", en: "Incorrect. Developers should actively address the bottleneck." } }
        ]
    },
    {
        id: 10,
        question: { de: "Was ist die effizienteste Methode fuer den Transfer von Informationen an und zwischen Entwicklern?", es: "Cual es el metodo mas eficiente para transferir informacion a y entre desarrolladores?", en: "What is the most efficient method for transferring information to and between developers?" },
        answers: [
            { letter: "A", text: { de: "E-Mail", es: "Correo electronico", en: "Email" }, correct: false, explanation: { de: "Falsch. E-Mail ist nicht die effizienteste Methode.", es: "Incorrecto. El correo no es el metodo mas eficiente.", en: "Incorrect. Email is not the most efficient method." } },
            { letter: "B", text: { de: "Persoenliche Kommunikation", es: "Comunicacion cara a cara", en: "Face-to-face communication" }, correct: true, explanation: { de: "Richtig. Persoenliche Kommunikation ist die effizienteste und wirksamste Methode.", es: "Correcto. La comunicacion cara a cara es el metodo mas eficiente y efectivo.", en: "Correct. Face-to-face communication is the most efficient and effective method." } },
            { letter: "C", text: { de: "Social Media", es: "Redes sociales", en: "Social Media" }, correct: false, explanation: { de: "Falsch. Social Media eignen sich nicht dafuer.", es: "Incorrecto. Las redes sociales no son adecuadas.", en: "Incorrect. Social media is not suitable for this." } },
            { letter: "D", text: { de: "Telefon", es: "Telefono", en: "Phone" }, correct: false, explanation: { de: "Falsch. Anrufe sind nicht die beste Methode.", es: "Incorrecto. Las llamadas no son el mejor metodo.", en: "Incorrect. Phone calls are not the best method." } }
        ]
    },
    {
        id: 11,
        question: { de: "Wann sind die Entwickler mit einem PBI fertig?", es: "Cuando terminan los desarrolladores con un PBI?", en: "When are the Developers done with a PBI?" },
        answers: [
            { letter: "A", text: { de: "Wenn sie vor Ende des Sprints ihr Aeusserstes gegeben haben", es: "Cuando han dado lo mejor de si antes del fin del Sprint", en: "When they have done their best before the end of the Sprint" }, correct: false, explanation: { de: "Falsch. Sie tun was noetig ist damit der Eintrag die DoD erfuellt.", es: "Incorrecto. Hacen lo necesario para que el elemento cumpla la DoD.", en: "Incorrect. They do what is needed for the item to meet the DoD." } },
            { letter: "B", text: { de: "Wenn der Eintrag analysiert, designed, programmiert, getestet und dokumentiert wurde", es: "Cuando el elemento ha sido analizado, disenado, programado, probado y documentado", en: "When the item has been analyzed, designed, coded, tested and documented" }, correct: false, explanation: { de: "Falsch. Wann ein SBI abgeschlossen ist, bestimmt ausschliesslich die DoD.", es: "Incorrecto. Cuando un SBI esta completo lo determina exclusivamente la DoD.", en: "Incorrect. When an SBI is complete is determined exclusively by the DoD." } },
            { letter: "C", text: { de: "Wenn die Anforderungen der Definition of Done (DoD) erfuellt sind", es: "Cuando se cumplen los requisitos de la Definition of Done (DoD)", en: "When the Definition of Done (DoD) requirements are met" }, correct: true, explanation: { de: "Richtig. Jeder Eintrag muss gemaess der DoD vollstaendig fertiggestellt sein.", es: "Correcto. Cada elemento debe estar completamente terminado segun la DoD.", en: "Correct. Each item must be fully completed according to the DoD." } }
        ]
    },
    {
        id: 12,
        question: { de: "Was beschreibt die Rolle des Daily Scrum beim Monitoring am besten?", es: "Que describe mejor el rol del Daily Scrum en el monitoreo?", en: "What best describes the role of the Daily Scrum in monitoring?" },
        answers: [
            { letter: "A", text: { de: "Es gibt den Entwicklern Einblick in Fortschritte und Schwierigkeiten.", es: "Da a los desarrolladores visibilidad sobre progreso y dificultades.", en: "It gives Developers insight into progress and difficulties." }, correct: true, explanation: { de: "Richtig. Zweck ist den Fortschritt zum Sprintziel zu pruefen und Hindernisse zu identifizieren.", es: "Correcto. El proposito es verificar el progreso hacia el objetivo e identificar impedimentos.", en: "Correct. The purpose is to inspect progress toward the Sprint Goal and identify impediments." } },
            { letter: "B", text: { de: "Es hilft dem Scrum Master bei der Aktualisierung des Burn-Down-Charts.", es: "Ayuda al Scrum Master a actualizar el Burn-Down Chart.", en: "It helps the Scrum Master update the Burn-Down Chart." }, correct: false, explanation: { de: "Falsch. Das ist weder Aufgabe des SM noch Ziel des Daily Scrum.", es: "Incorrecto. Eso no es tarea del SM ni objetivo del Daily Scrum.", en: "Incorrect. That is neither the SM's task nor the Daily Scrum's goal." } },
            { letter: "C", text: { de: "Es bietet dem PO die Moeglichkeit, den Fortschritt zu bewerten.", es: "Ofrece al PO la oportunidad de evaluar el progreso.", en: "It gives the PO the opportunity to evaluate progress." }, correct: false, explanation: { de: "Falsch. Das Daily Scrum dient nicht dazu, den PO zu informieren.", es: "Incorrecto. El Daily Scrum no sirve para informar al PO.", en: "Incorrect. The Daily Scrum is not meant to inform the PO." } }
        ]
    },
    {
        id: 13,
        question: { de: "Wie sollte das Entwicklungstempo bei Agiler Methode sein?", es: "Como deberia ser el ritmo de desarrollo con metodologia Agil?", en: "What should the development pace be when working with Agile methodology?" },
        answers: [
            { letter: "A", text: { de: "Konstant", es: "Constante", en: "Constant" }, correct: true, explanation: { de: "Richtig. Agile Prozesse unterstuetzen nachhaltige Entwicklung mit konstantem Tempo.", es: "Correcto. Los procesos agiles apoyan el desarrollo sostenible con ritmo constante.", en: "Correct. Agile processes support sustainable development at a constant pace." } },
            { letter: "B", text: { de: "Schnell", es: "Rapido", en: "Fast" }, correct: false, explanation: { de: "Falsch. Ein schnelles Tempo kann zu Burnout fuehren.", es: "Incorrecto. Un ritmo rapido puede llevar al burnout.", en: "Incorrect. A fast pace can lead to burnout." } },
            { letter: "C", text: { de: "Ansteigend", es: "Creciente", en: "Increasing" }, correct: false, explanation: { de: "Falsch. Das Tempo sollte konstant und nachhaltig sein.", es: "Incorrecto. El ritmo debe ser constante y sostenible.", en: "Incorrect. The pace should be constant and sustainable." } }
        ]
    },
    {
        id: 14,
        question: { de: "In 8 Sprints wurden 72 Story Points abgeschlossen. Neues Projekt: 56 SP. Wie viele Sprints?", es: "En 8 Sprints se completaron 72 Story Points. Nuevo proyecto: 56 SP. Cuantos Sprints?", en: "In 8 Sprints, 72 Story Points were completed. New project: 56 SP. How many Sprints?" },
        answers: [
            { letter: "A", text: { de: "5", es: "5", en: "5" }, correct: false, explanation: { de: "Falsch. Geschwindigkeit = 72/8 = 9 SP/Sprint. 56/9 = 6.2, also 7.", es: "Incorrecto. Velocidad = 72/8 = 9 SP/Sprint. 56/9 = 6.2, entonces 7.", en: "Incorrect. Velocity = 72/8 = 9 SP/Sprint. 56/9 = 6.2, so 7." } },
            { letter: "B", text: { de: "7", es: "7", en: "7" }, correct: true, explanation: { de: "Richtig. Geschwindigkeit = 9 SP/Sprint. 56/9 = 6.2, aufgerundet 7.", es: "Correcto. Velocidad = 9 SP/Sprint. 56/9 = 6.2, redondeado a 7.", en: "Correct. Velocity = 9 SP/Sprint. 56/9 = 6.2, rounded up to 7." } },
            { letter: "C", text: { de: "8", es: "8", en: "8" }, correct: false, explanation: { de: "Falsch. 8 war die Anzahl der vorherigen Sprints.", es: "Incorrecto. 8 fue la cantidad de Sprints anteriores.", en: "Incorrect. 8 was the number of previous Sprints." } },
            { letter: "D", text: { de: "10", es: "10", en: "10" }, correct: false, explanation: { de: "Falsch. 10 ist ungefaehr die Geschwindigkeit, nicht die benoetigte Sprintanzahl.", es: "Incorrecto. 10 es aproximadamente la velocidad, no la cantidad de Sprints.", en: "Incorrect. 10 is approximately the velocity, not the number of Sprints needed." } }
        ]
    },
    {
        id: 15,
        question: { de: "Nach 12 Sprints ohne lieferfaehige Inkremente in 2-Wochen-Sprints: Sollte die Sprint-Dauer verlaengert werden?", es: "Despues de 12 Sprints sin incrementos entregables en Sprints de 2 semanas: Se deberia extender la duracion?", en: "After 12 Sprints without deliverable increments in 2-week Sprints: Should the Sprint duration be extended?" },
        answers: [
            { letter: "A", text: { de: "Ja, die Leistung in frueheren Sprints begruendet die Aenderung.", es: "Si, el rendimiento en Sprints anteriores justifica el cambio.", en: "Yes, performance in earlier Sprints justifies the change." }, correct: true, explanation: { de: "Richtig. Es gibt ein stichhaltiges Argument basierend auf ausreichender Erfahrung.", es: "Correcto. Hay un argumento solido basado en suficiente experiencia.", en: "Correct. There is a solid argument based on sufficient experience." } },
            { letter: "B", text: { de: "Ja, weil der Scrum Master die Dauer aendern darf.", es: "Si, porque el Scrum Master puede cambiar la duracion.", en: "Yes, because the Scrum Master can change the duration." }, correct: false, explanation: { de: "Falsch. Nicht weil der SM es allein entscheiden kann.", es: "Incorrecto. No porque el SM pueda decidirlo solo.", en: "Incorrect. Not because the SM can decide it alone." } },
            { letter: "C", text: { de: "Nein, nur Entwickler duerfen die Dauer aendern.", es: "No, solo los desarrolladores pueden cambiar la duracion.", en: "No, only Developers can change the duration." }, correct: false, explanation: { de: "Falsch. Jedes Teammitglied darf Aenderungen vorschlagen.", es: "Incorrecto. Cualquier miembro del equipo puede proponer cambios.", en: "Incorrect. Any team member can propose changes." } },
            { letter: "D", text: { de: "Nein, die Sprint-Dauer darf nie geaendert werden.", es: "No, la duracion del Sprint nunca puede cambiarse.", en: "No, the Sprint duration can never be changed." }, correct: false, explanation: { de: "Falsch. Sprechen gute Gruende dafuer, sollte man die Aenderung vornehmen.", es: "Incorrecto. Si hay buenas razones, se debe realizar el cambio.", en: "Incorrect. If there are good reasons, the change should be made." } }
        ]
    },
    {
        id: 16,
        question: { de: "Was zeigt der Balken eines Burn-Down-Charts?", es: "Que muestra la barra de un Burn-Down Chart?", en: "What does the bar of a Burn-Down Chart show?" },
        answers: [
            { letter: "A", text: { de: "Den bereits abgeschlossenen Arbeitsaufwand", es: "El trabajo ya completado", en: "The work already completed" }, correct: false, explanation: { de: "Falsch. Das zeigt ein Burn-Up-Chart.", es: "Incorrecto. Eso lo muestra un Burn-Up Chart.", en: "Incorrect. That is shown by a Burn-Up Chart." } },
            { letter: "B", text: { de: "Den noch verbleibenden Arbeitsaufwand", es: "El trabajo restante", en: "The remaining work" }, correct: true, explanation: { de: "Richtig. Das Burn-Down-Chart zeigt den verbleibenden Aufwand, von oben nach unten.", es: "Correcto. El Burn-Down Chart muestra el trabajo restante, de arriba hacia abajo.", en: "Correct. The Burn-Down Chart shows remaining work, from top to bottom." } },
            { letter: "C", text: { de: "Die Geschwindigkeit der Entwickler", es: "La velocidad de los desarrolladores", en: "The Developers' velocity" }, correct: false, explanation: { de: "Falsch. Die Geschwindigkeit laesst sich ableiten, wird aber nicht direkt gezeigt.", es: "Incorrecto. La velocidad se puede derivar, pero no se muestra directamente.", en: "Incorrect. Velocity can be derived but is not directly shown." } }
        ]
    },
    {
        id: 17,
        question: { de: "Das I von INVEST steht fuer Independent. Was waere die Konsequenz von abhaengigen PBIs?", es: "La I de INVEST significa Independent. Cual seria la consecuencia de PBIs dependientes?", en: "The I in INVEST stands for Independent. What would be the consequence of dependent PBIs?" },
        answers: [
            { letter: "A", text: { de: "Mehr Wissen waere erforderlich.", es: "Se necesitaria mas conocimiento.", en: "More knowledge would be required." }, correct: false, explanation: { de: "Falsch. Man muss einen PBI immer verstehen bevor man daran arbeitet.", es: "Incorrecto. Siempre se debe entender un PBI antes de trabajar en el.", en: "Incorrect. You always need to understand a PBI before working on it." } },
            { letter: "B", text: { de: "Die Eintraege koennten nicht nach Geschaeftswert geordnet werden.", es: "Los elementos no podrian ordenarse segun su valor de negocio.", en: "The items could not be ordered by business value." }, correct: true, explanation: { de: "Richtig. Bei Abhaengigkeiten kann man nicht beliebig ordnen.", es: "Correcto. Con dependencias no se pueden ordenar libremente.", en: "Correct. With dependencies, you cannot order freely." } },
            { letter: "C", text: { de: "Mehr Entwickler waeren erforderlich.", es: "Se necesitarian mas desarrolladores.", en: "More developers would be required." }, correct: false, explanation: { de: "Falsch. Abhaengigkeiten fuehren nicht unbedingt zu hoeherem Aufwand.", es: "Incorrecto. Las dependencias no necesariamente llevan a mayor esfuerzo.", en: "Incorrect. Dependencies do not necessarily lead to more effort." } },
            { letter: "D", text: { de: "Arbeitsaufwand von einem anderen Team waere noetig.", es: "Se requeriria esfuerzo de otro equipo.", en: "Effort from another team would be needed." }, correct: false, explanation: { de: "Falsch. Das ist nicht der Grund fuer Unabhaengigkeit.", es: "Incorrecto. Esa no es la razon de la independencia.", en: "Incorrect. That is not the reason for independence." } }
        ]
    },
    {
        id: 18,
        question: { de: "Darf man sich ueber die Entscheidungen des Product Owners zum Product Backlog hinwegsetzen?", es: "Se pueden anular las decisiones del Product Owner sobre el Product Backlog?", en: "Can the Product Owner's decisions about the Product Backlog be overruled?" },
        answers: [
            { letter: "A", text: { de: "Ja, der CEO darf.", es: "Si, el CEO puede.", en: "Yes, the CEO can." }, correct: false, explanation: { de: "Falsch. Niemand, nicht einmal der CEO, sollte die Entscheidungen des PO ueberstimmen.", es: "Incorrecto. Nadie, ni el CEO, deberia anular las decisiones del PO.", en: "Incorrect. Nobody, not even the CEO, should override the PO's decisions." } },
            { letter: "B", text: { de: "Ja, der Kunde darf.", es: "Si, el cliente puede.", en: "Yes, the customer can." }, correct: false, explanation: { de: "Falsch. Auch der Kunde darf die Entscheidungen des PO nicht ueberstimmen.", es: "Incorrecto. Ni el cliente puede anular las decisiones del PO.", en: "Incorrect. Not even the customer can override the PO's decisions." } },
            { letter: "C", text: { de: "Nein, der PO ist alleiniger Verantwortlicher des Product Backlogs.", es: "No, el PO es el unico responsable del Product Backlog.", en: "No, the PO is the sole accountable person for the Product Backlog." }, correct: true, explanation: { de: "Richtig. Niemand darf die Entscheidungen des PO ueberstimmen.", es: "Correcto. Nadie puede anular las decisiones del PO.", en: "Correct. Nobody can override the PO's decisions." } },
            { letter: "D", text: { de: "Nein, weil das Team sonst zu oft umplanen muesste.", es: "No, porque el equipo tendria que replanificar con demasiada frecuencia.", en: "No, because the team would have to replan too often." }, correct: false, explanation: { de: "Falsch. Auf Veraenderungen zu reagieren ist bei Scrum wichtiger als einen Plan einzuhalten.", es: "Incorrecto. En Scrum, reaccionar a cambios es mas importante que seguir un plan.", en: "Incorrect. In Scrum, responding to change is more important than following a plan." } }
        ]
    },
    {
        id: 19,
        question: { de: "Was ist das Commitment des Sprint Backlogs?", es: "Cual es el compromiso del Sprint Backlog?", en: "What is the commitment of the Sprint Backlog?" },
        answers: [
            { letter: "A", text: { de: "Die DoD, die die Vision verdeutlicht", es: "La DoD, que aclara la vision", en: "The DoD, which clarifies the vision" }, correct: false, explanation: { de: "Falsch. Die Vision wird im Produktziel verdeutlicht.", es: "Incorrecto. La vision se aclara en el Objetivo del Producto.", en: "Incorrect. The vision is clarified in the Product Goal." } },
            { letter: "B", text: { de: "Die DoD, die verdeutlicht welche Eintraege entwickelt werden", es: "La DoD, que aclara que elementos se desarrollan", en: "The DoD, which clarifies which items are developed" }, correct: false, explanation: { de: "Falsch. Das Sprint Backlog verdeutlicht die Eintraege, nicht die DoD.", es: "Incorrecto. El Sprint Backlog aclara los elementos, no la DoD.", en: "Incorrect. The Sprint Backlog clarifies the items, not the DoD." } },
            { letter: "C", text: { de: "Das Sprintziel, das Anforderungen fuer Abschluss verdeutlicht", es: "El objetivo del Sprint, que aclara requisitos para completar", en: "The Sprint Goal, which clarifies requirements for completion" }, correct: false, explanation: { de: "Falsch. Die DoD verdeutlicht wann ein Eintrag abgeschlossen ist.", es: "Incorrecto. La DoD aclara cuando un elemento esta completo.", en: "Incorrect. The DoD clarifies when an item is complete." } },
            { letter: "D", text: { de: "Das Sprintziel, das verdeutlicht was das Team erreichen moechte", es: "El objetivo del Sprint, que aclara lo que el equipo quiere lograr", en: "The Sprint Goal, which clarifies what the team wants to achieve" }, correct: true, explanation: { de: "Richtig. Das Sprintziel ist das Commitment des Sprint Backlogs.", es: "Correcto. El objetivo del Sprint es el compromiso del Sprint Backlog.", en: "Correct. The Sprint Goal is the commitment of the Sprint Backlog." } }
        ]
    },
    {
        id: 20,
        question: { de: "Wer ist verantwortlich, dass das Produkt dem Kunden maximalen Wert liefert?", es: "Quien es responsable de que el producto entregue maximo valor al cliente?", en: "Who is responsible for ensuring the product delivers maximum value to the customer?" },
        answers: [
            { letter: "A", text: { de: "Die Entwickler", es: "Los desarrolladores", en: "The Developers" }, correct: false, explanation: { de: "Falsch. Die Entwickler schaffen Inkremente, maximieren aber nicht den Wert.", es: "Incorrecto. Los desarrolladores crean incrementos, pero no maximizan el valor.", en: "Incorrect. Developers create increments but do not maximize value." } },
            { letter: "B", text: { de: "Der Product Owner", es: "El Product Owner", en: "The Product Owner" }, correct: true, explanation: { de: "Richtig. Der Product Owner maximiert den Wert des Produkts.", es: "Correcto. El Product Owner maximiza el valor del producto.", en: "Correct. The Product Owner maximizes the product's value." } },
            { letter: "C", text: { de: "Der Scrum Master", es: "El Scrum Master", en: "The Scrum Master" }, correct: false, explanation: { de: "Falsch. Der SM etabliert Scrum, wirkt nur indirekt auf den Wert.", es: "Incorrecto. El SM establece Scrum, solo afecta indirectamente al valor.", en: "Incorrect. The SM establishes Scrum, only indirectly affecting value." } }
        ]
    },
    {
        id: 21,
        question: { de: "Was ist ein Produktziel?", es: "Que es un Objetivo de Producto?", en: "What is a Product Goal?" },
        answers: [
            { letter: "A", text: { de: "Eine Liste dessen, was fuer das Produkt benoetigt wird", es: "Una lista de lo que se necesita para el producto", en: "A list of what is needed for the product" }, correct: false, explanation: { de: "Falsch. Das ist das Product Backlog.", es: "Incorrecto. Eso es el Product Backlog.", en: "Incorrect. That is the Product Backlog." } },
            { letter: "B", text: { de: "Eine Qualitaetsmassnahme zur Pruefung ob ein Inkrement vollstaendig ist", es: "Una medida de calidad para verificar si un incremento esta completo", en: "A quality measure to check if an increment is complete" }, correct: false, explanation: { de: "Falsch. Das ist die DoD.", es: "Incorrecto. Eso es la DoD.", en: "Incorrect. That is the DoD." } },
            { letter: "C", text: { de: "Ein Ziel das im naechsten Sprint fertiggestellt werden muss", es: "Un objetivo que debe completarse en el proximo Sprint", en: "A goal that must be completed in the next Sprint" }, correct: false, explanation: { de: "Falsch. Das ist das Sprintziel.", es: "Incorrecto. Eso es el objetivo del Sprint.", en: "Incorrect. That is the Sprint Goal." } },
            { letter: "D", text: { de: "Eine Vision fuer das Produkt oder den Service", es: "Una vision para el producto o servicio", en: "A vision for the product or service" }, correct: true, explanation: { de: "Richtig. Das Produktziel ist die Vision fuer das Produkt.", es: "Correcto. El Objetivo de Producto es la vision del producto.", en: "Correct. The Product Goal is the vision for the product." } }
        ]
    },
    {
        id: 22,
        question: { de: "Wie lange sollte das Sprint Planning fuer einen 3-woechigen Sprint dauern?", es: "Cuanto deberia durar el Sprint Planning para un Sprint de 3 semanas?", en: "How long should Sprint Planning take for a 3-week Sprint?" },
        answers: [
            { letter: "A", text: { de: "6 Stunden", es: "6 horas", en: "6 hours" }, correct: true, explanation: { de: "Richtig. Maximum ist 8h fuer einen Monat. Bei 3 Wochen proportional kuerzer.", es: "Correcto. El maximo es 8h para un mes. Con 3 semanas proporcionalmente menor.", en: "Correct. Maximum is 8h for one month. For 3 weeks proportionally shorter." } },
            { letter: "B", text: { de: "8 Stunden", es: "8 horas", en: "8 hours" }, correct: false, explanation: { de: "Falsch. 8h ist das Maximum fuer einen Monat. 3 Wochen sollte kuerzer sein.", es: "Incorrecto. 8h es el maximo para un mes. 3 semanas deberia ser menor.", en: "Incorrect. 8h is the maximum for one month. 3 weeks should be shorter." } },
            { letter: "C", text: { de: "So lange wie noetig", es: "Todo el tiempo necesario", en: "As long as needed" }, correct: false, explanation: { de: "Falsch. Sprint Planning ist timeboxed.", es: "Incorrecto. El Sprint Planning tiene timebox.", en: "Incorrect. Sprint Planning is timeboxed." } }
        ]
    },
    {
        id: 23,
        multiSelect: true,
        question: { de: "Welche zwei Aussagen sind Werte des Agilen Manifests? (2 Antworten)", es: "Cuales dos afirmaciones son valores del Manifiesto Agil? (2 respuestas)", en: "Which two statements are values of the Agile Manifesto? (2 answers)" },
        answers: [
            { letter: "A", text: { de: "Umfassende Dokumentation ist wichtiger als funktionierende Software", es: "Documentacion exhaustiva es mas importante que software funcionando", en: "Comprehensive documentation over working software" }, correct: false, explanation: { de: "Falsch. Es ist umgekehrt.", es: "Incorrecto. Es al reves.", en: "Incorrect. It is the opposite." } },
            { letter: "B", text: { de: "Vertragsverhandlungen sind wichtiger als Zusammenarbeit mit dem Kunden", es: "Negociacion de contratos es mas importante que colaboracion con el cliente", en: "Contract negotiation over customer collaboration" }, correct: false, explanation: { de: "Falsch. Es ist umgekehrt.", es: "Incorrecto. Es al reves.", en: "Incorrect. It is the opposite." } },
            { letter: "C", text: { de: "Individuen und Interaktionen sind wichtiger als Prozesse und Werkzeuge", es: "Individuos e interacciones son mas importantes que procesos y herramientas", en: "Individuals and interactions over processes and tools" }, correct: true, explanation: { de: "Richtig. Einer der vier Werte des Agilen Manifests.", es: "Correcto. Uno de los cuatro valores del Manifiesto Agil.", en: "Correct. One of the four values of the Agile Manifesto." } },
            { letter: "D", text: { de: "Reagieren auf Veraenderung ist wichtiger als das Befolgen eines Plans", es: "Responder al cambio es mas importante que seguir un plan", en: "Responding to change over following a plan" }, correct: true, explanation: { de: "Richtig. Einer der vier Werte des Agilen Manifests.", es: "Correcto. Uno de los cuatro valores del Manifiesto Agil.", en: "Correct. One of the four values of the Agile Manifesto." } }
        ]
    },
    {
        id: 24,
        question: { de: "Warum ist die Visualisierung des Fortschritts mit einem Information Radiator hilfreich?", es: "Por que es util la visualizacion del progreso con un Information Radiator?", en: "Why is visualizing progress with an Information Radiator helpful?" },
        answers: [
            { letter: "A", text: { de: "Sie hilft dem SM bei der Zuweisung von PBIs.", es: "Ayuda al SM a asignar PBIs.", en: "It helps the SM assign PBIs." }, correct: false, explanation: { de: "Falsch. Aufgaben werden nicht vom SM zugewiesen.", es: "Incorrecto. Las tareas no las asigna el SM.", en: "Incorrect. Tasks are not assigned by the SM." } },
            { letter: "B", text: { de: "Sie hilft dem Team besser zusammenzuarbeiten.", es: "Ayuda al equipo a colaborar mejor.", en: "It helps the team collaborate better." }, correct: true, explanation: { de: "Richtig. Transparenz verbessert Feedback und Zusammenarbeit.", es: "Correcto. La transparencia mejora el feedback y la colaboracion.", en: "Correct. Transparency improves feedback and collaboration." } },
            { letter: "C", text: { de: "Sie zeigt wie beschaeftigt das Team ist.", es: "Muestra lo ocupado que esta el equipo.", en: "It shows how busy the team is." }, correct: false, explanation: { de: "Falsch. Das ist nicht das Ziel der Visualisierung.", es: "Incorrecto. Ese no es el objetivo de la visualizacion.", en: "Incorrect. That is not the goal of visualization." } }
        ]
    },
    {
        id: 25,
        question: { de: "Ein Kunde will einen Bericht ueber die Entwicklungsmethoden. Wer erstellt ihn am besten?", es: "Un cliente quiere un informe sobre los metodos de desarrollo. Quien lo crea mejor?", en: "A customer wants a report on development methods. Who best creates it?" },
        answers: [
            { letter: "A", text: { de: "Die Entwickler", es: "Los desarrolladores", en: "The Developers" }, correct: false, explanation: { de: "Falsch. Die Entwickler sollten nicht damit beauftragt werden.", es: "Incorrecto. Los desarrolladores no deberian encargarse.", en: "Incorrect. The Developers should not be tasked with this." } },
            { letter: "B", text: { de: "Der Product Owner", es: "El Product Owner", en: "The Product Owner" }, correct: false, explanation: { de: "Falsch. Der PO kuemmert sich mehr um den Inhalt als den Kontext.", es: "Incorrecto. El PO se ocupa mas del contenido que del contexto.", en: "Incorrect. The PO focuses more on content than context." } },
            { letter: "C", text: { de: "Der Scrum Master", es: "El Scrum Master", en: "The Scrum Master" }, correct: true, explanation: { de: "Richtig. Der SM kuemmert sich um den Kontext (Methoden, Prozesse).", es: "Correcto. El SM se ocupa del contexto (metodos, procesos).", en: "Correct. The SM focuses on context (methods, processes)." } }
        ]
    },
    {
        id: 26,
        question: { de: "Wie ist die Geschwindigkeit eines Scrum Teams definiert?", es: "Como se define la velocidad de un Scrum Team?", en: "How is a Scrum Team's velocity defined?" },
        answers: [
            { letter: "A", text: { de: "Gemeinsames Verstaendnis wie schnell ein Sprint fertigzustellen ist", es: "Entendimiento comun sobre que tan rapido completar un Sprint", en: "Shared understanding of how fast to complete a Sprint" }, correct: false, explanation: { de: "Falsch. Geschwindigkeit = Story Points pro Sprint.", es: "Incorrecto. Velocidad = Story Points por Sprint.", en: "Incorrect. Velocity = Story Points per Sprint." } },
            { letter: "B", text: { de: "Die Anzahl an Story Points die Entwickler pro Sprint abschliessen", es: "La cantidad de Story Points que los desarrolladores completan por Sprint", en: "The number of Story Points Developers complete per Sprint" }, correct: true, explanation: { de: "Richtig. Geschwindigkeit = Arbeitseinheiten pro Zeitraum.", es: "Correcto. Velocidad = unidades de trabajo por periodo.", en: "Correct. Velocity = work units per time period." } },
            { letter: "C", text: { de: "Die optimale laufende Arbeit (WIP) pro Sprint", es: "El trabajo en progreso (WIP) optimo por Sprint", en: "The optimal work in progress (WIP) per Sprint" }, correct: false, explanation: { de: "Falsch. WIP-Limit ist ein Kanban-Konzept.", es: "Incorrecto. El limite WIP es un concepto Kanban.", en: "Incorrect. WIP limit is a Kanban concept." } },
            { letter: "D", text: { de: "Die Summe aller abgeschlossenen SBIs", es: "La suma de todos los SBIs completados", en: "The sum of all completed SBIs" }, correct: false, explanation: { de: "Falsch. Das kann zur Schaetzung dienen, ist aber nicht die Definition.", es: "Incorrecto. Puede servir para estimar, pero no es la definicion.", en: "Incorrect. This can be used for estimation but is not the definition." } }
        ]
    },
    {
        id: 27,
        question: { de: "Wie funktioniert Affinity Estimation?", es: "Como funciona la Affinity Estimation?", en: "How does Affinity Estimation work?" },
        answers: [
            { letter: "A", text: { de: "User Stories nach relativem Aufwand ordnen und in Kategorien einteilen", es: "Ordenar User Stories por esfuerzo relativo y clasificar en categorias", en: "Order User Stories by relative effort and classify into categories" }, correct: true, explanation: { de: "Richtig. So funktioniert Affinity Estimation.", es: "Correcto. Asi funciona la Affinity Estimation.", en: "Correct. This is how Affinity Estimation works." } },
            { letter: "B", text: { de: "Jeder schaetzt zuerst selbst, dann einigt sich das Team", es: "Cada uno estima primero, luego el equipo se pone de acuerdo", en: "Everyone estimates first, then the team agrees" }, correct: false, explanation: { de: "Falsch. Das ist Planning Poker.", es: "Incorrecto. Eso es Planning Poker.", en: "Incorrect. That is Planning Poker." } },
            { letter: "C", text: { de: "Mehrere Referenz-Stories zum Vergleich nutzen", es: "Usar varias Stories de referencia para comparar", en: "Use multiple reference stories for comparison" }, correct: false, explanation: { de: "Falsch. Das ist Triangulation.", es: "Incorrecto. Eso es Triangulacion.", en: "Incorrect. That is Triangulation." } }
        ]
    },
    {
        id: 28,
        question: { de: "Eine Person codiert, eine zweite beobachtet und kommentiert. Sie wechseln gelegentlich. Welche Praktik?", es: "Una persona codifica, otra observa y comenta. Intercambian roles. Que practica es?", en: "One person codes, another observes and comments. They occasionally switch. What practice?" },
        answers: [
            { letter: "A", text: { de: "Code Review", es: "Code Review", en: "Code Review" }, correct: false, explanation: { de: "Falsch. Code Review ist die Ueberpruefung von erstelltem Code.", es: "Incorrecto. Code Review es la revision del codigo creado.", en: "Incorrect. Code Review is reviewing created code." } },
            { letter: "B", text: { de: "Kontinuierliche Integration", es: "Integracion Continua", en: "Continuous Integration" }, correct: false, explanation: { de: "Falsch. CI bedeutet kontinuierliche Integration von neuem Code.", es: "Incorrecto. CI significa integracion continua de codigo nuevo.", en: "Incorrect. CI means continuously integrating new code." } },
            { letter: "C", text: { de: "Paarprogrammierung", es: "Programacion en pareja", en: "Pair Programming" }, correct: true, explanation: { de: "Richtig. Zwei Entwickler arbeiten zusammen, einer schreibt, einer beobachtet.", es: "Correcto. Dos desarrolladores trabajan juntos, uno escribe, otro observa.", en: "Correct. Two developers work together, one writes, one observes." } },
            { letter: "D", text: { de: "Testgetriebene Entwicklung", es: "Desarrollo guiado por pruebas", en: "Test-Driven Development" }, correct: false, explanation: { de: "Falsch. TDD erstellt Tests vor dem Code.", es: "Incorrecto. TDD crea pruebas antes del codigo.", en: "Incorrect. TDD creates tests before code." } }
        ]
    },
    {
        id: 29,
        question: { de: "Welches Event eignet sich am besten fuer Stakeholder-Feedback zum Inkrement?", es: "Que evento es el mas adecuado para feedback de stakeholders sobre el incremento?", en: "Which event is best suited for stakeholder feedback on the increment?" },
        answers: [
            { letter: "A", text: { de: "Daily Scrum", es: "Daily Scrum", en: "Daily Scrum" }, correct: false, explanation: { de: "Falsch. Nicht geeignet fuer Feedback.", es: "Incorrecto. No es adecuado para feedback.", en: "Incorrect. Not suitable for feedback." } },
            { letter: "B", text: { de: "Sprint Planning", es: "Sprint Planning", en: "Sprint Planning" }, correct: false, explanation: { de: "Falsch. Das ist eine Planungsbesprechung.", es: "Incorrecto. Es una reunion de planificacion.", en: "Incorrect. That is a planning meeting." } },
            { letter: "C", text: { de: "Sprint Retrospective", es: "Sprint Retrospective", en: "Sprint Retrospective" }, correct: false, explanation: { de: "Falsch. Die Retrospective ueberprueft die Prozesse.", es: "Incorrecto. La Retrospectiva revisa los procesos.", en: "Incorrect. The Retrospective reviews processes." } },
            { letter: "D", text: { de: "Sprint Review", es: "Sprint Review", en: "Sprint Review" }, correct: true, explanation: { de: "Richtig. Im Sprint Review geben Stakeholder Feedback zum Inkrement.", es: "Correcto. En el Sprint Review los stakeholders dan feedback sobre el incremento.", en: "Correct. In the Sprint Review, stakeholders give feedback on the increment." } }
        ]
    },
    {
        id: 30,
        shuffleAnswers: false,
        question: { de: "Das S von INVEST steht fuer Small. Welche PBIs sollten klein sein?", es: "La S de INVEST significa Small. Que PBIs deberian ser pequenos?", en: "The S in INVEST stands for Small. Which PBIs should be small?" },
        answers: [
            { letter: "A", text: { de: "Alle PBIs", es: "Todos los PBIs", en: "All PBIs" }, correct: false, explanation: { de: "Falsch. Nur die oben im Product Backlog muessen klein sein.", es: "Incorrecto. Solo los de arriba en el Product Backlog deben ser pequenos.", en: "Incorrect. Only those at the top of the Product Backlog need to be small." } },
            { letter: "B", text: { de: "Die Eintraege unten im Product Backlog", es: "Los elementos en la parte inferior del Product Backlog", en: "Items at the bottom of the Product Backlog" }, correct: false, explanation: { de: "Falsch. Der Detaillierungsgrad nimmt nach unten ab.", es: "Incorrecto. El nivel de detalle disminuye hacia abajo.", en: "Incorrect. The level of detail decreases toward the bottom." } },
            { letter: "C", text: { de: "Die Eintraege ganz oben im Product Backlog", es: "Los elementos en la parte superior del Product Backlog", en: "Items at the top of the Product Backlog" }, correct: true, explanation: { de: "Richtig. Nur die oberen PBIs muessen klein und praezise definiert sein.", es: "Correcto. Solo los PBIs superiores deben ser pequenos y definidos con precision.", en: "Correct. Only the top PBIs need to be small and precisely defined." } },
            { letter: "D", text: { de: "Keine PBIs, nur die SBIs", es: "Ningun PBI, solo los SBIs", en: "No PBIs, only SBIs" }, correct: false, explanation: { de: "Falsch. Auch die oberen PBIs muessen klein sein.", es: "Incorrecto. Tambien los PBIs superiores deben ser pequenos.", en: "Incorrect. The top PBIs also need to be small." } }
        ]
    },
    {
        id: 31,
        question: { de: "Welche Art von Team erstellt die besten Architekturen und Designs?", es: "Que tipo de equipo crea las mejores arquitecturas y disenos?", en: "What type of team creates the best architectures and designs?" },
        answers: [
            { letter: "A", text: { de: "Ein an einem Ort zusammenarbeitendes Team", es: "Un equipo en el mismo lugar", en: "A co-located team" }, correct: false, explanation: { de: "Falsch. Zusammenarbeit am gleichen Ort sichert Kommunikation, nicht bessere Ergebnisse.", es: "Incorrecto. Estar en el mismo lugar asegura comunicacion, no mejores resultados.", en: "Incorrect. Co-location ensures communication, not better results." } },
            { letter: "B", text: { de: "Ein selbstorganisiertes Team", es: "Un equipo autoorganizado", en: "A self-organizing team" }, correct: true, explanation: { de: "Richtig. Laut Agilem Manifest erstellen selbstorganisierte Teams die besten Ergebnisse.", es: "Correcto. Segun el Manifiesto Agil, equipos autoorganizados crean los mejores resultados.", en: "Correct. According to the Agile Manifesto, self-organizing teams create the best results." } },
            { letter: "C", text: { de: "Ein gut geschultes Team", es: "Un equipo bien capacitado", en: "A well-trained team" }, correct: false, explanation: { de: "Falsch. Agile Teams liefern bessere Ergebnisse.", es: "Incorrecto. Equipos agiles entregan mejores resultados.", en: "Incorrect. Agile teams deliver better results." } },
            { letter: "D", text: { de: "Ein erfahrenes Team", es: "Un equipo experimentado", en: "An experienced team" }, correct: false, explanation: { de: "Falsch. Ein agiles Team ist wahrscheinlich besser als ein erfahrenes nicht-agiles.", es: "Incorrecto. Un equipo agil probablemente es mejor que uno experimentado no agil.", en: "Incorrect. An agile team is likely better than an experienced non-agile one." } }
        ]
    },
    {
        id: 32,
        question: { de: "Welches Kriterium muss bei der Reihenfolge der PBIs NICHT beruecksichtigt werden?", es: "Que criterio NO debe considerarse para el orden de los PBIs?", en: "Which criterion does NOT need to be considered for PBI ordering?" },
        answers: [
            { letter: "A", text: { de: "Abhaengigkeit", es: "Dependencia", en: "Dependency" }, correct: false, explanation: { de: "Falsch. Abhaengigkeiten sind wichtig fuer die Reihenfolge.", es: "Incorrecto. Las dependencias son importantes para el orden.", en: "Incorrect. Dependencies are important for ordering." } },
            { letter: "B", text: { de: "Verfuegbarkeit der Entwickler", es: "Disponibilidad de los desarrolladores", en: "Developer availability" }, correct: true, explanation: { de: "Richtig. Verfuegbarkeit ist ein Punkt beim Sprint Planning, nicht fuer die PBI-Reihenfolge.", es: "Correcto. La disponibilidad es un punto del Sprint Planning, no del orden de PBIs.", en: "Correct. Availability is a Sprint Planning concern, not for PBI ordering." } },
            { letter: "C", text: { de: "Risiko", es: "Riesgo", en: "Risk" }, correct: false, explanation: { de: "Falsch. Risiko ist ein wichtiger Faktor.", es: "Incorrecto. El riesgo es un factor importante.", en: "Incorrect. Risk is an important factor." } },
            { letter: "D", text: { de: "Wert", es: "Valor", en: "Value" }, correct: false, explanation: { de: "Falsch. Wert ist ein Hauptkriterium.", es: "Incorrecto. El valor es un criterio principal.", en: "Incorrect. Value is a main criterion." } }
        ]
    },
    {
        id: 33,
        question: { de: "Warum muss das Daily Scrum immer am selben Ort und zur selben Zeit stattfinden?", es: "Por que el Daily Scrum debe ser siempre en el mismo lugar y hora?", en: "Why must the Daily Scrum always be at the same place and time?" },
        answers: [
            { letter: "A", text: { de: "Weil der Raum vorab gebucht werden sollte", es: "Porque la sala debe reservarse con anticipacion", en: "Because the room should be booked in advance" }, correct: false, explanation: { de: "Falsch. Raeume muessen nicht gebucht werden.", es: "Incorrecto. Las salas no necesitan reservarse.", en: "Incorrect. Rooms do not need to be booked." } },
            { letter: "B", text: { de: "Weil das Management Statusmeldungen braucht", es: "Porque la gerencia necesita reportes de estado", en: "Because management needs status reports" }, correct: false, explanation: { de: "Falsch. Das ist nicht der Grund.", es: "Incorrecto. Esa no es la razon.", en: "Incorrect. That is not the reason." } },
            { letter: "C", text: { de: "Weil gleiche Zeit und gleicher Ort die Komplexitaet minimieren", es: "Porque el mismo horario y lugar minimizan la complejidad", en: "Because same time and place minimize complexity" }, correct: true, explanation: { de: "Richtig. Es verringert die Komplexitaet.", es: "Correcto. Reduce la complejidad.", en: "Correct. It reduces complexity." } }
        ]
    },
    {
        id: 34,
        question: { de: "Im Burn-Down-Chart bewegt sich der Balken zwischen Sprint 3 und 4 ueber die x-Achse. Was geschah?", es: "En el Burn-Down Chart la barra se mueve sobre el eje x entre Sprint 3 y 4. Que ocurrio?", en: "In the Burn-Down Chart the bar moves above the x-axis between Sprint 3 and 4. What happened?" },
        answers: [
            { letter: "A", text: { de: "Eintraege wurden zum Product Backlog hinzugefuegt", es: "Se agregaron elementos al Product Backlog", en: "Items were added to the Product Backlog" }, correct: false, explanation: { de: "Falsch. Dann waere der Balken nicht ueber die x-Achse gegangen.", es: "Incorrecto. Entonces la barra no habria ido sobre el eje x.", en: "Incorrect. Then the bar would not have gone above the x-axis." } },
            { letter: "B", text: { de: "Eintraege wurden aus dem Product Backlog entfernt", es: "Se eliminaron elementos del Product Backlog", en: "Items were removed from the Product Backlog" }, correct: true, explanation: { de: "Richtig. Werden Aufgaben entfernt, bewegt sich der Balken ueber die x-Achse.", es: "Correcto. Cuando se eliminan tareas, la barra se mueve sobre el eje x.", en: "Correct. When tasks are removed, the bar moves above the x-axis." } },
            { letter: "C", text: { de: "Weniger User Stories als zugeteilt wurden abgeschlossen", es: "Se completaron menos User Stories de las asignadas", en: "Fewer User Stories than assigned were completed" }, correct: false, explanation: { de: "Falsch. Das untere Ende zeigt verbleibenden Aufwand, nicht erledigten.", es: "Incorrecto. El extremo inferior muestra esfuerzo restante, no completado.", en: "Incorrect. The bottom shows remaining effort, not completed." } },
            { letter: "D", text: { de: "Mehr User Stories als zugeteilt wurden abgeschlossen", es: "Se completaron mas User Stories de las asignadas", en: "More User Stories than assigned were completed" }, correct: false, explanation: { de: "Falsch. Das untere Ende zeigt verbleibenden Aufwand.", es: "Incorrecto. El extremo inferior muestra esfuerzo restante.", en: "Incorrect. The bottom shows remaining effort." } }
        ]
    },
    {
        id: 35,
        shuffleAnswers: false,
        question: { de: "Welcher Vertragstyp ist adaptiv und passt gut zu Scrum?", es: "Que tipo de contrato es adaptivo y se ajusta bien a Scrum?", en: "Which contract type is adaptive and fits well with Scrum?" },
        answers: [
            { letter: "A", text: { de: "Festpreis", es: "Precio fijo", en: "Fixed price" }, correct: false, explanation: { de: "Falsch. Festpreisvertraege sind nicht sehr adaptiv.", es: "Incorrecto. Los contratos de precio fijo no son muy adaptivos.", en: "Incorrect. Fixed-price contracts are not very adaptive." } },
            { letter: "B", text: { de: "Zeit und Material", es: "Tiempo y materiales", en: "Time and materials" }, correct: true, explanation: { de: "Richtig. Dieser Vertragstyp passt gut zur adaptiven Natur von Scrum.", es: "Correcto. Este tipo de contrato se ajusta bien a la naturaleza adaptiva de Scrum.", en: "Correct. This contract type fits well with Scrum's adaptive nature." } },
            { letter: "C", text: { de: "Keiner dieser Vertragstypen", es: "Ninguno de estos tipos", en: "Neither of these types" }, correct: false, explanation: { de: "Falsch. Zeit und Material passt gut zu Scrum.", es: "Incorrecto. Tiempo y materiales se ajusta bien a Scrum.", en: "Incorrect. Time and materials fits well with Scrum." } }
        ]
    },
    {
        id: 36,
        question: { de: "Was nutzt ein Team um Kriterien festzulegen, die vor Abschluss eines Inkrements erfuellt sein muessen?", es: "Que usa un equipo para establecer criterios que deben cumplirse antes de completar un incremento?", en: "What does a team use to establish criteria that must be met before an increment is complete?" },
        answers: [
            { letter: "A", text: { de: "Burn-Down-Chart", es: "Burn-Down Chart", en: "Burn-Down Chart" }, correct: false, explanation: { de: "Falsch. Das zeigt verbleibenden Aufwand, keine Kriterien.", es: "Incorrecto. Muestra trabajo restante, no criterios.", en: "Incorrect. It shows remaining work, not criteria." } },
            { letter: "B", text: { de: "Definition of Done (DoD)", es: "Definition of Done (DoD)", en: "Definition of Done (DoD)" }, correct: true, explanation: { de: "Richtig. Die DoD legt fest welche Kriterien erfuellt sein muessen.", es: "Correcto. La DoD establece que criterios deben cumplirse.", en: "Correct. The DoD establishes which criteria must be met." } },
            { letter: "C", text: { de: "Product Backlog", es: "Product Backlog", en: "Product Backlog" }, correct: false, explanation: { de: "Falsch. Das ist eine geordnete Liste aller Anforderungen.", es: "Incorrecto. Es una lista ordenada de todos los requisitos.", en: "Incorrect. It is an ordered list of all requirements." } },
            { letter: "D", text: { de: "Sprint Backlog", es: "Sprint Backlog", en: "Sprint Backlog" }, correct: false, explanation: { de: "Falsch. Das enthaelt die fuer einen Sprint ausgewaehlten Eintraege.", es: "Incorrecto. Contiene los elementos seleccionados para un Sprint.", en: "Incorrect. It contains items selected for a Sprint." } }
        ]
    },
    {
        id: 37,
        question: { de: "Wie nennt man einen potenziell releasefaehigen Teil des Produkts aus einem Sprint?", es: "Como se llama una parte potencialmente entregable del producto de un Sprint?", en: "What is a potentially releasable part of the product from a Sprint called?" },
        answers: [
            { letter: "A", text: { de: "Ein Feature", es: "Un Feature", en: "A Feature" }, correct: false, explanation: { de: "Falsch. Ein Feature ist Bestandteil des Inkrements.", es: "Incorrecto. Un Feature es parte del Incremento.", en: "Incorrect. A Feature is part of the Increment." } },
            { letter: "B", text: { de: "Eine Funktionalitaet", es: "Una funcionalidad", en: "A functionality" }, correct: false, explanation: { de: "Falsch. Eine Funktionalitaet koennte Teil des Inkrements sein.", es: "Incorrecto. Una funcionalidad podria ser parte del Incremento.", en: "Incorrect. A functionality could be part of the Increment." } },
            { letter: "C", text: { de: "Ein Sprint Backlog", es: "Un Sprint Backlog", en: "A Sprint Backlog" }, correct: false, explanation: { de: "Falsch. Das Sprint Backlog ist ein Plan, kein Produktteil.", es: "Incorrecto. El Sprint Backlog es un plan, no parte del producto.", en: "Incorrect. The Sprint Backlog is a plan, not a product part." } },
            { letter: "D", text: { de: "Ein Inkrement", es: "Un Incremento", en: "An Increment" }, correct: true, explanation: { de: "Richtig. Ein Inkrement ist ein potenziell releasefaehiger Produktteil.", es: "Correcto. Un Incremento es una parte potencialmente entregable del producto.", en: "Correct. An Increment is a potentially releasable product part." } }
        ]
    },
    {
        id: 38,
        question: { de: "Wie funktioniert Planning Poker?", es: "Como funciona Planning Poker?", en: "How does Planning Poker work?" },
        answers: [
            { letter: "A", text: { de: "Story mit Referenz-Stories vergleichen", es: "Comparar la Story con Stories de referencia", en: "Compare the Story with reference Stories" }, correct: false, explanation: { de: "Falsch. Das ist Triangulation.", es: "Incorrecto. Eso es Triangulacion.", en: "Incorrect. That is Triangulation." } },
            { letter: "B", text: { de: "Zuerst eigene Schaetzung, dann mit anderen vergleichen", es: "Primero estimacion propia, luego comparar con los demas", en: "First own estimate, then compare with others" }, correct: true, explanation: { de: "Richtig. Das ist Planning Poker.", es: "Correcto. Eso es Planning Poker.", en: "Correct. That is Planning Poker." } },
            { letter: "C", text: { de: "Alle Stories nach relativem Aufwand ordnen", es: "Ordenar todas las Stories por esfuerzo relativo", en: "Order all Stories by relative effort" }, correct: false, explanation: { de: "Falsch. Das ist Affinity Estimation.", es: "Incorrecto. Eso es Affinity Estimation.", en: "Incorrect. That is Affinity Estimation." } }
        ]
    },
    {
        id: 39,
        question: { de: "Wer eignet sich am besten fuer ein Audit der Scrum-Praktiken?", es: "Quien es el mas adecuado para una auditoria de practicas Scrum?", en: "Who is best suited for an audit of Scrum practices?" },
        answers: [
            { letter: "A", text: { de: "Die Geschaeftsleitung", es: "La direccion", en: "Senior management" }, correct: false, explanation: { de: "Falsch. Der SM ist dafuer geeigneter.", es: "Incorrecto. El SM es mas adecuado.", en: "Incorrect. The SM is more suitable." } },
            { letter: "B", text: { de: "Die Entwickler", es: "Los desarrolladores", en: "The Developers" }, correct: false, explanation: { de: "Falsch. Nicht deren Aufgabe.", es: "Incorrecto. No es su tarea.", en: "Incorrect. Not their task." } },
            { letter: "C", text: { de: "Der Product Owner", es: "El Product Owner", en: "The Product Owner" }, correct: false, explanation: { de: "Falsch. Der PO ist fuer das Product Backlog verantwortlich.", es: "Incorrecto. El PO es responsable del Product Backlog.", en: "Incorrect. The PO is responsible for the Product Backlog." } },
            { letter: "D", text: { de: "Der Scrum Master", es: "El Scrum Master", en: "The Scrum Master" }, correct: true, explanation: { de: "Richtig. Der SM ist Coach und stellt sicher dass Scrum korrekt befolgt wird.", es: "Correcto. El SM es coach y asegura que Scrum se siga correctamente.", en: "Correct. The SM is a coach and ensures Scrum is followed correctly." } }
        ]
    },
    {
        id: 40,
        question: { de: "Mehrere Teams, ein Produkt. PO will eigene DoD pro Team, SM will eine gemeinsame. Wer hat Recht?", es: "Varios equipos, un producto. PO quiere DoD propia por equipo, SM quiere una compartida. Quien tiene razon?", en: "Multiple teams, one product. PO wants own DoD per team, SM wants a shared one. Who is right?" },
        answers: [
            { letter: "A", text: { de: "Der PO, weil eigene DoD effizienter ist", es: "El PO, porque DoD propia es mas eficiente", en: "The PO, because own DoD is more efficient" }, correct: false, explanation: { de: "Falsch. Alle Teams sollten eine integrierte DoD nutzen.", es: "Incorrecto. Todos los equipos deberian usar una DoD integrada.", en: "Incorrect. All teams should use an integrated DoD." } },
            { letter: "B", text: { de: "Der PO, weil die DoD in seine Zustaendigkeit faellt", es: "El PO, porque la DoD es su responsabilidad", en: "The PO, because the DoD is their responsibility" }, correct: false, explanation: { de: "Falsch. Die DoD ist nicht Zustaendigkeit des PO.", es: "Incorrecto. La DoD no es responsabilidad del PO.", en: "Incorrect. The DoD is not the PO's responsibility." } },
            { letter: "C", text: { de: "Der SM, weil Scrum-Prozesse seine Zustaendigkeit sind", es: "El SM, porque los procesos Scrum son su responsabilidad", en: "The SM, because Scrum processes are their responsibility" }, correct: false, explanation: { de: "Falsch. Der SM hat Recht, aber die DoD ist nicht Teil des Prozesses.", es: "Incorrecto. El SM tiene razon, pero la DoD no es parte del proceso.", en: "Incorrect. The SM is right, but the DoD is not part of the process." } },
            { letter: "D", text: { de: "Der SM, weil eine geteilte DoD sicherstellt dass alle Teile zusammenpassen", es: "El SM, porque una DoD compartida asegura que todas las partes encajen", en: "The SM, because a shared DoD ensures all parts fit together" }, correct: true, explanation: { de: "Richtig. Eine gemeinsame DoD stellt sicher dass alles zusammenpasst.", es: "Correcto. Una DoD compartida asegura que todo encaje.", en: "Correct. A shared DoD ensures everything fits together." } }
        ]
    }
];
