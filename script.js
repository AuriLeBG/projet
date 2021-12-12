//Imagine y'a pas de fonction native pour arrondir au centieme 
function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  }

//Menu
let accueil_button = document.getElementById("menu_accueil")
let presentation_button = document.getElementById("menu_presentation")
let produit_button = document.getElementById("menu_produit")
let contact_button = document.getElementById("menu_contact")
let payement_button = document.getElementById("menu_payement")
let page = "index"

accueil_button.onclick = function(){
    document.getElementById(page).style.display = "none";
    page = "index"
    document.getElementById(page).style.display = "block";
}

presentation_button.onclick = function(){
    document.getElementById(page).style.display = "none";
    page = "presentation"
    document.getElementById(page).style.display = "block";
}

produit_button.onclick = function(){
    document.getElementById(page).style.display = "none";
    page = "produit_service"
    document.getElementById(page).style.display = "block";
}

contact_button.onclick = function(){
    document.getElementById(page).style.display = "none";
    page = "contact"
    document.getElementById(page).style.display = "block";
}

let facture = document.getElementById("facture")
let prix_final = document.getElementById("prix_final")
let produit_image = document.getElementById("produit_image")
payement_button.onclick = function(){
    document.getElementById(page).style.display = "none";
    page = "payement"
    document.getElementById(page).style.display = "block";
    let affichage = ""
    let prix_total = 0
    for (let i = 0; i < commande.length; i ++) {
        if (commande[i][1] < 0){
            commande[i][1] = commande[i][1]*(-1)
        }
        affichage += nom_list[commande[i][0]] + "&nbsp : &nbsp" + commande[i][1] + "&nbsp * &nbsp" + prix_list[commande[i][0]] + "€ &nbsp = &nbsp" + roundUp(prix_list[commande[i][0]] * commande[i][1], 2) +  "$<br><br>"
        prix_total += prix_list[commande[i][0]] * commande[i][1]
    }
    prix_final.innerHTML = "Prix total : " + roundUp(prix_total, 2) + "€"
    facture.innerHTML = affichage
}

//Produits
let img = document.getElementById("produit")
let right_button = document.getElementById("right_button")
let left_button = document.getElementById("left_button")

let description = document.getElementById("description")
let description_liste = ["peluche Teemo toute mignonne UwU",
"Caleçon de chad pour charos des e-girls main support",
"Un bonnet pour vous tenir chaud quand vous serez seul dans le froid d'hiver a pleuré sur un banc après avoir rater vos ds de mathématiques car quelle idée d'avoir inventé les nombres complexes ça porte bien son nom c'est vraiment trop complexe",
"Jolie combinaison de Teemo Abeille qui vous accompagnera dans toutes vos plus belles soirées (je rigole vous êtes jamais invité en soirée)",
"Pins tout choupi pour customisé votre eastpak, je sais que vous avez un eastpak, tout le monde a un eastpak (aucune personnalité la honte xd)",
"What a banger",
"T'aurais préféré un dakimakura, petit filou",
"Comme ça, chaque personne qui viendra dans ta chambre verra que tu es quelqu'un de détestable (comme si des gens entraient dans ta chambre ahahah)"
]

let nom = document.getElementById("nom_produit")
let nom_list = ["Peluche Teemo",
"Caleçon Teemo",
"Bonnet Teemo",
"Combinaison Teemo",
"Pins Teemo Abeille",
"Captain Teemo (hit)",
"coussin Teemo",
"pop Teemo"
]

let imgs = ["ressource/5ba35dd655bf4fa121c2c601b0a3e5d3.png", 
"ressource/calebard.png",
"ressource/chapeau-teemo_4.png",
"ressource/combi teemo.png",
"ressource/pins.jpg",
"ressource/captainTeemo.jpg",
"ressource/coussin.png",
"ressource/pop.png"]

let prix = document.getElementById("prix_produit")
let prix_list =[
    19.99,
    12.99,
    14.99,
    79.99,
    6.99,
    2.99,
    12.99,
    14,99
]

let nombre_commande = document.getElementById("nombre_produit") 
let commande_button = document.getElementById("valider")
let commande = []


commande_button.onclick = function(){
    let test = false
    for (let i = 0; i < commande.length; i ++){
        if(commande[i][0] == nombre){
            commande[i][1] = nombre_commande.value
            test = true
        }
    }




    if(test == false){
        commande.push([nombre, nombre_commande.value])
        let image = document.createElement("img")
        image.setAttribute("src", imgs[nombre])
        image.style.width = "50px"
        image.style.height = "50px"
        image.style.marginTop = "13px"
        produit_image.appendChild(image)
    }
}


let nombre = 0
left_button.onclick = function(){
    if(nombre != 0){
        nombre = nombre - 1
    }
    else{
        nombre = imgs.length - 1
    }
    img.setAttribute("src", imgs[nombre]);
    description.innerHTML = description_liste[nombre];
    nom.innerHTML = nom_list[nombre];
    prix.innerHTML = prix_list[nombre] + " euros";
    
}

img.onclick = function(){
    if (nombre == 5){
        window.open("https://www.youtube.com/watch?v=JO1EkZaYHTw", '_blank');
    }
}

right_button.onclick = function(){
    if(nombre != imgs.length - 1){
        nombre += 1 }
    else{
        nombre = 0
    }
    img.setAttribute("src", imgs[nombre]);
    description.innerHTML = description_liste[nombre];
    nom.innerHTML = nom_list[nombre];
    prix.innerHTML = prix_list[nombre] + " euros";
}

//panier

let panier = document.getElementById("caddy")
let affichage_panier = document.getElementById("texte_panier")
panier.onmouseover = function(){
    document.getElementById("div_panier").style.height = (commande.length * 25) + 70 + "px";
    let affichage = "panier : <br>"
    let prix_total = 0
    if (commande.length != 0){
        document.getElementById("div_panier").style.display = "block";
        for (let i = 0; i < commande.length; i ++) {
            if (commande[i][1] < 0){
                commande[i][1] = commande[i][1]*(-1)
            }
            affichage += nom_list[commande[i][0]] + " : " + commande[i][1] + "*" + prix_list[commande[i][0]] +  "€ <br>"
            prix_total += prix_list[commande[i][0]] * commande[i][1]
        }
        affichage += "<br> prix total = " + roundUp(prix_total, 2) + "€"
        affichage_panier.innerHTML = affichage
    }
}

panier.onmouseleave = function(){
    document.getElementById("div_panier").style.display = "none";
}

let boutton_payement = document.getElementById("boutton_payement")


boutton_payement.onclick = function(){
    window.open("https://www.youtube.com/watch?v=NAyyEHQAO0I", '_blank');
}

// fonction pour le menu déroulant

let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function(){
    menutoggle.classList.toggle("active")
}