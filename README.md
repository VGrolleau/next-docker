# Projet Next.js avec docker

1. Créer un dossier pour le projet.
2. Dans ce dossier, copier le fichier Dockerfile.
3. Modifier les éléments qui ont besoin de l'être.

> [!NOTE]
> Choisir la version de `node.js` qui correspond à nos besoins.
> Pour ce faire, il faut aller sur la page de Node.js dans [Docker Hub](https://hub.docker.com/_/node).

> [!WARNING]
> Pour créer de nouveaux fichiers / dossiers, il est impératif d'avoir un utilisateur non-root.

> [!NOTE]
> Concernant l'utilisateur non-root, pour récupérer le UID et le GID dans le terminal, il faut faire :
> - UID : `id -u`
> - GID : `id -g`
>   
> Cela permettra la commande `RUN chown -R UID:GID /app` en remplaçant les UID et GID par leurs valeurs respectives.

4. Créer l'image docker en tapant `docker build -t nomDeMonImage .`
5. Créer le conteneur en faisant `docker run -it --name nomDeMonConteneur -p 3000:3000 -v $(pwd):/app nomDeMonImage`
6. Une fois fait, nous nous trouvons dans un terminal dans le conteneur. Nous allons donc pouvoir créer notre projet en tapant `npx create-next-app@latest nomDuProjetNext`
7. Il ne reste plus qu'à se déplacer dans le projet en faisant `cd nomDuProjetNext` et à le développer.

> [!NOTE]
> Pour s'assurer que le projet fonctionne, même sans retour d'erreur, on peut faire la commande `npm run dev`.

> [!WARNING]
> Ne pas oublier de se mettre dans le conteneur en faisant `docker exec -it nomDeMonConteneur bash` pour lancer les commandes `npm`, sinon ça ne fonctionnera pas.

> [!NOTE]
> Si toutefois, lorsque nous souhaitons retourner dans le conteneur, nous avons une erreur du style `Error response from daemon: container 805111cadea4c650d3ef49401ee30bbed1b2ac2348522ae8999fad14876bec8e is not running`, cela signifie qu'il est coupé. Il suffit alors de faire la commande `docker start nomDeMonConteneur` pour le relancer.
