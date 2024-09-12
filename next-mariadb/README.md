# Projet Next.js et MariaDB avec docker

1. Créer un dossier pour le projet.
2. Dans ce dossier, copier le fichier `Dockerfile`.
3. Modifier les éléments qui ont besoin de l'être.

> [!NOTE]
> Choisir la version de `node.js` qui correspond à nos besoins.
> Pour ce faire, il faut aller sur la page de Node.js dans [Docker Hub](https://hub.docker.com/_/node).

> [!WARNING]
> Pour créer de nouveaux fichiers / dossiers, il est impératif d'avoir un utilisateur non-root.

> [!NOTE]
> Concernant l'utilisateur non-root, pour récupérer le UID et le GID dans le terminal, il faut faire la commande `id -u && id -g`.
>   
> Cela permettra la commande `RUN chown -R UID:GID /app` en remplaçant les UID et GID par leurs valeurs respectives.

4. Copier le fichier `compose.yml` et modifier ce qui a besoin de l'être.
5. Démarrer la construction des conteneurs avec la commande `docker-compose up --build`

> [!NOTE]
> Nous pouvons ajouter `-d` afin que la construction s'effectue en arrière plan.

6. Accéder au conteneur via la commande `docker exec -it nextjs-app bash`

> [!WARNING]
> `nextjs-app` est le nom du conteneur donné dans le fichier `compose.yml`, il faut s'assurer de reprendre le même nom aux 2 endroits.

7. Créer le projet en tapant `npx create-next-app@latest nomDuProjetNext`, cela peut prendre plus ou moind de temps selon la connexion internet.
8. Entrer dans le dossier du projet `nomDuProjetNext` avec la commande `cd nomDuProjetNext`.
9. Installer un client MySQL (comme mysql2) en tapant `npm install mysql2`, cela permettra l'interraction entre l'application et la base de données MariaDB.
10. Créer un dossier `pages` à la racine du projet et mettre à l'intérieur un dossier `api`.
11. Copier le fichier `database.js` du repository dans le répertoire `pages/api` du projet.

> [!WARNING]
> Bien penser à modifier ce qui doit l'être en fonction de ce qu'on a défini au préalable dans les autres fichiers.

12. Nous voici avec la base de notre projet, nous pouvons le lancer via la commande `npm run dev`

> [!WARNING]
> S'assurer que nous sommes bien dans le conteneur pour lancer les commandes `npm`, sinon ça ne fonctionnera pas.

13. Si on souhaite créer une table dans notre base de données, on peut :
    - soit modifier le fichier `pages/api/database.js` pour que ce soit pris en compte au lancement,
    - soit copier le fichier `pages/api/createTable.js` et accéder à `http://localhost:3000/api/createTable` (ou l'URL appropriée) pour déclencher la création de la table.
