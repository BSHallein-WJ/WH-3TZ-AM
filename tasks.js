const categories = [

    //#region Info
    {
        id: "pruef-und-lerninfo",
        title: "Prüf- und Lerninfo",
        description: "Zusammenfassende Prüfungs- und Lernhinweise zu diesem Themenbereich.",
        tasks: [
            {
                name: "Hinweis zur Prüfungsvorbereitung",
                prompt: `Diese Internetseite bietet eine Vielzahl von Aufgaben. Sie dient als Lernhilfe und zur Prüfungsvorbereitung.<br><br>Die Aufgabenstellungen in der Prüfung sind nicht identisch mit diesen Übungsaufgaben und werden oft verkürzt oder abgewandelt abgefragt.<br><br>Wenn Sie diese Rechnungen verstanden haben, sollte die Prüfung kein Problem für Sie werden! 🙂`
            },

            {
                name: "Bücher und Rechenhilfen",
                prompt: `Suchen Sie Tabellenwerte und Formeln in den Tabellenbüchern, die Sie in der Ausbildung erhalten haben.<br><br>Die Aufgaben auf dieser Seite sind so gestaltet, dass Sie die Tabellenbücher und Rechenhilfen nutzen müssen, um die Aufgaben zu lösen.<br>
                Die Tabellenbücher enthalten alle notwendigen Formeln und Werte, die Sie für die Berechnungen benötigen.`
            },

            {
                name: "Hinweis zum Lernen",
                prompt: `Lernen Sie die Aufgaben nicht auswendig!<br><br>Versuchen Sie die Aufgaben zu verstehen und die Zusammenhänge zu erkennen.<br><br>Wenn Sie die Rechenwege verstanden haben, können Sie diese problemlos auf andere Aufgabenstellungen anwenden.`
            }
        ]
    },
    //#endregion

    //#region Biegung
    {
        id: "biegung",
        title: "Biegung",
        description: "Übungen und Erklärungen zur Biegung.",
        tasks: [

            {
                name: "Biegung eines Kragträgers",
                prompt: `Ein einseitig eingespannter Träger mit einem rechteckigen Querschnitt (b&nbsp;=&nbsp;10&nbsp;mm, h&nbsp;=&nbsp;20&nbsp;mm) ragt L&nbsp;=&nbsp;450&nbsp;mm aus der Einspannung heraus.<br>
                Die zulässige Biegespannung des Werkstoffs beträgt &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;160&nbsp;N/mm².<br>
<b>Berechnen Sie die maximal zulässige Kraft F, die am freien Ende wirken darf, für:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;den hochkant montierten Träger (Höhe h&nbsp;=&nbsp;20&nbsp;mm, Breite b&nbsp;=&nbsp;10&nbsp;mm)</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;den flach montierten Träger (Höhe h&nbsp;=&nbsp;10&nbsp;mm, Breite b&nbsp;=&nbsp;20&nbsp;mm)</li>
</ul>`,


                image: "downloads/Biegung_1.png",
                imageAlt: "Skizze zum Kragträger",
                solution: `<b>Lösungsweg:</b><br>
Allgemein gilt: F<sub>zul</sub> = (W<sub>b</sub> · &sigma;<sub>b,zul</sub>) / L<br><br>
<b>a) Hochkant (b = 10 mm, h = 20 mm):</b><br>
W<sub>b,a</sub> = (b · h²) / 6 = (10 mm · (20 mm)²) / 6 = 666,67 mm³<br>
F<sub>a</sub> = (666,67 mm³ · 160 N/mm²) / 450 mm = <b>237,04 N</b><br><br>
<b>b) Flach (b = 20 mm, h = 10 mm):</b><br>
W<sub>b,b</sub> = (b · h²) / 6 = (20 mm · (10 mm)²) / 6 = 333,33 mm³<br>
F<sub>b</sub> = (333,33 mm³ · 160 N/mm²) / 450 mm = <b>118,52 N</b>`
            },

            {
                name: "Widerstandsmoment einer Biegewelle",
                prompt: `Eine auf Biegung beanspruchte Welle aus Rundstahl wird durch ein maximales Biegemoment von M<sub>b</sub>&nbsp;=&nbsp;480&nbsp;Nm belastet.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;das erforderliche Widerstandsmoment W in cm³, wenn die zulässige Biegespannung &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;85&nbsp;N/mm² beträgt,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;den erforderlichen Mindestdurchmesser d der Welle in mm.</li>
</ul>`,

                image: "downloads/Biegung_2.png",
                imageAlt: "Skizze zur Biegewelle",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Erforderliches Widerstandsmoment W:</b><br>
M<sub>b</sub> = 480 Nm = 480.000 Nmm<br>
W<sub>erf</sub> = M<sub>b</sub> / &sigma;<sub>b,zul</sub> = 480.000 Nmm / 85 N/mm² = 5.647,06 mm³ = <b>5,65 cm³</b><br><br>
<b>b) Erforderlicher Mindestdurchmesser d:</b><br>
d = ³&radic;((32 · W) / &pi;) = ³&radic;((32 · 5.647,06 mm³) / &pi;) = <b>38,60 mm</b>`

            },

            {
                name: "Träger auf zwei Stützen",
                prompt: `Ein frei aufliegender Träger auf zwei Stützen mit flachem Rechteckquerschnitt (Breite b&nbsp;=&nbsp;25&nbsp;mm, Höhe h&nbsp;=&nbsp;40&nbsp;mm) und einer Stützweite von L&nbsp;=&nbsp;1000&nbsp;mm wird in der Trägermitte mit einer Einzellast von F&nbsp;=&nbsp;2800&nbsp;N belastet (E-Modul E&nbsp;=&nbsp;210.000&nbsp;N/mm²).<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die maximale Biegespannung &sigma;<sub>b</sub> in N/mm²,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die maximale Durchbiegung f in der Trägermitte in mm.</li>
</ul>`,
                image: "downloads/Biegung_3.png",
                imageAlt: "Skizze Träger auf zwei Stützen",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Maximale Biegespannung &sigma;<sub>b</sub>:</b><br>
M<sub>b,max</sub> = (F · L) / 4 = (2.800 N · 1.000 mm) / 4 = 700.000 Nmm<br>
W = (b · h²) / 6 = (25 mm · (40 mm)²) / 6 = 6.666,67 mm³<br>
&sigma;<sub>b</sub> = M<sub>b,max</sub> / W = 700.000 Nmm / 6.666,67 mm³ = <b>105 N/mm²</b><br><br>
<b>b) Maximale Durchbiegung f:</b><br>
I = (b · h³) / 12 = (25 mm · (40 mm)³) / 12 = 133.333,33 mm⁴<br>
f = (F · L³) / (48 · E · I) = (2.800 N · (1.000 mm)³) / (48 · 210.000 N/mm² · 133.333,33 mm⁴) = <b>2,08 mm</b>`
            },


            {
                name: "Kragträger mit Flachstahlquerschnitt",
                prompt: `Ein einseitig eingespannter Flachstahl aus S275 (Rechtrechteckquerschnitt: h&nbsp;=&nbsp;150&nbsp;mm, b&nbsp;=&nbsp;25&nbsp;mm) mit einer Auskragung von L&nbsp;=&nbsp;1,2&nbsp;m wird am freien Ende durch eine Kraft F belastet.<br>
                Die zulässige Biegespannung beträgt &sigma;<sub>zul</sub>&nbsp;=&nbsp;&sigma;<sub>b,zul</sub> unter Berücksichtigung einer Sicherheit von &nu;&nbsp;=&nbsp;1,5.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die maximal zulässige Kraft F bei hochkant montiertem Träger (h&nbsp;=&nbsp;150&nbsp;mm, b&nbsp;=&nbsp;25&nbsp;mm),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die maximal zulässige Kraft F bei flach montiertem Träger (h&nbsp;=&nbsp;25&nbsp;mm, b&nbsp;=&nbsp;150&nbsp;mm),</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die resultierende Durchbiegung f am freien Ende für den hochkantigen Fall (E-Modul E&nbsp;=&nbsp;210.000&nbsp;N/mm²).</li>
</ul>`,
                image: "downloads/Biegung_4.png",
                imageAlt: "Skizze Kragträger mit Belastung F",
                solution: `<b>Lösungsweg:</b><br>
<b>&sigma;<sub>zul</sub> (S275, &nu; = 1,5):</b> &sigma;<sub>zul</sub> = 275 N/mm² / 1,5 = 183,33 N/mm²<br><br>
<b>a) Hochkant (h = 150 mm, b = 25 mm):</b><br>
W<sub>a</sub> = (25 mm · (150 mm)²) / 6 = 93.750 mm³<br>
F<sub>a</sub> = (&sigma;<sub>zul</sub> · W<sub>a</sub>) / L = (183,33 N/mm² · 93.750 mm³) / 1.200 mm = <b>14.322,92 N ≈ 14,32 kN</b><br><br>
<b>b) Flach (h = 25 mm, b = 150 mm):</b><br>
W<sub>b</sub> = (150 mm · (25 mm)²) / 6 = 15.625 mm³<br>
F<sub>b</sub> = (&sigma;<sub>zul</sub> · W<sub>b</sub>) / L = (183,33 N/mm² · 15.625 mm³) / 1.200 mm = <b>2.387,15 N ≈ 2,39 kN</b><br><br>
<b>c) Durchbiegung f (hochkant):</b><br>
I<sub>a</sub> = (25 mm · (150 mm)³) / 12 = 7.031.250 mm⁴<br>
f = (F<sub>a</sub> · L³) / (3 · E · I<sub>a</sub>) = (14.322,92 N · (1.200 mm)³) / (3 · 210.000 N/mm² · 7.031.250 mm⁴) = <b>5,59 mm</b>`
            },



            {
                name: "Zulässige Belastung eines Plattform-Kragträgers",
                prompt: `Ein auskragender Ausleger für eine Bedienbühne aus Flachstahl S235 (Rechteckquerschnitt: h&nbsp;=&nbsp;120&nbsp;mm, b&nbsp;=&nbsp;20&nbsp;mm) steht L&nbsp;=&nbsp;800&nbsp;mm aus einer starren Wand hervor.<br>
Der Werkstoff S235 hat eine Streckgrenze von R<sub>e</sub>&nbsp;=&nbsp;235&nbsp;N/mm². Es soll eine Sicherheit gegen Verformung von &nu;&nbsp;=&nbsp;1,6 eingehalten werden.<br>
Es ist Belastungsfall 1 (ruhend/statisch) anzunehmen.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die Biegefließgrenze &sigma;<sub>bF</sub> in N/mm² (Formel siehe TAB),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die zulässige Biegespannung &sigma;<sub>b,zul</sub> in N/mm² (Formel siehe TAB),</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die maximal zulässige Nutzlast F bei hochkant montiertem Ausleger,</li>
  <li style="text-indent: -20px; padding-left: 20px;">d)&nbsp;&nbsp;die maximal zulässige Nutzlast F bei quer/flach montiertem Ausleger,</li>
  <li style="text-indent: -20px; padding-left: 20px;">e)&nbsp;&nbsp;die elastische Durchbiegung f am Ende für den hochkantigen Fall unter Ausnutzung der vollen Kraft F.</li>
</ul>`,
                image: "downloads/Biegung_5.png",
                imageAlt: "Skizze Auslegerarm mit Belastung F",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Biegefließgrenze &sigma;<sub>bF</sub>:</b><br>
&sigma;<sub>bF</sub> = 1,2 · R<sub>e</sub> = 1,2 · 235 N/mm² = <b>282 N/mm²</b><br><br>
<b>b) Zulässige Biegespannung &sigma;<sub>b,zul</sub>:</b><br>
&sigma;<sub>b,zul</sub> = &sigma;<sub>bF</sub> / &nu; = 282 N/mm² / 1,6 = <b>176,25 N/mm²</b><br><br>
<b>c) Maximale Nutzlast F (hochkant, h = 120 mm, b = 20 mm):</b><br>
W<sub>c</sub> = (20 mm · (120 mm)²) / 6 = 48.000 mm³<br>
F<sub>c</sub> = (&sigma;<sub>b,zul</sub> · W<sub>c</sub>) / L = (176,25 N/mm² · 48.000 mm³) / 800 mm = <b>10.575 N = 10,58 kN</b><br><br>
<b>d) Maximale Nutzlast F (flach, h = 20 mm, b = 120 mm):</b><br>
W<sub>d</sub> = (120 mm · (20 mm)²) / 6 = 8.000 mm³<br>
F<sub>d</sub> = (&sigma;<sub>b,zul</sub> · W<sub>d</sub>) / L = (176,25 N/mm² · 8.000 mm³) / 800 mm = <b>1.762,5 N = 1,76 kN</b><br><br>
<b>e) Durchbiegung f (hochkant):</b><br>
I<sub>c</sub> = (20 mm · (120 mm)³) / 12 = 2.880.000 mm⁴<br>
f = (F<sub>c</sub> · L³) / (3 · E · I<sub>c</sub>) = (10.575 N · (800 mm)³) / (3 · 210.000 N/mm² · 2.880.000 mm⁴) = <b>2,98 mm</b>`
            },

            {
                name: "I-Profil (Kragträger)",
                prompt: `Ein einseitig eingespanntes Stahlprofil IPE 240 (DIN 1025-5) ragt L&nbsp;=&nbsp;1500&nbsp;mm aus einer Wand heraus.
                Für den verwendeten Stahl gilt eine zulässige Biegespannung von &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;140&nbsp;N/mm².<br><br>
<b>Berechne die maximal zulässige Kraft F am freien Ende, wenn das Profil:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;hochkant belastet wird (Biegung um die x-x Achse),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;flach / quer belastet wird (Biegung um die y-y Achse).</li>
</ul>`,
                image: "downloads/Biegung_6.png",
                imageAlt: "Skizze I-Profil als Kragträger",
                solution: `<b>Lösungsweg:</b><br>
<b>Profilwerte IPE 240:</b> W<sub>x</sub> = 324 cm³ = 324.000 mm³, W<sub>y</sub> = 47,3 cm³ = 47.300 mm³<br><br>
<b>a) Hochkant (Biegung um x-x Achse):</b><br>
F<sub>a</sub> = (&sigma;<sub>b,zul</sub> · W<sub>x</sub>) / L = (140 N/mm² · 324.000 mm³) / 1.500 mm = <b>30.240 N = 30,24 kN</b><br><br>
<b>b) Flach / quer (Biegung um y-y Achse):</b><br>
F<sub>b</sub> = (&sigma;<sub>b,zul</sub> · W<sub>y</sub>) / L = (140 N/mm² · 47.300 mm³) / 1.500 mm = <b>4.414,67 N ≈ 4,41 kN</b>`
            },


            {
                name: "Dimensionierung eines T-Profil-Kragträgers",
                prompt: `Ein Auslegerarm aus gleichschenkligem T-Profil (EN 10055) mit einer wirksamen Länge von L&nbsp;=&nbsp;750&nbsp;mm wird am freien Ende durch eine statische Einzellast F&nbsp;=&nbsp;6,5&nbsp;kN beansprucht.<br>
Die zulässige Biegespannung des Stahls beträgt &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;140&nbsp;N/mm².<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;das maximal auftretende Biegemoment M<sub>b,max</sub> in Nm (bzw. Nmm),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;das erforderlich minimale Widerstandsmoment W<sub>x,erf</sub> in cm³,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die kleinste zulässige T-Profilgröße (Bezeichnung) laut Tabellenbuch.</li>
</ul>`,
                image: "downloads/Biegung_7.png",
                imageAlt: "Skizze T-Profil als Kragträger",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Maximales Biegemoment M<sub>b,max</sub>:</b><br>
M<sub>b,max</sub> = F · L = 6.500 N · 750 mm = <b>4.875.000 Nmm = 4.875 Nm</b><br><br>
<b>b) Erforderliches Widerstandsmoment W<sub>x,erf</sub>:</b><br>
W<sub>x,erf</sub> = M<sub>b,max</sub> / &sigma;<sub>b,zul</sub> = 4.875.000 Nmm / 140 N/mm² = 34.821,43 mm³ = <b>34,82 cm³</b><br><br>
<b>c) Kleinste zulässige Profilgröße (EN 10055):</b><br>
Gewählt: <b>T 100 (100 x 100 x 11 mm)</b> mit W<sub>x</sub> = 38,2 cm³ (da W<sub>x</sub> &ge; 34,82 cm³)`
            },



            {
                name: "Dimensionierung einer feststehenden Achse",
                prompt: `Eine auf zwei Lagern ruhende Achse wird in der Mitte durch eine vertikale Einzelkraft F&nbsp;=&nbsp;4.200&nbsp;N belastet. Der Stützenabstand beträgt L&nbsp;=&nbsp;1.200&nbsp;mm.<br>
Die zulässige Biegespannung für das Achsenmaterial beträgt &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;85&nbsp;N/mm².<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;das maximal auftretende Biegemoment M<sub>b,max</sub> in Nm (bzw. Nmm),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;das erforderlich minimale Widerstandsmoment W<sub>erf</sub> in mm³,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;den erforderlichen Mindestdurchmesser d der Achse in mm (Rundquerschnitt).</li>
</ul>`,
                image: "downloads/Biegung_8.png",
                imageAlt: "Skizze einer auf zwei Stützen gelagerten Achse",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Maximales Biegemoment M<sub>b,max</sub>:</b><br>
M<sub>b,max</sub> = (F · L) / 4 = (4.200 N · 1.200 mm) / 4 = <b>1.260.000 Nmm = 1.260 Nm</b><br><br>
<b>b) Erforderliches Widerstandsmoment W<sub>erf</sub>:</b><br>
W<sub>erf</sub> = M<sub>b,max</sub> / &sigma;<sub>b,zul</sub> = 1.260.000 Nmm / 85 N/mm² = <b>14.823,53 mm³</b><br><br>
<b>c) Erforderlicher Mindestdurchmesser d:</b><br>
d = ³&radic;((32 · W<sub>erf</sub>) / &pi;) = ³&radic;((32 · 14.823,53 mm³) / &pi;) = <b>53,25 mm</b>`
            },



            {
                name: "Zulässige Belastung und Durchbiegung eines Wellenendes",
                prompt: `Ein aus einem Lager herausragender Wellenzapfen aus Stahl mit einem Durchmesser von d&nbsp;=&nbsp;45&nbsp;mm wird im Abstand von l&nbsp;=&nbsp;220&nbsp;mm mit einer Querkraft F belastet.<br>
Die zulässige Biegespannung des Wellenmaterials von &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;105&nbsp;N/mm² darf nicht überschritten werden. Der Elastizitätsmodul beträgt E&nbsp;=&nbsp;210.000&nbsp;N/mm².<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die maximal zulässige Kraft F in kN,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die elastische Durchbiegung f am Kraftangriffspunkt in mm unter Ausnutzung dieser vollen Kraft F.</li>
</ul>`,
                image: "downloads/Biegung_9.png",
                imageAlt: "Skizze eines belasteten Wellenendes aus einem Lager",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Maximal zulässige Kraft F:</b><br>
W = (&pi; · d³) / 32 = (&pi; · (45 mm)³) / 32 = 8.946,18 mm³<br>
F = (&sigma;<sub>b,zul</sub> · W) / l = (105 N/mm² · 8.946,18 mm³) / 220 mm = <b>4.269,77 N ≈ 4,27 kN</b><br><br>
<b>b) Elastische Durchbiegung f:</b><br>
I = (&pi; · d⁴) / 64 = (&pi; · (45 mm)⁴) / 64 = 201.288,96 mm⁴<br>
f = (F · l³) / (3 · E · I) = (4.269,77 N · (220 mm)³) / (3 · 210.000 N/mm² · 201.288,96 mm⁴) = <b>0,36 mm</b>`
            },



            {
                name: "Dimensionierung eines auskragenden Wellenzapfens",
                prompt: `Ein aus einem Lager herausragender Wellenzapfen aus Stahl wird im Abstand von l&nbsp;=&nbsp;160&nbsp;mm mit einer Querkraft F&nbsp;=&nbsp;5,8&nbsp;kN belastet.<br>
Die zulässige Biegespannung des Wellenmaterials beträgt &sigma;<sub>b,zul</sub>&nbsp;=&nbsp;95&nbsp;N/mm².<br>
Hinweis - Der Elastizitätsmodul für Stahl ist im Tabellenbuch zu finden.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;das maximal auftretende Biegemoment M<sub>b,max</sub> in Nm (bzw. Nmm),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;das erforderlich minimale Widerstandsmoment W<sub>erf</sub> in mm³,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;den erforderlichen Mindestdurchmesser d der Welle in mm (Rundquerschnitt),</li>
  <li style="text-indent: -20px; padding-left: 20px;">d)&nbsp;&nbsp;die elastische Durchbiegung f am Kraftangriffspunkt in mm für den berechneten Mindestdurchmesser.</li>
</ul>`,
                image: "downloads/Biegung_10.png",
                imageAlt: "Skizze zur Dimensionierung eines Wellenzapfens",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Maximales Biegemoment M<sub>b,max</sub>:</b><br>
M<sub>b,max</sub> = F · l = 5.800 N · 160 mm = <b>928.000 Nmm = 928 Nm</b><br><br>
<b>b) Erforderliches Widerstandsmoment W<sub>erf</sub>:</b><br>
W<sub>erf</sub> = M<sub>b,max</sub> / &sigma;<sub>b,zul</sub> = 928.000 Nmm / 95 N/mm² = <b>9.768,42 mm³</b><br><br>
<b>c) Erforderlicher Mindestdurchmesser d:</b><br>
d = ³&radic;((32 · W<sub>erf</sub>) / &pi;) = ³&radic;((32 · 9.768,42 mm³) / &pi;) = <b>46,34 mm</b><br><br>
<b>d) Elastische Durchbiegung f (mit d = 46,34 mm):</b><br>
I = (&pi; · d⁴) / 64 = (&pi; · (46,34 mm)⁴) / 64 = 225.885,25 mm⁴<br>
f = (F · l³) / (3 · E · I) = (5.800 N · (160 mm)³) / (3 · 210.000 N/mm² · 225.885,25 mm⁴) = <b>0,17 mm</b>`
            },


            {
                name: "Träger auf zwei Stützen, aussermittige Last",
                prompt: `Ein frei aufliegender Stahl-Träger auf zwei Stützen (Belastungsfall 1 / ruhend) mit flachem Rechteckquerschnitt (Breite b&nbsp;=&nbsp;30&nbsp;mm, Höhe h&nbsp;=&nbsp;50&nbsp;mm) und einer Stützweite von L&nbsp;=&nbsp;1200&nbsp;mm wird durch eine aussermittige Einzellast F=3200&nbsp;N belastet.<br>
Die Kraft greift im Abstand a&nbsp;=&nbsp;400&nbsp;mm vom linken Lager an.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die maximale Biegespannung &sigma;<sub>b</sub> in N/mm²,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die Durchbiegung f am Kraftangriffspunkt in mm bei einer Belastung von F&nbsp;=&nbsp;3200&nbsp;N.</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die Biegespannung &sigma;<sub>b</sub> in N/mm², wenn die Kraft von F&nbsp;=&nbsp;3200&nbsp;N auf F&nbsp;=&nbsp;8900&nbsp;N erhöht wird.</li>

  </ul>`,
                image: "downloads/Biegung_11.png",
                imageAlt: "Skizze Träger auf zwei Stützen mit aussermittiger Last",
                solution: `<b>Lösungsweg:</b><br>
<b>Querschnittswerte:</b> W = (30 · 50²) / 6 = 12.500 mm³, I = (30 · 50³) / 12 = 312.500 mm⁴<br>
<b>Abstände:</b> a = 400 mm, b = L - a = 800 mm<br><br>
<b>a) Maximale Biegespannung &sigma;<sub>b</sub> (F = 3.200 N):</b><br>
M<sub>b,max</sub> = (F · a · b) / L = (3.200 N · 400 mm · 800 mm) / 1.200 mm = 853.333,33 Nmm<br>
&sigma;<sub>b</sub> = M<sub>b,max</sub> / W = 853.333,33 Nmm / 12.500 mm³ = <b>68,27 N/mm²</b><br><br>
<b>b) Durchbiegung f am Kraftangriffspunkt:</b><br>
f = (F · a² · b²) / (3 · E · I · L) = (3.200 N · (400 mm)² · (800 mm)²) / (3 · 210.000 N/mm² · 312.500 mm⁴ · 1.200 mm) = <b>1,39 mm</b><br><br>
<b>c) Biegespannung &sigma;<sub>b</sub> bei Kraft F = 8.900 N:</b><br>
M<sub>b,max</sub> = (8.900 N · 400 mm · 800 mm) / 1.200 mm = 2.373.333,33 Nmm<br>
&sigma;<sub>b</sub> = M<sub>b,max</sub> / W = 2.373.333,33 Nmm / 12.500 mm³ = <b>189,87 N/mm²</b>`
            }
        ]
    },
    //#endregion

    //#region Arbeit
    {
        id: "arbeit",
        title: "Arbeit",
        description: "Aufgaben zu Arbeit und Energieumwandlungen.",
        tasks: [
            {
                name: "Kisten",
                prompt: `Ein Gabelstapler hebt eine Palette mit Kisten der Gesamtmasse m&nbsp;=&nbsp;450&nbsp;kg auf eine Höhe von h&nbsp;=&nbsp;2,5&nbsp;m.<br>
                <b>Berechne</b> die verrichtete Hubarbeit.`,
                solution: `<b>Lösungsweg:</b><br>
W = m · g · h<br>
W = 450 kg · 9,81 m/s² · 2,5 m = <b>11.036,25 Nm ≈ 11,04 kNm</b>`
            },
            {
                name: "Motorblock",
                prompt: `Ein Werkstattkran hebt einen Motorblock mit einer Masse von 0,35&nbsp;t (Tonnen) um 80&nbsp;cm nach oben.<br>
                <b>Berechne</b> die dafür notwendige Hubarbeit.`,
                solution: `<b>Lösungsweg:</b><br>
W = m · g · h<br>
W = 350 kg · 9,81 m/s² · 0,8 m = <b>2.746,8 Nm ≈ 2,75 kNm</b>`
            },
            {
                name: "Amboss",
                prompt: `In einer Ausbildungswerkstatt für Metallbau wird ein alter Amboss mit einer Masse von 75&nbsp;kg umplatziert.<br>
                Dabei wird der Amboss zuerst 2,5&nbsp;Meter weit über den glatten Betonboden der Werkstatt geschoben (Reibungszahl µ&nbsp;=&nbsp;0,25).
                Anschließend heben zwei Auszubildende den Amboss 0,8&nbsp;Meter hoch auf einen massiven Holzklotz.<br>
                <b>Berechne</b> die gesamte Arbeit in kNm!`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Reibarbeit W<sub>R</sub>:</b><br>
F<sub>R</sub> = &mu; · m · g = 0,25 · 75 kg · 9,81 m/s² = 183,94 N<br>
W<sub>R</sub> = F<sub>R</sub> · s = 183,94 N · 2,5 m = 459,84 Nm<br><br>
<b>2. Hubarbeit W<sub>H</sub>:</b><br>
W<sub>H</sub> = m · g · h = 75 kg · 9,81 m/s² · 0,8 m = 588,60 Nm<br><br>
<b>3. Gesamtarbeit W<sub>ges</sub>:</b><br>
W<sub>ges</sub> = W<sub>R</sub> + W<sub>H</sub> = 459,84 Nm + 588,60 Nm = 1.048,44 Nm = <b>1,05 kNm</b>`
            }
        ]
    },
    //#endregion

    //#region Arbeit & Leistung
    {
        id: "arbeit-leistung",
        title: "Arbeit + Leistung",
        description: "Übungen zu Leistung und ihren Anwendungen.",
        tasks: [
            {
                name: "Bauaufzug",
                prompt: `Ein Bauaufzug befördert Baumaterial mit einer Gewichtskraft von 3500&nbsp;N in den 3. Stock (h&nbsp;=&nbsp;10,5&nbsp;m). 
                Der Vorgang dauert genau 15&nbsp;Sekunden.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Die verrichtete Hubarbeit.</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Die mechanische Leistung, die der Motor des Aufzugs dabei mindestens aufbringen muss.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Verrichtete Hubarbeit W:</b><br>
W = F<sub>G</sub> · h = 3.500 N · 10,5 m = <b>36.750 Nm = 36,75 kNm</b><br><br>
<b>b) Mechanische Leistung P:</b><br>
P = W / t = 36.750 Nm / 15 s = <b>2.450 W = 2,45 kW</b>`
            },

            {
                name: "Arbeit und Leistung beim Lastenkran",
                prompt: `Ein Werkstattkran hebt eine Motorblock-Baugruppe mit einer Gewichtskraft von F<sub>G</sub>&nbsp;=&nbsp;4200&nbsp;N um die Höhe h&nbsp;=&nbsp;2,5&nbsp;m an.<br>Der Hubvorgang dauert genau t&nbsp;=&nbsp;12&nbsp;Sekunden.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die verrichtete Hubarbeit in kJ,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die mechanische Leistung P, die der Motor des Krans dabei mindestens aufbringen muss in W.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Verrichtete Hubarbeit W in kJ:</b><br>
W = F<sub>G</sub> · h = 4.200 N · 2,5 m = 10.500 Nm = <b>10,5 kNm</b><br><br>
<b>b) Mechanische Leistung P in W:</b><br>
P = W / t = 10.500 Nm / 12 s = <b>875 W</b>`

            },

            {
                name: "Zeitdauer beim Güteraufzug",
                prompt: `Ein Güteraufzug mit einer Motorleistung von P&nbsp;=&nbsp;5,5&nbsp;kW soll eine Last mit der
                Gewichtskraft F<sub>G</sub>&nbsp;=&nbsp;8800&nbsp;N um die Höhe h&nbsp;=&nbsp;15&nbsp;m anheben.<br>
<b>Berechne</b> die benötigte Zeit t für diesen Hubvorgang in Sekunden.`,
                image: "downloads/Güteraufzug.png",
                imageAlt: "Aufgabenstellung Berechnung der Zeit bei Arbeit und Leistung",
                solution: `<b>Lösungsweg:</b><br>
<b>1. Verrichtete Hubarbeit W:</b><br>
W = F<sub>G</sub> · h = 8.800 N · 15 m = 132.000 Nm<br><br>
<b>2. Benötigte Zeit t:</b><br>
t = W / P = 132.000 Nm / 5.500 W = <b>24 s</b>`
            },

            {
                name: "Maximale Masse bei einem Kran",
                prompt: `Ein Baukran besitzt einen Elektromotor mit einer Leistung von P&nbsp;=&nbsp;15&nbsp;kW.<br>Bei einem Hubvorgang, der genau t&nbsp;=&nbsp;8&nbsp;Sekunden dauert, wird eine Last um h&nbsp;=&nbsp;12&nbsp;m angehoben.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die vom Kran verrichtete Hubarbeit W in kJ,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die maximal gehobene Masse m in kg (mit g&nbsp;=&nbsp;9,81&nbsp;m/s²).</li>
</ul>`,
                image: "downloads/Masse-Kran.png",
                imageAlt: "Aufgabenstellung Berechnen der Masse bei Arbeit und Leistung",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Verrichtete Hubarbeit W in kJ:</b><br>
W = P · t = 15.000 W · 8 s = 120.000 Nm = <b>120 kNm</b><br><br>
<b>b) Maximal gehobene Masse m in kg:</b><br>
m = W / (g · h) = 120.000 Nm / (9,81 m/s² · 12 m) = <b>1.019,37 kg</b>`
            }



        ]
    },
    //#endregion











    //#region Arbeit, Leistung, Wirkungsgrad
    {
        id: "arbeit-leistung-wirkungsgrad",
        title: "Arbeit + Leistung + Wirkungsgrad",
        description: "Zusammenhängende Aufgaben zu Arbeit, Leistung und Wirkungsgrad.",
        tasks: [
            {
                name: "E-Seilzug",
                prompt: `Ein elektrischer Seilzug hebt einen Balken (m&nbsp;=&nbsp;120&nbsp;kg) um 6&nbsp;m an.
                Der Elektromotor nimmt dabei eine elektrische Energie von insgesamt 9200&nbsp;J auf.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Die tatsächlich verrichtete Hubarbeit (Nutzeffekt).</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Den Wirkungsgrad der Anlage in Prozent.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Tatsächlich verrichtete Hubarbeit W<sub>Nutzen</sub>:</b><br>
W<sub>Nutzen</sub> = m · g · h = 120 kg · 9,81 m/s² · 6 m = <b>7.063,20 Nm ≈ 7,06 kNm</b><br><br>
<b>b) Wirkungsgrad &eta; in Prozent:</b><br>
&eta; = (W<sub>Nutzen</sub> / E<sub>zu</sub>) · 100% = (7.063,20 Nm / 9.200 Nm) · 100% = <b>76,77%</b>`
            },



            {
                name: "Werkstattkran",
                prompt: `Ein elektrischer Werkstattkran hebt ein Getriebe (F<sub>G</sub>&nbsp;=&nbsp;2500&nbsp;N) in einer Zeit von t&nbsp;=&nbsp;8&nbsp;s um h&nbsp;=&nbsp;2&nbsp;m nach oben. Der Motor nimmt während dieses Vorgangs eine elektrische Leistung von P<sub>zu</sub>&nbsp;=&nbsp;750&nbsp;W auf.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Die verrichtete Hubarbeit.</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Die abgegebene mechanische Leistung (P<sub>ab</sub>) während des Hebens.</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;Den Wirkungsgrad (η) des Krans.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Verrichtete Hubarbeit W:</b><br>
W = F<sub>G</sub> · h = 2.500 N · 2 m = <b>5.000 Nm = 5 kNm</b><br><br>
<b>b) Abgegebene mechanische Leistung P<sub>ab</sub>:</b><br>
P<sub>ab</sub> = W / t = 5.000 Nm / 8 s = <b>625 W</b><br><br>
<b>c) Wirkungsgrad &eta; in Prozent:</b><br>
&eta; = (P<sub>ab</sub> / P<sub>zu</sub>) · 100% = (625 W / 750 W) · 100% = <b>83,33%</b>`
            },



            {
                name: "Bauarbeiten",
                prompt: `Ein Bauaufzug transportiert Säcke mit Fliesenkleber (Gesamtmasse m&nbsp;=&nbsp;400&nbsp;kg) in eine Höhe von h&nbsp;=&nbsp;12&nbsp;m. Der Hubvorgang dauert eine halbe Minute (t&nbsp;=&nbsp;30&nbsp;s). Die Steckdose liefert dabei eine konstante elektrische Leistung von P<sub>zu</sub>&nbsp;=&nbsp;2,1&nbsp;kW.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Die notwendige Hubarbeit.</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Die mechanische Nutzleistung des Aufzugs.</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;Den Wirkungsgrad (η) der Anlage.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Notwendige Hubarbeit W:</b><br>
W = m · g · h = 400 kg · 9,81 m/s² · 12 m = <b>47.088 Nm = 47,09 kNm</b><br><br>
<b>b) Mechanische Nutzleistung P<sub>Nutz</sub>:</b><br>
P<sub>Nutz</sub> = W / t = 47.088 Nm / 30 s = <b>1.569,6 W ≈ 1,57 kW</b><br><br>
<b>c) Wirkungsgrad &eta; in Prozent:</b><br>
&eta; = (P<sub>Nutz</sub> / P<sub>zu</sub>) · 100% = (1.569,6 W / 2.100 W) · 100% = <b>74,74%</b>`
            },


            {
                name: "Kreiselpumpe",
                prompt: `Eine Kreiselpumpe hat eine Nutzleistung von 0,18&nbsp;kW. Die Förderhöhe beträgt 21&nbsp;m.<br>
                <b>Berechne</b> wie viele Liter Wasser in einer Stunde hochgepumpt werden können?<br><i>(Hinweis: 1&nbsp;Liter Wasser wiegt 1&nbsp;kg)</i>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Verrichtete Nutzarbeit W in 1 Stunde (3.600 s):</b><br>
W = P<sub>Nutz</sub> · t = 180 W · 3.600 s = 648.000 Nm<br><br>
<b>2. Geförderte Masse m:</b><br>
m = W / (g · h) = 648.000 Nm / (9,81 m/s² · 21 m) = 3.145,48 kg<br><br>
<b>3. Fördervolumen V:</b><br>
Da 1 kg Wasser 1 Liter entspricht: <b>3.145,48 Liter/h</b> (ca. 3,15 m³/h)`
            },
            {
                name: "Elektromotor",
                prompt: `Ein Motor mit P<sub>zu</sub>&nbsp;=&nbsp;2,3&nbsp;kW und n&nbsp;=&nbsp;1450&nbsp;min⁻¹ treibt eine Seilscheibe mit &Oslash;&nbsp;180&nbsp;mm an.<br>
<b>Berechne</b> die mögliche Masse m, die von der Seilscheibe aufgezogen werden kann.<br>(η<sub>Motor</sub>&nbsp;=&nbsp;0,8; η<sub>Seil</sub>&nbsp;=&nbsp;0,9)`,
                image: "downloads/Motor-Seiltrieb 1.png",
                imageAlt: "Skizze zur Elektromotor",
                solution: `<b>Lösungsweg:</b><br>
<b>1. Gesamtwirkungsgrad &eta;<sub>ges</sub> und Nutzeffekt P<sub>ab</sub>:</b><br>
&eta;<sub>ges</sub> = &eta;<sub>Motor</sub> · &eta;<sub>Seil</sub> = 0,8 · 0,9 = 0,72<br>
P<sub>ab</sub> = P<sub>zu</sub> · &eta;<sub>ges</sub> = 2.300 W · 0,72 = 1.656 W<br><br>
<b>2. Umfangsgeschwindigkeit v:</b><br>
v = &pi; · d · n = &pi; · 0,18 m · (1.450 / 60 s⁻¹) = 13,67 m/s<br><br>
<b>3. Hubkraft F<sub>g</sub> und Masse m:</b><br>
F<sub>g</sub> = P<sub>ab</sub> / v = 1.656 W / 13,67 m/s = 121,18 N<br>
m = F<sub>g</sub> / g = 121,18 N / 9,81 m/s² = <b>12,35 kg</b>`
            }
        ]
    },
    //#endregion










    //#region Energie (Potentielle & Kinetische)
    {
        id: "energie-pot-kin",
        title: "Energie (Pot. & Kin.)",
        description: "Themen zu potentieller und kinetischer Energie.",
        tasks: [
            {
                name: "Wasserfass (Potentielle Energie)",
                prompt: `Ein Gärtner nutzt ein erhöht aufgestelltes Wasserfass (&Oslash;&nbsp;80&nbsp;cm, Füllhöhe 1,2&nbsp;m) im Garten als Wasserspeicher zum Gießen. Das Fass steht auf einem Gerüst, sodass der Wasserspiegel genau h&nbsp;=&nbsp;3&nbsp;m über dem Gartenboden liegt.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Wie viel Liter bzw. Kilogramm Wasser passen in das volle Fass?</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Wie groß ist die im Wasser gespeicherte potenzielle Energie in Joule J und Wattstunden Wh?</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;Wie lange (in Minuten) könnte eine elektrische Gartenbeleuchtung mit einer Leistung von 15&nbsp;W mit dieser gespeicherten Energie theoretisch leuchten?</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Wassermenge und Masse:</b><br>
V = &pi; · r² · h<sub>Fass</sub> = &pi; · (0,4 m)² · 1,2 m = 0,6032 m³<br>
<b>V = 603,19 Liter</b> &rArr; <b>m = 603,19 kg</b><br><br>
<b>b) Potenzielle Energie (Schwerpunkthöhe h<sub>S</sub> = 1,8 m + 0,6 m = 2,4 m):</b><br>
E<sub>pot</sub> = m · g · h<sub>S</sub> = 603,19 kg · 9,81 m/s² · 2,4 m = <b>14.201,43 Nm ≈ 14,20 kNm</b><br>
E<sub>pot</sub> in Wh = 14.201,43 Nm / 3.600 = <b>3,94 Wh</b><br><br>
<b>c) Leuchtdauer der 15 W Beleuchtung:</b><br>
t = E<sub>pot</sub> / P = 3,94 Wh / 15 W = 0,263 h = <b>15,78 Minuten</b>`
            },


            {
                name: "Riemenfallhammer",
                prompt: `Der Schlagbär (m&nbsp;=&nbsp;0,35&nbsp;t) eines Riemenfallhammers schlägt mit einer Aufprallgeschwindigkeit von 24&nbsp;km/h auf das Werkstück auf und verformt dabei das Schmiedestück um 8&nbsp;mm.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;Die kinetische Energie des Fallhammers genau im Augenblick des Aufpralls.</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;Die durchschnittliche Verformungskraft, die während des 8&nbsp;mm langen Verformungsweges auf das Schmiedestück wirkt.</li>
</ul>`,
                image: "downloads/Riemenfallhammer KI-Bild.png",
                imageAlt: "Skizze zum Riemenfallhammer",
                solution: `<b>Lösungsweg:</b><br>
<b>1. Umrechnungen:</b><br>
m = 350 kg, v = 24 / 3,6 = 6,67 m/s, s = 0,008 m<br><br>
<b>a) Kinetische Energie E<sub>kin</sub>:</b><br>
E<sub>kin</sub> = ½ · m · v² = 0,5 · 350 kg · (6,67 m/s)² = <b>7.777,78 J ≈ 7,78 kJ</b><br><br>
<b>b) Durchschnittliche Verformungskraft F<sub>m</sub>:</b><br>
F<sub>m</sub> = E<sub>kin</sub> / s = 7.777,78 J / 0,008 m = <b>972.222,22 N ≈ 972,22 kN</b>`
            },


            {
                name: "Rasenmäher",
                prompt: `Beim Rasenmähen erfasst das rotierende Messer eines Benzin-Rasenmähers einen kleinen Kieselstein.
                Die Messerspitze bewegt sich mit einer Geschwindigkeit von (v&nbsp;=&nbsp;70&nbsp;m/s).
                Der Stein mit einer Masse von m&nbsp;=&nbsp;25&nbsp;g wird mit dieser Geschwindigkeit weggeschleudert.
                Er fliegt unglücklicherweise gegen den Fuß des Gärtners.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;wie groß ist die kinetische Energie des fliegenden Kieselsteins?</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;wie groß ist die mittlere Bremskraft die Fuß aufbringen muss, wenn das Teilchen innerhalb von 2&nbsp;mm durch die Haut abgebremst wird? (Luftwiderstand vernachlässigen)</li>
</ul>`,
                image: "downloads/Rasenmäher.png",
                imageAlt: "Skizze zum Rasenmäher",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Kinetische Energie E<sub>kin</sub>:</b><br>
E<sub>kin</sub> = ½ · m · v² = 0,5 · 0,025 kg · (70 m/s)² = <b>61,25 J</b><br><br>
<b>b) Mittlere Bremskraft F<sub>m</sub>:</b><br>
F<sub>m</sub> = E<sub>kin</sub> / s = 61,25 J / 0,002 m = <b>30.625 N ≈ 30,63 kN</b>`
            }
        ]
    },
    //#endregion












    //#region Gemischte Aufgaben (Arbeit, Leistung, Wirkungsgrad)
    {
        id: "Gemischte Aufgaben (Arbeit, Leistung, Wirkungsgrad)",
        title: "Gemischte Aufgaben<br>(W, P, η)",
        description: "Gemischte Aufgaben zu Arbeit, Leistung, Wirkungsgrad",
        tasks: [
            {
                name: "Kreissäge",
                prompt: `Eine Metall-Kreissäge mit einem Kreissägeblattdurchmesser &Oslash;&nbsp;=&nbsp;560&nbsp;mm dreht mit n&nbsp;=&nbsp;25&nbsp;min⁻¹.<br>Der Antriebsmotor entnimmt dem Netz eine Leistung von 4,1&nbsp;kW.<br><br>
<b>Berechne von einem Gesamtwirkungsgrad von 0,74.</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die abgegebene Leistung am Sägeblatt,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;das Drehmoment am Sägeblatt,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die Kraft F am Zahn des Sägeblattes?</li>
</ul>`,
                image: "downloads/Kaltkreissäge.png",
                imageAlt: "Skizze zur Kaltkreissäge",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Abgegebene Leistung P<sub>ab</sub>:</b><br>
P<sub>ab</sub> = P<sub>zu</sub> · &eta;<sub>ges</sub> = 4.100 W · 0,74 = <b>3.034 W = 3,034 kW</b><br><br>
<b>b) Drehmoment M am Sägeblatt:</b><br>
M = P<sub>ab</sub> / (2 · &pi; · n) = 3.034 W / (2 · &pi; · (25/60 s⁻¹)) = <b>1.158,90 Nm</b><br><br>
<b>c) Kraft F am Zahn des Sägeblattes:</b><br>
F = M / r = 1.158,90 Nm / 0,28 m = <b>4.138,93 N ≈ 4,14 kN</b>`
            },


            {
                name: "Wassertank",
                prompt: `Eine elektrische Gartenpumpe soll einen höher gelegenen Wassertank befüllen. Sie pumpt in einer Zeit von t&nbsp;=&nbsp;5&nbsp;Minuten ein Volumen von V&nbsp;=&nbsp;900&nbsp;Litern Wasser um h&nbsp;=&nbsp;8&nbsp;m nach oben.<br>
                Der Elektromotor hat eine Leistungsaufnahme von P<sub>zu</sub>&nbsp;=&nbsp;450&nbsp;W.<br><i>(Hinweis: 1&nbsp;Liter Wasser wiegt 1&nbsp;kg)</i>.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die verrichtete Hubarbeit am Wasser.</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die mechanische Nutzleistung der Pumpe.</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;den Wirkungsgrad der Pumpe.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Verrichtete Hubarbeit W:</b><br>
W = m · g · h = 900 kg · 9,81 m/s² · 8 m = <b>70.632 J = 70,63 kJ</b><br><br>
<b>b) Mechanische Nutzleistung P<sub>Nutz</sub>:</b><br>
P<sub>Nutz</sub> = W / t = 70.632 J / 300 s = <b>235,44 W</b><br><br>
<b>c) Wirkungsgrad &eta; in Prozent:</b><br>
&eta; = (P<sub>Nutz</sub> / P<sub>zu</sub>) · 100% = (235,44 W / 450 W) · 100% = <b>52,32%</b>`
            },



            {
                name: "Hubarbeit",
                prompt: `Ein zylindrisches Werkstück mit &Oslash;&nbsp;520&nbsp;mm und 1,2&nbsp;m Länge aus Gusseisen (&rho;&nbsp;=&nbsp;7,25&nbsp;kg/dm³) soll mit einem Stapler 1,2&nbsp;m gehoben werden.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die Hubarbeit in kNm,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die abgegebene Hubleistung des Staplers, wenn er dazu 6&nbsp;Sekunden benötigt,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die benötigte Antriebsleistung der Hydraulikpumpe bei einem Wirkungsgrad von 75%.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Masse des Werkstücks m:</b><br>
V = &pi; · r² · l = &pi; · (2,6 dm)² · 12 dm = 254,91 dm³<br>
m = V · &rho; = 254,91 dm³ · 7,25 kg/dm³ = 1.848,07 kg<br><br>
<b>a) Hubarbeit W in kNm:</b><br>
W = m · g · h = 1.848,07 kg · 9,81 m/s² · 1,2 m = 21.755,4 J = <b>21,76 kNm</b><br><br>
<b>b) Abgegebene Hubleistung P<sub>ab</sub>:</b><br>
P<sub>ab</sub> = W / t = 21.755,4 J / 6 s = <b>3.625,9 W ≈ 3,63 kW</b><br><br>
<b>c) Benötigte Antriebsleistung P<sub>zu</sub>:</b><br>
P<sub>zu</sub> = P<sub>ab</sub> / &eta; = 3.625,9 W / 0,75 = <b>4.834,53 W ≈ 4,83 kW</b>`
            },


            {
                name: "Stahlwalze",
                prompt: `In der Instandhaltung einer Walzenstraße muss eine massive, zylindrische Stahlwelle (&Oslash;&nbsp;=&nbsp;380&nbsp;mm, Länge&nbsp;=&nbsp;2,4&nbsp;m) aus unlegiertem Baustahl (&rho;&nbsp;=&nbsp;7,85&nbsp;kg/dm³) mithilfe eines Hallenkrans um 1,8&nbsp;m vertikal angehoben werden, um sie in die Schleifmaschine einzusetzen.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die aufzuwendende Hubarbeit in kNm,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die abgegebene Hubleistung des Krans, wenn der Hebevorgang genau 9&nbsp;Sekunden dauert,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die benötigte Antriebsleistung des Elektromotors am Kran, wenn der Gesamtwirkungsgrad des Seilhubwerks bei &eta;&nbsp;=&nbsp;82&nbsp;% liegt.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Masse der Stahlwelle m:</b><br>
V = &pi; · r² · l = &pi; · (1,9 dm)² · 24 dm = 272,18 dm³<br>
m = V · &rho; = 272,18 dm³ · 7,85 kg/dm³ = 2.136,64 kg<br><br>
<b>a) Hubarbeit W in kNm:</b><br>
W = m · g · h = 2.136,64 kg · 9,81 m/s² · 1,8 m = 37.728,8 J = <b>37,73 kNm</b><br><br>
<b>b) Abgegebene Hubleistung P<sub>ab</sub>:</b><br>
P<sub>ab</sub> = W / t = 37.728,8 J / 9 s = <b>4.192,09 W ≈ 4,19 kW</b><br><br>
<b>c) Benötigte Antriebsleistung P<sub>zu</sub>:</b><br>
P<sub>zu</sub> = P<sub>ab</sub> / &eta; = 4.192,09 W / 0,82 = <b>5.112,30 W ≈ 5,11 kW</b>`
            },



            {
                name: "Fundament",
                prompt: `Für die Aufstellung einer großen Luft-Wasser-Wärmepumpe im Außenbereich wird ein zylindrisches Fundament aus Beton (&rho;&nbsp;=&nbsp;2,4&nbsp;kg/dm³) gegossen. Das Fundament hat einen Durchmesser von &Oslash;&nbsp;=&nbsp;800&nbsp;mm und eine Höhe von 1,0&nbsp;m. Es wird mit einem Werkstattkran um 1,5&nbsp;m angehoben, um es an seinen Platz zu setzen.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die aufzuwendende Hubarbeit in kNm,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die abgegebene Hubleistung des Krans, wenn der Vorgang 8&nbsp;Sekunden dauert,</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;die benötigte Antriebsleistung des Krans bei einem Wirkungsgrad von &eta;&nbsp;=&nbsp;80&nbsp;%.</li>
  <li style="text-indent: -20px; padding-left: 20px; color: #94a3b8; text-decoration: line-through;">d)&nbsp;&nbsp;Der Kran wird an das dreiphasige Drehstromnetz (U&nbsp;=&nbsp;400&nbsp;V) angeschlossen. Der Motor hat einen Leistungsfaktor von cos&nbsp;&phi;&nbsp;=&nbsp;0,82. Berechne den fließenden Außenleiterstrom (I) im Hubbetrieb, um die passende Sicherung und Kabel auszuwählen!</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Masse des Betonfundaments m:</b><br>
V = &pi; · r² · l = &pi; · (4 dm)² · 10 dm = 502,65 dm³<br>
m = V · &rho; = 502,65 dm³ · 2,4 kg/dm³ = 1.206,37 kg<br><br>
<b>a) Hubarbeit W in kNm:</b><br>
W = m · g · h = 1.206,37 kg · 9,81 m/s² · 1,5 m = 17.745,7 J = <b>17,75 kNm</b><br><br>
<b>b) Abgegebene Hubleistung P<sub>ab</sub>:</b><br>
P<sub>ab</sub> = W / t = 17.745,7 J / 8 s = <b>2.218,21 W ≈ 2,22 kW</b><br><br>
<b>c) Benötigte Antriebsleistung P<sub>zu</sub>:</b><br>
P<sub>zu</sub> = P<sub>ab</sub> / &eta; = 2.218,21 W / 0,80 = <b>2.772,76 W ≈ 2,77 kW</b><br><br>
<b>d) Fließender Außenleiterstrom I:</b><br>
I = P<sub>zu</sub> / (&radic;3 · U · cos &phi;) = 2.772,76 W / (&radic;3 · 400 V · 0,82) = <b>4,88 A</b>`
            },


            {
                name: "Drehstrommotor",
                prompt: `Ein Drehstrommotor hat an der Welle ein Drehmoment von 14&nbsp;Nm bei n&nbsp;=&nbsp;2960&nbsp;U/min.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die abgegebene Leistung an der Welle in kW</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die dem Motor elektrisch zugeführte Leistung bei einem Wirkungsgrad von &eta;&nbsp;=&nbsp;0,8</li>
</ul>`,
                image: "downloads/Motor-Seiltrieb 2.png",
                imageAlt: "Skizze zum Drehstrommotor",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Abgegebene Leistung P<sub>ab</sub> an der Welle in kW:</b><br>
P<sub>ab</sub> = 2 · &pi; · n · M = 2 · &pi; · (2.960 / 60 s⁻¹) · 14 Nm = 4.339,53 W ≈ <b>4,34 kW</b><br><br>
<b>b) Zugeführte elektrische Leistung P<sub>zu</sub>:</b><br>
P<sub>zu</sub> = P<sub>ab</sub> / &eta; = 4.339,53 W / 0,8 = 5.424,41 W ≈ <b>5,42 kW</b>`
            }
        ]
    },
    //#endregion











    //#region Wärmemenge
    {
        id: "waermemenge",
        title: "Wärmemenge",
        description: "Aufgaben zur Wärmemenge und Wärmeübertragung.",
        tasks: [

            {
                name: "Hinweis",
                prompt: `<b>Verwende zum Rechnen der Wärmemenge Q immer<br>
                c&nbsp;=&nbsp;4,18&nbsp;kJ/(kg·K) oder<br>
                c&nbsp;=&nbsp;1,163&nbsp;Wh/(kg·K)<br>
                Ergebnisse können leicht abweichen!</b>`
            },


            {
                name: "Elektrische Leistung eines Warmwasserboilers",
                prompt: `Ein Boiler erwärmt ein Volumen von V&nbsp;=&nbsp;500&nbsp;Liter Wasser innerhalb von t&nbsp;=&nbsp;4&nbsp;Stunden von T₁&nbsp;=&nbsp;25&nbsp;°C auf T₂&nbsp;=&nbsp;60&nbsp;°C.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die benötigte Wärmemenge Q in kJ (immer mit c&nbsp;=&nbsp;4,18&nbsp;kJ/(kg·K) und 1&nbsp;L&nbsp;=&nbsp;1&nbsp;kg),</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die dafür erforderliche elektrische Leistung P des Boilers in kW (ohne Berücksichtigung des Wirkungsgrades).</li>
</ul>`,
                image: "downloads/Warmwasserboiler_500L.png",
                imageAlt: "Aufgabenstellung Berechnen der Wärmemenge und Leistung bei einem Boiler",
                solution: `<b>Lösungsweg:</b><br>
<b>1. Temperaturdifferenz &Delta;T:</b><br>
&Delta;T = 60 °C - 25 °C = 35 K<br><br>
<b>a) Benötigte Wärmemenge Q in kJ:</b><br>
Q = m · c · &Delta;T = 500 kg · 4,18 kJ/(kg·K) · 35 K = <b>73.150 kJ</b><br><br>
<b>b) Erforderliche elektrische Leistung P in kW:</b><br>
P = Q / t = 73.150 kJ / (4 · 3.600 s) = <b>5,08 kW</b>`
            },


            {
                name: "Aufheizzeit eines Elektroboilers mit Wirkungsgrad",
                prompt: `Ein kleiner Elektroboiler erhitzt 20&nbsp;Liter Wasser von 12&nbsp;°C auf 85&nbsp;°C.<br>
                Der Boiler hat eine elektrische Leistung von P&nbsp;=&nbsp;2,3&nbsp;kW und arbeitet mit einem Wirkungsgrad von η&nbsp;=&nbsp;0,93 (93&nbsp;%).<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die benötigte Nutzwärmemenge Q in kJ,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die dafür benötigte Aufheizzeit t in Minuten.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Temperaturdifferenz &Delta;T:</b><br>
&Delta;T = 85 °C - 12 °C = 73 K<br><br>
<b>a) Benötigte Nutzwärmemenge Q in kJ:</b><br>
Q = m · c · &Delta;T = 20 kg · 4,18 kJ/(kg·K) · 73 K = <b>6.102,8 kJ</b><br><br>
<b>b) Benötigte Aufheizzeit t in Minuten:</b><br>
P<sub>Nutz</sub> = P · &eta; = 2,3 kW · 0,93 = 2,139 kW<br>
t = Q / P<sub>Nutz</sub> = 6.102,8 kJ / 2,139 kW = 2.853,11 s = <b>47,55 Minuten</b>`
            }
        ]
    },
    //#endregion












    //#region Schmelz- & Verdampfungswärme
    {
        id: "schmelz-verdampfungswaerme",
        title: "Schmelz- & Verdampfungswärme",
        description: "Übungen zu Schmelz- und Verdampfungswärme.",
        tasks: [

            {
                name: "Tabellenbuch-Suche",
                prompt: `Suche im Tabellenbuch die Schmelz- und Verdampfungswerte q sowie die spezifischen Wärmekapazitätswerte c die im folgenden aufgelistet sind.<br>

<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 8px 0;">
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Eis</sub>&nbsp;=&nbsp;2,09&nbsp;kJ/(kg·K)</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;q<sub>s</sub> (Spezifische Schmelzwärme Eis)&nbsp;=&nbsp;332&nbsp;kJ/kg</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Wasser</sub>&nbsp;=&nbsp;4,18&nbsp;kJ/(kg·K)</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;q<sub>v</sub> (Spezifische Verdampfungswärme Wasser)&nbsp;=&nbsp;2256&nbsp;kJ/kg</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Dampf</sub>&nbsp;=&nbsp;2,09&nbsp;kJ/(kg·K) - schreib dir das in TAB!!</li>
</ul>`,
            },


            {
                name: "Vom Eis zu Wasserdampf",
                prompt: `Welche Gesamtwärmemenge Q<sub>ges</sub> in kJ ist notwendig, um m&nbsp;=&nbsp;25&nbsp;kg Eis mit einer Temperatur von T₁&nbsp;=&nbsp;-28&nbsp;°C vollständig in Wasserdampf mit einer Temperatur von T₂&nbsp;=&nbsp;400&nbsp;°C umzuwandeln?<br><br>
<b>Gegebene Werte für die Phasen:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 8px 0;">
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Eis</sub>&nbsp;=&nbsp;2,09&nbsp;kJ/(kg·K)</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;q<sub>s</sub> (Spezifische Schmelzwärme)&nbsp;=&nbsp;332&nbsp;kJ/kg</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Wasser</sub>&nbsp;=&nbsp;4,18&nbsp;kJ/(kg·K)</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;q<sub>v</sub> (Spezifische Verdampfungswärme)&nbsp;=&nbsp;2256&nbsp;kJ/kg</li>
  <li style="text-indent: -20px; padding-left: 20px;">•&nbsp;&nbsp;c<sub>Dampf</sub>&nbsp;=&nbsp;2,09&nbsp;kJ/(kg·K)</li>
</ul>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die Teilwärmemengen Q₁ bis Q₅ für die einzelnen 5 Abschnitte,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die benötigte Gesamtwärmemenge Q<sub>ges</sub> in kJ (bzw. MJ).</li>
</ul>`,
                image: "downloads/Eis_zu_Dampf.png",
                imageAlt: "Phasendiagramm und Ablauf zur Umwandlung von Eis in Wasserdampf",
                solution: `<b>Lösungsweg:</b><br>
<b>a) Teilwärmemengen Q₁ bis Q₅:</b><br>
• Q₁ (Eis erwärmen, -28 °C auf 0 °C):<br>
&nbsp;&nbsp;Q₁ = 25 kg · 2,09 kJ/(kg·K) · 28 K = <b>1.463 kJ</b><br>
• Q₂ (Eis schmelzen bei 0 °C):<br>
&nbsp;&nbsp;Q₂ = 25 kg · 332 kJ/kg = <b>8.300 kJ</b><br>
• Q₃ (Wasser erwärmen, 0 °C auf 100 °C):<br>
&nbsp;&nbsp;Q₃ = 25 kg · 4,18 kJ/(kg·K) · 100 K = <b>10.450 kJ</b><br>
• Q₄ (Wasser verdampfen bei 100 °C):<br>
&nbsp;&nbsp;Q₄ = 25 kg · 2.256 kJ/kg = <b>56.400 kJ</b><br>
• Q₅ (Dampf überhitzen, 100 °C auf 400 °C):<br>
&nbsp;&nbsp;Q₅ = 25 kg · 2,09 kJ/(kg·K) · 300 K = <b>15.675 kJ</b><br><br>
<b>b) Gesamtwärmemenge Q<sub>ges</sub>:</b><br>
Q<sub>ges</sub> = Q₁ + Q₂ + Q₃ + Q₄ + Q₅ = <b>92.288 kJ = 92,288 MJ</b>`
            },


            {
                name: "Wasserverdampfung",
                prompt: `Da die Raumluft im Winter sehr trocken ist, wird ein Wasserkocher genutzt, um 1,5&nbsp;Liter Wasser 
                von T₁&nbsp;=&nbsp;15&nbsp;°C vollständig zu verdampfen (100&nbsp;°C).<br>
<b>Berechne</b> die benötigte Gesamtwärmemenge Q<sub>ges</sub> in kJ.`,
                image: "downloads/Waermemenge-Wasserkocher.png",
                imageAlt: "Aufgabenstellung Berechnen der Wärmemenge bei der Wasserverdampfung",
                solution: `<b>Lösungsweg:</b><br>
<b>1. Erwärmen von 15 °C auf 100 °C (&Delta;T = 85 K):</b><br>
Q₁ = m · c · &Delta;T = 1,5 kg · 4,18 kJ/(kg·K) · 85 K = 532,95 kJ<br><br>
<b>2. Verdampfen bei 100 °C:</b><br>
Q₂ = m · q<sub>v</sub> = 1,5 kg · 2.256 kJ/kg = 3.384 kJ<br><br>
<b>3. Gesamtwärmemenge Q<sub>ges</sub>:</b><br>
Q<sub>ges</sub> = Q₁ + Q₂ = 532,95 kJ + 3.384 kJ = <b>3.916,95 kJ</b>`
            },


            {
                name: "Eiswürfel",
                prompt: `Für ein Kaltgetränk werden 250&nbsp;ml Wasser mit einer Anfangstemperatur von +20&nbsp;°C in eine Eiswürfelform gefüllt 
                und in ein Gefrierfach gestellt. Das Gefrierfach hat eine Temperatur von -22&nbsp;°C.<br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;die Wärmemenge Q in kJ, die dem Wasser für fertige Eiswürfel insgesamt entzogen werden muss,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die dafür tatsächlich benötigte Energie in kJ, wenn der Gefrierprozess einen Wirkungsgrad von η&nbsp;=&nbsp;0,75 (75&nbsp;%) besitzt.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>a) Entzogene Wärmemenge Q<sub>ges</sub> in kJ:</b><br>
• Q₁ (Wasser abkühlen, 20 °C auf 0 °C):<br>
&nbsp;&nbsp;Q₁ = 0,25 kg · 4,18 kJ/(kg·K) · 20 K = 20,90 kJ<br>
• Q₂ (Wasser erstarren bei 0 °C):<br>
&nbsp;&nbsp;Q₂ = 0,25 kg · 332 kJ/kg = 83,00 kJ<br>
• Q₃ (Eis abkühlen, 0 °C auf -22 °C):<br>
&nbsp;&nbsp;Q₃ = 0,25 kg · 2,09 kJ/(kg·K) · 22 K = 11,50 kJ<br><br>
<b>Q<sub>ges</sub> = Q₁ + Q₂ + Q₃ = 115,40 kJ</b><br><br>
<b>b) Tatsächlich benötigte Energie E<sub>zu</sub>:</b><br>
E<sub>zu</sub> = Q<sub>ges</sub> / &eta; = 115,40 kJ / 0,75 = <b>153,86 kJ</b>`
            }
        ]
    },
    //#endregion








    //#region Verbrennungswärme
    {
        id: "verbrennungswaerme",
        title: "Verbrennungswärme",
        description: "Aufgaben zu Verbrennungswärme und Energieumsatz.",
        tasks: [



            {
                name: "Berghaus",
                prompt: `Ein Berghaus benötigt an einem frostigen Wintertag eine nutzbare Wärmemenge von Q<sub>nutz</sub>&nbsp;=&nbsp;510&nbsp;MJ.
                Um diese Wärme bereitzustellen, wird eine Pelletheizung genutzt. Die verwendeten Holzpellets besitzen einen Heizwert von H<sub>i</sub>&nbsp;=&nbsp;18&nbsp;MJ/kg.<br>
Die Heizungsanlage hat Anlagenwirkungsgrad von &eta;&nbsp;=&nbsp;85&nbsp;%.<br><br>
<b>Berechne</b>, wie viele Kilogramm Pellets diese Heizung an diesem Tag verbrennen muss, um den Wärmebedarf vollständig zu decken.`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Zugeführte Energie (Brennstoffenergie) Q<sub>zu</sub>:</b><br>
Q<sub>zu</sub> = Q<sub>nutz</sub> / &eta; = 510 MJ / 0,85 = 600 MJ<br><br>
<b>2. Erforderliche Pelletmasse m:</b><br>
m = Q<sub>zu</sub> / H<sub>i</sub> = 600 MJ / 18 MJ/kg = <b>33,33 kg</b>`
            },


            {
                name: "Ölheizung",
                prompt: `Ein 600&nbsp;Liter Warmwasserspeicher soll innerhalb von 2&nbsp;Stunden von 15&nbsp;°C auf 60&nbsp;°C erwärmt werden.<br>
Die Beheizung erfolgt über einen Ölkessel mit einem Anlagenwirkungsgrad von &eta;&nbsp;=&nbsp;88&nbsp;%.<br>
Der Heizwert von Heizöl EL beträgt H<sub>i</sub>&nbsp;=&nbsp;41,5&nbsp;MJ/kg.<br><br>
<b>Berechne:</b><br>
Wie viele Liter Heizöl EL sind für diesen Aufheizvorgang erforderlich?<br>
(Hinweis: 1&nbsp;Liter Heizöl EL wiegt weniger als 1&nbsp;kg)`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Benötigte Nutzwärmemenge Q<sub>nutz</sub>:</b><br>
Q<sub>nutz</sub> = m · c · &Delta;T = 600 kg · 4,18 kJ/(kg·K) · 45 K = 112.860 kJ = 112,86 MJ<br><br>
<b>2. Zugeführte Brennstoffenergie Q<sub>zu</sub>:</b><br>
Q<sub>zu</sub> = Q<sub>nutz</sub> / &eta; = 112,86 MJ / 0,88 = 128,25 MJ<br><br>
<b>3. Erforderliche Heizölmasse m<sub>Öl</sub>:</b><br>
m<sub>Öl</sub> = Q<sub>zu</sub> / H<sub>i</sub> = 128,25 MJ / 41,5 MJ/kg = 3,09 kg<br><br>
<b>4. Erforderliches Heizölvolumen V<sub>Öl</sub> (&rho; = 0,84 kg/l):</b><br>
V<sub>Öl</sub> = m<sub>Öl</sub> / &rho; = 3,09 kg / 0,84 kg/l = <b>3,68 Liter</b>`
            },

            {
                name: "Whirlpool",
                prompt: `Ein Outdoor-Whirlpool mit 2,5&nbsp;m³ Wasserinhalt soll von 17&nbsp;°C auf 37&nbsp;°C erwärmt werden.<br>
Die Beheizung erfolgt über einen Gas-Durchlauferhitzer mit einem Wirkungsgrad von &eta;&nbsp;=&nbsp;92&nbsp;%.<br>
Der Heizwert von Propangas beträgt H<sub>i</sub>&nbsp;=&nbsp;93&nbsp;MJ/m³.<br><br>
<b>Berechne:</b><br>
Wie viele Kilogramm Propangas müssen der Gasflasche entnommen werden?<br>
(Hinweis: Der Heizwert ist in MJ/m³ angegeben, gefragt ist die Masse in kg)`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Benötigte Nutzwärmemenge Q<sub>nutz</sub>:</b><br>
Q<sub>nutz</sub> = m · c · &Delta;T = 2.500 kg · 4,18 kJ/(kg·K) · 20 K = 209.000 kJ = 209 MJ<br><br>
<b>2. Zugeführte Gasenergie Q<sub>zu</sub>:</b><br>
Q<sub>zu</sub> = Q<sub>nutz</sub> / &eta; = 209 MJ / 0,92 = 227,17 MJ<br><br>
<b>3. Erforderliche Gasmasse m<sub>Gas</sub> (H<sub>i,m</sub> = 46,35 MJ/kg):</b><br>
m<sub>Gas</sub> = Q<sub>zu</sub> / H<sub>i,m</sub> = 227,17 MJ / 46,35 MJ/kg = <b>4,90 kg</b><br>
<i>(Alternativ über Gasvolumen V = 2,44 m³ und Normdichte &rho; = 2,00 kg/m³: m ≈ <b>4,90 kg</b>)</i>`
            }
        ]
    },

    //#endregion










    //#region Mischtemperaturen
    {
        id: "mischtemperaturen",
        title: "Mischtemperaturen",
        description: "Themen zu Mischtemperaturen - Bestimmung der Endtemperatur, wenn Stoffe mit unterschiedlichen Temperaturen und spezifischen Wärmekapazitäten Wärme austauschen.",
        tasks: [

            {
                name: "Hinweis",
                prompt: `Rechne bei Wasser immer mit 1&nbsp;L&nbsp;=&nbsp;1&nbsp;kg<br>
                Wärmeverluste an die Umgebung sind bei allen Rechnungen zu vernachlässigen`
            },


            {
                name: "Reinigungswasser",
                prompt: `Für die Zubereitung von Reinigungswasser in einem Gewerbebetrieb werden 45&nbsp;Liter Kaltwasser mit einer Temperatur von 10&nbsp;°C und 35&nbsp;Liter Warmwasser mit einer Temperatur von 60&nbsp;°C im Mischbehälter zusammengeführt.<br><br>
<b>Berechne:</b><br>
Welche Mischtemperatur T<sub>m</sub> stellt sich in °C ein?`,
                solution: `<b>Lösungsweg:</b><br>
<b>Mischungsgleichung:</b><br>
T<sub>m</sub> = (m₁ · T₁ + m₂ · T₂) / (m₁ + m₂)<br><br>
<b>Berechnung:</b><br>
T<sub>m</sub> = (45 kg · 10 °C + 35 kg · 60 °C) / (45 kg + 35 kg)<br>
T<sub>m</sub> = (450 + 2.100) / 80 = 2.550 / 80 = <b>31,88 °C</b> (exakt 31,875 °C)`
            },



            {
                name: "Tauchbecken",
                prompt: `In ein Tauchbecken mit einem Wasserinhalt von 1,2&nbsp;m³ und einer Temperatur von 12&nbsp;°C werden 150&nbsp;Liter heißes Wasser mit 80&nbsp;°C nachgefüllt.<br><br>
<b>Berechne:</b><br>
Welche Mischtemperatur T<sub>m</sub> in °C weist das Wasser nach dem vollständigen Durchmischen auf?`,
                solution: `<b>Lösungsweg:</b><br>
<b>Mischungsgleichung:</b><br>
T<sub>m</sub> = (m₁ · T₁ + m₂ · T₂) / (m₁ + m₂)<br><br>
<b>Berechnung:</b><br>
T<sub>m</sub> = (1.200 kg · 12 °C + 150 kg · 80 °C) / (1.200 kg + 150 kg)<br>
T<sub>m</sub> = (14.400 + 12.000) / 1.350 = 26.400 / 1.350 = <b>19,56 °C</b>`
            },

            {
                name: "Nachfüllwasser",
                prompt: `Für ein Medizinalbad werden 120&nbsp;Liter Wasser mit einer Zieltemperatur von 37&nbsp;°C benötigt.<br>
Im Behälter befinden sich bereits 85&nbsp;Liter Wasser mit einer Temperatur von 22&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Welche Temperatur in °C muss das restliche nachzufüllende Wasser aufweisen, um exakt die gewünschte Mischtemperatur zu erreichen?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Nachzufüllende Wassermenge m₂:</b><br>
m₂ = 120 kg - 85 kg = 35 kg<br><br>
<b>2. Umgestellte Mischungsgleichung:</b><br>
T₂ = (m<sub>ges</sub> · T<sub>m</sub> - m₁ · T₁) / m₂<br><br>
<b>3. Berechnung der Temperatur T₂:</b><br>
T₂ = (120 kg · 37 °C - 85 kg · 22 °C) / 35 kg<br>
T₂ = (4.440 - 1.870) / 35 = 2.570 / 35 = <b>73,43 °C</b>`
            },

            {
                name: "Härten",
                prompt: `Ein Bauteil aus unlegiertem Stahl mit einer Masse von m<sub>Stahl</sub>&nbsp;=&nbsp;4,5&nbsp;kg und einer
                Temperatur von T<sub>Stahl</sub>&nbsp;=&nbsp;850&nbsp;°C wird zum Härten in ein Härtebecken mit V<sub>Öl</sub>&nbsp;=&nbsp;30&nbsp;Liter
                Maschinenöl eingetaucht. Das Öl hat zu Beginn eine Temperatur von T<sub>Öl</sub>&nbsp;=&nbsp;20&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Welche Mischtemperatur T<sub>m</sub> stellt sich im Ölbecken nach dem Ausgleich in °C ein?<br>
<i>Verdampfungsverluste und Behälteraufwärmung sind zu vernachlässigen)</i>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Gegebene Werte und Masse des Öls bestimmen:</b><br>
• Stahl (1): m₁ = 4,5 kg, T₁ = 850 °C, c₁ = 0,49 kJ/(kg·K)<br>
• Öl (2): m₂ = 30 dm³ · 0,91 kg/dm³ = 27,3 kg, T₂ = 20 °C, c₂ = 2,09 kJ/(kg·K)<br><br>
<b>2. Anwenden der Formel für die Mischtemperatur T<sub>M</sub>:</b><br>
T<sub>M</sub> = (m₁ · c₁ · T₁ + m₂ · c₂ · T₂) / (m₁ · c₁ + m₂ · c₂)<br><br>
<b>3. Berechnung:</b><br>
• Zähler: (4,5 · 0,49 · 850) + (27,3 · 2,09 · 20) = 1.874,25 + 1.141,14 = 3.015,39 kJ<br>
• Nenner: (4,5 · 0,49) + (27,3 · 2,09) = 2,205 + 57,057 = 59,262 kJ/K<br>
• T<sub>M</sub> = 3.015,39 / 59,262 = <b>50,88 °C</b>`
            },


            {
                name: "Teiletemperatur",
                prompt: `In einem Behälter mit 180&nbsp;Liter Maschinenöl mit einer Anfangstemperatur von 18&nbsp;°C werden
                legierte Stahlteile mit einer Gesamtmasse von m<sub>Stahl</sub>&nbsp;=&nbsp;25&nbsp;kg abgeschreckt.<br>
Nach dem Temperaturausgleich beträgt die Mischtemperatur des Ölbades T<sub>m</sub>&nbsp;=&nbsp;42,5&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Mit welcher Temperatur in °C wurden die Stahlteile in das Ölbad getaucht?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Gegebene Werte und Masse des Öls bestimmen:</b><br>
• Stahl (1): m₁ = 25 kg, c₁ = 0,51 kJ/(kg·K), T₁ = ?<br>
• Öl (2): m₂ = 180 dm³ · 0,91 kg/dm³ = 163,8 kg, T₂ = 18 °C, c₂ = 2,09 kJ/(kg·K)<br>
• Mischtemperatur: T<sub>M</sub> = 42,5 °C<br><br>
<b>2. Mischungsregel nach T₁ umstellen:</b><br>
T₁ = [T<sub>M</sub> · (m₁ · c₁ + m₂ · c₂) - m₂ · c₂ · T₂] / (m₁ · c₁)<br><br>
<b>3. Berechnung:</b><br>
• m₁ · c₁ = 25 · 0,51 = 12,75 kJ/K<br>
• m₂ · c₂ = 163,8 · 2,09 = 342,342 kJ/K<br>
• T₁ = [42,5 · (12,75 + 342,342) - 342,342 · 18] / 12,75<br>
• T₁ = (15.091,41 - 6.162,156) / 12,75 = 8.929,254 / 12,75 = <b>700,33 °C</b>`
            }
        ]
    },
    //#endregion












    //#region Mischtemperaturen mit Aggregatwechsel
    {
        id: "mischtemperaturen-aggregatwechsel",
        title: "Mischtemperaturen mit Aggregatwechsel",
        description: "Themen zu Mischtemperaturen mit Aggregat-Zustandsänderungen. Hier kommt zusätzlich die Schmelzwärme, Verdampfungswärme mit ins Spiel.",
        tasks: [

            {
                name: "Hinweis",
                prompt: `<i>Nutze c<sub>Wasser</sub>&nbsp;=&nbsp;4,18&nbsp;kJ/(kg·K), c<sub>Eis</sub>&nbsp;=&nbsp;2,09&nbsp;kJ/(kg·K), q<sub>s</sub>&nbsp;=&nbsp;333&nbsp;kJ/kg und 1&nbsp;L&nbsp;=&nbsp;1&nbsp;kg</i>`
            },

            {
                name: "Badewanne mit Eis",
                prompt: `In einer Badewanne wurden 180&nbsp;Liter heißes Wasser mit einer Temperatur von 44&nbsp;°C eingelassen.<br>
Um das Wasser rascher abzukühlen, wirft man 10&nbsp;kg Crushed Ice (Eis) mit einer Temperatur von -10&nbsp;°C hinein.<br><br>
<b>Berechne:</b><br>
Welche Temperatur hat das Wasser, nachdem das Eis vollständig geschmolzen ist und sich die Wärme gleichmäßig verteilt hat?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Energiebedarf zum Erwärmen und Schmelzen des Eises (auf 0 °C):</b><br>
• Q₁ (Eis erwärmen, -10 °C auf 0 °C):<br>
&nbsp;&nbsp;Q₁ = 10 kg · 2,09 kJ/(kg·K) · 10 K = 209 kJ<br>
• Q₂ (Eis schmelzen bei 0 °C):<br>
&nbsp;&nbsp;Q₂ = 10 kg · 333 kJ/kg = 3.330 kJ<br>
• Q<sub>Eis,ges</sub> = 209 kJ + 3.330 kJ = 3.539 kJ<br><br>
<b>2. Wärmebilanz aufstellen:</b><br>
m<sub>w</sub> · c<sub>W</sub> · (T<sub>w</sub> - T<sub>m</sub>) = Q<sub>Eis,ges</sub> + m<sub>Eis</sub> · c<sub>W</sub> · T<sub>m</sub><br>
180 kg · 4,18 kJ/(kg·K) · (44 °C - T<sub>m</sub>) = 3.539 kJ + 10 kg · 4,18 kJ/(kg·K) · T<sub>m</sub><br>
33.105,6 - 752,4 · T<sub>m</sub> = 3.539 + 41,8 · T<sub>m</sub><br>
29.566,6 = 794,2 · T<sub>m</sub><br><br>
<b>3. Berechnung der Mischtemperatur T<sub>m</sub>:</b><br>
T<sub>m</sub> = 29.566,6 / 794,2 = <b>37,23 °C</b>`
            }
        ]
    },
    //#endregion














    //#region Strömungslehre
    {
        id: "stroemungslehre",
        title: "Strömungslehre",
        description: "Aufgaben und Erklärungen zur Strömungslehre.",
        tasks: [

            {
                name: "Volumenstrom in einer Rohrleitung",
                prompt: `Aus einem mittelschweren Gewinderohr DN32 mit einem Innendurchmesser von d&nbsp;=&nbsp;35,9&nbsp;mm strömt Wasser mit einer Fließgeschwindigkeit von v&nbsp;=&nbsp;1,2&nbsp;m/s.<br><br>
<b>Berechne:</b><br>
Wie viele Liter Wasser fließen in einer Zeit von t&nbsp;=&nbsp;15&nbsp;Minuten aus dieser Leitung?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Umrechnung der gegebenen Werte in dm:</b><br>
• d = 35,9 mm = 0,359 dm<br>
• v = 1,2 m/s = 12 dm/s<br>
• t = 15 min = 900 s<br><br>
<b>2. Querschnittsfläche des Rohres A in dm²:</b><br>
A = (&pi; · d²) / 4 = (&pi; · (0,359 dm)²) / 4 = 0,10122 dm²<br><br>
<b>3. Volumenstrom V&#775; in dm³/s:</b><br>
V&#775; = A · v = 0,10122 dm² · 12 dm/s = 1,2146 dm³/s (= 1,2146 l/s)<br><br>
<b>4. Ausfließendes Wasservolumen V in 15 Min (t = 900 s):</b><br>
V = V&#775; · t = 1,2146 dm³/s · 900 s = <b>1.093,2 dm³ = 1.093,2 Liter</b>`
            },


            {
                name: "Teilgefüllte Abwasser-Rohrleitung",
                prompt: `Eine Abwasserleitung besitzt eine Querschnittsfläche von A&nbsp;=&nbsp;2,5&nbsp;dm².<br>
Im Betrieb ist das Rohr zu einem Füllungsgrad von 60&nbsp;% mit Abwasser gefüllt, wobei sich eine mittlere Fließgeschwindigkeit von v&nbsp;=&nbsp;0,8&nbsp;m/s einstellt.<br><br>
<b>Berechne:</b><br>
Wie groß ist der tatsächliche Volumenstrom V̇ (die Durchflussmenge) in Litern pro Sekunde (l/s) und Litern pro Minute (l/min)?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Effektive (benetzte) Querschnittsfläche A<sub>eff</sub>:</b><br>
A<sub>eff</sub> = A<sub>ges</sub> · Füllungsgrad = 2,5 dm² · 0,60 = 1,5 dm²<br><br>
<b>2. Volumenstrom V&#775; in Liter pro Sekunde (l/s):</b><br>
• v = 0,8 m/s = 8 dm/s<br>
V&#775; = A<sub>eff</sub> · v = 1,5 dm² · 8 dm/s = 12 dm³/s = <b>12 l/s</b><br><br>
<b>3. Volumenstrom V&#775; in Liter pro Minute (l/min):</b><br>
V&#775;<sub>min</sub> = 12 l/s · 60 s/min = <b>720 l/min</b>`
            },

            {
                name: "Rohrbruch",
                prompt: `In einer Versorgungsleitung mit einem Innendurchmesser von d&nbsp;=&nbsp;40&nbsp;mm kommt es zu einer Leckage. Bis zum Absperren der Leitung tritt ein Wasservolumen von V&nbsp;=&nbsp;8,5&nbsp;m³ aus.<br>
Die durchschnittliche Fließgeschwindigkeit im Rohr beträgt v&nbsp;=&nbsp;1,8&nbsp;m/s.<br><br>
<b>Berechne:</b><br>
Wie viel Zeit t in Minuten ist zwischen dem Beginn des Rohrbruchs und dem Absperren vergangen?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Umrechnung der Werte in dm und dm³:</b><br>
• d = 40 mm = 0,4 dm<br>
• V = 8,5 m³ = 8.500 dm³<br>
• v = 1,8 m/s = 18 dm/s<br><br>
<b>2. Querschnittsfläche des Rohres A:</b><br>
A = (&pi; · d²) / 4 = (&pi; · (0,4 dm)²) / 4 = 0,12566 dm²<br><br>
<b>3. Volumenstrom V&#775;:</b><br>
V&#775; = A · v = 0,12566 dm² · 18 dm/s = 2,262 dm³/s (l/s)<br><br>
<b>4. Erforderliche Zeit t bis zum Absperren:</b><br>
t = V / V&#775; = 8.500 dm³ / 2,262 dm³/s = 3.757,7 s<br>
t<sub>min</sub> = 3.757,7 s / 60 s/min = <b>62,63 Minuten</b> (ca. 1 h 2,6 min)`
            },


            {
                name: "Füllzeit eines Behälters über ein Kupferrohr",
                prompt: `Ein Kupferrohr &Oslash;&nbsp;22&nbsp;&times;&nbsp;1,0&nbsp;mm speist mit einer Fließgeschwindigkeit von v&nbsp;=&nbsp;1,5&nbsp;m/s einen Speicherbehälter mit einem Fassungsvermögen von V&nbsp;=&nbsp;180&nbsp;Litern.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;den Volumenstrom V̇ (bzw. Q) in l/min,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die benötigte Füllzeit t in Minuten.</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Innendurchmesser d<sub>i</sub> und Einheiten in dm:</b><br>
• d<sub>i</sub> = 22 mm - 2 · 1,0 mm = 20 mm = 0,2 dm<br>
• v = 1,5 m/s = 15 dm/s<br>
• V = 180 Liter = 180 dm³<br><br>
<b>a) Volumenstrom V&#775; in l/min:</b><br>
• A = (&pi; · d<sub>i</sub>²) / 4 = (&pi; · (0,2 dm)²) / 4 = 0,031416 dm²<br>
• V&#775;<sub>sek</sub> = A · v = 0,031416 dm² · 15 dm/s = 0,47124 dm³/s = 0,47124 l/s<br>
• V&#775;<sub>min</sub> = 0,47124 l/s · 60 s/min = <b>28,27 l/min</b><br><br>
<b>b) Füllzeit t in Minuten:</b><br>
• t = V / V&#775;<sub>min</sub> = 180 dm³ / 28,2743 dm³/min = <b>6,37 Minuten</b> (ca. 6 min 22 s)`
            },

            {
                name: "Heizungsleitung Rohr-Ø",
                prompt: `Eine Vorlaufleitung eines Heizungskreislaufs soll einen Volumenstrom von V̇&nbsp;=&nbsp;0,95&nbsp;m³/h liefern.<br>
Die Umwälzpumpe ist so eingestellt, dass das Wasser mit einer Fließgeschwindigkeit von v&nbsp;=&nbsp;0,6&nbsp;m/s durch das Rohr gefördert wird.<br><br>
<b>Berechne:</b><br>
Den erforderlichen Rohrinnendurchmesser d in mm.`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Volumenstrom V&#775; in dm³/s umrechnen:</b><br>
• V&#775; = 0,95 m³/h = 950 dm³/h<br>
• V&#775; = 950 dm³/h / 3.600 s/h = 0,26389 dm³/s<br>
• v = 0,6 m/s = 6 dm/s<br><br>
<b>2. Erforderliche Querschnittsfläche A in dm²:</b><br>
A = V&#775; / v = 0,26389 dm³/s / 6 dm/s = 0,043982 dm²<br><br>
<b>3. Rohrinnendurchmesser d in mm:</b><br>
d = &radic;((4 · A) / &pi;) = &radic;((4 · 0,043982 dm²) / &pi;) = &radic;(0,0560 dm²) = 0,23664 dm<br>
d = 0,23664 dm · 100 mm/dm = <b>23,66 mm</b>`
            },

            {
                name: "Rohrdurchmesser einer Lüftungsleitung",
                prompt: `Für die Abluftanlage einer Großküche ist ein Förderstrom von V̇&nbsp;=&nbsp;850&nbsp;m³/h gefordert.<br>
Um Strömungsgeräusche zu vermeiden, darf die Fließgeschwindigkeit der Luft im Rohr maximal v&nbsp;=&nbsp;4,0&nbsp;m/s betragen.<br><br>
<b>Berechne:</b><br>
Welchen Mindest-Innen-&Oslash; (d in mm) muss das runde Lüftungsrohr aufweisen?`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Förderstrom V&#775; in dm³/s umrechnen:</b><br>
• V&#775; = 850 m³/h = 850.000 dm³/h<br>
• V&#775; = 850.000 dm³/h / 3.600 s/h = 236,111 dm³/s<br>
• v = 4,0 m/s = 40 dm/s<br><br>
<b>2. Mindest-Querschnittsfläche A in dm²:</b><br>
A = V&#775; / v = 236,111 dm³/s / 40 dm/s = 5,90278 dm²<br><br>
<b>3. Mindest-Innen-Ø d in mm:</b><br>
d = &radic;((4 · A) / &pi;) = &radic;((4 · 5,90278 dm²) / &pi;) = &radic;(7,51566 dm²) = 2,74147 dm<br>
d = 2,74147 dm · 100 mm/dm = <b>274,15 mm</b>`
            },

            {
                name: "Heizlüftungsanlage für ein Restaurant",
                prompt: `Ein Veranstaltungssaal mit einer Grundfläche von A&nbsp;=&nbsp;180&nbsp;m² und einer Raumhöhe von h&nbsp;=&nbsp;3,2&nbsp;m soll
                innerhalb einer Stunde von 10&nbsp;°C auf 22&nbsp;°C aufgeheizt werden. Dabei wird die Raumluft 5-mal pro Stunde komplett ausgetauscht.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;den erforderlichen Luft-Volumenstrom V̇ in m³/s,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;die benötigte Wärmemenge Q in MJ (spezifische Wärmekapazität c<sub>Luft</sub>&nbsp;=&nbsp;1,005&nbsp;kJ/(kg·K), Dichte &rho;<sub>Luft</sub>&nbsp;=&nbsp;1,20&nbsp;kg/m³),</li>
  <li style="text-indent: -20px; padding-left: 20px;">c)&nbsp;&nbsp;den erforderlichen Innendurchmesser d der Lüftungsleitung in mm bei einer maximalen Strömungsgeschwindigkeit von v&nbsp;=&nbsp;4&nbsp;m/s,</li>
  <li style="text-indent: -20px; padding-left: 20px;">d)&nbsp;&nbsp;die benötigte Menge Erdgas in m³ für diesen Aufheizvorgang (Heizwert H<sub>i</sub>&nbsp;=&nbsp;38&nbsp;MJ/m³).</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Raumvolumen und Luftmenge pro Stunde:</b><br>
• V<sub>Raum</sub> = 180 m² · 3,2 m = 576 m³<br>
• V<sub>Stunde</sub> = 576 m³ · 5 = 2.880 m³/h<br><br>
<b>a) Luft-Volumenstrom V&#775; in m³/s:</b><br>
V&#775; = 2.880 m³/h / 3.600 s/h = <b>0,80 m³/s</b><br><br>
<b>b) Benötigte Wärmemenge Q in MJ:</b><br>
• m = 2.880 m³ · 1,20 kg/m³ = 3.456 kg<br>
• &Delta;T = 22 °C - 10 °C = 12 K<br>
• Q = 3.456 kg · 1,005 kJ/(kg·K) · 12 K = 41.679,36 kJ = <b>41,68 MJ</b><br><br>
<b>c) Erforderlicher Innendurchmesser d in mm:</b><br>
• V&#775; = 800 dm³/s, v = 40 dm/s<br>
• A = 800 dm³/s / 40 dm/s = 20 dm²<br>
• d = &radic;((4 · 20 dm²) / &pi;) = 5,04626 dm = <b>504,63 mm</b><br><br>
<b>d) Erforderliche Erdgasmenge in m³:</b><br>
V<sub>Gas</sub> = Q / H<sub>i</sub> = 41,67936 MJ / 38 MJ/m³ = <b>1,10 m³</b>`
            }
        ]
    },
    //#endregion















    //#region Gasgesetze
    {
        id: "gasgesetze",
        title: "Gasgesetze",
        description: "Übungen zu den grundlegenden Gasgesetzen.",
        tasks: [


            {
                name: "Druck in einer Gasflasche",
                prompt: `In eine Stickstoffflasche mit einem Rauminhalt von 50&nbsp;Litern werden 8&nbsp;m³ Stickstoff gefüllt.<br><br>
<b>Berechne:</b>
Welcher Überdruck p<sub>e</sub> in bar herrscht in der Flasche nach dem Befüllen?<br>
(Die Temperatur wird als konstant angenommen; <i>Isotherme Zustandsänderung</i>).`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Umrechnung der Volumina in dm³:</b><br>
• V₁ = 8 m³ = 8.000 dm³ (bei p<sub>amb</sub> = 1,013 bar)<br>
• V₂ = 50 Liter = 50 dm³<br><br>
<b>2. Absoluter Enddruck p₂ (Isotherme Zustandsänderung):</b><br>
p₂ = (p₁ · V₁) / V₂<br>
p₂ = (1,013 bar · 8.000 dm³) / 50 dm³ = 162,08 bar (Absolutdruck)<br><br>
<b>3. Überdruck p<sub>e</sub> in bar:</b><br>
p<sub>e</sub> = p₂ - p<sub>amb</sub> = 162,08 bar - 1,013 bar = <b>161,07 bar</b>`
            },


            {
                name: "Druckanstieg in einer Gasflasche durch Erwärmung",
                prompt: `Eine Druckgasflasche weist bei einer Temperatur von T₁&nbsp;=&nbsp;18&nbsp;°C einen Überdruck von p<sub>e1</sub>&nbsp;=&nbsp;160&nbsp;bar auf. Infolge von Sonneneinstrahlung erwärmt sich das Gas in der Flasche auf T₂&nbsp;=&nbsp;55&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Welcher absolute Flaschendruck p<sub>abs2</sub> in bar herrscht nach der Erwärmung in der Flasche?<br>
(Umgebungsdruck p<sub>amb</sub>&nbsp;=&nbsp;1.013&nbsp;bar; das Flaschenvolumen bleibt konstant – <i>isochore Zustandsänderung</i>).`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Temperaturen in Kelvin umrechnen:</b><br>
• T₁ = 18 °C + 273,15 = 291,15 K<br>
• T₂ = 55 °C + 273,15 = 328,15 K<br><br>
<b>2. Absoluten Anfangsdruck p<sub>abs1</sub> bestimmen:</b><br>
p<sub>abs1</sub> = p<sub>e1</sub> + p<sub>amb</sub> = 160 bar + 1,013 bar = 161,013 bar<br><br>
<b>3. Absoluten Enddruck p<sub>abs2</sub> (Isochore Zustandsänderung):</b><br>
p<sub>abs2</sub> = p<sub>abs1</sub> · (T₂ / T₁)<br>
p<sub>abs2</sub> = 161,013 bar · (328,15 K / 291,15 K) = <b>181,48 bar</b>`
            },


            {
                name: "Volumenänderung bei der Gasentnahme",
                prompt: `In einer Erdgas-Transportleitung herrscht bei einer Gastemperatur von 10&nbsp;°C ein Überdruck von 50&nbsp;bar. 
                Beim Endverbraucher wird das Gas mit einer Temperatur von 18&nbsp;°C und einem Überdruck von 25&nbsp;mbar entnommen.<br><br>
<b>Berechne:</b><br>
Welches Volumen in m³ nimmt 1&nbsp;m³ Gas aus der Transportleitung nach der Entnahme beim Verbraucher ein?<br>
(Der Umgebungsdruck beträgt p<sub>amb</sub>&nbsp;=&nbsp;1,013&nbsp;bar; ideales Gasverhalten angenommen).`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Drücke und Temperaturen bestimmen:</b><br>
• T₁ = 10 °C + 273,15 = 283,15 K<br>
• p<sub>abs1</sub> = 50 bar + 1,013 bar = 51,013 bar<br>
• T₂ = 18 °C + 273,15 = 291,15 K<br>
• p<sub>abs2</sub> = 0,025 bar + 1,013 bar = 1,038 bar<br><br>
<b>2. Allgemeine Gasgleichung anwenden:</b><br>
V₂ = V₁ · (p<sub>abs1</sub> / p<sub>abs2</sub>) · (T₂ / T₁)<br><br>
<b>3. Berechnung des Endvolumens V₂:</b><br>
V₂ = 1 m³ · (51,013 bar / 1,038 bar) · (291,15 K / 283,15 K)<br>
V₂ = 1 m³ · 49,1455 · 1,02825 = <b>50,53 m³</b>`
            },


            {
                name: "Druckanstieg in einer verschlossenen Flasche",
                prompt: `Eine leere, fest verschlossene Glasflasche wird bei einer Raumtemperatur von 20&nbsp;°C und einem Umgebungsdruck von p<sub>amb</sub>&nbsp;=&nbsp;1,013&nbsp;bar im Schatten abgestellt.<br>
Durch Sonneneinstrahlung erwärmt sich die Luft im Inneren der Flasche auf 45&nbsp;°C.<br><br>
<b>Berechne:</b>
<ul style="list-style-type: none; padding-left: 20px; margin: 8px 0 0 0;">
  <li style="text-indent: -20px; padding-left: 20px;">a)&nbsp;&nbsp;den absoluten Innendruck p<sub>abs</sub> in bar,</li>
  <li style="text-indent: -20px; padding-left: 20px;">b)&nbsp;&nbsp;den relativen Druck (Überdruck) p<sub>e</sub> in bar (bzw. mbar).</li>
</ul>`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Temperaturen in Kelvin umrechnen:</b><br>
• T₁ = 20 °C + 273,15 = 293,15 K<br>
• T₂ = 45 °C + 273,15 = 318,15 K<br>
• p<sub>abs1</sub> = p<sub>amb</sub> = 1,013 bar<br><br>
<b>a) Absoluter Innendruck p<sub>abs2</sub> (Isochore Zustandsänderung):</b><br>
p<sub>abs2</sub> = p<sub>abs1</sub> · (T₂ / T₁)<br>
p<sub>abs2</sub> = 1,013 bar · (318,15 K / 293,15 K) = <b>1,0994 bar</b> (&approx; 1,10 bar)<br><br>
<b>b) Relativer Druck (Überdruck) p<sub>e</sub>:</b><br>
p<sub>e</sub> = p<sub>abs2</sub> - p<sub>amb</sub> = 1,0994 bar - 1,013 bar = <b>0,0864 bar = 86,4 mbar</b>`
            },

            {
                name: "Druckanstieg in einem Backofen",
                prompt: `Die Luft in einem Backofen mit den Abmessungen l&nbsp;=&nbsp;45&nbsp;cm, b&nbsp;=&nbsp;40&nbsp;cm und h&nbsp;=&nbsp;35&nbsp;cm wird von 18&nbsp;°C auf 220&nbsp;°C erwärmt.<br>
Der Luftdruck im Ofen beträgt zu Beginn p₁&nbsp;=&nbsp;1,0&nbsp;bar.<br><br>
<b>Berechne:</b><br>
Den Innendruck p₂ in bar am Ende des Aufheizvorgangs, unter der Annahme, dass der Backofen vollkommen dicht ist und keine Luft entweicht <i>(isochore Zustandsänderung)</i>.`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Temperaturen in Kelvin umrechnen:</b><br>
• T₁ = 18 °C + 273,15 = 291,15 K<br>
• T₂ = 220 °C + 273,15 = 493,15 K<br>
• p₁ = 1,0 bar<br><br>
<b>2. Enddruck p₂ berechnen (Isochore Zustandsänderung):</b><br>
p₂ = p₁ · (T₂ / T₁)<br>
p₂ = 1,0 bar · (493,15 K / 291,15 K) = <b>1,69 bar</b> (1,6938 bar)`
            },

            {
                name: "Druckanstieg in einem Autoreifen durch Erwärmung",
                prompt: `Ein Autoreifen weist im kalten Zustand bei einer Temperatur von 18&nbsp;°C einen Überdruck von 2,2&nbsp;bar auf.<br>
Durch längere Autobahnfahrt erwärmt sich die Luft im Reifen auf T₂&nbsp;=&nbsp;58&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Welcher neue Überdruck p<sub>e2</sub> in bar herrscht nach der Erwärmung im Reifen?<br>
(Der Umgebungsdruck beträgt p<sub>amb</sub>&nbsp;=&nbsp;1,0&nbsp;bar; das Reifenvolumen wird als konstant angenommen – isochore Zustandsänderung).`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Temperaturen und absoluten Anfangsdruck bestimmen:</b><br>
• T₁ = 18 °C + 273,15 = 291,15 K<br>
• T₂ = 58 °C + 273,15 = 331,15 K<br>
• p<sub>abs1</sub> = p<sub>e1</sub> + p<sub>amb</sub> = 2,2 bar + 1,0 bar = 3,2 bar<br><br>
<b>2. Absoluten Enddruck p<sub>abs2</sub> berechnen (Isochore Zustandsänderung):</b><br>
p<sub>abs2</sub> = p<sub>abs1</sub> · (T₂ / T₁)<br>
p<sub>abs2</sub> = 3,2 bar · (331,15 K / 291,15 K) = 3,6395 bar<br><br>
<b>3. Neuen Überdruck p<sub>e2</sub> in bar berechnen:</b><br>
p<sub>e2</sub> = p<sub>abs2</sub> - p<sub>amb</sub> = 3,6395 bar - 1,0 bar = <b>2,64 bar</b>`
            },


            {
                name: "Druckanstieg in einem Kart-Reifen",
                prompt: `Ein Kart-Reifen ist im kalten Zustand bei einer Temperatur von 15&nbsp;°C auf einen Überdruck (p<sub>e1</sub>) von 0,65&nbsp;bar aufgepumpt.<br>
Während der Fahrt erwärmt sich der Reifen mit einem Volumen von V&nbsp;=&nbsp;2,9&nbsp;Litern auf 70&nbsp;°C.<br><br>
<b>Berechne:</b><br>
Welcher neue Überdruck p<sub>e2</sub> in bar herrscht nach der Erwärmung im Reifen?<br>
(Der Umgebungsdruck beträgt p<sub>amb</sub>&nbsp;=&nbsp;1,013&nbsp;bar; das Reifenvolumen bleibt konstant – <i>isochore Zustandsänderung</i>).`,
                solution: `<b>Lösungsweg:</b><br>
<b>1. Absolute Temperaturen und absoluten Anfangsdruck bestimmen:</b><br>
• T₁ = 15 °C + 273,15 = 288,15 K<br>
• T₂ = 70 °C + 273,15 = 343,15 K<br>
• p<sub>abs1</sub> = p<sub>e1</sub> + p<sub>amb</sub> = 0,65 bar + 1,013 bar = 1,663 bar<br><br>
<b>2. Absoluten Enddruck p<sub>abs2</sub> berechnen (Isochore Zustandsänderung):</b><br>
p<sub>abs2</sub> = p<sub>abs1</sub> · (T₂ / T₁)<br>
p<sub>abs2</sub> = 1,663 bar · (343,15 K / 288,15 K) = 1,9804 bar<br><br>
<b>3. Neuen Überdruck p<sub>e2</sub> in bar berechnen:</b><br>
p<sub>e2</sub> = p<sub>abs2</sub> - p<sub>amb</sub> = 1,9804 bar - 1,013 bar = <b>0,97 bar</b>`
            }
        ]
    }
    //#endregion
];

window.categories = categories;