# Utiliser l'image Node.js qui correspond à ses besoins et qui permet l'installation de OpenSSL
FROM node:24

# Installer OpenSSL
RUN apt update -y && apt install -y openssl

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Exposer le port que Next.js utilisera
EXPOSE 3000

# Démarrer un shell interactif par défaut lorsque le conteneur est lancé
CMD ["/bin/bash"]
