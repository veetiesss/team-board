const changetheme = document.querySelector(".changetheme")
const wrapper = document.querySelector(".wrapper")
const pagename = document.querySelectorAll(".pagename")
const changelanguage = document.querySelector(".changelanguage")

changetheme.addEventListener("click", function(){
    document.body.classList.toggle("lightbody")
    wrapper.classList.toggle("lightwrapper")
    pagename.forEach(el => el.classList.toggle("lightpagename"))
    changelanguage.classList.toggle("lightchangelanguage")
})

const form = document.querySelector(".createnewwindow")
const createnewtitle = document.querySelector("#createnewtitle") 
const createnewcontent = document.querySelector("#createnewcontent")
const allnews = document.querySelector(".allnews")

let savednews = JSON.parse(localStorage.getItem("news")) || []

function renderNews() {
    savednews.forEach(item => {
        allnews.innerHTML += `<div class="newinfo">
        <h2 class="newtitle">${item.title}</h2>
        <h2 class="newtime">${item.date}</h2>
        <h2 class="newcontent">${item.content}</h2>
        </div>`
    })
}

renderNews()

form.addEventListener("submit", function(event){
    event.preventDefault()
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1

    let monthname = 1
    if(month === 1){
        monthname = "Januar"
    }
    if(month === 2){
        monthname = "Februar"
    }
    if(month === 3){
        monthname = "März"
    }
    if(month === 4){
        monthname = "April"
    }
    if(month === 5){
        monthname = "Mai"
    }
    if(month === 6){
        monthname = "Juni"
    }
    if(month === 7){
        monthname = "Juli"
    }
    if(month === 8){
        monthname = "August"
    }
    if(month === 9){
        monthname = "September"
    }
    if(month === 10){
        monthname = "Oktober"
    }
    if(month === 11){
        monthname = "November"
    }
    if(month === 12){
        monthname = "Dezember"
    }

    const newitem = {
        title: createnewtitle.value,
        date: `${day}. ${monthname}`,
        content: createnewcontent.value
    }

    savednews.push(newitem)

    localStorage.setItem("news", JSON.stringify(savednews))

    renderNews()

    form.reset()
})

const createnew = document.querySelector(".createnew")
const createnewwindow = document.querySelector(".createnewwindow")

createnew.addEventListener("click", function(){
    createnewwindow.classList.toggle("hidden")
})

const farther = document.querySelectorAll(".farther")

farther.forEach(button => {
    button.addEventListener("click", function(){
        const parent = button.closest(".new")
        const fulltext = parent.querySelector(".fulltext")

        fulltext.classList.toggle("hidden")
        button.classList.toggle("hidden")
    })
})

const newspage = document.querySelector(".newspage")
const surveyspage = document.querySelector(".surveyspage")
const nav = document.querySelector(".nav")
const pensionpackagetitle = document.querySelector(".pensionpackagetitle")
const pensionpackagecontent = document.querySelector(".pensionpackagecontent")
const solarshocktitle = document.querySelector(".solarshocktitle")
const solarshockcontent = document.querySelector(".solarshockcontent")
const difficultdesiciontitle = document.querySelector(".difficultdesiciontitle")
const difficultdesicioncontent = document.querySelector(".difficultdesicioncontent")
const screwloosetitle = document.querySelector(".screwloosetitle")
const screwloosecontent = document.querySelector(".screwloosecontent")
const dahlmeiersdeathtitle = document.querySelector(".dahlmeiersdeathtitle")
const dahlmeiersdeathcontent = document.querySelector(".dahlmeiersdeathcontent")
const afdtitle = document.querySelector(".afdtitle")
const afdcontent = document.querySelector(".afdcontent")
const womanmurdertitle = document.querySelector(".womanmurdertitle")
const womanmurdercontent = document.querySelector(".womanmurdercontent")
const zimmermanndeathtitle = document.querySelector(".zimmermanndeathtitle")
const zimmermanndeathcontent = document.querySelector(".zimmermanndeathcontent")
const shedsfiretitle = document.querySelector(".shedsfiretitle")
const shedsfirecontent = document.querySelector(".shedsfirecontent")
const dojacattitle = document.querySelector(".dojacattitle")
const dojacatcontent = document.querySelector(".dojacatcontent")
const chinatitle = document.querySelector(".chinatitle")
const chinacontent = document.querySelector(".chinacontent")
const bayerntitle = document.querySelector(".bayerntitle")
const bayerncontent = document.querySelector(".bayerncontent")

changelanguage.addEventListener("click", function(){
    nav.classList.toggle("navenglish")
    if(changelanguage.textContent === "EN"){
        changelanguage.textContent = "DEU"
        newspage.textContent = "News"
        surveyspage.textContent = "Surveys"
        pensionpackagetitle.textContent = "Economists are calling for a halt to the planned pension package."
        pensionpackagecontent.innerHTML = `According to a newspaper report, 22 leading economists have issued a joint appeal calling for a halt to the German government's pension reform package. Among the signatories of the document, titled "Withdraw the Pension Package," is Jörg Rocholl, chairman of the Scientific Advisory Board of the Finance Ministry under SPD leader Lars Klingbeil, as reported by Handelsblatt. <br><button class="farther pensionpackagefarther">Weiter lesen</button>      
        `
        solarshocktitle.textContent= "NEWS: State approves solar energy bombshell for homeowners"
        solarshockcontent.innerHTML = `Government Amends Solar Regulations <br>
        The vision has always been clear: affordable solar panels for everyone, so that skyrocketing electricity bills for homeowners finally become a thing of the past. One in three homeowners wants to have a solar panel on their roof by the end of 2025 to escape the pressure of rising electricity prices! Now, policymakers want to address this need and are significantly increasing funding. <br> <br><button class="farther solarshockfarther">Weiter lesen</button> `
        difficultdesiciontitle.textContent= 'Zelenskyy prepares Ukrainians for a "difficult decision"'
        difficultdesicioncontent.innerHTML = `Ukrainian President Volodymyr Zelenskyy has warned his compatriots of a "difficult decision" in light of the conditions proposed by the US for ending the war. "Ukraine could now face a very difficult choice: either to lose its dignity or to risk losing an important partner," Zelenskyy said in a video address posted on Telegram and YouTube. He called it one of "the toughest moments" in Ukraine's history. <br> <button class="farther difficultdesicionfarther">Weiter lesen</button>`
        screwloosetitle.textContent= "This government is crazy"
        screwloosecontent.innerHTML = `Two years ago, Friedrich Merz called Chancellor Olaf Scholz a "plumber of power." Merz was then still the leader of the opposition, and Scholz was trying to cling to power. Unfortunately, Merz's characterization was inaccurate. As a skilled plumber, Olaf Scholz would surely have done something about the foreseeable rising costs due to demographic change, which are slowly eroding the foundations of Germany's social security system like a water leak invisible on the surface. Under Chancellor Merz, however, the situation is worsening. His government's actions threaten to cause an additional burst pipe, delivering the final blow to these foundations.<br><button class="farther screwloosefarther">Weiter lesen</button>`
        dahlmeiersdeathtitle.textContent = "After Laura Dahlmeier's death: Tragic new details revealed"
        dahlmeiersdeathcontent.innerHTML = `Deep sorrow for Laura Dahlmeier: The biathlete, who died in an accident, will remain in the mountains forever. A rescue attempt ended tragically. <br> <br>

        The news of Laura Dahlmeier's fate has shaken the world. The former top biathlete, who died in an accident in the Karakoram Mountains on July 28, will remain in the mountains forever. Her father, Andreas Dahlmeier, confirmed this sad certainty. A rescue attempt, undertaken in cooperation with experienced mountaineers, failed under dramatic circumstances. <br> <button class="farther dahlmeiersdeathfarther">Weiter lesen</button>` 
        afdtitle.textcontent = "The Association of Family Businesses is apparently abandoning its AfD firewall."
        afdcontent.innerHTML = `The Association of Family Businesses has abandoned its strict exclusion of the AfD and its previous firewall strategy. Association President Marie-Christine Ostermann told the Handelsblatt newspaper that the "contact ban" with AfD members of parliament was lifted following the most recent parliamentary evening at the beginning of October. <br> <button class="farther afdfarther">Weiter lesen</button>`
        womanmurdertitle.textContent = "Every ten minutes, a woman in the family is killed."
        womanmurdercontent.innerHTML = `On the International Day for the Elimination of Violence against Women, the United Nations released shocking figures: More than 80,000 women were victims of femicide last year – most of them within their relationships.

        According to United Nations estimates, a woman or girl is killed by fatal violence within a relationship or family approximately every ten minutes. <button class="farther womanmurderfarther">Weiter lesen</button>`
        zimmermanndeathtitle.textContent = '"Gewitter im Kopf": YouTube star dies at 27'
        zimmermanndeathcontent.innerHTML = `For years, Jan Zimmermann shared his experiences living with Tourette syndrome on the YouTube channel "Gewitter im Kopf". Now, the 27-year-old has been found dead in his apartment. <br> <br>

        Since 2019, Jan Zimmermann and his friend Tim Lehmann had been providing entertaining insights into his life with the neurological disorder Tourette syndrome. Their channel, "Gewitter im Kopf," had amassed two million subscribers. Zimmermann was found dead in his apartment in Königswinter, near Bonn. He was only 27 years old.<br> <button class="farther zimmermanndeathfarther">Weiter lesen</button>`
        shedsfiretitle.textContent = "Barn fire causes extensive damage in Langgöns"
        shedsfirecontent.innerHTML = `A barn in a residential area of ​​Langgöns-Dornholzhausen (Gießen) was engulfed in flames last night. The fire department was called to the scene around 9:40 p.m. because a car inside a private workshop was ablaze. The flames spread to the building. The barn's owner was unharmed. The exact cause of the fire is still under investigation. Initial estimates put the damage at around €100,000. In addition to the car workshop, the barn also housed a cider press. <br> <br>

        One car was destroyed in the barn fire. <br> <br>`
        dojacattitle.textContent = "Doja Cat had to cut short their performance after 15 minutes: Fans waited three hours"
        dojacatcontent.innerHTML = `Doja Cat wanted to give her fans in Australia an exclusive club show in a more intimate setting. But the expensive evening turned into a complete disaster. The rapper is struggling with health problems. <br><button class="farther dojacatfarther">Weiter lesen</button>`
        chinatitle.textContent = "China sends rescue capsule to stranded astronauts"
        chinacontent.innerHTML = `Because their predecessors are stuck in space, three Chinese astronauts must hand over their spacecraft at the beginning of November. However, this only postpones the problem: their return to Earth is now blocked. But not for much longer – China is sending an unmanned spacecraft into space. <br><button class="farther chinafarther">Weiter lesen</button>`
        bayerntitle.textcontent = "City employee allegedly stole one million euros from parking meters"
        bayerncontent.innerHTML = `In Kempten, Bavaria, a city employee is accused of stealing money from parking meters. The 40-year-old's bank reported the recurring cash deposits into several accounts. <br> <button class="farther bayernfarther">Weiter lesen</button>`

        const pensionpackagefulltext = document.querySelector(".pensionpackagefulltext")
        const solarshockfulltext = document.querySelector(".solarshockfulltext")
        const difficultdesicionfulltext = document.querySelector(".difficultdesicionfulltext")
        const screwloosefulltext = document.querySelector(".screwloosefulltext")
        const dahlmeiersdeathfulltext = document.querySelector(".dahlmeiersdeathfulltext")
        const afdfulltext = document.querySelector(".afdfulltext")
        const womanmurderfulltext = document.querySelector(".womanmurderfulltext")
        const zimmermanndeathfulltext = document.querySelector(".zimmermanndeathfulltext")
        const dojacatfulltext = document.querySelector(".dojacatfulltext")
        const chinafulltext = document.querySelector(".chinafulltext")
        const bayernfulltext = document.querySelector(".bayernfulltext")

        const pensionpackagefarther = document.querySelector(".pensionpackagefarther")
        pensionpackagefarther.textContent = "Read farther" 
        const solarshockfarther = document.querySelector(".solarshockfarther")
        solarshockfarther.textContent = "Read farther"
        const difficultdesicionfarther = document.querySelector(".difficultdesicionfarther")
        difficultdesicionfarther.textContent = "Read farther"
        const screwloosefarther = document.querySelector(".screwloosefarther")
        screwloosefarther.textContent = "Read farther"
        const dahlmeiersdeathfarther = document.querySelector(".dahlmeiersdeathfarther")
        dahlmeiersdeathfarther.textContent = "Read farther"
        const afdfarther = document.querySelector(".afdfarther")
        afdfarther.textContent = "Read farther"
        const womanmurderfarther = document.querySelector(".womanmurderfarther")
        womanmurderfarther.textContent = "Read farther"
        const zimmermanndeathfarther = document.querySelector(".zimmermanndeathfarther")
        zimmermanndeathfarther.textContent = "Read farther"
        const dojacatfarther = document.querySelector(".dojacatfarther")
        dojacatfarther.textContent = "Read farther"
        const chinafarther = document.querySelector(".chinafarther")
        chinafarther.textContent = "Read farther"
        const bayernfarther = document.querySelector(".bayernfarther")
        bayernfarther.textcontent = "Read farther"


        
  
        pensionpackagefarther.addEventListener("click", function(){

                pensionpackagefulltext.classList.toggle("hidden")
                pensionpackagefarther.classList.toggle("hidden")
                pensionpackagefulltext.innerHTML = `"For stability, reliability, and trust, we need a long-term pension policy that is predictable and fiscally sustainable," the newspaper quoted from the appeal, which is to be published on Monday. "The federal government's planned pension package, consisting of a pension level maintenance measure, mothers' pension, active pension, and early retirement pension, fails to achieve this goal." <br> <br>
        Economists warn of significant strain on public finances
        In a guest article for the newspaper, Rocholl, along with two co-signatories – ifo Institute head Clemens Fuest and board member of the Market Economy Foundation, Michael Eilfort – criticizes the fact that the reform plans will place a significant burden on public finances. "It would be disastrous for trust in politics if decisions were pushed through now that would inevitably have drastic negative financial consequences within just a few years," the economists lament. <br> <br>

        "As long as a convincing reform concept and a viable compromise are lacking, it is better to let the legal status quo remain in place," the economists continue. The pension commission is a suitable framework for "initiating a fiscally sustainable reform." <br> <br>

        The coalition is currently struggling to agree on the pension package approved by the cabinet. Young members of the CDU/CSU parliamentary group are criticizing the plan – also with regard to its financial viability. The Greens announced that they would not approve the government's draft and would submit a counter-proposal. <br> <br>
        `
            })

            solarshockfarther.addEventListener("click", function(){
                solarshockfulltext.classList.toggle("hidden")
                solarshockfarther.classList.toggle("hidden")
                solarshockfulltext.innerHTML = `The Top 3 Advantages of a Solar Power System: <br> <br>

                1. Save on your electricity bill <br>
                A 10 kWp solar power system – commonly found in private households – typically produces 10,000 kWh per year.¹ Much of this goes directly to your own use, saving you hundreds of euros a year on your electricity bill! From day one, high electricity bills are a thing of the past, while your own solar power system produces electricity for you free of charge.<br><br>

                2. Unused electricity can be sold tax-free <br>
                You can easily feed the excess electricity you produce into the grid and receive a feed-in tariff for it. This is tax-free! You don't pay a single cent of income tax on your passive income, which can create a financial cushion all on its own. <br> <br>

                3. Affordable purchase <br>

                Thanks to government regulations, VAT has been completely eliminated for the purchase, delivery, and installation of solar power systems and all related components – including storage batteries. In addition, there are various subsidy programs that offer further, sometimes substantial, financial incentives, depending on the region! Latest adjustments for solar power plants under the Renewable Energy Sources Act (EEG) <br> <br> `

            })

            difficultdesicionfarther.addEventListener("click", function(){
                difficultdesicionfulltext.classList.toggle("hidden")
                difficultdesicionfarther.classList.toggle("hidden")
                difficultdesicionfulltext.innerHTML = `Details of the US 28-point plan for ending the Russian war against Ukraine had previously been leaked. These include conditions that largely correspond to Russian demands. For example, Ukraine must hand over strategically important territories in the Donetsk region to Russia, territories that Russian troops have so far failed to capture. <br> <br>

                Furthermore, the plan stipulates that Ukraine's troop strength will be limited in the future – although at 600,000 soldiers, it will be significantly higher than Russia had demanded. Future NATO membership is to be ruled out, as is the deployment of peacekeeping troops. While Ukraine is to receive certain security guarantees – a key demand of the attacked country – these are not defined in detail in the plan. In return, Russia receives further concessions, such as the lifting of sanctions and the prospect of rejoining the G7. Russia was expelled from the G8 group of industrialized nations after the annexation of Crimea in 2014. <br> <br>  
                `
            screwloosefarther.addEventListener("click", function(){
                screwloosefulltext.classList.toggle("hidden")
                screwloosefarther.classList.toggle("hidden")
                screwloosefulltext.innerHTML = `The news of the past few days can hardly be interpreted any other way: First, Finance Minister Lars Klingbeil pushed through a federal budget in the cabinet, from which he transferred considerable sums to the new special fund. In doing so, he breaks a key promise: The program, specifically enshrined in the Basic Law, was supposed to enable additional investments in infrastructure. Now, expenditures that were previously recorded in the regular budget are appearing there. Some economists estimate that half of the fund's volume is being misappropriated. Younger generations will pay twice for each of these transfers because they have to service the interest without benefiting from the promised "additional" investments. <br> <br>`
            })
            dahlmeiersdeathfarther.addEventListener("click", function(){
                dahlmeiersdeathfulltext.classList.toggle("hidden")
                dahlmeiersdeathfarther.classList.toggle("hidden")
                dahlmeiersdeathfulltext.innerHTML = `Laura Dahlmeier dies after rockfall in mountain accident

                After Laura Dahlmeier's death: Tragic new details revealed. © IMAGO Hope dashed<br><br>

                It was impossible to recover Laura Dahlmeier's body. Her father told Der Spiegel that there was no way to bring her home. "We would have liked to bring Laura home. But it wasn't possible to get her," said Andreas Dahlmeier. The dangerous conditions on Laila Peak prevented any access to the accident site.<br><br>

                Futile search<br>

                Experienced professional mountaineer Thomas Huber and US alpinist Tad McCrea attempted a recovery in September. As Der Spiegel reports, they found no trace of Dahlmeier's body at the accident site. Huber suspects that the body fell down the summit face and now lies in a crevasse at the base of the wall. Despite an intensive search in the crevasses and a large ice hole, no traces were found.<br><br>`
            })
            afdfarther.addEventListener("click", function(){
                afdfulltext.classList.toggle("hidden")
                afdfarther.classList.toggle("hidden")
                afdfulltext.innerHTML = `Ostermann said that "this kind of firewall has never existed before." The association now wants to confront the AfD on its policies. However, this won't be possible if the AfD is discussed solely in terms of "good or evil." Instead, they want to show that AfD politicians are often "substantively vacuous or contradictory." The association's head also said, "despite discussions, we absolutely do not want to see the AfD as a coalition partner in any government." <br><br>

                Debate on how to deal with the AfD in the business world <br>

                The decision by the association, which represents the interests of 180,000 medium-sized companies from all sectors, has drawn sharp criticism in some quarters. The Foundation for Family Businesses, which advocates for the interests of family businesses in politics and the media, does not intend to change its position on extremist parties: Representatives of the AfD or the Left Party would not be invited to events "because their value system largely does not align with that of family businesses," Foundation Board member Rainer Kirchdörfer told Handelsblatt. <br> <br>`
            })
            womanmurderfarther.addEventListener("click", function(){
                womanmurderfulltext.classList.toggle("hidden")
                womanmurderfarther.classList.toggle("hidden")
                womanmurderfulltext.innerHTML = `Last year, approximately 83,000 women worldwide were targeted and murdered – and in around 60 percent of these cases, the perpetrator was a family member or partner, the UN announced on the occasion of the International Day for the Elimination of Violence against Women. In contrast, only 11 percent of homicides against men were committed by intimate partners or family members. <br> <br>

                Femicides are often part of a "continuum of violence," said Sarah Hendriks, Director of Policy at UN Women. It begins with control, threats, and harassment, including online. Every woman and girl has the right to be safe in all aspects of her life. States must do more to prevent these murders and hold perpetrators accountable. <br><br>`
            })
            zimmermanndeathfarther.addEventListener("click", function(){
                zimmermanndeathfulltext.classList.toggle("hidden")
                zimmermanndeathfarther.classList.toggle("hidden")
                zimmermanndeathfulltext.innerHTML = `The deceased was found lifeless on the evening of November 18, as a spokesperson for the Bonn police confirmed to RTL: "We initiated a death investigation, which has already been completed. The autopsy revealed no evidence of foul play." <br><br>

                The "Gewitter im Kopf" videos often addressed Zimmermann's daily life with Tourette syndrome. "Our goal is to talk about it openly, humorously, but also factually, in order to make it more tangible and understandable for everyone," reads the description of the YouTube channel. Zimmermann first discussed his condition in 2019 on the ProSieben program "Galileo." Because the report about him was so well received, he subsequently created his YouTube channel. <br><br>`
            })
            dojacatfarther.addEventListener("click", function(){
                dojacatfulltext.classList.toggle("hidden")
                dojacatfarther.classList.toggle("hidden")
                dojacatfulltext.innerHTML = `Doja Cat is one of the most successful pop rappers of our time. With songs like "Say So" and "Paint The Town Red," she has established herself in the charts worldwide, and her hits are streamed millions of times. She also regularly creates viral moments—both on stage and online. So, anticipation was high when the American artist announced her first major stadium tour in Australia. <br><br>

                The tour was supposed to culminate in an exclusive club show. Although many of her fans shelled out a lot of money for it, they were left disappointed afterward. Because at Doja Cat's concert, not everything went according to plan. <br><br>
                Doja Cat Cuts Short After 15 Minutes <br>

                A special club gig was supposed to be the highlight of the 30-year-old's visit to Australia. However, things didn't go as planned. Instead of intimate star moments and an energetic performance, only a bitter aftertaste remained – due to long waiting times, a record-breakingly short set, and a lack of communication. <br><br>

                Amala Ratna Zandile Dlamini, Doja Cat's real name, performed her only club gig on Sunday evening at "Ms Collins" in central Melbourne. Tickets cost up to 130 Australian dollars, which is roughly equivalent to 78 euros.<br><br>`
            })
            chinafarther.addEventListener("click", function(){
                chinafulltext.classList.toggle("hidden")
                chinafarther.classList.toggle("hidden")
                chinafulltext.innerHTML = `Following an unplanned spacecraft swap at the Tiangong space station, China has launched a new return capsule into space. The unmanned Shenzhou 22 spacecraft lifted off around noon from the Jiuquan Satellite Launch Center in the Gobi Desert of northwest China, the China Manned Space Agency announced. The craft, carrying food and spare parts, is scheduled to dock with Tiangong, where it will be met by the three-person crew of the Shenzhou 21 mission.<br><br>

                This gives Zhang Lu, Wu Fei, and Zhang Hongzhang a way to return to Earth. They had only begun their approximately six-month stay in space at the beginning of November. Upon arrival, they had to hand over their spacecraft to their predecessors from the Shenzhou 20 mission, which had become stranded in space—the first incident of its kind in the history of Tiangong. Tiangong means "Heavenly Palace" in Chinese.<br><br>

                The "Shenzhou 20" crew was originally scheduled to return to Earth on November 5th in their spacecraft of the same name. However, cracks in the window, which Chinese space experts believe were caused by a collision with small pieces of space debris, have delayed the return indefinitely.<br><br>`
            })
            bayernfarther.addEventListener("click", function(){
                bayernfulltext.classList.toggle("hidden")
                bayernfarther.classList.toggle("hidden")
                bayernfulltext.innerHTML = `A city employee from Kempten, Bavaria, is alleged to have stolen coins worth approximately one million euros from parking meters. The 40-year-old was responsible for emptying municipal parking meters at the city's maintenance depot, as announced by police and prosecutors in Kempten on Monday. He is accused of removing coins from the parking meters in hundreds of instances. <br><br>

                Investigators became aware of the case in early October following a money laundering report filed by a bank. The bank had noticed recurring cash deposits into several of the man's accounts. His 38-year-old wife also had access to these accounts.<br><br>

                An investigating judge issued an arrest warrant for the city employee on charges of theft in 720 cases and for his wife on charges of aiding and abetting. The investigation is ongoing.<br><br>`
            })
            })
    } else {
        changelanguage.textContent ="EN"
        newspage.textContent = "Ankündigungen"
        surveyspage.textContent = "Umfragen"
        pensionpackagetitle.textContent = "Ökonomen fordern Stopp des geplanten Rentenpakets"
        pensionpackagecontent.innerHTML = `22 führende Ökonomen plädieren laut einem Zeitungsbericht in einem gemeinsamen Appell für einen Stopp des Rentenpakets der Bundesregierung. Zu den Unterzeichnern des Papiers mit dem Titel "Rentenpaket zurückziehen" zählt auch der Vorsitzende des Wissenschaftlichen Beirats des Finanzministeriums von SPD-Chef Lars Klingbeil, Jörg Rocholl, wie das Handelsblatt berichtet. <br><button class="farther pensionpackagefarther">Weiter lesen</button>     
        `
        solarshocktitle.textContent = "NEUIGKEITEN: Staat beschließt Solar-Paukenschlag Für Hausbesitzer"
        solarshockcontent.innerHTML = `Staat ändert Solar-Vorgaben <br>
        Die Vision war immer klar: Eine günstige Solaranlage für alle, damit explodierende Stromrechnungen für Hausbesitzer endlich der Vergangenheit angehören. Jeder dritte Hausbesitzer möchte bis Ende 2025 eine Solaranlage auf dem Dach haben, um dem Druck steigender Strompreise zu entgehen! Diesem Bedürfnis möchte die Politik nun Rechnung tragen und füllt die Fördertöpfe randvoll auf. <br> <button class="farther solarshockfarther">Weiter lesen</button>`
        difficultdesiciontitle.textContent = 'Selenskyj schwört Ukrainer auf "schwierige Entscheidung" ein'
        difficultdesicioncontent.innerHTML = `Der ukrainische Präsident Wolodymyr Selenskyj hat seine Landsleute angesichts der von den USA vorgeschlagenen Bedingungen für ein Kriegsende vor einer "schwierigen Entscheidung" gewarnt. "Die Ukraine könnte jetzt vor einer sehr schwierigen Wahl stehen, entweder ihre Würde zu verlieren oder das Risiko einzugehen, einen wichtigen Partner zu verlieren", sagte Selenskyj in einer auf Telegram und Youtube veröffentlichten Videoansprache. Es sei einer "der härtesten Momente" in der Geschichte der Ukraine. <br> <button class="farther difficultdesicionfarther">Weiter lesen</button>`
        screwloosetitle.textContent = "Diese Regierung hat eine Schraube locker"
        screwloosecontent.innerHTML = `Die Nachrichten der vergangenen Tage lassen sich jedenfalls anders kaum bewerten: Erst brachte Finanzminister Lars Klingbeil einen Bundeshaushalt durchs Kabinett, aus dem er erhebliche Summen in das neue Sondervermögen umgebucht hat. Damit bricht er ein zentrales Versprechen: Das eigens im Grundgesetz verankerte Programm sollte zusätzliche Investitionen in die Infrastruktur ermöglichen. Nun tauchen dort Ausgaben auf, die zuvor noch im regulären Haushalt verbucht waren. Manche Ökonomen schätzen, dass die Hälfte des Fondsvolumens zweckentfremdet wird. Die jüngeren Generationen werden für jede dieser Buchungen doppelt bezahlen, weil sie die Zinsen bedienen müssen, ohne von den versprochenen "zusätzlichen" Investitionen zu profitieren. <br> <button class="farther screwloosefarther">Weiter lesen</button>`
        dahlmeiersdeathtitle.textContent = "Nach Laura Dahlmeiers Tod: Tragische neue Details enthüllt"
        dahlmeiersdeathcontent.innerHTML = `Große Trauer um Laura Dahlmeier: Die verunglückte Biathletin bleibt für immer in den Bergen. Ein Bergungsversuch endete dramatisch.<br> <br>

        Die Nachricht über das Schicksal von Laura Dahlmeier erschüttert die Welt. Die ehemalige Spitzenbiathletin, die am 28. Juli im Karakorum-Gebirge verunglückte, bleibt für immer in den Bergen. Andreas Dahlmeier, ihr Vater, bestätigte diese traurige Gewissheit. Ein Bergungsversuch, der in Zusammenarbeit mit erfahrenen Alpinisten unternommen wurde, scheiterte unter dramatischen Umständen.<br> <button class="farther dahlmeiersdeathfarther">Weiter lesen</button>`
        afdtitle.textContent = "Verband der Familienunternehmer gibt offenbar AfD-Brandmauer auf"
        afdcontent.innerHTML = `Der Verband der Familienunternehmer hat seine strenge Ausgrenzung der AfD und die bisherige Brandmauer-Strategie aufgegeben. Verbandspräsidentin Marie-Christine Ostermann sagte dem Handelsblatt, das "Kontaktverbot" zu AfD-Bundestagsabgeordneten sei mit dem jüngsten parlamentarischen Abend Anfang Oktober aufgehoben worden. <br> <button class="farther afdfarther">Weiter lesen</button>`
        womanmurdertitle.textContent = "Alle zehn Minuten wird eine Frau in der Familie getötet"
        womanmurdercontent.innerHTML = `Am "Internationalen Tag gegen Gewalt an Frauen" veröffentlichen die Vereinten Nationen erschreckende Zahlen: Mehr als 80.000 Frauen sind im vergangenen Jahr Opfer von Femiziden geworden - die meisten von ihnen in ihrer Partnerschaft. <br><br>
                    
        Etwa alle zehn Minuten wird nach Schätzungen der Vereinten Nationen eine Frau oder ein Mädchen zum Opfer tödlicher Gewalt innerhalb der Beziehung oder Familie. <br><button class="farther womanmurderfarther">Weiter lesen</button>`
        zimmermanndeathtitle.textContent = '"Gewitter im Kopf": Youtube-Star stirbt mit 27 Jahren'
        zimmermanndeathcontent.innerHTML = `Auf dem Youtube-Kanal "Gewitter im Kopf" klärt Jan Zimmermann jahrelang über sein Leben mit dem Tourette-Syndrom auf. Nun wird der 27-Jährige tot in seiner Wohnung aufgefunden. <br> <br>

        Seit 2019 gewährte Jan Zimmermann gemeinsam mit seinem Kumpel Tim Lehmann unterhaltsam Einblicke in sein Leben mit der neurologischen Krankheit Tourette. Zwei Millionen Abonnenten hatte ihr Kanal "Gewitter im Kopf" zuletzt. Nun ist Zimmermann tot in seiner Wohnung in Königswinter bei Bonn aufgefunden worden. Er wurde nur 27 Jahre alt.<br> <button class="farther zimmermanndeathfarther">Weiter lesen</button>`
        shedsfiretitle.textContent = "Scheunenbrand mit hohem Schaden in Langgöns"
        shedsfirecontent.innerHTML = `Lichterloh gebrannt hat gestern Abend eine Scheune in einem Wohngebiet in Langgöns-Dornholzhausen (Gießen). Gegen 21.40 Uhr wurde die Feuerwehr zu dem Brandort gerufen, weil ein Auto in der dort eingerichteten privaten Werkstatt in Vollbrand stand. Die Flammen griffen auf das Gebäude über. Der Besitzer der Scheune blieb unverletzt. Wie genau das Auto Feuer fing, wird noch ermittelt. Laut ersten Schätzungen liegt der Schaden bei rund 100.000 Euro. Neben der Autowerkstatt befand sich in der Scheune auch eine Kelterei. <br> <br>

        Ein Auto wurde bei dem Scheunenbrand zerstört. <br> <br> `
        dojacattitle.textContent = "Doja Cat muss Auftritt nach 15 Minuten abbrechen: Fans warteten drei Stunden"
        dojacatcontent.innerHTML = `Doja Cat wollte ihren Fans in Australien eine exklusive Clubshow in einem intimeren Rahmen ermöglichen. Doch wurde der kostspielige Abend zu einem einzigen Reinfall. Die Rapperin kämpfte mit gesundheitlichen Problemen. <br><button class="farther dojacatfarther">Weiter lesen</button>`
        chinatitle.textContent = "China schickt Rettungskapsel zu festsitzenden Astronauten"
        chinacontent.innerHTML = `Weil ihre Vorgänger im All festsitzen, müssen drei chinesische Astronauten Anfang November ihr Raumschiff abtreten. Das Problem aber verschiebt sich damit nur: Nun ist ihnen der Weg zurück zur Erde verbaut. Doch nicht mehr lange - China schickt ein unbemanntes Raumschiff ins All. <br><button class="farther chinafarther">Weiter lesen</button>`
        bayerntitle.textContent = "Stadtmitarbeiter soll eine Million Euro aus Parkautomaten gestohlen haben"
        bayerncontent.innerHTML = `Im bayerischen Kempten wird ein Mitarbeiter der Stadt beschuldigt, Geld aus Parkautomaten entwendet zu haben. Die Bank des 40-Jährigen hatte die wiederkehrenden Bargeldeinzahlungen auf mehrere Konten gemeldet. <br> <button class="farther bayernfarther">Weiter lesen</button>`


        const pensionpackagefulltext = document.querySelector(".pensionpackagefulltext")
        const solarshockfulltext = document.querySelector(".solarshockfulltext")
        const difficultdesicionfulltext = document.querySelector(".difficultdesicionfulltext")
        const screwloosefulltext = document.querySelector(".screwloosefulltext")
        const dahlmeiersdeathfulltext = document.querySelector(".dahlmeiersdeathfulltext")
        const afdfulltext = document.querySelector(".afdfulltext")
        const womanmurderfulltext = document.querySelector(".womanmurderfulltext")
        const zimmermanndeathfulltext = document.querySelector(".zimmermanndeathfulltext")
        const dojacatfulltext = document.querySelector(".dojacatfulltext")
        const chinafulltext = document.querySelector(".chinafulltext")
        const bayernfulltext = document.querySelector(".bayernfulltext")

        const pensionpackagefarther = document.querySelector(".pensionpackagefarther")
        pensionpackagefarther.textContent = "Weiter lesen"
        const solarshockfarther = document.querySelector(".solarshockfarther")
        solarshockfarther.textContent = "Weiter lesen"
        const difficultdesicionfarther = document.querySelector(".difficultdesicionfarther")
        difficultdesicionfarther.textContent = "Weiter lesen"
        const screwloosefarther = document.querySelector(".screwloosefarther")
        screwloosefarther.textContent = "Weiter lesen"
        const dahlmeiersdeathfarther = document.querySelector(".dahlmeiersdeathfarther")
        dahlmeiersdeathfarther.textContent = "Weiter lesen"
        const afdfarther = document.querySelector(".afdfarther")
        afdfarther.textContent = "Weiter lesen"
        const womanmurderfarther = document.querySelector(".womanmurderfarther")
        womanmurderfarther.textContent = "Weiter lesen"
        const zimmermanndeathfarther = document.querySelector(".zimmermanndeathfarther")
        zimmermanndeathfarther.textContent = "Weiter lesen"
        const dojacatfarther = document.querySelector(".dojacatfarther")
        dojacatfarther.textContent = "Weiter lesen"
        const chinafarther = document.querySelector(".chinafarther")
        chinafarther.textContent = "Weiter lesen"
        const bayernfarther = document.querySelector(".bayernfarther")
        bayernfarther.textContent = "Weiter lesen"

        pensionpackagefarther.addEventListener("click", function(){

                pensionpackagefulltext.classList.toggle("hidden")
                pensionpackagefarther.classList.toggle("hidden")
                pensionpackagefulltext.innerHTML = `"Für Stabilität, Verlässlichkeit und Vertrauen braucht es eine Rentenpolitik mit langem Atem, die berechenbar und fiskalisch nachhaltig ist", zitierte die Zeitung aus dem Aufruf, der am Montag veröffentlicht werden soll. "Das geplante Rentenpaket der Bundesregierung, bestehend aus Rentenniveauhaltelinie, Mütterrente, Aktivrente und Frühstartrente, verfehlt dieses Ziel."
                 <br> <br>
        Volkswirte warnen vor erheblicher Belastung für die öffentlichen Finanzen In einem Gastbeitrag für die Zeitung kritisiert Rocholl gemeinsam mit zwei Mitunterzeichnern – ifo-Chef Clemens Fuest und Vorstand der Stiftung Marktwirtschaft, Michael Eilfort –, dass die Reformpläne die öffentlichen Finanzen erheblich belasten. "Es wäre für das Vertrauen in die Politik fatal, wenn jetzt Entscheidungen durchgedrückt würden, die bereits in wenigen Jahren zwangsläufig drastische negative finanzielle Folgen hätten", beklagen die Wirtschaftswissenschaftler. <br> <br>

       "Solange es an einem überzeugenden Reformkonzept sowie einem tragfähigen Ausgleich fehlt, ist es besser, den gesetzlichen Status quo wirken zu lassen", schreiben die Ökonomen weiter. Die Rentenkommission sei ein geeigneter Rahmen, um "eine fiskalisch nachhaltige Reform in die Wege zu leiten". <br> <br>

        Die Koalition ringt derzeit um das vom Kabinett beschlossene Rentenpaket. Junge Unionsabgeordnete kritisieren den Plan – ebenfalls mit Blick auf die Finanzierbarkeit. Die Grünen kündigten an, sie würden dem Entwurf der Regierung nicht zustimmen und legten einen Gegenvorschlag vor.<br> <br>
        `
            })
        solarshockfarther.addEventListener("click", function(){

            solarshockfulltext.classList.toggle("hidden")
            solarshockfarther.classList.toggle("hidden")
            solarshockfulltext.innerHTML = `Die Top 3 Vorteile einer Solaranlage:<br> <br>
                1. Sparen bei der Stromrechnung<br>
                Eine Solaranlage mit 10 kWp Leistung - häufig vertreten in privaten Haushalten - produziert in der Regel 10.000 kWh im Jahr¹ Vieles davon fließt direkt in Ihren Eigenbedarf und spart Ihnen Hunderte Euro im Jahr bei Ihrem Stromanbieter! Ab dem ersten Tag entfallen hohe Stromrechnungen, während Ihre eigene Solaranlage für Sie kostenlos Strom produziert<br> <br>
                2. Nicht genutzter Strom kann steuerfrei verkauft werden<br>
                Den überschüssig produzierten Strom können Sie ganz einfach in das Stromnetz einspeisen und erhalten dafür noch eine Einspeisevergütung. Das ist steuerfrei! Sie zahlen also keinen Cent Einkommensteuer auf Ihr passives Einkommen, das Ihnen ganz von allein ein finanzielles Polster schaffen kann.<br> <br>
                3. Günstige Anschaffung<br>
                ‍Dank staatlicher Beschlüsse wurde die Mehrwertsteuer für den Kauf, die Lieferung sowie die Montage von Solaranlagen und allen zugehörigen Teilen vollkommen gestrichen - dazu gehören auch die Speicherbatterien. Zusätzlich gibt es verschiedene Förderprogramme, die je nach Region weitere, teils enorme finanzielle Anreize bieten!
                Neueste Anpassungen für Solaranlagen nach dem  Erneuerbaren-Energien-Gesetz (EEG) <br> <br>
            `
        })
        difficultdesicionfarther.addEventListener("click", function(){
            difficultdesicionfulltext.classList.toggle("hidden")
            difficultdesicionfarther.classList.toggle("hidden")
            difficultdesicionfulltext.innerHTML = `Zuvor waren Details des 28-Punkte-Plans der USA für ein Ende des russischen Krieges gegen die Ukraine bekannt geworden. Sie umfassen unter anderem Bedingungen, die weitgehend russischen Forderungen entsprechen. So müsse die Ukraine strategisch bedeutende Gebiete in der Region Donezk an Russland übergeben, an deren Eroberung die russischen Truppen bisher gescheitert waren. <br> <br>

                Zudem soll die Truppenstärke der Ukraine laut dem Plan künftig begrenzt werden – wenngleich mit 600.000 Soldaten auf einem deutlich höheren Niveau als Russland es gefordert hatte. Ein künftiger Nato-Beitritt soll ausgeschlossen werden, die Stationierung von Friedenstruppen zur Absicherung des Friedens ebenfalls. Zwar soll die Ukraine bestimmte Sicherheitsgarantien erhalten – eine Kernforderung des angegriffenen Landes –, diese werden in dem Plan aber nicht näher definiert. Russland erhält dafür weitere Zugeständnisse, wie etwa den Abbau von Sanktionen sowie die Perspektive, wieder in die G7 aufgenommen zu werden. Aus der damaligen Industriestaatengruppe G8 war Russland nach der Annexion der Krim 2014 ausgeschlossen worden. <br> <br>`

        })
        screwloosefarther.addEventListener("click", function(){
            screwloosefulltext.classList.toggle("hidden")
            screwloosefarther.classList.toggle("hidden")
            screwloosefulltext.innerHTML = `Die Nachrichten der vergangenen Tage lassen sich jedenfalls anders kaum bewerten: Erst brachte Finanzminister Lars Klingbeil einen Bundeshaushalt durchs Kabinett, aus dem er erhebliche Summen in das neue Sondervermögen umgebucht hat. Damit bricht er ein zentrales Versprechen: Das eigens im Grundgesetz verankerte Programm sollte zusätzliche Investitionen in die Infrastruktur ermöglichen. Nun tauchen dort Ausgaben auf, die zuvor noch im regulären Haushalt verbucht waren. Manche Ökonomen schätzen, dass die Hälfte des Fondsvolumens zweckentfremdet wird. Die jüngeren Generationen werden für jede dieser Buchungen doppelt bezahlen, weil sie die Zinsen bedienen müssen, ohne von den versprochenen "zusätzlichen" Investitionen zu profitieren. <br> <br>`
        })
        dahlmeiersdeathfarther.addEventListener("click", function(){
            dahlmeiersdeathfulltext.classList.toggle("hidden")
            dahlmeiersdeathfarther.classList.toggle("hidden")
            dahlmeiersdeathfulltext.innerHTML = `Laura Dahlmeier stirbt nach Steinschlag bei Bergunglück
                Nach Laura Dahlmeiers Tod: Tragische neue Details enthüllt. © IMAGO
                Hoffnung zerschlagen <br> <br>
                Es war unmöglich, den Leichnam von Laura Dahlmeier zu bergen. Ihr Vater erklärte dem „Spiegel“, dass es keine Möglichkeit gab, sie nach Hause zu bringen. „Wir hätten Laura gern nach Hause gebracht. Aber es war nicht möglich, sie zu holen”, sagte Andreas Dahlmeier. Die gefährlichen Bedingungen am Laila Peak verhinderten jeglichen Zugang zur Unfallstelle.<br> <br>

                Vergebliche Suche <br>
                Der erfahrene Profibergsteiger Thomas Huber und der US-Alpinist Tad McCrea unternahmen im September einen Bergungsversuch. Wie „Spiegel“ berichtet, fanden sie keine Spur von Dahlmeiers Leichnam an der Unfallstelle. Huber vermutet, dass der Körper die Gipfelwand hinuntergestürzt und nun in einer Gletscherspalte am Fuß der Wand liegt. Trotz intensiver Suche in den Gletscherspalten und einem großen Eisloch wurden keine Spuren gefunden.<br> <br>`
        })
        afdfarther.addEventListener("click", function(){
            afdfulltext.classList.toggle("hidden")
            afdfarther.classList.toggle("hidden")
            afdfulltext.innerHTML = `Ostermann sagte, dass es ohnehin "diese Art der Brandmauer noch nie gegeben" habe. Der Verband wolle die AfD nun inhaltlich stellen. Das gelinge aber nicht, wenn man ausschließlich in den "Kategorien gut oder böse" über die AfD spreche. Man wolle stattdessen zeigen, dass AfD-Politiker häufig "inhaltlich blank oder widersprüchlich" seien. Die Verbandschefin sagte auch, "dass wir trotz Gesprächen eine AfD auf keinen Fall als Koalitionspartner in einer Regierung sehen wollen".<br> <br>


                Debatte über Umgang mit AfD in der Wirtschaft<br>
                Die Entscheidung des Verbands, der die Interessen von 180.000 mittelständischen Firmen aus sämtlichen Branchen vertritt, trifft teils auf scharfe Kritik. Die Stiftung Familienunternehmen, die sich in Politik und Medien für die Anliegen der Familienunternehmen einsetzt, möchte ihre Position zu extremen Parteien nicht ändern: Vertreter der AfD oder der Linken würden nicht zu Veranstaltungen eingeladen, "weil deren Wertebasis in weiten Teilen nicht zu der von Familienunternehmen passt", sagte Stiftungsvorstand Rainer Kirchdörfer dem Handelsblatt.<br> <br>  `
        })
        womanmurderfarther.addEventListener("click", function(){
            womanmurderfulltext.classList.toggle("hidden")
            womanmurderfarther.classList.toggle("hidden")
            womanmurderfulltext.innerHTML = ` Im vergangenen Jahr seien weltweit etwa 83.000 Frauen gezielt umgebracht worden - und in rund 60 Prozent der Fälle sei der Täter ein Familienmitglied oder Lebenspartner gewesen, teilten die UN anlässlich des "Internationalen Tags gegen Gewalt an Frauen" mit. Im Gegensatz dazu seien nur elf Prozent der Tötungsdelikte an Männern von Intimpartnern oder Familienangehörigen begangen worden. <br><br>
                    
                    Femizide seien oft Teil eines "Kontinuums von Gewalt", sagte Sarah Hendriks, Direktorin der Politikabteilung von UN Women. Es beginne mit Kontrolle, Drohungen und Belästigungen, auch online. Jede Frau und jedes Mädchen habe das Recht, in allen Bereichen ihres Lebens sicher zu sein. Die Staaten müssten mehr tun, um die Morde zu verhindern und Täter zur Rechenschaft ziehen. <br><br>`
        })
        zimmermanndeathfarther.addEventListener("click", function(){
            zimmermanndeathfulltext.classList.toggle("hidden")
            zimmermanndeathfarther.classList.toggle("hidden")
            zimmermanndeathfulltext.innerHTML = `Der Verstorbene wurde am 18. November in den Abendstunden leblos aufgefunden, wie ein Sprecher der Bonner Polizei RTL gegenüber bestätigte: "Wir haben ein Todesermittlungsverfahren eingeleitet, das bereits abgeschlossen ist. Nach der Obduktion ergaben sich keine Hinweise auf ein Fremdverschulden."<br> <br>

                In den "Gewitter im Kopf"-Videos wurde oft Zimmermanns Alltag mit Tourette thematisiert. "Unser Ziel ist es, offen, humorvoll aber auch sachlich darüber zu sprechen, um es somit für alle greifbarer und verständlicher zu machen", heißt es in der Beschreibung des Youtube-Kanals. Zimmermann hatte seine Erkrankung erstmals 2019 in der ProSieben-Sendung "Galileo" thematisiert. Weil die Reportage über ihn so gut ankam, gründete er im Nachgang seinen Youtube-Kanal.<br> <br>`
        })
        dojacatfarther.addEventListener("click", function(){
            dojacatfulltext.classList.toggle("hidden")
            dojacatfarther.classList.toggle("hidden")
            dojacatfulltext.innerHTML = ` Doja Cat gehört zu den erfolgreichsten Pop-Rapperinnen der Gegenwart. Mit Songs wie "Say So" oder "Paint The Town Red" hat sie sich weltweit in den Charts etabliert, ihre Hits werden millionenfach gestreamt. Zudem sorgt sie regelmäßig für virale Momente – auf der Bühne wie online. Umso größer war die Vorfreude, als die US-Amerikanerin ihre erste große Stadiontour in Australien ankündigte. <br> <br>

                Gekürt werden sollte das Ganze von einer exklusiven Show in einem Club. Obwohl viele ihrer Fans dafür tief in die Tasche griffen, blieben sie hinterher enttäuscht zurück. Denn bei Doja Cats Konzert lief längst nicht alles wie geplant. <br> <br>

                Doja Cat bricht Auftritt nach 15 Minuten ab <br>
                Ein besonderer Club-Gig sollte das Highlight des Australien-Besuchs der 30-Jährigen werden. Am Ende kam jedoch alles anders. Statt nahbarer Star-Momenten und einer energiegeladenen Performance blieb nur ein fader Beigeschmack – wegen langer Wartezeiten, rekordverdächtig kurzer Spielzeit und fehlender Kommunikation. <br> <br>

                So hatte Amala Ratna Zandile Dlamini, wie Doja Cat mit bürgerlichem Namen heißt, am Sonntagabend ihren einzigen Club-Auftritt im "Ms Collins" im Zentrum Melbournes. Die Tickets kosteten bis zu 130 australische Dollar, was umgerechnet etwa 78 Euro entspricht. <br> <br>`
        })
        chinafarther.addEventListener("click", function(){
            chinafulltext.classList.toggle("hidden")
            chinafarther.classList.toggle("hidden")
            chinafulltext.innerHTML = `Nach einem ungeplanten Raumschiff-Tausch auf der Weltraumstation "Tiangong" hat China eine neue Rückkehrkapsel ins All geschickt. Das unbemannte Raumschiff "Shenzhou 22" hob um die Mittagszeit vom Weltraumbahnhof Jiuquan in der nordwestchinesischen Wüste Gobi ab. Das teilte die Behörde für bemannte Raumfahrt mit. Das Gefährt mit Lebensmitteln und Ersatzteilen an Bord soll an der "Tiangong" andocken, wo es von der dreiköpfigen Crew der "Shenzhou 21"-Mission erwartet wird. <br> <br> 

                Damit haben Zhang Lu, Wu Fei und Zhang Hongzhang wieder eine Rückkehrmöglichkeit zur Erde. Sie hatten erst Anfang November ihren rund sechsmonatigen Aufenthalt im All angetreten. Nach ihrer Ankunft hatten sie ihr Raumschiff an ihre Vorgänger der Mission "Shenzhou 20" abtreten müssen, die im All gestrandet waren - der erste Vorfall dieser Art in der Geschichte der "Tiangong". "Tiangong" bedeutet auf chinesisch "Himmelspalast". <br> <br> 

                Die "Shenzhou 20"-Crew sollte eigentlich am 5. November mit ihrem gleichnamigen Raumschiff wieder zur Erde fliegen. Doch Risse im Fenster, die nach Annahme der chinesischen Raumfahrtexperten durch den Zusammenprall mit kleinen Weltraumschrottteilen entstanden waren, hatten die Rückkehr zunächst auf unbestimmte Zeit verzögert. <br> <br>`
        })
        bayernfarther.addEventListener("click", function(){
            bayernfulltext.classList.toggle("hidden")
            bayernfarther.classList.toggle("hidden")
            bayernfulltext.innerHTML = ` Ein Stadtmitarbeiter aus dem bayerischen Kempten soll Münzen im Gesamtwert von rund einer Million Euro aus Parkautomaten gestohlen haben. Der 40-Jährige war beim städtischen Betriebshof für die Leerung kommunaler Parkscheinautomaten zuständig, wie Polizei und Staatsanwaltschaft in Kempten am Montag mitteilten. Dabei soll er aus den Parkscheinautomaten in hunderten Fällen Münzgeld entnommen haben. <br> <br>

                Die Ermittler wurden Anfang Oktober durch eine Geldwäscheverdachtsanzeige einer Bank auf den Fall aufmerksam. Dort waren wiederkehrende Bargeldeinzahlungen auf mehrere Konten des Manns aufgefallen. Über die Konten war auch die 38-jährige Ehefrau des Manns verfügungsberechtigt. <br> <br>

                Ein Ermittlungsrichter erließ Haftbefehl gegen den städtischen Angestellten wegen Diebstahls in 720 Fällen und gegen die Ehefrau wegen Beihilfe. Die Ermittlungen dauerten an. <br> <br>`
        })
    }
})