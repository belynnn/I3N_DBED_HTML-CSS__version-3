// Script bouton déroulant pour formulaire
const accordionBtns = document.querySelectorAll(".dropdown-bouton");

accordionBtns.forEach((dropdown) => {
dropdown.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
    // Si le bouton déroulant est ouvert
    content.style.maxHeight = null;
    } else {
    // Si le bouton déroulant est actuellement fermé
    content.style.maxHeight = content.scrollHeight + "px";
    console.log(content.style.maxHeight);
    };
};
});

/////// Script exercice 01
function returnFormExo1(){
    var nom = document.getElementById("nom").value; // Demande d'entrer son nom de famille
    var prenom = document.getElementById("prenom").value; // Demande d'entrer son prénom
    var adresse = document.getElementById("adresse").value; // Demande d'entrer son adresse (rue+num)
    var code_postal_localite = document.getElementById("code_postal_localite").value; // Demande d'entrer son code postal + localité
    var e_mail = document.getElementById("e_mail").value; // Demande d'entrer son adresse mail
    var telephone = document.getElementById("telephone").value; // Demande d'entrer son numéro de téléphone

    // Message personnalisé qui reprend les informations entrées par l'utilisateur
    document.getElementById("reponseFormExo1").innerHTML = "Bonjour "+prenom+" "+nom+",<br>Vous recevrez votre exemplaire ''JavaScript pour les nuls'' à l'adresse suivante :<br>- "+adresse+"<br>- "+code_postal_localite+"<br>Vous êtes également inscrit à notre newsletter via l'adresse mail :<br>- "+e_mail+"<br>Vous allez recevoir un code promotionnel par SMS d'ici peu au numéro suivant :<br>- "+telephone+"<br>Vous pourrez utiliser ce code lors de votre prochain achat sur notre plateforme.<br>Une information s'avère inexacte ? N'hésitez pas à prendre contact auprès de notre service après-vente.<br>Au plaisir de vous revoir !";
};

function resetFormExo1(){ // Reset le formulaire
    document.getElementById("reponseFormExo1").innerHTML = "";
};

/////// Script exercice 02
function returnFormExo2(){
    var prixArticle = document.getElementById("prixArticle").value; // Demande le prix de l'article
    var quantiteArticle = document.getElementById("quantiteArticle").value; // Demande le nombre d'article
    var tauxTVA = document.getElementById("tauxTVA").value; // Demande le taux de TVA de l'article
    var total = prixArticle*quantiteArticle ; // Calcul le total HTVA
    var totalTva = total+(total*(tauxTVA/100)); // Calcul le total TVAC
    var totalTva = totalTva.toFixed(2); // Affiche 2 chiffres après la virgule
    document.getElementById("reponseFormExo2").innerHTML = "Le montant total de vos achats s'élève à "+totalTva+" € TVAC.";
};
function resetFormExo2(){
    document.getElementById("reponseFormExo2").innerHTML= "";
};


function returnFormExo3(){
    var nbrUser01 = document.getElementById("nbrUser01").value;
    var nbrUser02 = document.getElementById("nbrUser02").value;
    var somme=nbrUser01+nbrUser02;
    var difference=nbrUser01-nbrUser02;
    var quotient=nbrUser01/nbrUser02;
    var produit=nbrUser01*nbrUser02;

    document.getElementById("reponseFormExo3").innerHTML = "La somme de ces nombres vaut : "+somme+"<br>La difference de ces nombres vaut : "+difference+"<br>La quotient de ces nombres vaut : "+quotient+"<br>La produit de ces nombres vaut : "+produit;
};
function resetFormExo3(){
    document.getElementById("reponseFormExo3").innerHTML="";
};


function returnFormExo4(){
    var nbreUser = document.getElementById("nbreUser").value;
        if(nbreUser > 10){
            document.getElementById("reponseFormExo4").innerHTML = "Le nombre "+nbreUser+" est plus grand que 10.";
        }
        else if (nbreUser < 10)
        {
            document.getElementById("reponseFormExo4").innerHTML = "Le nombre "+nbreUser+" est plus petit que 10.";
        }
        else if (nbreUser == 10){
            document.getElementById("reponseFormExo4").innerHTML = "Ce nombre est égal à 10.";
        }
        else {
            document.getElementById("reponseFormExo4").innerHTML = "Merci d'entrer un nombre.";
        };
};
function resetFormExo4(){
    document.getElementById("reponseFormExo4").innerHTML="";
};



function returnFormExo5(){

    var anneeUser = document.getElementById("anneeUser").value;
        if ((anneeUser % 4 === 0 && anneeUser % 100 !== 0) || (anneeUser % 400 === 0)){
            document.getElementById("reponseFormExo5").innerHTML = "L'année "+anneeUser+" est bissextile.";
        } else {
            document.getElementById("reponseFormExo5").innerHTML = "L'année "+anneeUser+" n'est pas bissextile.";
        };
};
function resetFormExo5(){
    document.getElementById("reponseFormExo5").innerHTML="";
};


function returnFormExo6(){
    var anneeNaissance = document.getElementById("anneeNaissance").value;
    var date = new Date();
    var anneeActuelle = date.getFullYear();
    var ageUser = anneeActuelle-anneeNaissance;
        if(ageUser<=0){
            document.getElementById("reponseFormExo6").innerHTML = "Vous êtes certainement en cours de conception.";
        }
        else if(ageUser<18){
            document.getElementById("reponseFormExo6").innerHTML = "Vous n'êtes pas encore majeur.";
        }
        else if(ageUser>=18 && ageUser<=49){
            document.getElementById("reponseFormExo6").innerHTML = "Vous êtes majeur mais pas encore senior.";
        }
        else if(ageUser>=50 && ageUser<=64){
            document.getElementById("reponseFormExo6").innerHTML = "Vous êtes senior mais par encore retraité.";
        }
        else if(ageUser>=65 && ageUser<=105){
            document.getElementById("reponseFormExo6").innerHTML = "Vous êtes retraité, profitez du temps qu'il vous reste...";
        }
        else if(ageUser>=105){
            document.getElementById("reponseFormExo6").innerHTML = "Vous êtes probablement mort... Désolé de vous l'apprendre.";
        }
        else{
            document.getElementById("reponseFormExo6").innerHTML = "Veuillez entrer un nombre.";
        };
};
function resetFormExo6(){
    document.getElementById("reponseFormExo6").innerHTML = "";
};


function returnFormExo7(){
    var choixUser = document.getElementById("choixUser").value.toLowerCase();
        switch(choixUser){
            case "oui":
                document.getElementById("reponseFormExo7").innerHTML = "Vous avez entré oui.";
            break;
            case "non":
                document.getElementById("reponseFormExo7").innerHTML = "Vous avez entré non.";
            break;
            default:
                alert("Uniquement oui ou non s'il vous plaît.");
                document.getElementById("reponseFormExo7").innerHTML = "Veuillez entrer unique \"oui\ ou \"non\".";
        };
};
function resetFormExo7(){
    document.getElementById("reponseFormExo7").innerHTML="";
};


function returnFormExo8(){
    var choix = document.getElementById("choix").value;
    switch(choix){
        case "1" :
            document.getElementById("reponseFormExo8").innerHTML = "Bravo, vous savez ouvrir un tiroir.";
        break;
        case "2" :
            document.getElementById("reponseFormExo8").innerHTML = "Vous avez découvert le Mordor.";
        break;
        case "3" :
            document.getElementById("reponseFormExo8").innerHTML = "Une araignée s'échapper suite à l'ouverture de ce tiroir ! Vous poussez cri aigu ! Votre ami se met à rire aux éclats !";
        break;
        case "4" :
            document.getElementById("reponseFormExo8").innerHTML = "Fatalement, en ouvrant ce tiroir, vous avez dû vous baisser. CQFD.";
        break;
        case "5" :
            document.getElementById("reponseFormExo8").innerHTML = "Vous découvrez un tiroir vide.";
        break;
        case "6" :
            document.getElementById("reponseFormExo8").innerHTML = "Bizarrement, ce tiroir ne s'ouvre pas.";
        break;
        case "7" :
            document.getElementById("reponseFormExo8").innerHTML = "Vous découvrez une lettre de votre grand-mère disant que vous vous êtes un.e sorcier.ère et que vous êtes convié à Poudlard l'année prochaine ! Yayyy !!!";
        break;
        case "8" :
            document.getElementById("reponseFormExo8").innerHTML = "Vous découvrez une entrée secrète qui amène dans une grotte sous-marine et y découvrez l'existence des Pokémons !";
        break;
        default :
            document.getElementById("reponseFormExo8").innerHTML = "Les instructions indiquaient clairement, je cite \"Entre 1 et 8\"...";
        };
};
function resetFormExo8(){
    document.getElementById("reponseFormExo8").innerHTML="";
};


function returnFormExo8b(){
    var bonus = document.getElementById("bonus").value.toLowerCase();
    switch(bonus){
        case "farine":
            document.getElementById("reponseFormExo8b").innerHTML = "La farine vaut 1,00€ le kg.";
        break;
        case "banane":
            document.getElementById("reponseFormExo8b").innerHTML = "Les bananes valent 0,49€ le kg.";
        break;
        case "orange":
            document.getElementById("reponseFormExo8b").innerHTML = "Les oranges valent 0,49€ le kg.";
        break;
        case "bouteille d'eau":
            document.getElementById("reponseFormExo8b").innerHTML = "La bouteille d'eau vaut 0,29€ le litre.";
        break;
        case "papier toilette":
            document.getElementById("reponseFormExo8b").innerHTML = "Le papier toilette vaut 0,15€ l'unité.";
        break;
        case "barre chocolatée":
            document.getElementById("reponseFormExo8b").innerHTML = "Les barres chocolatées valent 0,10€ l'unité.";
        break;
        default:
            document.getElementById("reponseFormExo8b").innerHTML = "Désolé, nous n'avons plus de/d' "+bonus+"(s/x) en stock.";
    };
};
function resetFormExo8b(){
    document.getElementById("reponseFormExo8b").innerHTML = "";
};

// Exercice 09 : La boucle while
    // var i = 0;
    // while(i<10){
    //     alert("i contient la valeur "+i);
    //     i++;
    // }
    function boucleWhile(){
        var i = 1;
        while(i<10){
            alert("i contient la valeur "+i);
            i++;
        };
    };


// Exercice 10 : La boucle do.. while
    // var choixUser = 0;
    // do{
    //    choixUser = Number(prompt("Veuillez entre le chiffre 1 :"));
    // }
    // while(choixUser!=1);

    function boucleDoWhile(){
        var choixUser = 0;
        do{
        choixUser = Number(prompt("Veuillez entré le chiffre 1 :"));
        }
        while(choixUser!=1);
    };
    


// Exercice 11 : La boucle for
    // var nbreUser = Number(prompt("Entrer un nombre"));
    // var msg = "";
    // for (i=(nbreUser+1);i<(nbreUser+16);i++){
    //     msg+="i vaut: "+i+"\n";
    // }
    // alert(msg);

    function loopFor(){
        var numUser = Number(prompt("Entrer un nombre."));
        var count ="\n";
    
            for(i=numUser+1;i<=numUser+15;i++){
                count=count+i+" ";
            }
            alert("Les 15 nombres suivants sont :"+count);
    };


// Exercice 12 : Changer la couleur de fond
    function changeCouleur(){
        var r = document.getElementById("sliderR").value;
        var v = document.getElementById("sliderV").value;
        var b = document.getElementById("sliderB").value;

        document.body.style.backgroundColor = "rgb("+r+","+v+","+b+")";
    };



// Exerice 13 : Test de mot de passe
    function verificationMdp(){
        var mdpUser = document.getElementById("mdp").value;

        if (mdpUser.length>=6 && mdpUser.match(/[A-Z]/g) && mdpUser.match(/[0-9]/g) && mdpUser.match(/[^a-zA-Z\d]/g)){
            document.getElementById("autorisation").innerHTML = " Créé";
            document.getElementById("autorisation").style.color = "green";
        }

        else{
            document.getElementById("autorisation").innerHTML = " Invalide";
            document.getElementById("autorisation").style.color = "red";
        };
    };


    function verificationCaracteres(){
        var mdpUser = document.getElementById("mdp").value;

        if(mdpUser.length>=6){
            document.getElementById("retourLenght").innerHTML = "Longueur : OK";
            document.getElementById("retourLenght").style.color = "green";
        }
        else{
            document.getElementById("retourLenght").innerHTML = "Longueur : Votre mot de passe n'est pas assé long.";
            document.getElementById("retourLenght").style.color = "red";
        }

        if(mdpUser.match(/[A-Z]/g)){
            document.getElementById("retourMaj").innerHTML = "Majuscule : OK";
            document.getElementById("retourMaj").style.color = "green";
        }
        else{
            document.getElementById("retourMaj").innerHTML = "Majuscule : Votre mot de passe doit contenir au moins 1 majuscule.";
            document.getElementById("retourMaj").style.color = "red";
        }

        if(mdpUser.match(/[0-9]/g)){
            document.getElementById("retourChiffre").innerHTML = "Chiffre : OK";
            document.getElementById("retourChiffre").style.color = "green";
        }
        else{
            document.getElementById("retourChiffre").innerHTML = "Chiffre : Votre mot de passe doit contenir au moins 1 chiffre.";
            document.getElementById("retourChiffre").style.color = "red";
        }

        if(mdpUser.match(/[^a-zA-Z\d]/g)){
            document.getElementById("retourSpecial").innerHTML = "Caractère spécial : OK";
            document.getElementById("retourSpecial").style.color = "green";
        }
        else{
            document.getElementById("retourSpecial").innerHTML = "Caractère spécial : Votre mot de passe doit contenir au moins 1 caractère spécial.";
            document.getElementById("retourSpecial").style.color = "red";
        }

        document.getElementById("retourValid2").innerHTML = msg;
    };


    function resetFormMdp(){
        document.getElementById("reponseForm").innerHTML = "";
        document.getElementById("autorisation").innerHTML = "";
        document.getElementById("retourLenght").innerHTML = "";
        document.getElementById("retourMaj").innerHTML = "";
        document.getElementById("retourChiffre").innerHTML = "";
        document.getElementById("retourSpecial").innerHTML = "";
    };



// DEFIS

function nbEntAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function defis01(){

    var nbIA=nbEntAleatoire(1, 100);
    var nbEssais=6;
    
    alert("L'IA maléfique de ce site à sélectionner un nombre aléatoire entre 1 et 100.\nArriveras-tu à le trouver ?\nAttention, tu n'as que 6 chances...")
    //alert(nbreOrdi)

    while (nbIA!=nbUser && nbEssais!==0){

        var nbUser=Number(prompt("Entre un nombre entre 1 et 100."));
        nbEssais--;

        if (nbIA==nbUser){
            alert("Nice, tu as vaincu l'IA maléfique !");    
        }
        else if (nbIA<nbUser){
            alert("Le nombre est plus petit.\nATTENTION - Il ne te reste plus que "+nbEssais+" essais");
        }
        else{
            alert("Le nombre est plus grand.\nATTENTION - Il ne te reste plus que "+nbEssais+" essais");
        };
    };
    if (nbEssais===0 && nbIA!=nbUser){
        alert("GAME OVER ! \nLe nombre était "+nbIA+" !\nL'IA maléfique continuera de sévire éternellement..."); 
    };
};



// ?????????????????????????
// const input = document.querySelector('input');
// input.addEventListener('keyup', (e) => {
//     if(e.keyCode === 13) {
//         console.log(e.target.value);
//     };
// });


//Exercice 01 : Demande et affichage de nom et prénom - avec prompt
// var prenom = prompt("Veuillez entrer votre prénom");
// var nom = prompt("Veuillez entrer votre nom");
// var userName = prenom+" "+nom; 

// alert("Bonjour "+userName+". \nComment allez-vous ?");

//Exercice 01 : Demande et affichage de nom et prénom - Avec fonctions et prompt
// function bonjourPrenom(){
//     var prenom = prompt("Veuillez entrer votre prénom");
//     var nom = prompt("Veuillez entrer votre nom");
//     var userName = prenom+" "+nom; 

//     alert("Bonjour "+userName+". \nComment allez-vous ?");
// };


        

//Exercice 02 : Calcul du prix
// var prixArticle = Number(prompt("Quel est le prix de l'article ?"));
// var quantiteArticle = Number(prompt("Combien d'exemplaires désirez-vous acheter?"));
// var tauxTVA = Number(prompt("Quel est le taux de TVA (en %) ?"));
// var prixTotal = prixArticle*quantiteArticle*(1+tauxTVA/100);

// alert("Le montant total de vos achats s'élève à : "+prixTotal+"€");

// function calculPrix(){
//     var prixArticle = Number(prompt("Quel est le prix de l'article ?"));
//     var quantiteArticle = Number(prompt("Combien d'exemplaires désirez-vous acheter?"));
//     var tauxTVA = Number(prompt("Quel est le taux de TVA (en %) ?"));
//     var prixTotal = prixArticle*quantiteArticle*(1+tauxTVA/100);

//     alert("Le montant total de vos achats s'élève à : "+prixTotal+"€");
// };



// function returnForm2(){
//     var prixArticle = document.getElementById("prixArticle").value;
//     var nbrexArticle = document.getElementById("nbrexArticle").value;
//     var tva = document.getElementById("tva").value;
//     var total = prixArticle*nbrexArticle ;
//     var totalTva = total+(total*(tva/100));

//     document.getElementById("responseForm2").innerHTML = "Le montant total de vos achats s'élève à "+totalTva+"€ TVAC";
// }
// function resetForm2(){
//     document.getElementById("responseForm2").innerHTML="";
// }


// Exercice 03 : Opérations de base
// var nbrUser01 = Number(prompt("Veuillez entrer un premier nombre:"));
// var nbrUser02 = Number(prompt("Veuillez entrer un second nombre:"));
// var somme=nbrUser01+nbrUser02;
// var difference=nbrUser01-nbrUser02;
// var quotient=nbrUser01/nbrUser02;
// var produit=nbrUser01*nbrUser02;

// alert("La somme de ces nombres vaut : "+somme);
// alert("La difference de ces nombres vaut : "+difference);
// alert("La quotient de ces nombres vaut : "+quotient);
// alert("La produit de ces nombres vaut : "+produit);

// function operationBase(){
//     var nbrUser01 = Number(prompt("Veuillez entrer un premier nombre:"));
//     var nbrUser02 = Number(prompt("Veuillez entrer un second nombre:"));
//     var somme=nbrUser01+nbrUser02;
//     var difference=nbrUser01-nbrUser02;
//     var quotient=nbrUser01/nbrUser02;
//     var produit=nbrUser01*nbrUser02;

//     alert("La somme de ces nombres vaut : "+somme);
//     alert("La difference de ces nombres vaut : "+difference);
//     alert("La quotient de ces nombres vaut : "+quotient);
//     alert("La produit de ces nombres vaut : "+produit);
// };



// Exercice 04 : Première condition
// var nbreUser = Number(prompt("Entrer un nombre"));
// if(nbreUser > 10){
//     alert("Ce nombre est plus grand que 10");
// }

// else if (nbreUser < 10)
// {
//     alert("Ce nombre est plus petit que 10");
// }

// else if (nbreUser === 10){
//     alert("Ce nombre est égal à 10");
// }

// else {
//     alert("Merci d'entrer un nombre.");
// }


// function premiereCondition(){
// var nbreUser = Number(prompt("Entrer un nombre"));
//     if(nbreUser > 10){
//         alert("Ce nombre est plus grand que 10");
//     }

//     else if (nbreUser < 10)
//     {
//         alert("Ce nombre est plus petit que 10");
//     }

//     else if (nbreUser === 10){
//         alert("Ce nombre est égal à 10");
//     }

//     else {
//         alert("Merci d'entrer un nombre.");
//     };
// };

// Exercice 05 : Bissextile
    // var anneeUser = Number(prompt("Entrer une année"));
    // if ((anneeUser % 4 === 0 && anneeUser % 100 !== 0) || (anneeUser % 400 === 0)) {
    // 	alert("l'année "+anneeUser+" est bissextile");
    // } else {
    // 	alert("l'année "+anneeUser+" n'est pas bissextile");
    // }
    // function bissextile(){
    //     var anneeUser = Number(prompt("Entrer une année"));
    //     if ((anneeUser % 4 === 0 && anneeUser % 100 !== 0) || (anneeUser % 400 === 0)) {
    //         alert("l'année "+anneeUser+" est bissextile");
    //     } else {
    //         alert("l'année "+anneeUser+" n'est pas bissextile");
    //     };
    // };


// Exercice 06 : Commentaire sur l'âge
    // var anneeNaissance = Number(prompt("Entrer votre année de naissance"))
    // var date = new Date();
    // var anneeActuelle = date.getFullYear();
    // var ageUser = anneeActuelle-anneeNaissance;

    // if(ageUser<18){
    //     alert("Vous n'êtes pas encore majeur.");
    // }
    // else if(ageUser>=18 && ageUser<50){
    //     alert("Vous êtes majeur mais pas sénior.");
    // }
    // else if(ageUser>=50 && ageUser<65){
    //     alert("Vous êtes sénior mais pas encore retraité.");
    // }
    // else{
    //     alert("Vous êtes retraité, profitez de votre temps libre.");
    // };

    // function commentAge(){ 
    //     var anneeNaissance = Number(prompt("Entrer votre année de naissance"));
    //     var date = new Date();
    //     var anneeActuelle = date.getFullYear();
    //     var ageUser = anneeActuelle-anneeNaissance;
    
    //     if(ageUser<=0){
    //         alert("Vous êtes certainement en cours de conception.");
    //     }
    //     else if(ageUser<18){
    //         alert("Vous n'êtes pas encore majeur.");
    //     }
    //     else if(ageUser>=18 && ageUser<=49){
    //         alert("Vous êtes majeur mais pas encore senior.");
    //     }
    //     else if(ageUser>=50 && ageUser<=64){
    //         alert("Vous êtes senior mais par encore retraité.");
    //     }
    //     else if(ageUser>=65 && ageUser<=105){
    //         alert("Vous êtes retraité, profitez du temps qu'il vous reste...");
    //     }
    //     else{
    //         alert("Vous êtes probablement mort... Désolé de vous l'apprendre.");
    //     }
    // }


// Exercice 07 : Oui ou non ? (switch)
    // var choixUser = prompt("Ecrire 'oui ou 'non'").toLowerCase();
    // switch(choixUser){
    //     case "oui":
    //         alert("Vous avez entré oui");
    //     break;
    //     case "non":
    //         alert("Vous avez entré non");
    //     break;
    //     default:
    //         alert("Uniquement oui ou non svp");
    // };

    // function ouiOuNon(){
    //     var choixUser = prompt("Ecrire 'oui ou 'non'").toLowerCase();
    //     switch(choixUser){
    //         case "oui":
    //             alert("Vous avez entré oui.");
    //         break;
    //         case "non":
    //             alert("Vous avez entré non.");
    //         break;
    //         default:
    //             alert("Uniquement oui ou non s'il vous plaît.");
    //     };
    // };



// Exercice 08 : Les tiroirs
    // var choixUser = Number(prompt("Quel tiroir (de 1 à 4), voulez-vous ouvrir ?"));   
    // switch(choixUser){
    //     case 1:
    //         alert("Vous trouvez une vieille paire de chaussettes aparemment portée pendant plusieurs jours.");
    //     break;
    //     case 2:
    //         alert("Vous trouvez une paire de menottes à frou-frou rose et un martinet");
    //     break;
    //     case 3:
    //         alert("Vous trouvez un lingot d'or");
    //     break;
    //     case 4:
    //         alert("Vous trouvez un vieu CD de Linkin Park");
    //     break;
    //     default:
    //         alert("Entre 1 et 4 on a dit. Et les tiroirs négatifs n'existent pas...");
    // };

    // function tiroirs(){
    //     var choix = Number(prompt("Quel tiroir voulez-vous ouvrir ? (entre 1 et 8)"))
    //     switch(choix){
    //     case 1 :
    //     alert("Bravo, vous savez ouvrir un tiroir.");
    //     break;
    //     case 2 :
    //     alert("Vous avez découvert le Mordor.");
    //     break;
    //     case 3 :
    //     alert("Une araignée s'échapper suite à l'ouverture de ce tiroir. Vous poussez cri aigu. Votre compagnon se fout de votre tronche.");
    //     break;
    //     case 4 :
    //     alert("Fatalement, en ouvrant ce tiroir, vous avez dû vous baisser. CQFD.");
    //     break;
    //     case 5 :
    //     alert("Vous découvrez un tiroir vide.");
    //     break;
    //     case 6 :
    //     alert("Bizarrement, ce tiroir ne s'ouvre pas.");
    //     break;
    //     case 7 :
    //     alert("Vous découvrez une lettre de votre grand-mère disant qu'elle vous a jeté un sort.");
    //     break;
    //     case 8 :
    //     alert("Depuis quand il existe des étagères avec autant de tiroirs ? C'est légèrement relou...");
    //     break;
    //     default :
    //     alert("Entre 1 et 8, avez des problèmes pour suivre des instructions simple ?")
    //     }
    // }


// BONUS
    // function bonus(){
    //     var bonus = prompt("Veuillez écrire 'carotte' ou 'banane' ou un autre mot, en minuscule.").toLowerCase();
    //     switch(bonus){
    //         case "carotte":
    //             alert("Les carottes valent 0,59€ le kg.");
    //         break;
    //         case "banane":
    //             alert("Les bananes valent 0,69€ le kg");
    //         break;
    //         default:
    //             alert("Désolé.e, nous n'avons plus de/d' "+bonus+"(s/x) en stock.");
    //     };
    // };