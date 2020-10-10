# JavaScript évaluation

## Consignes

Vous devez rendre l’intégralité des exercices dans une repertoire github public. Chaque exercice devra comprendre ses fichiers index.js et son index.html. Vous devrez me le remettre sur Slack via le document qui vous sera fournis. Chaque exercice devra être dans un sous-dossier avec comme nom “exercice-1”, “exercice-2” … (pour chaque exercice).

La date du rendu est fixée au lundi 14 octobre à 23h42. Si l’évaluation n’est pas rendu à l’heure sur Slack vous aurez “0”. Vous devez bien entendu essayer de réaliser l’intégralité des exercices. La totalité de cette évaluation est notée sur “20”.

## Exercices

1) Créer une fonction “gridGenerator” prenant les arguments “xAxis” et “yAxis”. Vous devez générer une matrice en “table” html de x * y. Vous devrez colorer aléatoirement chaque case de la grille d’une couleur différente toutes les “1s” à “2s”.

2) Vous devez réaliser une barre de chargement. Cette barre de chargement devra comprendre deux parties, une partie colorée et une partie non colorée pour permettre de repérer le progression de la barre. Vous devrez créer la classe “drawBar” qui prendra deux arguments : “sum” pour la somme totale du nombre et “nbr” pour la proportion du segement chargé de la barre. La barre devra être responsive à “100%” par rapport à la taille totale de son conteneur HTML.

3) Réaliser le jeu du morpion avec une classe “MyMorpionXO”. Vous devez compter les points gagnés. Lorsqu’un des deux joueurs obtient 3 points la phrase “X/O a gagné la partie !” devra apparaître.

4) Vous devez intégrer cette world map à votre strucutre HTML. Le JavaScript devra générer la map suivante avec une méthode “renderWorldMap”. Source : https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg Vous devez permettre avec le survol de la souris de colorer en bleu chaque pays. Vous devez lors d’un clique colorer en rouge le pays ciblé. Vous devez également afficher le nom du pays survolé ou cliqué en bas de la carte comme une légende.

5) Vous devez réaliser un formulaire avec les champs : “nom”, “prénom”, “email”, “password”. Vous devez contrôler chaque champs à l’aide de la classe Regex (native à js). La validation du formulaire devra s’effectuer avec un bouton. Vous devez afficher les erreurs pour chaque champs. Pour construire une Regex utilisez : https://regexr.com/. L’intégralité du formulaire doit être en HTML. Vous devez indiquez les erreurs et la validation pour chaque champs.

6) A l’aide d’une fonction “checkPhoneNumber” vous devez renvoyer “true” si le numéro de téléphone correspond à un 06, 07 et 01. Vous devez utiliser les Regex.

7) Vous devez réaliser une fonction “computeNotes” qui prendra un tableau de notes exemple : “[10, 13, 13, 12, 15, 12, 11, 16, 14]”, vous devrez calculer la moyenne générale au retour de cette méthode.

8) Vous devrez créer une bataille navale en indiquant dans la matrice suivante la position des bateaux : “[[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]”. Lors d’un clique sur une des cases vous devez indiquer la couleur rouge si un bateau à été touché si non la couleur bleu. Vous devez également nommer chaque colonne avec des chiffres et chaque ligne avec des lettres. Un message “vous avez gagné” indiquera que vous avez gagné si tous les bateaux sont coulés. Vous devez aussi afficher à l’écran le nom des bateaux coulés. Exemple : “Porte avion, Frégate”.

9) Vous devrez réaliser la fonction “checkPalindrome” avec un argument “str”. Cette fonction devra renvoyer “true” si le mot ou la phrase peut être inversé et “false” si ce n’est pas le cas. Vous devez prendre en compte les mots et les phrases. Vous devez utiliser les boucles et aucune autres fonctions de JavaScript.