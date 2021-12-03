let img = document.getElementById("produit")
let right_button = document.getElementById("right_button")
let left_button = document.getElementById("left_button")

let description = document.getElementById("description")
let description_liste = ["peluche Teemo toute mignonne UwU",
"Caleçon de chad pour charos des e-girls main support",
"Un bonnet pour vous tenir chaud quand vous serez seul dans le froid d'hiver a pleuré sur un banc après avoir rater vos ds de mathématiques car quelle idée d'avoir inventé les nombres complexes ça porte bien son nom c'est vraiment trop complexe",
"Jolie combinaison de Teemo Abeille qui vous accompagnera dans toutes vos plus belles soirées (je rigole vous êtes jamais invité en soirée)"

]

let nom = document.getElementById("nom_produit")
let nom_list = ["Peluche Teemo",
"Caleçon Teemo",
"Bonnet Teemo",
"Combinaison Teemo"
]

let imgs = ["ressource/5ba35dd655bf4fa121c2c601b0a3e5d3.png", 
"ressource/calebard.png",
"ressource/chapeau-teemo_4.png",
"ressource/combi teemo.png"]
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


}