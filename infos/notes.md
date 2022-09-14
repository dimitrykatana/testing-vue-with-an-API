npm init vue@latest

Le jeu se déclinera sous un format plateau, représentant un parcours-type de jeu de l’Oie (une soixantaine de cases).  Le parcours est composé de 37 cases quizz thématique + de 12 cases « challenge » dont le but est d’introduire des mécaniques ludiques pour susciter l’adhésion des différentes catégories de joueurs (exemples : possibilité de mise,  faire passer un tour, joker, quitte ou double, etc.).  Les cases seront numérotées et elles obéiront à un code couleur qui correspond à une thématique :
gris = questions théoriques  ;
vert = questions domaine économique ; 
bleu  = questions domaine publique/politique
orange = questions domaine domestique.  


Composant pour le dé:
- Les joueurs évolueront avec un dé reprenant 4 faces avec chiffres (1,2,3,4), 1 face « challenge » ( qui possède ce signe: "?" et qui sera potentiellement un numéro 5) et 1 face blanche qui signifie (passe ton tour avec ce signe "☹". 

- Le dé est lancé virtuellement (par les joueurs ou l’animateur) via une appli. En fonction de la face sur laquelle tombe le dé, le pion avance sur la case correspondante.

- prochaine étape: "vérifié si la case actuelle a déja été utilisé ou pas. Si c'est le cas on va à la case x+1 sinon on va à la case x-1, si les 2 sont remplies ont restera alors sur la case x.

