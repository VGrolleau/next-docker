# Projet Next.js, Prisma et PostgreSQL avec docker

## Initialisation du projet

1. Créer un dossier pour le projet.
2. Dans ce dossier, copier le fichier `Dockerfile`
3. Modifier les éléments qui ont besoin de l'être.

> [!WARNING]
> Il est important de choisir une version de Node.js qui permet l'installation de `OpenSSL`, sans cela il y aura des problèmes avec la migration de Prisma.
> Pour ce faire, il faut aller sur la page de Node.js dans [Docker Hub](https://hub.docker.com/_/node).

> [!WARNING]
> Pour créer de nouveaux fichiers / dossiers, il est impératif d'avoir un utilisateur non-root.

> [!NOTE]
> Concernant l'utilisateur non-root, pour récupérer le UID et le GID dans le terminal, il faut faire la commande `id -u && id -g`.
>   
> Cela permettra la commande `RUN chown -R UID:GID /app` en remplaçant les UID et GID par leurs valeurs respectives.

4. Copier le fichier `compose.yml` pour orchestrer le projet avec Prisma et PostgreSQL.
5. Construire les conteneurs avec la commande `docker-compose up --build -d`
6. Accéder au conteneur via la commande `docker exec -it nextjs-app bash`

> [!WARNING]
> `nextjs-app` est le nom du conteneur donné dans le fichier `compose.yml`, il faut s'assurer de reprendre le même nom aux 2 endroits.

7. Créer le projet en tapant `npx create-next-app@latest nomDuProjetNext`, cela peut prendre plus ou moins de temps selon la connexion internet.
8. Entrer dans le dossier du projet `nomDuProjetNext` avec la commande `cd nomDuProjetNext`.

## Initialisation de Prisma

1. Installer les dépendances nécessaires pour Prisma grâce aux commandes
```
npm install prisma --save-dev
npm install @prisma/client
```
2. Initialiser Prisma en exécutant `npx prisma init`
3. Modifier le fichier `prisma/schema.prisma` juste créé en récupérant celui présent dans ce repository.
4. Dans le fichier `.env` (créé lors de l'initialisation de Prisma), modifier la variable `DATABASE_URL` pour qu'elle corresponde à `DATABASE_URL="postgresql://postgres:password@db:5432/nextjsdb"`

> [!NOTE]
> `postgresql` : base de données utilisée
>
> `postgres` : utilisateur défini dans le fichier `compose.yml`
>
> `password` : mot de passe utilisé pour l'utilisateur et défini dans le fichier `compose.yml`
>
> `db` : nom du service défini dans le fichier `compose.yml` et qui gère la base de données
>
> `5432` : port de la base de données
>
> `nextjsdb` : nom de la base de données défini dans le fichier `compose.yml`

5. Migrer la base de données en tapant `npx prisma migrate dev --name init`, cela créera les tables (correspondantes aux modèles dans le fichier `prisma/schema.prisma`) dans la base de données MariaDB.

## Démarrage de l'application

1. Si nécessaire, redémarrer les conteneurs via `docker-compose up -d`
2. Nous voici avec la base de notre projet. Nous pouvons le lancer via la commande `npm run dev`

> [!WARNING]
> S'assurer que nous sommes bien dans le conteneur pour lancer les commandes `npm`, sinon ça ne fonctionnera pas.
