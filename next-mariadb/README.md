# Projet Next.js et MariaDB avec docker

1. Créer un dossier pour le projet.
2. Dans ce dossier, copier le fichier `compose.yml`
3. Modifier les éléments qui ont besoin de l'être (comme le nom du conteneur ou les variables d'environnement).
4. Créer un dossier `app` à la racine du projet.
5. Entrer dans le dossier `app` grâce à la commande `cd app` pour y créer le fichier `Dockerfile` (dont on aura copier le contenu du fichier du même nom dans ce repository).
6. Modifier les éléments qui ont besoin de l'être.

> [!NOTE]
> Choisir la version de `node.js` qui correspond à nos besoins.
> Pour ce faire, il faut aller sur la page de Node.js dans [Docker Hub](https://hub.docker.com/_/node).

> [!WARNING]
> Pour créer de nouveaux fichiers / dossiers, il est impératif d'avoir un utilisateur non-root.

> [!NOTE]
> Concernant l'utilisateur non-root, pour récupérer le UID et le GID dans le terminal, il faut faire la commande `id -u && id -g`.
>   
> Cela permettra la commande `RUN chown -R UID:GID /app` en remplaçant les UID et GID par leurs valeurs respectives.

7. Démarrer les conteneurs avec la commande `docker-compose up --build`

> [!NOTE]
> Nous pouvons ajouter `-d` afin que la construction s'effectue en arrière plan.

8. Accéder au conteneur via la commande `docker exec -it nextjs-app bash`

> [!WARNING]
> `nextjs-app` est le nom du conteneur donné dans le fichier `compose.yml`, il faut s'assurer de reprendre le même nom aux 2 endroits.

9. Créer le projet en tapant `npx create-next-app@latest nomDuProjetNext`, cela peut prendre plus ou moind de temps selon la connexion internet.
10. Entrer dans le dossier du projet nouvellement créé avec la commande `npx`
11. Installer un client MySQL (comme mysql2) en tapant `npm install mysql2`, cela permettra l'interraction entre l'application et la base de données MariaDB.
12. Créer un dossier `pages` à la racine du projet (au même niveau que les dossiers `app` ou `src`) et créer à l'intérieur un dossier `api`.
13. Copier le fichier `database.js` du repository dans le répertoire `api` du projet.

> [!WARNING]
> Bien penser à modifier ce qui doit l'être en fonction de ce qu'on a défini au préalable dans les autres fichiers.

14. Nous voici avec la base de notre projet. Nous pouvons le lancer via la commande `npm run dev`

> [!WARNING]
> S'assurer que nous sommes bien dans le conteneur pour lancer les commandes `npm`, sinon ça ne fonctionnera pas.

> [!NOTE]
> Si toutefois, lorsque nous souhaitons retourner dans le conteneur, nous avons une erreur du style `Error response from daemon: container 805111cadea4c650d3ef49401ee30bbed1b2ac2348522ae8999fad14876bec8e is not running`, cela signifie qu'il est coupé. Il suffit alors de faire la commande `docker start nomDeMonConteneur` pour le relancer.
